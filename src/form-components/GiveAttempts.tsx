import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsReq, setAttemptsReq] = useState<string>("");
    const requested = parseInt(attemptsReq) || 0;

    function updateAttemptsReq(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptsReq(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attemptsLeft}</div>
            <Form.Group controlId="formAttemptRequest">
                <Form.Label>Request Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsReq}
                    onChange={updateAttemptsReq}
                />
            </Form.Group>
            <Button
                disabled={attemptsLeft === 0}
                onClick={() => {
                    setAttemptsLeft(attemptsLeft - 1);
                }}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft + requested);
                }}
            >
                gain
            </Button>
        </div>
    );
}
