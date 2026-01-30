export default function Education({ id }) {
    return (
        <div id={id}>
            <div className="textInput">
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" name="degree" />
            </div>
            <div className="textInput">
                <label htmlFor="school">School</label>
                <input type="text" id="school" name="school" />
            </div>
            <div className="textInput">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" />
            </div>
            <hr />
        </div>
    );
}
