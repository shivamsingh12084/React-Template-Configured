import React from 'react'

import { Row, Col, Container } from 'react-bootstrap'

function Footer() {
  return (
    <div>
      <footer>
          <Container>
              <Row>
                  <Col className='text-center py-3'>Copyright &copy; Website Name </Col>
              </Row>
          </Container>
      </footer>
    </div>
  )
}

export default Footer
