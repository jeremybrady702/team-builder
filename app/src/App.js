import React, { useState } from "react";
import "./App.css";
import Form from './components/AddMember';
import Member from './components/Member';

const App = props => {
  const [teamList, setTeam] = useState(props.members);
  const submit = member => setTeam([...teamList, member]);



  return (
    <div className="container">
      <header className="App-header">
        <h1>Our Team</h1>
      </header>
      <div className="list">
        {teamList.map((member, index) => (
          <Member key={index} member={member} />
        ))}
      </div>
      <Form submit={submit} />
    </div>
  );
};

export default App;
