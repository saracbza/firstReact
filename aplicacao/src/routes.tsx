import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/sobre'
import NotFound from './pages/404'
import Contato from './pages/contato'
import Task from './pages/tasks'

const router = createBrowserRouter([
  {path: '/', element: <Home/>, errorElement: <NotFound/>}, 
  {path: '/sobre', element: <Sobre/>},
  {path: '/tasks', element: <Task/>},
  {path: '/contato', element: <Contato/>},
])

export default router