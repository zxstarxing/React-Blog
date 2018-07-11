import React from 'react';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
export default class Example extends React.Component {
  render() {
    return (
      <Container style={{paddingTop:'20px',height:'800px'}} >
        <Row>
          <Col xl="12">
            <Form>
              <FormGroup row>
                <Label sm={2}>标题</Label>
                <Col sm={10}>
                  <Input type="text" name="title" placeholder="Title" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>作者</Label>
                <Col sm={10}>
                  <Input type="text" name="author" placeholder="Author" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>内容</Label>
                <Col sm={10}>
                  <Input type="textarea" name="content" placeholder="Content" />
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