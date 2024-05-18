import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/sobre'
import NotFound from './pages/404'
import Contato from './pages/contato'
import Task from './pages/tasks'
import Cadastro from './pages/cadastro'
import Login from './pages/login'

const router = createBrowserRouter([
  {path: '/', element: <Home/>, errorElement: <NotFound/>}, 
  {path: '/sobre', element: <Sobre/>},
  {path: '/tasks', element: <Task/>},
  {path: '/contato', element: <Contato/>},
  {path: '/cadastrar', element: <Cadastro/>},
  {path: '/login', element: <Login/>}
])

export default router