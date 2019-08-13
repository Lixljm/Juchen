import React from "react";
import {
    Route
} from "react-router-dom"

export default class Theatre extends React.Component{
    render(){
        return (
            <div>
                {
                    this.props.children.map((v,i)=>{
                        return (
                            <Route key={i} {...v}></Route>
                        )
                    })
                }
            </div>
        )

    }
}