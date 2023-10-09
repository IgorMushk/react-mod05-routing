import { Link, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Products from "../pages/Products";
import NotFound from "pages/NotFound";

export const App = () => {
  return (
<div>
    <nav>
      <Link to='/'>Home </Link>
      <Link to='/about'>About </Link>
      <Link to='/produts'>Products </Link>
    </nav>

  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/products' element={<Products/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
</div>
  );
};
