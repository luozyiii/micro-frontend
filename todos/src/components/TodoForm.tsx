import React, { useState } from 'react';
import { Input, Button } from 'ui-kit';
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
  placeholder = '需要做什么？',
}) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <Input
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          size="sm"
          className={styles.input}
        />
        <Button
          type="submit"
          disabled={!text.trim()}
          variant="primary"
          size="sm"
          className={styles.button}
        >
          添加任务
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
