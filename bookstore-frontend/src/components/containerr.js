import React from "react";

export default function Containerr(props){
    return (
        <div className="container">
            {props.children}
        </div>
    );
}
