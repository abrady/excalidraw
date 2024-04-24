/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import ExcalidrawApp from "./Main";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import {
    collabAPIAtom,
} from "./collab/Collab";
import { useAtomValue } from "jotai";

const App = () => {
    const collabAPI = useAtomValue(collabAPIAtom);
    const [roll, setRoll] = useState(0);

    useEffect(() => {
        if (!collabAPI) {
            console.log('collabAPI not ready');
            return;
        }
        console.log('collabAPI ready');
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
                <Col xs={2} className="border border-primary">
                    <Row><h2>Sidebar</h2></Row>
                    <Row className="">
                        <Stack direction="horizontal" gap={3}>
                            <div>
                                <Button onClick={onRoll}>Roll</Button>
                            </div>
                            <div className="border border-primary text-primary">{roll}</div>
                        </Stack>
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