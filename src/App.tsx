import GlobalStyle from './styles/styles'

import { Provider, useSelector } from 'react-redux'
import { RootReducer, store } from './store'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import PaginaDoRestaurante from './routes/PaginaDoRestaurante/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/restaurante/:id",
    element: <PaginaDoRestaurante />
  }
])

function App() {

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
