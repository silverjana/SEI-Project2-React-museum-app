import { Container, Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
        <Nav.Link as={Link} to='/paintings'>Paintings</Nav.Link>
      </Container>

    </Navbar>
  )
}
export default Header