import "./App.css";
import Form from "./components/form.jsx";
import Resume from "./components/resume.jsx";
import { useState } from "react";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        document.title = "Résumé Builder";
    }, []);
    let formObject;
    const [resume, setResume] = useState(<Resume submitData={null} />);
    const updateResume = () => setResume(<Resume submitData={formObject} />);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = document.querySelector("form");
        const formData = new FormData(form);
        formObject = Object.fromEntries(formData.entries());

        updateResume();

        console.log(formObject);
    };

    return (
        <>
            <h1>Résumé Builder</h1>
            <div className="hflex">
                <div>
                    <Form handleSubmit={handleSubmit} />
                </div>
                <hr />
                <div>
                    <section className="resume">{resume}</section>
                </div>
            </div>
        </>
    );
}

export default App;
