
import { BrowserRouter, Route, } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Header } from './components/Header'
import MainRoutes from './routes'
import './styles/global.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
   <BrowserRouter>
   <Header/>
    <MainRoutes/>
   </BrowserRouter>
   <ToastContainer/>
   </>
  )
}

export default App
