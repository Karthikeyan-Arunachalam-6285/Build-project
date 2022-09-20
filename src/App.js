import logo from "./logo.svg";
import "./App.css";
import Print from "./component/print";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Container } from "react-bootstrap";

const App = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="bg-gray-200 p-6">
      <Print ref={componentRef} />
      <Container>
        <Button
          type="button"
          className="bg-gray-500 border border-gray-500 p-2 mb-4"
          onClick={handlePrint}
        >
          {" "}
          Print{" "}
        </Button>
      </Container>{" "}
    </div>
  );
};

export default App;
