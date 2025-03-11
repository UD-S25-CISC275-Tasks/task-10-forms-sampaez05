import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group className="submit answer form">
                <Form.Label>Answer</Form.Label>
                <Form.Control value={givenAnswer} onChange={updateAnswer} />
            </Form.Group>
            {givenAnswer === expectedAnswer && <div>✔️</div>}
            {givenAnswer != expectedAnswer && <div>❌</div>}
        </div>
    );
}
