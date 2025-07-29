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
    <Card
      variant="elevated"
      padding="lg"
      header={<h3 className={styles.title}>任务统计</h3>}
      className={styles.statsCard}
    >
      <div className={styles.grid}>
        <div className={styles.stat}>
          <div className={styles.value}>{total}</div>
          <div className={styles.label}>总计</div>
        </div>

        <div className={styles.stat}>
          <div className={styles.value}>{completed}</div>
          <div className={styles.label}>已完成</div>
        </div>

        <div className={styles.stat}>
          <div className={styles.value}>{pending}</div>
          <div className={styles.label}>待完成</div>
        </div>

        <div className={styles.stat}>
          <div className={styles.value}>{completionRate.toFixed(0)}%</div>
          <div className={styles.label}>完成率</div>
        </div>
      </div>

      {total > 0 && (
        <div className={styles.progressBar}>
          <div className={styles.progressLabel}>完成进度</div>
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
