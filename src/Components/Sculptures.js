
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import errorImg from '../images/error.png'
import spinnerImg from '../images/spinner.gif'



const Sculptures = () => {


  const [sculptures, setSculptures] = useState([])

  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://www.rijksmuseum.nl/api/en/collection?key=KzSd11Gm&type=sculpture&imgonly=True&toppieces=true&ps=50')
        // console.log(data)
        setSculptures(data.artObjects)
      } catch (err) {
        console.log(err)
        setError(true)
      }
    }
    getData()
  }, [])

  return (
    <Container as='main'>
      <h1>Sculptures</h1>
      <Row>
        {sculptures.length > 0  ?
          <>
            {sculptures.map(sculpture => {
              const { title, id, objectNumber } = sculpture
              const { url } = sculpture.webImage
              return (
                <Col className="mb-4" md='3' key={id}>
                  <Link className="mb-4" to={`/${objectNumber}`}>
                    <Card className='card statue'>
                      <Card.Img variant='top' className='w-100' src={url}></Card.Img>
                      <Card.Body><Card.Title>{title}</Card.Title></Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            })}
          </>
          :
          <h1>
            {error ? <img src={errorImg} /> : <img src={spinnerImg}/> }
          </h1>
        }
      </Row>
    </Container >


  )



}
export default Sculptures