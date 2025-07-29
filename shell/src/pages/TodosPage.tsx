import React, { Suspense } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Loading from '../components/Loading';

// Dynamically import the TodoList component from the todos micro-frontend
const TodoList = React.lazy(() => import('todos/TodoList'));

/**
 * Page component that loads the TodoList micro-frontend
 */
export const TodosPage: React.FC = () => {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<Loading message="Loading Todo application..." />}>
          <TodoList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default TodosPage;
