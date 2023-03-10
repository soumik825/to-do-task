import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Authprovider from './Context/Authprovider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// import store from './Store/Store';
// import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <Authprovider>
      <QueryClientProvider client={queryClient}>
        {/* <Provider> */}
        <App />
        {/* </Provider> */}
      </QueryClientProvider>
    </Authprovider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
