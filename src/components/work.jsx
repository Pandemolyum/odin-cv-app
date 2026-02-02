export default function Work({ id, count }) {
    return (
        <div id={id}>
            <div className="textInput">
                <label htmlFor={"work" + count + "title"}>Job Title</label>
                <input
                    type="text"
                    id={"work" + count + "title"}
                    name={"work" + count + "title"}
                    placeholder="Title"
                />
            </div>
            <div className="textInput">
                <label htmlFor={"work" + count + "company"}>Company</label>
                <input
                    type="text"
                    id={"work" + count + "company"}
                    name={"work" + count + "company"}
                    placeholder="Company"
                />
            </div>
            <div className="textInput">
                <label htmlFor={"work" + count + "date"}>Date</label>
                <input
                    type="text"
                    id={"work" + count + "date"}
                    name={"work" + count + "date"}
                    placeholder="Jan 2025 - Now"
                />
            </div>
            <div className="textInput">
                <label htmlFor={"work" + count + "desc"}>Description</label>
                <textarea
                    id={"work" + count + "desc"}
                    name={"work" + count + "desc"}
                    placeholder="• Description 1&#10;• Description 2&#10;• Description 3"
                />
            </div>
            <hr />
        </div>
    );
}
