import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card variant
   */
  variant?: 'default' | 'outlined' | 'elevated';
  /**
   * Card padding size
   */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /**
   * Whether the card is hoverable
   */
  hoverable?: boolean;
  /**
   * Card header content
   */
  header?: React.ReactNode;
  /**
   * Card footer content
   */
  footer?: React.ReactNode;
  /**
   * Card body content
   */
  children: React.ReactNode;
}

/**
 * Card component for displaying content in a container
 */
export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  hoverable = false,
  header,
  footer,
  children,
  className,
  ...props
}) => {
  const cardClasses = [
    styles.card,
    styles[`card--${variant}`],
    styles[`card--padding-${padding}`],
    hoverable && styles['card--hoverable'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses} {...props}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Card;
