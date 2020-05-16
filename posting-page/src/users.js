import React from "react";

import "./users.css";

class Users extends React.Component {
    state = {
        loading: true,

        jsonpostdata: null,

        //row 15 is json post userId but it starts from 1 so I had to decrease it by 1 so it match with json user id

        userid: this.props.match.params.userId - 1,

        jsonuserdata: null
    };

    async componentDidMount() {
        const urluser = `https://jsonplaceholder.typicode.com/users`;

        const response = await fetch(urluser);

        const userdata = await response.json();

        this.setState({ jsonuserdata: userdata, loading: false });
    }

    render() {
        return ( <
            div > { " " } {
                this.state.loading || !this.state.jsonuserdata ? ( <
                    div > loading... < /div>
                ) : ( <
                    div >
                    <
                    h3 > user information < /h3>{" "} <
                    ul >
                    <
                    p >
                    username: { this.state.jsonuserdata[this.state.userid].username } { " " } <
                    /p>{" "} <
                    p >
                    full name: { this.state.jsonuserdata[this.state.userid].name } { " " } <
                    /p>{" "} <
                    p >
                    phone number: { this.state.jsonuserdata[this.state.userid].phone } <
                    /p> <
                    p > email: { this.state.jsonuserdata[this.state.userid].email } < /p> <
                    p >
                    user 's website:{" "} { this.state.jsonuserdata[this.state.userid].website } <
                    /p> <
                    /ul> <
                    h3 > User location < /h3>{" "} <
                    ul >
                    <
                    p >
                    city: { this.state.jsonuserdata[this.state.userid].address.city } { " " } <
                    /p>
                    street: { " " } { this.state.jsonuserdata[this.state.userid].address.street } { " " } <
                    p >
                    zipcode: { " " } { this.state.jsonuserdata[this.state.userid].address.zipcode } { " " } <
                    /p>{" "} <
                    /ul> <
                    h3 > Company < /h3> <
                    ul >
                    <
                    p >
                    Company name: { " " } { this.state.jsonuserdata[this.state.userid].company.name } { " " } <
                    /p>
                    catchPhrase: { " " } { this.state.jsonuserdata[this.state.userid].company.catchPhrase } { " " } <
                    p >
                    bs: { this.state.jsonuserdata[this.state.userid].company.bs } { " " } <
                    /p>{" "} <
                    /ul> <
                    /div>
                )
            } { " " } <
            /div>
        );
    }
}

export default Users;