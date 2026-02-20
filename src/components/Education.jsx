import { useState } from "react";

function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });

  function handleChange(e) {
    setEducation({ ...education, [e.target.name]: e.target.value });
  }

  return (
    <section>
      <h2>Education</h2>

      {isEditing ? (
        <>
          <input
            name="school"
            placeholder="School Name"
            value={education.school}
            onChange={handleChange}
          />
          <input
            name="title"
            placeholder="Title of Study"
            value={education.title}
            onChange={handleChange}
          />
          <input
            name="date"
            placeholder="Date of Study"
            value={education.date}
            onChange={handleChange}
          />
          <button onClick={() => setIsEditing(false)}>Submit</button>
        </>
      ) : (
        <>
          <p><strong>School:</strong> {education.school}</p>
          <p><strong>Title:</strong> {education.title}</p>
          <p><strong>Date:</strong> {education.date}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </section>
  );
}

export default Education;
