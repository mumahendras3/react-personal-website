import { RouterProvider } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import store from './store';
import router from './router';

function App() {
  return (
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}

export default App
