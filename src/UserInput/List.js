import React from "react";

function Lists(props) {
  var rows = [];
  props.alldata.slice(0, 5).forEach((element) => {
    rows.push(
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.title}</td>
      </tr>
    );
  });
  return (
    <div>
      <button onClick={props.viewlist}>View List</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default Lists;
