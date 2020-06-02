import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

export default function App() {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Route path='/' exact component={StreamList}></Route>
          <Route path='/streams/new' exact component={StreamCreate}></Route>
          <Route path='/streams/edit/:id' exact component={StreamEdit}></Route>
          <Route
            path='/streams/delete/:id'
            exact
            component={StreamDelete}
          ></Route>
          <Route path='/streams/:id' exact component={StreamShow}></Route>
        </div>
      </Router>
    </div>
  );
}
