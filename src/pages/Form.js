import React from 'react';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import {add_article} from '../actions';
class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       title:'',
       author:'',
       content:''
    }
  }
  render() {
    return (
      <Container style={{paddingTop:'20px',height:'800px'}} >
        <Row>
          <Col xl="12">
            <Form>
              <FormGroup row>
                <Label sm={2}>标题</Label>
                <Col sm={10}>
                  <Input 
                  type="text" 
                  name="title" 
                  placeholder="Title"
                  onChange={(event)=>{
                    this.setState({
                      title:event.target.value
                    })
                  }} 
                   />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>作者</Label>
                <Col sm={10}>
                  <Input 
                  type="text" 
                  name="author" 
                  placeholder="Author"
                  onChange={(event)=>{
                    this.setState({
                      author:event.target.value
                    })
                  }} 
                   />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>内容</Label>
                <Col sm={10}>
                  <Input 
                  type="textarea" 
                  name="content" 
                  placeholder="Content"
                  onChange={(event)=>{
                    this.setState({
                      content:event.target.value
                    })
                  }} 
                   />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                    <Button color="primary">新增</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}


export default connect(mapStateToProps, {add_article})(Form);