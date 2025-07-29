import React from 'react';
import { Card } from 'ui-kit';
import { TodoStats as TodoStatsType } from '../types/todo';
import styles from './TodoStats.module.css';

export interface TodoStatsProps {
  stats: TodoStatsType;
}

/**
 * Component to display todo statistics
 */
export const TodoStats: React.FC<TodoStatsProps> = ({ stats }) => {
  const { total, completed, pending, completionRate } = stats;

  return (
    <Card className={styles.stats} padding="md">
      <div className={styles.grid}>
        <div className={styles.stat}>
          <div className={styles.value}>{total}</div>
          <div className={styles.label}>Total</div>
        </div>
        
        <div className={styles.stat}>
          <div className={styles.value}>{completed}</div>
          <div className={styles.label}>Completed</div>
        </div>
        
        <div className={styles.stat}>
          <div className={styles.value}>{pending}</div>
          <div className={styles.label}>Pending</div>
        </div>
        
        <div className={styles.stat}>
          <div className={styles.value}>{completionRate.toFixed(0)}%</div>
          <div className={styles.label}>Progress</div>
        </div>
      </div>
      
      {total > 0 && (
        <div className={styles.progressBar}>
          <div className={styles.progressLabel}>
            Completion Progress
          </div>
          <div className={styles.progressTrack}>
            <div 
              className={styles.progressFill}
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>
      )}
    </Card>
  );
};

export default TodoStats;
