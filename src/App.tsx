import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Search from './pages/Search'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
    </>
  )
}

export default App
