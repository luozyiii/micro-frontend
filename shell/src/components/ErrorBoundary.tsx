import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button, Card } from 'ui-kit';
import styles from './ErrorBoundary.module.css';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

/**
 * Error boundary component to catch and display errors in micro-frontends
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className={styles.container}>
          <Card className={styles.errorCard} padding="lg">
            <div className={styles.icon}>⚠️</div>
            <h2 className={styles.title}>Something went wrong</h2>
            <p className={styles.message}>
              We encountered an error while loading this component. This might be due to:
            </p>
            <ul className={styles.reasons}>
              <li>Network connectivity issues</li>
              <li>The micro-frontend service is temporarily unavailable</li>
              <li>A configuration error</li>
            </ul>
            
            <div className={styles.actions}>
              <Button variant="primary" onClick={this.handleRetry}>
                Try Again
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => window.location.reload()}
              >
                Reload Page
              </Button>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className={styles.details}>
                <summary className={styles.summary}>
                  Technical Details (Development Only)
                </summary>
                <div className={styles.errorDetails}>
                  <h4>Error:</h4>
                  <pre className={styles.errorText}>
                    {this.state.error.toString()}
                  </pre>
                  {this.state.errorInfo && (
                    <>
                      <h4>Component Stack:</h4>
                      <pre className={styles.errorText}>
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </>
                  )}
                </div>
              </details>
            )}
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
