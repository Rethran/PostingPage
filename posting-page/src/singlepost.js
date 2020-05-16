import React from "react";
import "./singlepost.css";
import { BrowserRouter as Router, Link } from "react-router-dom";


class Singlepost extends React.Component {
    //some statements for futher use
    state = {
        loading: true,
        postid: this.props.match.params.id - 1,
        jsonuserdata: null,
        jsonpostdata: null
    };

    async componentDidMount() {
            {
                /*
                    this component fetch asynchronously posts and user data from url and stores them as state
                    
                */
            }
            const urluser = `https://jsonplaceholder.typicode.com/users`;
            const postresponse = await fetch(urluser);
            const userdata = await postresponse.json();
            //fetching postdata
            const urlpost = `https://jsonplaceholder.typicode.com/posts`;
            const response = await fetch(urlpost);
            const postdata = await response.json();
            this.setState({
                jsonpostdata: postdata,
                jsonuserdata: userdata,
                loading: false
            });

        }
        //here is content of webpage for post/{postid}
    render() {
        { var posts = this.state.jsonpostdata }; { var users = this.state.jsonuserdata };

        return (

            <
            div > {!users ||
                this.state.loading ||
                !posts ? ( <
                    div > loading... < /div>
                ) : ( <
                    div >
                    <
                    Link to = { `/user/${posts[this.state.postid].userId}` } >

                    <
                    h2 > {
                        users[
                            posts[this.state.postid].userId - 1
                        ].username
                    } <
                    /h2> <
                    /Link> <
                    h3 > Post < /h3> <
                    p > { posts[this.state.postid].body } < /p> <
                    /div>
                )
            } <
            /div>
        );
    }
}

export default Singlepost;