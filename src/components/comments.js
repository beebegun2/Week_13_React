import React from "react";
import UsernameButton from "./username-button";
import PasswordButton from "./password-button";

let e = React.createElement;

export default class Comment extends React.Component {
    render() {
        return (
            <div className="card w-75">
            
        
        <div className="card-footer">
            <UsernameButton />
            <PasswordButton />
        </div>
    </div>
        );
        
    }
}