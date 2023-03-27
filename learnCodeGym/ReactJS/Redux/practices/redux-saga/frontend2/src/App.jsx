import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/LoginView';
import UserView from './components/UserView';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<UserView />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

