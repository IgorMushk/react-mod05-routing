//import { Container, Header, Logo, StyledLink } from 'components/App.styled'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Header, Logo, StyledLink } from './SharedLayout.styled'

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </Logo>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About </StyledLink>
          <StyledLink to="/products">Products </StyledLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  )
}

export default SharedLayout