import React, { useState } from 'react';
import { Button, Card } from 'ui-kit';
import { useTodos } from './hooks/useTodos';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodoStats from './components/TodoStats';
import styles from './TodoList.module.css';

export interface TodoListProps {
  /**
   * Custom title for the todo list
   */
  title?: string;
  /**
   * Whether to show statistics
   */
  showStats?: boolean;
}

type FilterType = 'all' | 'active' | 'completed';

/**
 * Main TodoList component with full CRUD functionality
 */
export const TodoList: React.FC<TodoListProps> = ({
  title = 'Todo List',
  showStats = true,
}) => {
  const {
    todos,
    stats,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    clearCompleted,
    clearAll,
  } = useTodos();

  const [filter, setFilter] = useState<FilterType>('all');

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  const hasCompletedTodos = stats.completed > 0;
  const hasTodos = stats.total > 0;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>
          Manage your tasks with persistent storage
        </p>
      </div>

      {showStats && <TodoStats stats={stats} />}

      <Card className={styles.main} padding="lg">
        <TodoForm onSubmit={addTodo} />

        {hasTodos && (
          <>
            <div className={styles.filters}>
              <div className={styles.filterButtons}>
                <Button
                  variant={filter === 'all' ? 'primary' : 'light'}
                  size="sm"
                  onClick={() => setFilter('all')}
                >
                  All ({stats.total})
                </Button>
                <Button
                  variant={filter === 'active' ? 'primary' : 'light'}
                  size="sm"
                  onClick={() => setFilter('active')}
                >
                  Active ({stats.pending})
                </Button>
                <Button
                  variant={filter === 'completed' ? 'primary' : 'light'}
                  size="sm"
                  onClick={() => setFilter('completed')}
                >
                  Completed ({stats.completed})
                </Button>
              </div>

              <div className={styles.actions}>
                {hasCompletedTodos && (
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={clearCompleted}
                  >
                    Clear Completed
                  </Button>
                )}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={clearAll}
                >
                  Clear All
                </Button>
              </div>
            </div>

            <div className={styles.list}>
              {filteredTodos.length > 0 ? (
                filteredTodos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    onUpdate={updateTodo}
                  />
                ))
              ) : (
                <div className={styles.empty}>
                  {filter === 'all' && 'No todos yet. Add one above!'}
                  {filter === 'active' && 'No active todos. Great job!'}
                  {filter === 'completed' && 'No completed todos yet.'}
                </div>
              )}
            </div>
          </>
        )}

        {!hasTodos && (
          <div className={styles.welcome}>
            <h3>Welcome to your Todo List!</h3>
            <p>Add your first todo above to get started.</p>
            <p>💡 <strong>Tip:</strong> Double-click any todo to edit it.</p>
          </div>
        )}
      </Card>

      <div className={styles.footer}>
        <p>💾 All data is automatically saved to your browser's local storage</p>
      </div>
    </div>
  );
};

export default TodoList;
