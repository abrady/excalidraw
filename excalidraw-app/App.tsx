/* eslint-disable prettier/prettier */
import ExcalidrawApp from "./Main";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => {
    return (
        <Container fluid className="d-flex h-100 p-0">
            <Row className="h-100 w-100">
                <Col className="col-md-2">
                    <h1>Foo</h1>
                </Col>
                <Col className="col-md-10">
                    <ExcalidrawApp />
                </Col>
            </Row>
        </Container >
    );
};
export default App;