import axios from "axios";
import React from "react";

const URL = "http://localhost:8080/api/students";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      id: "",
      name: "",
      students: [],
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

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

  render() {
    const { email, name, id } = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <h2>Registration</h2>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="id"
              value={id}
              placeholder="Id"
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              placeholder="Name"
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              placeholder="Email Id"
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
