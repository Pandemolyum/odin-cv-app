import { useState } from "react";
import Education from "./education.jsx";
import Work from "./work.jsx";
import AddButton from "./button.jsx";
import Icon from "@mdi/react";
import { mdiMenuDown } from "@mdi/js";

export default function Form({ handleSubmit }) {
    function createEducItem(countEduc) {
        const id = "educ" + countEduc;
        return <Education id={id} count={countEduc} />;
    }

    let countEduc = 1;
    const [education, setEducation] = useState([createEducItem(countEduc)]);
    const addEduc = (e) => {
        e.preventDefault();
        setEducation([...education, createEducItem(education.length + 1)]);
    };

    function createWorkItem(countWork) {
        const id = "educ" + countWork;
        return <Work id={id} count={countWork} />;
    }

    let countWork = 1;
    const [work, setWork] = useState([createWorkItem(countWork)]);
    const addWork = (e) => {
        e.preventDefault();
        setWork([...work, createWorkItem(work.length + 1)]);
    };

    const [showBio, setShowBio] = useState(true);
    const toggleBio = () => setShowBio(!showBio);

    const [showEduc, setShowEduc] = useState(true);
    const toggleEduc = () => setShowEduc(!showEduc);

    const [showWork, setShowWork] = useState(true);
    const toggleWork = () => setShowWork(!showWork);

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <section>
                <button className="toggle" onClick={toggleBio}>
                    <h2>Bio</h2>
                    <Icon path={mdiMenuDown} size={1} />
                </button>
                {showBio && (
                    <>
                        <div className="textInput">
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="textInput">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@domain.com"
                            />
                        </div>
                        <div className="textInput">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="555-555-5555"
                            />
                        </div>
                        <div className="textInput">
                            <label htmlFor="location">Location / Address</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="City, Province"
                            />
                        </div>
                    </>
                )}
            </section>
            <section>
                <button className="toggle" onClick={toggleEduc}>
                    <h2>Education</h2>
                    <Icon path={mdiMenuDown} size={1} />
                </button>
                {showEduc && (
                    <>
                        {education.map((item) => item)}
                        <AddButton text="Add Education" onClick={addEduc} />
                    </>
                )}
            </section>
            <section>
                <button className="toggle" onClick={toggleWork}>
                    <h2>Work Experience</h2>
                    <Icon path={mdiMenuDown} size={1} />
                </button>
                {showWork && (
                    <>
                        {work.map((item) => item)}
                        <AddButton
                            text="Add Work Experience"
                            onClick={addWork}
                        />
                    </>
                )}
            </section>
            <button type="submit">Submit</button>
        </form>
    );
}
