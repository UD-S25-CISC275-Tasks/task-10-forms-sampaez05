import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "white",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("red"); //sets initial color to red

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <Form.Group>
                    <Form.Label>Color:</Form.Label>
                    {COLORS.map((color: string) => (
                        <Form.Check
                            inline
                            key={color}
                            type="radio"
                            name="colors"
                            id={color}
                            value={color}
                            checked={chosenColor === color}
                            onChange={updateColor}
                            label={color}
                        ></Form.Check>
                    ))}
                </Form.Group>
                <div
                    style={{ backgroundColor: chosenColor }}
                    data-testid="colored-box"
                >
                    Your color is {chosenColor}
                </div>
            </div>
        </div>
    );
}
