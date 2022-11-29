import logo from './logo.svg';
import './App.css';
import Header from './common/header';
import { Fragment } from 'react';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';
import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>       
      <Route path="/" element={<Home/>}/>
      <Route path="/detail/:id" element={<Detail/>} />

          {/* <Route path='/' exact render={()=><div>home</div>}></Route>
          <Route path='/detail' exact render={()=><div>detail</div>}></Route> */}
      </Routes>

    </Provider>
  );
}

export default App;
