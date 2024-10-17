import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import LogIn from './pages/LogIn.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
    <Route index element={<Home />} /> 
    {/* <Route path='/PetDetail' element={<PetDetail />} />  */}
    <Route path='/AboutUs' element={<AboutUs />} /> 
    <Route path='/logIn' element={<LogIn />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
);
