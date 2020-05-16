import React from "react";
import "./singlepost.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
class Singlepost extends React.Component {
    state = {
        loading: true,
        postid: this.props.match.params.id - 1,
        jsonuserdata: null,
        jsonpostdata: null
    };

    async componentDidMount() {
            //fetchin userdata
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
        return ( <
            div > { " " } {
                !this.state.jsonuserdata ||
                    this.state.loading ||
                    !this.state.jsonpostdata ? ( <
                        div > loading... < /div>
                    ) : ( <
                        div >
                        <
                        Link to = { `/user/${this.state.jsonpostdata[this.state.postid].userId}` } >
                        <
                        h4 > {
                            this.state.jsonuserdata[
                                this.state.jsonpostdata[this.state.postid].userId - 1
                            ].username
                        } <
                        /h4> <
                        /Link> <
                        h3 > Post < /h3> <
                        p > { this.state.jsonpostdata[this.state.postid].body } < /p> <
                        /div>
                    )
            } { " " } <
            /div>
        );
    }
}

export default Singlepost;