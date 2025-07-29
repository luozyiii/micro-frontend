// Type declarations for Module Federation remote modules

declare module 'counter/Counter' {
  import { ComponentType } from 'react';
  
  export interface CounterProps {
    initialValue?: number;
    title?: string;
    showReset?: boolean;
  }
  
  const Counter: ComponentType<CounterProps>;
  export default Counter;
}

declare module 'todos/TodoList' {
  import { ComponentType } from 'react';
  
  export interface TodoListProps {
    title?: string;
    showStats?: boolean;
  }
  
  const TodoList: ComponentType<TodoListProps>;
  export default TodoList;
}
