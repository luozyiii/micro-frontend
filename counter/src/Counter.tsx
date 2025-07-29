import React from 'react';
import { Button } from 'ui-kit';
import { useCounter } from './hooks/useCounter';
import styles from './Counter.module.css';

export interface CounterProps {
  /**
   * Initial counter value
   */
  initialValue?: number;
  /**
   * Custom title for the counter
   */
  title?: string;
  /**
   * Whether to show the reset button
   */
  showReset?: boolean;
}

/**
 * Counter component with increment, decrement, and reset functionality
 */
export const Counter: React.FC<CounterProps> = ({
  initialValue = 0,
  title = 'Counter',
  showReset = true,
}) => {
  const { count, increment, decrement, reset } = useCounter(initialValue);

  return (
    <div className={styles.counter}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.display}>
          <span className={styles.count}>{count}</span>
        </div>
      </div>

      <div className={styles.controls}>
        <Button
          onClick={decrement}
          variant="danger"
          className={styles.button}
          aria-label="Decrease counter"
        >
          -1
        </Button>

        <Button
          onClick={increment}
          variant="primary"
          className={styles.button}
          aria-label="Increase counter"
        >
          +1
        </Button>

        {showReset && (
          <Button
            onClick={reset}
            variant="secondary"
            className={styles.button}
            aria-label="Reset counter"
          >
            Reset
          </Button>
        )}
      </div>

      <div className={styles.info}>
        <p className={styles.description}>
          Current value: <strong>{count}</strong>
        </p>
        <p className={styles.note}>
          💾 Value is automatically saved to localStorage
        </p>
      </div>
    </div>
  );
};

export default Counter;
