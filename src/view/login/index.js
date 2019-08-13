import React from "react"
import {Link} from "react-router-dom";

export default class login extends React.Component{
    render(){
        return(
            <Link>
                <input type="button" value={"登录"} />
            </Link>
        )
    }
}