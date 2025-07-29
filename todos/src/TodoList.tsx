import React, { useState } from 'react';
import { Button } from 'ui-kit';
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
  title = '待办事项列表',
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
          使用持久化存储管理您的任务
        </p>
      </div>

      {showStats && <TodoStats stats={stats} />}

      <div className={styles.main}>
        <TodoForm onSubmit={addTodo} />

        {hasTodos && (
          <>
            <div className={styles.filters}>
              <div className={styles.filterButtons}>
                <Button
                  variant={filter === 'all' ? 'primary' : 'secondary'}
                  onClick={() => setFilter('all')}
                  size="sm"
                  className={styles.filterButton}
                >
                  全部 ({stats.total})
                </Button>
                <Button
                  variant={filter === 'active' ? 'primary' : 'secondary'}
                  onClick={() => setFilter('active')}
                  size="sm"
                  className={styles.filterButton}
                >
                  待完成 ({stats.pending})
                </Button>
                <Button
                  variant={filter === 'completed' ? 'primary' : 'secondary'}
                  onClick={() => setFilter('completed')}
                  size="sm"
                  className={styles.filterButton}
                >
                  已完成 ({stats.completed})
                </Button>
              </div>

              <div className={styles.actions}>
                {hasCompletedTodos && (
                  <Button
                    variant="secondary"
                    onClick={clearCompleted}
                    size="sm"
                    className={styles.actionButton}
                  >
                    清除已完成
                  </Button>
                )}
                <Button
                  variant="danger"
                  onClick={clearAll}
                  size="sm"
                  className={styles.actionButton}
                >
                  清除全部
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
                  {filter === 'all' && '暂无待办事项，请在上方添加！'}
                  {filter === 'active' && '没有待完成的任务，干得好！'}
                  {filter === 'completed' && '暂无已完成的任务。'}
                </div>
              )}
            </div>
          </>
        )}

        {!hasTodos && (
          <div className={styles.welcome}>
            <h3>欢迎使用待办事项列表！</h3>
            <p>在上方添加您的第一个待办事项开始使用。</p>
            <p>
              💡 <strong>提示：</strong> 双击任何待办事项可以编辑它。
            </p>
          </div>
        )}
      </div>

      <div className={styles.footer}>
        <p>
          💾 所有数据自动保存到浏览器本地存储
        </p>
      </div>
    </div>
  );
};

export default TodoList;
