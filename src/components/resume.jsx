export default function Resume({ submitData }) {
    let educ = [];
    let work = [];
    if (submitData === null) {
        return null;
    } else {
        let count = 1;
        while (submitData["educ" + count + "degree"]) {
            educ = [
                ...educ,
                <Educ
                    degree={submitData["educ" + count + "degree"]}
                    date={submitData["educ" + count + "date"]}
                    school={submitData["educ" + count + "school"]}
                />,
            ];
            count++;
        }

        count = 1;
        while (submitData["work" + count + "title"]) {
            work = [
                ...work,
                <Work
                    company={submitData["work" + count + "company"]}
                    date={submitData["work" + count + "date"]}
                    title={submitData["work" + count + "title"]}
                    description={submitData["work" + count + "desc"]}
                />,
            ];
            count++;
        }
    }

    return (
        <div>
            <div className="contact">
                <h1>{submitData.fullname}</h1>
                <span>
                    {submitData.email} ✦ {submitData.phone} ✦{" "}
                    {submitData.location}
                </span>
            </div>
            <hr />
            <div className="education">
                <h2>Education</h2>
                {educ.map((index) => index)}
            </div>
            <hr />
            <div className="work">
                <h2>Work Experience</h2>
                {work.map((index) => index)}
            </div>
        </div>
    );
}

function Educ({ degree, date, school }) {
    return (
        <div className="educ">
            <p>
                <span>{degree}</span>
                <span>{date}</span>
            </p>
            <p>{school}</p>
        </div>
    );
}

function Work({ company, date, title, description }) {
    return (
        <div className="work">
            <p>
                <span>{title}</span>
                <span>{date}</span>
            </p>
            <p>{company}</p>
            <p>{description}</p>
        </div>
    );
}
