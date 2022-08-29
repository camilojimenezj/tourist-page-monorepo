import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { userReducer } from './reducers/userReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { MessageProvider } from './context/MessageContext'

const store = createStore(userReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MessageProvider>
        <App />
      </MessageProvider>
    </Provider>
  </React.StrictMode>
)
