import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavigationScreen from './src/navigation/NavigationScreen';

const client = new QueryClient();
function App() {
  
  return (
    <QueryClientProvider client={client}>
      <NavigationScreen/>
    </QueryClientProvider>
  );
}
export default App;
