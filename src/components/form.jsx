import { useState } from "react";
import Education from "./education.jsx";
import { Work } from "./work.jsx";
import AddButton from "./button.jsx";

function createEducItem() {
    const id = crypto.randomUUID();
    return <Education id={id} />;
}

function createWorkItem() {
    const id = crypto.randomUUID();
    return <Work id={id} />;
}

export default function Form() {
    const handleSubmit = (e) => e.preventDefault();

    const [education, setEducation] = useState([createEducItem()]);
    const addEduc = () => setEducation([...education, createEducItem()]);

    const [work, setWork] = useState([createWorkItem()]);
    const addWork = () => setWork([...work, createWorkItem()]);

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <section>
                <h2>Bio</h2>
                <div className="textInput">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" id="fullname" name="fullname" />
                </div>
                <div className="textInput">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="textInput">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                </div>
                <div className="textInput">
                    <label htmlFor="location">Location / Address</label>
                    <input type="text" id="location" name="location" />
                </div>
            </section>
            <section>
                <h2>Education</h2>
                {education.map((item) => item)}
                <AddButton text="Add Education" onClick={addEduc} />
            </section>
            <section>
                <h2>Work Experience</h2>
                {work.map((item) => item)}
                <AddButton text="Add Work Experience" onClick={addWork} />
            </section>
            <button>Submit</button>
        </form>
    );
}
