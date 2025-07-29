import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'ui-kit';
import styles from './NotFound.module.css';

/**
 * 404 Not Found page component
 */
export const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <Card className={styles.card} padding="lg">
        <div className={styles.icon}>🔍</div>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.message}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <p className={styles.suggestion}>
          Here are some helpful links to get you back on track:
        </p>
        <div className={styles.actions}>
          <Button variant="primary" size="lg" as={Link} to="/">
            Go Home
          </Button>
          <Button variant="secondary" size="lg" as={Link} to="/counter">
            Try Counter
          </Button>
          <Button variant="secondary" size="lg" as={Link} to="/todos">
            Try Todos
          </Button>
        </div>
        <div className={styles.help}>
          <p>
            If you believe this is an error, please{' '}
            <a href="mailto:support@example.com" className={styles.link}>
              contact support
            </a>
            .
          </p>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
