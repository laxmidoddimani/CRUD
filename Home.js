import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      id: "",
      name: "",
      students: [],
    };
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  getAllUsers() {
    axios
      .get("http://localhost:8080/api/students")
      .then((res) => {
        console.log(res);
        this.setState({ students: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteUser = (id) => {
    axios
      .delete("http://localhost:8080/api/students/" + id)
      .then((response) => {
        console.log(response);
        this.getAllUsers();
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
        {!navigator.onLine ? (
          <h2>You are offline</h2>
        ) : (
          <div>
            <br></br>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.students.map((students, index) => (
                  <tr key={index}>
                    <td>{students.id}</td>
                    <td>{students.name}</td>
                    <td>{students.email}</td>
                    <td>
                      <Link
                        className="btn btn-primary mr-10"
                        to={"/Users/view/" + students.id}
                      >
                        View
                      </Link>
                      <button
                        className="btn btn-outline-primary mr-4"
                        onClick={() => this.deleteUser(students.id)}
                      >
                        Delete
                      </button>
                      <Link
                        className="btn btn-danger"
                        to={"/Users/edit/" + students.id}
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
