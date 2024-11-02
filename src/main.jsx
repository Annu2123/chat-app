import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './components/context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './components/store/configureStore.js'
import {Provider} from 'react-redux'
import { SocketContextProvider } from './components/context/socketContext.jsx'
const store=configureStore()
store.subscribe(()=>{
  console.log("state",store.getState())
})

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <AuthContextProvider>
    <Provider store={store}>
      <SocketContextProvider>
      <App />
      </SocketContextProvider>
    </Provider>
  
    </AuthContextProvider>
    </BrowserRouter>
 
)
