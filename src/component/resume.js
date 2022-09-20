import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactToPrint from "react-to-print";
// import { ComponentToPrint } from './ComponentToPrint';
import React,{Component} from "react";
import { useRef } from "react";

const Print = React.forwardRef((props, ref) => {
     
  
    return (
      <div className="bg-gray-200 p-6" ref={ref}>
            <Form.Control as="textarea" placeholder="Leave a comment here" />

      </div>
    );
  });
export default Print;
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactToPrint from "react-to-print";
// import { ComponentToPrint } from './ComponentToPrint';
import React,{Component} from "react";
import { useRef } from "react";

const Print = React.forwardRef((props, ref)  => {
    const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => {
        return <Button variant="success">Print</Button>
    }}
        content={() => this.componentRef}
      />
          <div ref={(el) => (this.componentRef = el)}>

      <Container style={{ padding: "120px" }}>
        <Row>
            <Form.Control as="textarea" placeholder="Leave a comment here" />
         </Row>{" "}
        <div style={{ padding: "10px", float: "right" }}></div>
      </Container>{" "}
      </div>

    </div>
  );
});
export default Print;
