/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import ExcalidrawApp from "./Main";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
    collabAPIAtom,
} from "./collab/Collab";
import { useAtom } from "jotai";

const App = () => {
    const [collabAPI] = useAtom(collabAPIAtom);
    const [roll, setRoll] = useState(0);

    useEffect(() => {
        if (!collabAPI) {
            return;
        }
        collabAPI?.getPortal().on("usercmd/rollDice:result", setRoll);

        return () => {
            collabAPI?.getPortal().off("user:roll", setRoll);
        };
    }, [collabAPI, setRoll]);

    const onRoll = () => {
        console.log('onRoll');
        collabAPI?.getPortal().broadcastUserRoll(20, 1)
    };

    return (
        <Container fluid className="w-100 h-100 p-0">
            <Row className="h-100">
                <Col xs={2}>
                    <Row>Sidebar</Row>
                    <Row className="border border-primary">
                        <Col>
                            <Button onClick={onRoll}>Roll</Button>
                        </Col>
                        <Col className="w-25 text-primary">{roll}</Col>
                    </Row>
                </Col>
                <Col>
                    <ExcalidrawApp />
                </Col>
            </Row>
        </Container >
    );
};
export default App;