import React, { useState } from "react";
import "./App.css";

const App = props => {
  const [teamList, setTeam] = useState(props.data);
  //stretch
  const submit = data => setTeam([...teamList, data]);
  const update = individual =>
    setTeam([
      ...teamList.map(member =>
        individual.id === member.id ? individual : member
      )
    ]);

  //end stretch
  return (
    <div className="container">
      <header className="App-header">
        <h1>Our Team</h1>
      </header>
      <div className="teamlist">
        {teamList.map((data, index) => (
          <Member key={index} update={update} member={data} />
        ))}
      </div>
    </div>
  );
};

export default App;
