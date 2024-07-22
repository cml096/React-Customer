import React from 'react';
import logo from './logo.svg';
import { QueryClient, QueryClientProvider } from 'react-query';

import './App.css';
import StarWarsCharacters from "./components/StarWarsCharacters";

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <StarWarsCharacters />
      </QueryClientProvider>
  );
}

export default App;
