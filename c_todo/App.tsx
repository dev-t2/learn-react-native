/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { memo, useCallback, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@emotion/react';

import { theme } from './src/theme';
import { AddTodo, Container, DateHead, TodoList } from './src/components';

export interface ITodo {
  id: number;
  text: string;
  done: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, text: 'TypeScript', done: true },
    { id: 2, text: 'React Native', done: false },
  ]);

  const onInsert = useCallback(
    (text: string) => {
      const ids = todos.map(todo => todo.id);
      const id = todos.length > 0 ? Math.max(...ids) + 1 : 1;
      const todo: ITodo = { id, text, done: false };

      setTodos([...todos, todo]);
    },
    [todos],
  );

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Container>
          <StatusBar barStyle="light-content" backgroundColor={theme.colors.primaryVariant} />

          <DateHead />

          <TodoList todos={todos} />

          <AddTodo onInsert={onInsert} />
        </Container>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default memo(App);
