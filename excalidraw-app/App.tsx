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
        collabAPI?.getPortal().broadcastUserRoll(20, 1)
    };

    return (
        <Container fluid className="d-flex flex-nowrap h-100 p-0">
            <Row className="h-100 w-100">
                <Col className="h-100 w-25">
                    <h1>Sidebar</h1>
                    <Row className="border border-primary">
                        <div className="w-25">
                            <Button onClick={onRoll}>Roll</Button>
                        </div>
                        <div className="w-25 text-primary">{roll}</div>
                    </Row>
                </Col>
                <Col className="h-100">
                    <ExcalidrawApp />
                </Col>
            </Row>
        </Container >
    );
};
export default App;