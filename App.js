import React, { useEffect, useInsertionEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavigationScreen from './src/navigation/NavigationScreen';
import { useUserStore } from './store/zustand';

const client = new QueryClient();
function App() {

    useEffect(()=>{
      useUserStore.setState({user: localStorage.getItem("userData")? JSON.parse(localStorage.getItem("userData")): null}) 
    },[])


  return (
    <QueryClientProvider client={client}>
      <NavigationScreen/>
    </QueryClientProvider>
  );
}
export default App;
