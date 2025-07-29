import React from 'react';
import { Button, Card } from 'ui-kit';
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
    <Card className={styles.counter} padding="lg">
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.display}>
          <span className={styles.count}>{count}</span>
        </div>
      </div>
      
      <div className={styles.controls}>
        <Button
          variant="danger"
          size="lg"
          onClick={decrement}
          className={styles.button}
          aria-label="Decrease counter"
        >
          -1
        </Button>
        
        <Button
          variant="primary"
          size="lg"
          onClick={increment}
          className={styles.button}
          aria-label="Increase counter"
        >
          +1
        </Button>
        
        {showReset && (
          <Button
            variant="secondary"
            size="lg"
            onClick={reset}
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
    </Card>
  );
};

export default Counter;
