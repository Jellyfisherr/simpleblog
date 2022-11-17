import logo from './logo.svg';
import './App.css';
import Header from './common/header';
import { Fragment } from 'react';
import store from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
