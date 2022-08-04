import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container className='hero' as='main'>
      <h1>Welcome to the Rijks Museum</h1>
      <Link className='btn homebtn' to='/paintings'> Enter </Link>
    </Container>
  )

}
export default Home