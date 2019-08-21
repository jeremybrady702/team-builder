import React, { useState } from "react";

const Form = props => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    role: "",
    id: Date.now()
  });
  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.submit(input);
        setInput({
          name: "",
          email: "",
          role: "",
          id: Date.now()
        });
      }}
      className="add-form"
      >
          <h3>Grow your team!</h3>
          <div className="user-inputs">
          <label htmlFor="name">
                  Name:<input type="text" onChange={handleChange} value={input.name} name="name" />
              </label>
              <label htmlFor="email">
                  Email:<input type="text" onChange={handleChange} value={input.email} name="email" />
              </label>
              <label htmlFor="role">
                  Role:<input type="text" onChange={handleChange} value={input.role} name="role" />
              </label>
          </div>
          <button>Grow!</button>
          
    </form>
  );
};
export default Form;