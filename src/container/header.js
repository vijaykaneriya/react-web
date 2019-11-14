import React  from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render () {
        return (
            <div className="mb-3 bg-white border-bottom shadow-sm">
                <div className="container">
                    <div className="d-flex flex-column flex-md-row align-items-center py-4">
                        <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
                        <nav className="my-2 my-md-0 mr-md-3">
                            <Link className="p-2 text-dark" to="/login">Login</Link>
                            <Link className="p-2 text-dark" to="/register" >Register</Link>
                            <Link className="p-2 text-dark" to="/404">New Blog</Link>
                            <Link className="p-2 text-dark" to="/blog" >Blog</Link>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;