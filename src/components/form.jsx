import { useState } from "react";
import Education from "./education.jsx";
import Work from "./work.jsx";
import AddButton from "./button.jsx";

export default function Form({ handleSubmit }) {
    function createEducItem(countEduc) {
        const id = "educ" + countEduc;
        return <Education id={id} count={countEduc} />;
    }

    function createWorkItem(countWork) {
        const id = "educ" + countWork;
        return <Work id={id} count={countWork} />;
    }

    let countEduc = 1;
    const [education, setEducation] = useState([createEducItem(countEduc)]);
    const addEduc = (e) => {
        e.preventDefault();
        setEducation([...education, createEducItem(education.length + 1)]);
    };

    let countWork = 1;
    const [work, setWork] = useState([createWorkItem(countWork)]);
    const addWork = (e) => {
        e.preventDefault();
        setWork([...work, createWorkItem(work.length + 1)]);
    };

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
            <button type="submit">Submit</button>
        </form>
    );
}
