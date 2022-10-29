import { Routes, Route } from 'react-router-dom'

import DefaultLayout from './components/Layouts/DefaultLayout'
import { publicRoutes } from './routes'

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<DefaultLayout>{<route.element />}</DefaultLayout>}
            />
          )
        })}
      </Routes>
    </div>
  )
}

export default App
