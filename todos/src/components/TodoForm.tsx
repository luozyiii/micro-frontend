import React, { useState } from 'react';
import { Button, Input } from 'ui-kit';
import styles from './TodoForm.module.css';

export interface TodoFormProps {
  onSubmit: (text: string) => void;
  placeholder?: string;
}

/**
 * Form component for adding new todos
 */
export const TodoForm: React.FC<TodoFormProps> = ({
  onSubmit,
  placeholder = 'What needs to be done?',
}) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          size="lg"
          fullWidth
          className={styles.input}
        />
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={!text.trim()}
          className={styles.button}
        >
          Add Todo
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
