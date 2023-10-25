import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { RootContent } from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './routes/errorPage.tsx'
import MoviePage, { MoviePageLoader } from './routes/movies/moviePage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <RootContent />
      },
      {
        path: "movies/:movieId",
        element: <MoviePage />,
        loader: MoviePageLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>,
)
