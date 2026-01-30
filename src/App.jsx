import "./App.css";
import Form from "./components/form.jsx";
import Section from "./components/section.jsx";
import Contact from "./components/contact.jsx";

function App() {
    return (
        <>
            <div>
                <Form></Form>
            </div>
            <div>
                <Section>
                    <Contact />
                </Section>
            </div>
        </>
    );
}

export default App;
