import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import {api} from './featurs/users/apiSlice.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={api}>
    <App />
    </ApiProvider>
  </React.StrictMode>,
)
