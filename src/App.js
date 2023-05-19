import "./App.css";
import axios from "axios";

import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json"
      )
      .then((res) => setData(res.data.employees));
  }, []);
  return (
    <div className="filter">
      <table className="App">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Skills</th>
          <th>Projects</th>
        </tr>
        {data &&
          data.map((emp) => (
            <tr>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.designation}</td>
              <td>
                {emp.skills.length > 0
                  ? emp.skills.map((p) => <p>{p}, </p>)
                  : "no skills"}
              </td>
              <td>
                {emp.projects
                  ? emp.projects.map((p) => <p>{p.name},</p>)
                  : "no projects"}
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default App;
