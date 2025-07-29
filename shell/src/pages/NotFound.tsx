import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

/**
 * 404 Not Found page component
 */
export const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>🔍</div>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.message}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <p className={styles.suggestion}>
          Here are some helpful links to get you back on track:
        </p>
        <div className={styles.actions}>
          <Link to="/" className={`${styles.button} ${styles.buttonPrimary}`}>
            Go Home
          </Link>
          <Link to="/counter" className={`${styles.button} ${styles.buttonSecondary}`}>
            Try Counter
          </Link>
          <Link to="/todos" className={`${styles.button} ${styles.buttonSecondary}`}>
            Try Todos
          </Link>
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
      </div>
    </div>
  );
};

export default NotFound;
