import axios from "axios";
import React from "react";

class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      id: "",
      name: "",
    };
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  getAllUsers() {
    console.log(window.location.href.split("view/")[1]);
    axios
      .get(
        `http://localhost:8080/api/students/${
          window.location.href.split("view/")[1]
        }`
      )
      .then((res) => {
        console.log(res);
        this.setState({ id: res.data.id });
        this.setState({ name: res.data.name });
        this.setState({ email: res.data.email });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getAllUsers();
  }

  render() {
    return (
      <div>
        <h2 className="display-4">User Id : {this.state.id}</h2>

        <ul className="list-group w-50">
          <li className="list-group-item">name : {this.state.name}</li>
          <li className="list-group-item">email : {this.state.email}</li>
        </ul>
      </div>
    );
  }
}

export default View;
