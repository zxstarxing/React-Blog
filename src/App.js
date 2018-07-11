import React, { Component } from 'react'
import MyNavbar from './components/MyNavbar';
import List from './pages/List';
import Form from './pages/Form';
import { Col, Container, Row } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Container flud>
            <Row>
              <Col xl="12">
                <MyNavbar></MyNavbar>
              </Col>
            </Row>
            <Row>
              <Col xl="12">
                <Route exact path='/' component={List} />
                <Route path='/form' component={Form} />
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    )
  }
}

export default App;
