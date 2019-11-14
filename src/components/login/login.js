import React  from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            nameError: '',
            passwordError: '',
            alertmsg: '',
            alerclass: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange(event) {
       this.setState({ [event.target.name]: event.target.value});
       event.preventDefault();
    }



    validate = () => {
        
        let nameError = "";
        let passwordError = "";
        

        if (this.state.username.length < 5) {
            nameError = "name cannot be blank";
          }

          if (this.state.password.length < 5) {
            passwordError = "password cannot be blank";
          }

          if (nameError || passwordError) {
            this.setState({ nameError, passwordError });
             return false;
          }

          const matchDetail = this.aunthonticate();

          if(matchDetail) { return true }

          //return true;
        

    }

    aunthonticate = () => {

        let storedUser = 'vijay';
        let storePassword = 'vijay';
        
        if((this.state.username === storedUser ) && (this.state.password === storePassword )) {
            this.setState({
                alertmsg: 'Successfully Login',
                alerclass: 'text-success',
                nameError: "",
                passwordError: "",
                
            })

            return true

        } else {
            this.setState({
                alertmsg: 'Does not match user and password',
                alerclass: 'text-danger'
            })

            return false
        }
        


    }
    
    handleFormSubmit = event =>  {

        const initialState =  {
            username : '',
            password : '',
        }

        event.preventDefault();
        const isValid = this.validate();

        if (isValid) {
            this.setState(initialState);
          }
        }

    render() {
       return  (
           <div className="col-md-5 mx-auto">
               <div className="text-center">
                    <h3 className={this.state.alerclass}>{this.state.alertmsg}</h3>
               </div>
               <div className="card">
                   <div className="card-header">
                        Login
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-row form-group align-items-center">
                                <label className="col-md-3 mb-0">Username</label>
                                <div className="col-md-9">
                                    <input className=" form-control" type="text" name='username' value={this.state.username} onChange={this.handleChange} />
                                    <span className="form-text text-danger">{this.state.nameError}</span>
                                </div>
                            </div>
                            <div className="form-row form-group align-items-center">
                                <label className="col-md-3 mb-0">Password</label>
                                <div className="col-md-9">
                                    <input className="form-control" type="password" name='password' value={this.state.password} onChange={this.handleChange} />
                                    <span className="form-text text-danger">{this.state.passwordError}</span>
                                </div>
                            </div>
                            <div className="offset-md-3 justify-content-space-between">
                                <input className="btn btn-primary " type="submit" value="submit" />
                                <Link className="btn btn-link offset-md-3 text-sm" to="/ForgotPassword">Forget Password</Link>
                            </div>
                            <div className="offset-md-3 mt-2">
                                <Link className="btn btn-link text-sm pl-0" to="/register">Register New User</Link>
                            </div>
                        </form>
                    </div>
                </div>
           </div>
        )
    }
}

export default Login;