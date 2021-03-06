import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, BrowserRouter } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header/>
        {/* <HashRouter>
          <Route exact path="/" render={() => (<div>Home</div>)}></Route>
          <Route exact path="/detail" render={() => (<div>Detail</div>)}></Route>
        </HashRouter> */}
        <BrowserRouter>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/detail" component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

