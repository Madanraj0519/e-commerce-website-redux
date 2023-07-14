import './App.scss';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
// pages
import {Home, Cart, Category, LoginPage, SignUpPage} from "./pages/Index"
// Components
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import {ToastContainer} from "react-toastify"

function App() {

  return (
    <div>     
    <BrowserRouter>
      <Navbar />
       <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/category/:id' element={<Category />}/>
        <Route path='/cart' element={<Cart />} />
        <Route exact path='/' element={<LoginPage />}/>
        <Route path='/signPage' element={<SignUpPage />}/>
       </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
    </div>
  );
}

export default App;
