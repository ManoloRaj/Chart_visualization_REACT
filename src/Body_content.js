import React from "react";
import Chart_historique from "./Chart_historique";
import Leftbar from "./Leftbar";


export default class Body_content extends React.Component{
    render(){
        return (
        <div className="body_content">
            <Leftbar />
            <Chart_historique />
        </div>
        )
    }
}