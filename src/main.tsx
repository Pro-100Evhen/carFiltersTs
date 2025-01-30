import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import { fetchMakes } from './store/Slices/filterSlice.ts';

store.dispatch(fetchMakes());

createRoot(document.getElementById('root')!).render(
   <Provider store={store}>
      <App />
   </Provider>
);
