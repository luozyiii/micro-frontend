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

  const handleKeyDown = (e: React.KeyboardEvent) => {
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
          aria-label={
            todo.completed ? 'Mark as incomplete' : 'Mark as complete'
          }
        >
          {todo.completed && <span className={styles.checkmark}>✓</span>}
        </button>

        {isEditing ? (
          <div className={styles.editForm}>
            <Input
              value={editText}
              onChange={e => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleSave}
              autoFocus
              className={styles.editInput}
            />
          </div>
        ) : (
          <div
            className={styles.textContent}
            onDoubleClick={() => setIsEditing(true)}
          >
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
              onClick={handleSave}
              disabled={!editText.trim()}
              variant="primary"
              size="sm"
              className={styles.button}
            >
              Save
            </Button>
            <Button
              onClick={handleCancel}
              variant="secondary"
              size="sm"
              className={styles.button}
            >
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => setIsEditing(true)}
              aria-label="Edit todo"
              variant="secondary"
              size="sm"
              className={styles.button}
            >
              Edit
            </Button>
            <Button
              onClick={() => onDelete(todo.id)}
              aria-label="Delete todo"
              variant="danger"
              size="sm"
              className={styles.button}
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
