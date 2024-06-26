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
    isOpenAtom,
} from "./collab/Collab";
import { useAtomValue, Provider } from "jotai";
import { appJotaiStore } from "./app-jotai";
import { useAtomCallback } from "jotai/utils";
import { getCollaborationLinkData } from "./data";
import Portal from "./collab/Portal";

const App = () => {
    const collabAPI = useAtomValue(collabAPIAtom);
    const [roll, setRoll] = useState(0);
    const roomLinkData = getCollaborationLinkData(window.location.href);
    const roomId = roomLinkData?.roomId;
    const isOpen = useAtomValue(isOpenAtom);
    useEffect(() => {
        if (!collabAPI?.getPortal() || !isOpen) {
            return;
        }
        const portal = collabAPI.getPortal();

        portal.on("usercmd/rollDice:result", (data) => {
            console.log('roll result', data);
            setRoll(data);
        });

        return () => {
            portal.off("user:roll", setRoll);
        };
    }, [collabAPI, isOpen, setRoll]);

    const onRoll = () => {
        console.log('roll clicked for room', roomId);
        collabAPI?.getPortal().broadcastUserRoll(roomId!, 20, 1);

    };


    let sidebar;
    if (collabAPI?.isCollaborating()) {
        sidebar = (
            <Stack direction="horizontal" gap={3}>
                <div>
                    <Button onClick={onRoll}>Roll</Button>
                </div>
                <div className="border border-primary text-primary">{roll}</div>
            </Stack>
        );
    } else {
        sidebar = <div>Collaboration is not enabled</div>;
    }

    return (
        <Row className="h-100">
            <Col xs={2} className="border border-primary">
                <Row><h2>Sidebar2</h2></Row>
                <Row>
                    {sidebar}
                </Row>
            </Col>
            <Col>
                <ExcalidrawApp />
            </Col>
        </Row>
    );
};

const Wrapper = () => {
    return (
        <Container fluid className="w-100 h-100 p-0">
            <Provider unstable_createStore={() => appJotaiStore}>
                <App />
            </Provider>
        </Container >
    );
}
export default Wrapper;