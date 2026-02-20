import { useState } from "react";

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  return (
    <section>
      <h2>General Information</h2>

      {isEditing ? (
        <>
          <input
            name="name"
            placeholder="Name"
            value={info.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={info.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone"
            value={info.phone}
            onChange={handleChange}
          />
          <button onClick={() => setIsEditing(false)}>Submit</button>
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {info.name}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Phone:</strong> {info.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </section>
  );
}

export default GeneralInfo;
