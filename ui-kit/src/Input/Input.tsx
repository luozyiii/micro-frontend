import React, { forwardRef } from 'react';
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether the input has an error state
   */
  error?: boolean;
  /**
   * Whether the input should take full width
   */
  fullWidth?: boolean;
  /**
   * Label for the input
   */
  label?: string;
  /**
   * Helper text to display below the input
   */
  helperText?: string;
  /**
   * Error message to display when error is true
   */
  errorMessage?: string;
  /**
   * Icon to display at the start of the input
   */
  startIcon?: React.ReactNode;
  /**
   * Icon to display at the end of the input
   */
  endIcon?: React.ReactNode;
}

/**
 * Input component with label, helper text, and error states
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      error = false,
      fullWidth = false,
      label,
      helperText,
      errorMessage,
      startIcon,
      endIcon,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    const inputClasses = [
      styles.input,
      styles[`input--${size}`],
      error && styles['input--error'],
      fullWidth && styles['input--full-width'],
      startIcon && styles['input--with-start-icon'],
      endIcon && styles['input--with-end-icon'],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const containerClasses = [
      styles.container,
      fullWidth && styles['container--full-width'],
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={containerClasses}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <div className={styles['input-wrapper']}>
          {startIcon && (
            <div className={styles['input-icon--start']}>{startIcon}</div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            {...props}
          />
          {endIcon && (
            <div className={styles['input-icon--end']}>{endIcon}</div>
          )}
        </div>
        {(helperText || errorMessage) && (
          <div
            className={`${styles['helper-text']} ${
              error ? styles['helper-text--error'] : ''
            }`}
          >
            {error ? errorMessage : helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
