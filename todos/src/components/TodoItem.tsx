import React, { useState } from 'react';
import { Button, Input } from 'ui-kit';
import { Todo } from '../types/todo';
import styles from './TodoItem.module.css';

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
}

/**
 * Individual todo item component with edit functionality
 */
export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim() && editText !== todo.text) {
      onUpdate(todo.id, editText);
    }
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className={`${styles.item} ${todo.completed ? styles.completed : ''}`}>
      <div className={styles.content}>
        <button
          className={styles.checkbox}
          onClick={() => onToggle(todo.id)}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed && <span className={styles.checkmark}>✓</span>}
        </button>

        {isEditing ? (
          <div className={styles.editForm}>
            <Input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyPress={handleKeyPress}
              onBlur={handleSave}
              autoFocus
              fullWidth
              size="sm"
            />
          </div>
        ) : (
          <div className={styles.textContent} onDoubleClick={() => setIsEditing(true)}>
            <span className={styles.text}>{todo.text}</span>
            <span className={styles.date}>
              Created: {formatDate(todo.createdAt)}
              {todo.updatedAt.getTime() !== todo.createdAt.getTime() && (
                <> • Updated: {formatDate(todo.updatedAt)}</>
              )}
            </span>
          </div>
        )}
      </div>

      <div className={styles.actions}>
        {isEditing ? (
          <>
            <Button
              variant="success"
              size="sm"
              onClick={handleSave}
              disabled={!editText.trim()}
            >
              Save
            </Button>
            <Button variant="secondary" size="sm" onClick={handleCancel}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="info"
              size="sm"
              onClick={() => setIsEditing(true)}
              aria-label="Edit todo"
            >
              Edit
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => onDelete(todo.id)}
              aria-label="Delete todo"
            >
              Delete
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
