import React from 'react'
import ReactDOM from 'react-dom/client'
import { useSelector, useDispatch } from 'react-redux';
import App from './App.jsx'
import './index.css'

/**
 * Necessary for adding redux toolkit
 */
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

/**
 * Importing reducers
 */
import taskListReducer from './reducers/taskListReducer.js'

/**
 * Creating the store w/reducers
 */
const store = configureStore({
  reducer: {
    taskList: taskListReducer,
    

  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
