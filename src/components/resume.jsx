export default function Resume({ submitData }) {
    let educ = [];
    let work = [];
    if (submitData === null) {
        submitData = {
            fullname: "Full Name",
            email: "example@domain.com",
            phone: "555-555-5555",
            location: "City, Province",
            educ1degree: "Degree",
            educ1date: "Date",
            educ1school: "Institution",
            work1title: "Title",
            work1company: "Company",
            work1date: "Date",
            work1desc: "• Description 1\n• Description 2\n• Description 3",
        };
    }

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

    return (
        <div>
            <div className="contact">
                <h1>{submitData.fullname}</h1>
                <span>
                    {submitData.email}&emsp;✦&emsp;{submitData.phone}
                    &emsp;✦&emsp;
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
            <div className="sectionTitle">
                <h3>{degree}</h3>
                <span>{date}</span>
            </div>
            <p>{school}</p>
        </div>
    );
}

function Work({ company, date, title, description }) {
    return (
        <div className="work">
            <div className="sectionTitle">
                <h3>{title}</h3>
                <span>{date}</span>
            </div>
            <p>{company}</p>
            <p>{description}</p>
        </div>
    );
}
