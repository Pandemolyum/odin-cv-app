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

    const bioStyle = {
        display: showBio ? "flex" : "none",
        flexDirection: "column",
    };
    const educStyle = {
        display: showEduc ? "flex" : "none",
        flexDirection: "column",
    };
    const workStyle = {
        display: showWork ? "flex" : "none",
        flexDirection: "column",
    };

    const arrowClass = "toggleArrow";
    const bioArrowRotation = showBio ? 0 : -90;
    const educArrowRotation = showEduc ? 0 : -90;
    const workArrowRotation = showWork ? 0 : -90;

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <section>
                <button className="toggle" onClick={toggleBio}>
                    <h2>Bio</h2>
                    <Icon
                        className={arrowClass}
                        path={mdiMenuDown}
                        size={1.5}
                        rotate={bioArrowRotation}
                    />
                </button>

                <div className="inputGroup" style={bioStyle}>
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
                </div>
            </section>
            <section>
                <button className="toggle" onClick={toggleEduc}>
                    <h2>Education</h2>
                    <Icon
                        className={arrowClass}
                        path={mdiMenuDown}
                        size={1.5}
                        rotate={educArrowRotation}
                    />
                </button>
                <div className="inputGroup" style={educStyle}>
                    {education.map((item) => item)}
                    <AddButton text="Add Education" onClick={addEduc} />
                </div>
            </section>
            <section>
                <button className="toggle" onClick={toggleWork}>
                    <h2>Work Experience</h2>
                    <Icon
                        className={arrowClass}
                        path={mdiMenuDown}
                        size={1.5}
                        rotate={workArrowRotation}
                    />
                </button>
                <div className="inputGroup" style={workStyle}>
                    {work.map((item) => item)}
                    <AddButton text="Add Work Experience" onClick={addWork} />
                </div>
            </section>
            <button type="submit">Update Resume</button>
        </form>
    );
}
