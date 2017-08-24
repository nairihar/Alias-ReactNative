import React, { Component } from 'react';
import { AppRegistry, BackAndroid } from 'react-native';

import { Scene, Router } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';

import Home from './components/Home';
import GameBoard from './components/GameBoard';
import NextPlayer from './components/NextPlayer';
import GameFinish from './components/GameFinish';

import reducer from './reducers';
const RouterWithRedux = connect()(Router);
const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
     <Provider store={store}>
       <RouterWithRedux backAndroidHandler={() => true}>
         <Scene key="root">
            <Scene key="home" component={Home} hideNavBar={true} hideTabBar={true} initial={true} panHandlers={null} renderBackButton={null}/>
            <Scene key="next_play" component={NextPlayer} hideNavBar={true} hideTabBar={true} panHandlers={null} renderBackButton={null}/>
            <Scene key="game_board" component={GameBoard} hideNavBar={true} hideTabBar={true} panHandlers={null} renderBackButton={null}/>
            <Scene key="game_finish" component={GameFinish} hideNavBar={true} hideTabBar={true} panHandlers={null} renderBackButton={null}/>
         </Scene>
       </RouterWithRedux>
     </Provider>
   );
  }
}

AppRegistry.registerComponent('alias', () => App);
