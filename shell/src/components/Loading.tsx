import React from 'react';
import styles from './Loading.module.css';

export interface LoadingProps {
  /**
   * Loading message to display
   */
  message?: string;
  /**
   * Size of the loading spinner
   */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Loading component with spinner and optional message
 */
export const Loading: React.FC<LoadingProps> = ({
  message = 'Loading...',
  size = 'md',
}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.spinner} ${styles[`spinner--${size}`]}`} />
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default Loading;
