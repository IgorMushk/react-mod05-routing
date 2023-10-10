//import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
//-import About from '../pages/About';
//-import Home from '../pages/Home';
//-import Products from '../pages/Products';
import NotFound from 'pages/NotFound';
//import styled from 'styled-components';
//import { Container, Header, Logo, StyledLink } from './App.styled';
//-import { ProductDetails } from 'pages/ProductDetails';
//-import Mission from './Mission/Mission';
//-import Team from './Team/Team';
//-import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';
import { lazy } from 'react';
// import AdminLayout from './AdminLayout/AdminLayout';
// import Dashboard from './Dashboard/Dashboard';
// import Sales from './Sales/Sales';
// import Customers from './Customers/Customers';

const About = lazy(() => import("../pages/About"));
const Home = lazy(() => import("../pages/Home"));
const ProductDetails = lazy(() => import("pages/ProductDetails"));
const Products = lazy(() => import("../pages/Products"));
const Mission = lazy(() => import("./Mission/Mission"));
const Team = lazy(() => import("./Team/Team"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      {/* <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="sales" element={<Sales />} />
        <Route path="customers" element={<Customers />} />
      </Route> */}
    </Routes>
  );
};
