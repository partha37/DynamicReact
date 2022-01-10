import React from "react";
import "./List.css";

function Lists(props) {
  var rows = [];
  props.alldata.slice(0, 5).forEach((element) => {
    rows.push(
      <tr key={element.id}>
        <td>{element.id}</td>
        <td className="tdstyle">{element.title}</td>
      </tr>
    );
  });
  return (
    <div>
      <button onClick={props.viewlist}>View Lists</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default Lists;
