export default function Work({ id, count }) {
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
            <div className="textInput">
                <label htmlFor={"work" + count + "desc"}>Description</label>
                <textarea
                    id={"work" + count + "desc"}
                    name={"work" + count + "desc"}
                />
            </div>
            <hr />
        </div>
    );
}
