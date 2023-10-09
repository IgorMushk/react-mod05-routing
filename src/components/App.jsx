import { Link, NavLink, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Products from "../pages/Products";
import NotFound from "pages/NotFound";
import styled from "styled-components";

const StyledLinkd = styled(NavLink)`
  color: black;
  &.active {
    color:  orange;
  }
  `;

export const App = () => {
  return (
<div>
    <nav>
      <StyledLinkd  to='/'>Home </StyledLinkd >
      <StyledLinkd  to='/about'>About </StyledLinkd >
      <StyledLinkd  to='/produts'>Products </StyledLinkd >
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
