import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { RootContent, RootContentLoader } from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './routes/errorPage.tsx'
import MoviePage, { MoviePageLoader } from './routes/movie/moviePage.tsx'
import PersonPage, { PersonPageLoader } from './routes/person/personPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <RootContent />,
        loader: RootContentLoader
      },
      {
        path: "movie/:movieId",
        element: <MoviePage />,
        loader: MoviePageLoader
      },
      {
        path: "person/:personId",
        element: <PersonPage />,
        loader: PersonPageLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>,
)
