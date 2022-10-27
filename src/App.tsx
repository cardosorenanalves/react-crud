
import { BrowserRouter, Route, } from 'react-router-dom'
import { Header } from './components/Header'
import MainRoutes from './routes'
import './styles/global.css'

function App() {

  return (
   <BrowserRouter>
   <Header/>
    <MainRoutes/>
   </BrowserRouter>
  )
}

export default App
