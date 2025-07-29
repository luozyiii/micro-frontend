import React, { useState, useEffect } from 'react';
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

  // 同步 todo.text 的变化到 editText
  useEffect(() => {
    if (!isEditing) {
      setEditText(todo.text);
    }
  }, [todo.text, isEditing]);

  const handleSave = (e?: React.MouseEvent) => {
    // 阻止事件冒泡
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const trimmedText = editText.trim();

    // 如果文本为空，恢复原始文本
    if (!trimmedText) {
      setEditText(todo.text);
      setIsEditing(false);
      return;
    }

    // 如果文本有变化，更新它
    if (trimmedText !== todo.text) {
      onUpdate(todo.id, trimmedText);
    }

    // 退出编辑模式
    setIsEditing(false);
  };

  const handleCancel = (e?: React.MouseEvent) => {
    // 阻止事件冒泡
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

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
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggle(todo.id);
          }}
          aria-label={
            todo.completed ? '标记为未完成' : '标记为已完成'
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
              autoFocus
              size="sm"
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
              创建时间: {formatDate(todo.createdAt)}
              {todo.updatedAt.getTime() !== todo.createdAt.getTime() && (
                <> • 更新时间: {formatDate(todo.updatedAt)}</>
              )}
            </span>
          </div>
        )}
      </div>

      <div className={styles.actions}>
        {isEditing ? (
          <>
            <Button
              onClick={(e) => handleSave(e)}
              variant="primary"
              size="sm"
              className={styles.button}
            >
              保存
            </Button>
            <Button
              onClick={(e) => handleCancel(e)}
              variant="secondary"
              size="sm"
              className={styles.button}
            >
              取消
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsEditing(true);
              }}
              aria-label="编辑待办事项"
              variant="secondary"
              size="sm"
              className={styles.button}
            >
              编辑
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onDelete(todo.id);
              }}
              aria-label="删除待办事项"
              variant="danger"
              size="sm"
              className={styles.button}
            >
              删除
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
