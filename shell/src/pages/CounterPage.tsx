import React, { Suspense } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Loading from '../components/Loading';

// Dynamically import the Counter component from the counter micro-frontend
const Counter = React.lazy(() => import('counter/Counter'));

/**
 * Page component that loads the Counter micro-frontend
 */
export const CounterPage: React.FC = () => {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<Loading message="Loading Counter application..." />}>
          <Counter />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default CounterPage;
