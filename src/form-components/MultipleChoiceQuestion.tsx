import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [chosen, setChosen] = useState(options[0]);

    function updateChosen(event: React.ChangeEvent<HTMLSelectElement>) {
        setChosen(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div className="options">
                <Form.Group controlId="options">
                    <Form.Label>Multiple Choice Options</Form.Label>
                    <Form.Select value={chosen} onChange={updateChosen}>
                        {options.map((option: string) => (
                            <option
                                key={option}
                                value={option}
                                label={option}
                            ></option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            {chosen === expectedAnswer && <div>✔️</div>}
            {chosen != expectedAnswer && <div>❌</div>}
        </div>
    );
}
