import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Products from "../pages/Products";
import NotFound from "pages/NotFound";

export const App = () => {
  return (
<div>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/products' element={<Products/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
</div>
  );
};
