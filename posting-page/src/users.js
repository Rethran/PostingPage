import React from "react";
import "./users.css";
class Users extends React.Component {
  state = {
    loading: true,
    jsonpostdata: null,
    //row 15 is json post userId but it starts from 1 so I had to decrease it by 1 so it match with json user id
    userid: this.props.match.params.userId - 1,
    jsonuserdata: null,
  };
  async componentDidMount() {
    const urluser = `https://jsonplaceholder.typicode.com/users`;
    const response = await fetch(urluser);
    const userdata = await response.json();
    this.setState({ jsonuserdata: userdata, loading: false });
  }

  render() {
    {
      var userdata = this.state.jsonuserdata;
    }
    return (
      <div>
        {" "}
        {this.state.loading || !userdata ? (
          <div> loading... </div>
        ) : (
          <div>
            <h3> User information </h3>{" "}
            <ul>
              <p> Username: {userdata[this.state.userid].username} </p>{" "}
              <p> Full name: {userdata[this.state.userid].name} </p>{" "}
              <p> Phone number: {userdata[this.state.userid].phone} </p>{" "}
              <p> Email: {userdata[this.state.userid].email} </p>{" "}
              <p> User 's website: {userdata[this.state.userid].website} </p>{" "}
            </ul>{" "}
            <h3> User location </h3>{" "}
            <ul>
              <p> City: {userdata[this.state.userid].address.city} </p>{" "}
              <p> Street: {userdata[this.state.userid].address.street} </p>{" "}
              <p> Zipcode: {userdata[this.state.userid].address.zipcode} </p>{" "}
            </ul>{" "}
            <h3> Company </h3>{" "}
            <ul>
              <p> Company name: {userdata[this.state.userid].company.name} </p>{" "}
              <p>
                CatchPhrase: {userdata[this.state.userid].company.catchPhrase}{" "}
              </p>{" "}
              <p> Bs: {userdata[this.state.userid].company.bs} </p>{" "}
            </ul>{" "}
          </div>
        )}{" "}
      </div>
    );
  }
}

export default Users;
