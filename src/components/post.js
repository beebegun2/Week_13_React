import React from 'react';
import PasswordButton from './password-button';
import UsernameButton from './username-button';


let e = React.createElement;

export default class Post extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="card-header bg-primary text-white" placeholder="Username">
                    <center><h3>Login</h3></center>
                </div>
                <div className="card-body" input type="text" class= "form-control"
                    placeholder="Username">
                </div>
                <div className="card-footer">
                    <UsernameButton />
                    <PasswordButton />           
                </div>
            </div>
        )
    }
}
