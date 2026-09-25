import { useState } from "react";

function ResumeAnalyzer({ setSection }) {

  const [resumeText, setResumeText] = useState("");
  const [skills, setSkills] = useState([]);

  const analyzeResume = () => {

    if (resumeText.trim() === "") {
      alert("Please paste your resume text");
      return;
    }

    const possibleSkills = [
      "Java",
      "Python",
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "SQL",
      "Machine Learning",
      "Data Science",
      "Git"
    ];

    const foundSkills = possibleSkills.filter(
      (skill) =>
        resumeText
          .toLowerCase()
          .includes(skill.toLowerCase())
    );

    setSkills(foundSkills);
  };

  return (
    <div className="resume-container">

      <div className="resume-card">

        <h1>📄 Resume Analyzer</h1>

        <p>
          Paste your resume text below.
        </p>

        <textarea
          placeholder="Paste your resume here..."
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        />

        <button onClick={analyzeResume}>
          Analyze Resume
        </button>

        {skills.length > 0 && (

          <div className="skills-result">

            <h2>Skills Found</h2>

            {skills.map((skill) => (
              <span
                className="skill"
                key={skill}
              >
                {skill}
              </span>
            ))}

          </div>

        )}

        {resumeText !== "" && skills.length === 0 && (

          <p className="no-skills">
            No matching skills found.
          </p>

        )}

      </div>

      <button
        className="back-home-btn"
        onClick={() => setSection("dashboard")}
      >
        Back to Dashboard
      </button>

    </div>
  );
}

export default ResumeAnalyzer;