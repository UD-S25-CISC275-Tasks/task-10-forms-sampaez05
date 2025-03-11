import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }

    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                {username} is {student ? "a student" : "not a student"}
            </div>
            <Form.Check
                type="switch"
                id="mode-switch"
                label="Edit Mode"
                checked={mode}
                onChange={updateMode}
            />
            <Form.Label>Name</Form.Label>
            <Form.Control
                value={username}
                onChange={updateUsername}
                disabled={!mode}
            />
            <Form.Check
                type="checkbox"
                id="is-student-check"
                label="Are You A Student"
                checked={student}
                onChange={updateStudent}
                disabled={!mode}
            />
        </div>
    );
}
