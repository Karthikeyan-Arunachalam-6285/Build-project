import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactToPrint from "react-to-print";
// import { ComponentToPrint } from './ComponentToPrint';
import React, { Component, useState } from "react";
import { useRef } from "react";
const Print = React.forwardRef((props, ref) => {
const [name, setName] = useState("")

  return (
    <div className="bg-gray-200 p-6" >
      <Container style={{ padding: "10px" }}>
        <Row>
          <Form.Control as="textarea" placeholder="Leave a comment here" onChange={e=>setName(e.target.value)}  style={{ width: "500px" }}/>
          <p ref={ref}>{name}</p>
        </Row>{" "}
        <div style={{ padding: "10px", float: "right" }}></div>
      </Container>{" "}
    </div>
  );
});
export default Print;
