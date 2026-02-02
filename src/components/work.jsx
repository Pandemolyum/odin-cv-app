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

function Work({ id, count }) {
    const [description, setDescription] = useState([createJobItem()]);
    const addDescription = (e) => {
        e.preventDefault();
        setDescription([...description, createJobItem()]);
    };

    return (
        <div id={id}>
            <div className="textInput">
                <label htmlFor={"work" + count + "title"}>Job Title</label>
                <input
                    type="text"
                    id={"work" + count + "title"}
                    name={"work" + count + "title"}
                />
            </div>
            <div className="textInput">
                <label htmlFor={"work" + count + "company"}>Company</label>
                <input
                    type="text"
                    id={"work" + count + "company"}
                    name={"work" + count + "company"}
                />
            </div>
            <div className="textInput">
                <label htmlFor={"work" + count + "date"}>Date</label>
                <input
                    type="date"
                    id={"work" + count + "date"}
                    name={"work" + count + "date"}
                />
            </div>
            {description.map((index) => index)}
            <AddButton text="Add Description" onClick={addDescription} />
            <hr />
        </div>
    );
}

export { Work, JobDescription };
