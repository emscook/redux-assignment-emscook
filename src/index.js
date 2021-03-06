import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import tweetReducer from './Store/Reducers/tweetReducer'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
  tweetReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
registerServiceWorker()
