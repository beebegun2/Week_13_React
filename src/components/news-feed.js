import React from 'react';
import Post from './post';


let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        return (
            <>
            <div className='container-fluid'>
                <h3>Log In</h3>
                <div className='row mt-3 justify-content-center align-items-center'>
                    <label className='fw-semibold' htmlFor='username'>Username</label>
                </div>
            </div><div className='col-auto'>
                    <input className="form-control border border-2 border-dark" id="username"></input>
                </div><div className="row mt-3 justify-content-center align -items-center">
                    <div className="col-3">
                        <label className="fw-semibold" htmlFor='password'>Password</label>
                    </div>
                    <div className='col-auto'>
                        <input className='form-control border border-2 border-dark' id='password'></input>
                    </div>
                    <div className='row mt-3 justify-content-center align-items-center mx-2'>
                        <button className='btn btn-lg fw-semibold' id='signIn'>Sign In</button>
                    </div>
                </div>
            </>
        );
    }
}


