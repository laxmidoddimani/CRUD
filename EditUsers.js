import axios from "axios";
import React from "react";

const URL = "http://localhost:8080/api/students";

class EditUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      id: "",
      name: "",
    };
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getAllUsers() {
    console.log(window.location.href.split("edit/")[1]);
    axios
      .get(
        `http://localhost:8080/api/students/${
          window.location.href.split("edit/")[1]
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

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(URL, this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getAllUsers();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <h2>Edit User</h2>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="id"
              value={this.state.id}
              className="form-control"
              placeholder="Id"
              onChange={(e) => this.changeHandler(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              placeholder="Name"
              onChange={(e) => this.changeHandler(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              value={this.state.email}
              placeholder="Email Id"
              onChange={(e) => this.changeHandler(e)}
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-warning">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EditUsers;
