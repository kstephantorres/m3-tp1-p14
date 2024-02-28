import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Menu from './components/common/Menu'
import Footer from './components/common/Footer'
import Inicio from './components/pages/Inicio'
import Error404 from './components/pages/Error404'
import DetalleReceta from './components/Receta/DetalleReceta'


function App() {
  
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
      <Route exact path='/' element={<Inicio></Inicio>}></Route>
      <Route exact path='/detalle-receta/:id' element={<DetalleReceta></DetalleReceta>}></Route>
      <Route path='*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
