//import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Products from '../pages/Products';
import NotFound from 'pages/NotFound';
//import styled from 'styled-components';
import { Container, Header, Logo, StyledLink } from './App.styled';
import { ProductDetails } from 'pages/ProductDetails';

export const App = () => {
  return (
    <Container>
      <Header>
      <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo>
        <nav>
          <StyledLink to="/" end>
            Home{' '}
          </StyledLink>
          <StyledLink to="/about">About </StyledLink>
          <StyledLink to="/products">Products </StyledLink>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
