import React, {Fragment, useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

import SearchBar from './components/layout/AppSearchBar'
import Logs from './components/logs/Logs'

const App = () => {

  useEffect( () => {
    // initializes materialize js 
    M.AutoInit()
  })

  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
