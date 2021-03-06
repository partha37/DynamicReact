import "./styles.css";
import react, { Component } from "react";
import UserInput from "./UserInput/UserInput";
import UserPass from "./UserInput/UserPass";
import UserSubmit from "./UserInput/UserSubmit";
import Lists from "./UserInput/List";

class App extends Component {
  state = {
    uname: "",
    Password: "",
    alldata: [],
    types: ["car", "bike", "motor"]
  };

  UserInputhandler = (event) => {
    this.setState({
      uname: event.target.value
    });
  };
  UserPasshandler = (event) => {
    this.setState({
      Password: event.target.value
    });
  };
  UserSubmithandle = () => {
    console.log(this.state.uname);
    console.log(this.state.Password);
  };
  getLists = () => {
    this.setState(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/?_limit=10")
        .then((res) => res.json())
        .then((result) =>
          this.setState({
            alldata: result
          })
        )
        .catch(console.log);
    });
  };

  deleteHandler = (propind) => {
    const data = [...this.state.types];
    data.splice(propind, 1);
    this.setState({ types: data });
  };

  render() {
    return (
      <div>
        <div>
          <p>Enter Username</p>
          <UserInput userchange={this.UserInputhandler} />
          <p>Enter Password </p>
          <UserPass passchange={this.UserPasshandler} />
        </div>
        <UserSubmit usersubmit={this.UserSubmithandle} />

        <Lists alldata={this.state.alldata} viewlist={this.getLists} />
        {this.state.types.map((elem, val) => {
          return <p onClick={this.deleteHandler.bind(val)}>{elem}</p>;
        })}
      </div>
    );
  }
}

export default App;
