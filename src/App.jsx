import "./App.css";
import Form from "./components/form.jsx";
import Section from "./components/section.jsx";
import Contact from "./components/contact.jsx";

function App() {
    return (
        <div className="hflex">
            <div>
                <Form></Form>
            </div>
            <hr />
            <div>
                <Section>
                    <Contact />
                </Section>
            </div>
        </div>
    );
}

export default App;
