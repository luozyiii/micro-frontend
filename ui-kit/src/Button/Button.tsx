import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether the button is in loading state
   */
  loading?: boolean;
  /**
   * Whether the button should take full width
   */
  fullWidth?: boolean;
  /**
   * Button content
   */
  children: React.ReactNode;
}

/**
 * Button component with multiple variants and sizes
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  disabled,
  className,
  children,
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    fullWidth && styles['button--full-width'],
    loading && styles['button--loading'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClasses} disabled={disabled || loading} {...props}>
      {loading && <span className={styles.spinner} />}
      <span
        className={loading ? styles['button__content--loading'] : undefined}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
