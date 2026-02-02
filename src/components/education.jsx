export default function Education({ id, count }) {
    return (
        <div id={id}>
            <div className="textInput">
                <label htmlFor={"educ" + count + "degree"}>Degree</label>
                <input
                    type="text"
                    id={"educ" + count + "degree"}
                    name={"educ" + count + "degree"}
                />
            </div>
            <div className="textInput">
                <label htmlFor={"educ" + count + "school"}>School</label>
                <input
                    type="text"
                    id={"educ" + count + "school"}
                    name={"educ" + count + "school"}
                />
            </div>
            <div className="textInput">
                <label htmlFor={"educ" + count + "date"}>Date</label>
                <input
                    type="date"
                    id={"educ" + count + "date"}
                    name={"educ" + count + "date"}
                />
            </div>
            <hr />
        </div>
    );
}
