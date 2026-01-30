import { useState } from "react";
import AddButton from "./button.jsx";

function JobDescription({ id }) {
    return (
        <div id={id} className="textInput">
            <label htmlFor="jobDescription">Description</label>
            <input type="text" id="jobDescription" name="jobDescription" />
        </div>
    );
}

function createJobItem() {
    const id = crypto.randomUUID();
    return <JobDescription id={id} />;
}

function Work({ id }) {
    const [description, setDescription] = useState([createJobItem()]);
    const addDescription = () =>
        setDescription([...description, createJobItem()]);

    return (
        <div id={id}>
            <div className="textInput">
                <label htmlFor="degree">Job Title</label>
                <input type="text" id="degree" name="degree" />
            </div>
            <div className="textInput">
                <label htmlFor="school">Company</label>
                <input type="text" id="school" name="school" />
            </div>
            <div className="textInput">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" />
            </div>
            {description.map((index) => index)}
            <AddButton text="Add Description" onClick={addDescription} />
            <hr />
        </div>
    );
}

export { Work, JobDescription };
