import './App.css';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import About from '../src/pages/about'
import { Routes, Route } from "react-router-dom";
import api from '../src/api/api'
import Post from './pages/post';
import Category from './pages/category';
import Career from '../src/pages/career';
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<About/>} />
        <Route path="/post/:id" element={<Post/>} />
         <Route path="/category/:categoryId" element={<Category/>} />
         <Route path="/career" element={<Career/>} />
      </Routes>

      <Footer/>
    </>










  );
}

export default App;
