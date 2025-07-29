import { useState, useEffect, useCallback } from 'react';
import { Todo, TodoStats } from '../types/todo';

const STORAGE_KEY = 'todos-list';

export interface UseTodosReturn {
  todos: Todo[];
  stats: TodoStats;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  clearCompleted: () => void;
  clearAll: () => void;
}

/**
 * Custom hook for managing todos with localStorage persistence
 */
export const useTodos = (): UseTodosReturn => {
  // Initialize state from localStorage
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Convert date strings back to Date objects
        return parsed.map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
          updatedAt: new Date(todo.updatedAt),
        }));
      }
      return [];
    } catch (error) {
      console.warn('Failed to load todos from localStorage:', error);
      return [];
    }
  });

  // Save to localStorage whenever todos change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.warn('Failed to save todos to localStorage:', error);
    }
  }, [todos]);

  // Calculate stats
  const stats: TodoStats = {
    total: todos.length,
    completed: todos.filter(todo => todo.completed).length,
    pending: todos.filter(todo => !todo.completed).length,
    completionRate: todos.length > 0 ? (todos.filter(todo => todo.completed).length / todos.length) * 100 : 0,
  };

  // Add a new todo
  const addTodo = useCallback((text: string) => {
    if (text.trim()) {
      const newTodo: Todo = {
        id: `todo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        text: text.trim(),
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setTodos(prev => [newTodo, ...prev]);
    }
  }, []);

  // Toggle todo completion status
  const toggleTodo = useCallback((id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
          : todo
      )
    );
  }, []);

  // Delete a todo
  const deleteTodo = useCallback((id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  // Update todo text
  const updateTodo = useCallback((id: string, text: string) => {
    if (text.trim()) {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === id
            ? { ...todo, text: text.trim(), updatedAt: new Date() }
            : todo
        )
      );
    }
  }, []);

  // Clear all completed todos
  const clearCompleted = useCallback(() => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  }, []);

  // Clear all todos
  const clearAll = useCallback(() => {
    setTodos([]);
  }, []);

  return {
    todos,
    stats,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    clearCompleted,
    clearAll,
  };
};
