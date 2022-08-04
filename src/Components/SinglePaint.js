import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SinglePaint = () => {
  const { num } = useParams()
  console.log(num)

  const [painting, setPainting] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/${num}?key=KzSd11Gm`)
        setPainting(data.artObject)
        console.log(data, 'SINGLE')
        console.log(painting.webImage.url)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getData()
  }, [])

  return (

    <Container>
      <Row>
        {painting ?
          <>
            <h1>{painting.title}</h1>
            <Col md="6">
              {/*insomnia:  $.artObject.webImage.url */}
              {painting && painting.webImage && <img className='singleImg' src={painting.webImage.url} alt={painting.title} />}
            </Col>
            <Col md="6 h-75">
              <h3><span>🧑‍🎨 </span> Artist</h3>
              <p className='artist'>{painting.principalMaker}</p>
              <hr />
              {/* Description */}
              <h3>Description</h3>
              <p>{painting.plaqueDescriptionEnglish ? painting.plaqueDescriptionEnglish : painting.longTitle}</p>
              <hr />
              <h3>Dimensions</h3>
              <p>{painting.subTitle}</p>
              <hr />
              {/* Link back to all painting */}
              <Link to="/paintings" className='btn dark'>Back to all paintings</Link>
            </Col>
          </>
          :
          <h2>
            {errors ? 'Something went wrong' : 'Loading...'}
          </h2>
        }
      </Row>
    </Container>
  )
}
export default SinglePaint