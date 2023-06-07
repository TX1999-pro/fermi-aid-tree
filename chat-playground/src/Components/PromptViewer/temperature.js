import React, { useState } from "react";
import axios from "axios";

function Temperature() {
    const [userInput, setUserInput] = useState("");
    const [output, setOutput] = useState({
        "0.25": "",
        "0.5": "",
        "0.75": "",
        "1": "",
    });

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleButtonClick = async () => {
        const temps = [0.25, 0.5, 0.75, 1];
        let newOutput = {};

        for (let temp of temps) {
            const result = await axios.post(
                "http://localhost:5000/api/completions",
                {
                    prompt: userInput,
                    temperature: temp,
                }
            );

            newOutput[temp] = result.data;
        }

        setOutput(newOutput);
    };

    const handleClearClick = () => {
        setOutput({
            "0.25": "",
            "0.5": "",
            "0.75": "",
            "1": "",
        });
    };

    return (
        <div className="container">

            <div className="input-container">
                <textarea onChange={handleInputChange} />
                <button onClick={handleButtonClick}>Submit</button>
            </div>
            <div className="output-container">
                {Object.entries(output).map(([temp, text]) => (
                    <div key={temp} className="output-box">
                        <h2>Temperature: {temp}</h2>
                        <textarea readOnly value={text} />
                    </div>
                ))}
                <br />
                <button onClick={handleClearClick}>Clear Results</button>
            </div>
        </div>
    );
}

export default Temperature;