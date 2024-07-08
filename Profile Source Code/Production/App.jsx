import Index from './pages/Index'
import Tabenori from './pages/Tabenori'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path='/' element={<Index />}></Route>
          <Route path='/tabenori' element={<Tabenori />} ></Route>
        </Routes>
      </Router>
    </>
  )
}
