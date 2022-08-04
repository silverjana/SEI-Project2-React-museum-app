import { Container, Row, Col, Card, CardImg } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import axios from 'axios'

const Paintings = () => {
  //State
  const [paintings, setPaintings] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://www.rijksmuseum.nl/api/en/collection?key=KzSd11Gm&hasImage=true&type=painting&toppieces=true&ps=50')
        console.log(data)
        setPaintings(data.artObjects)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  return (
    <Container as='main'>
      <h1>Paintings</h1>
      <Row>
        {paintings.map(painting => {
          const { title, id, objectNumber } = painting
          const { url } = painting.webImage
          return (
            <Col className="mb-4" md='3' key={id}>
              <Link className="mb-4" to={`/${objectNumber}`}>
                <Card className='card '>
                  <Card.Img variant='top' className='w-100' src={url}></Card.Img>
                  <Card.Body><Card.Title>{title}</Card.Title></Card.Body>
                </Card>
              </Link>
            </Col>
          )
        })}

      </Row>
    </Container >


  )
}
export default Paintings