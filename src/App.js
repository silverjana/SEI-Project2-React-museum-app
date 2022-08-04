import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './Components/NotFound'
import Home from './Components/Home'
import Paintings from './Components/Paintings'
import Header from './Components/Header'
import SinglePaint from './Components/SinglePaint'
import FooterPage from './Components/FooterPage'


const App = () => {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/:num" element={<SinglePaint />} />
          {/* <Route path="/" element={< />}/> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <FooterPage />
      </BrowserRouter>
    </div>

  )
}

export default App