import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
// import { login, logout } from "../actions/userActions";
import { loginUser } from "../actions";
import "./login.css";

const loadData = (props) => {
  console.log(props)
  const {username, password} = props;
  props.loginUser(username, password)
}

class Login extends Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.dispatch(logout());

    this.state = {
      username: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      loadData({username, password, ...this.props} );
      
    }
  }

  render() {
    const { fetching, fetched } = this.props.logedinUser;
    const { username, password, submitted } = this.state;
      if (fetched) {
        return <Redirect to='/'></Redirect>
      }

    return (
      <div>
        <div class="login-wrapper">
          <div class="logo ir" />
          <span class="title">Login</span>
          <form name="form" onSubmit={this.handleSubmit}>
            <fieldset>
              <div class="inputrow">
                <i class="fa icon-user fa-fw" />
                <input
                  type="text"
                  name="username"
                  id="user"
                  placeholder="Username"
                  onChange={this.handleChange}
                  value={username}
                  autoFocus
                  required
                />
              </div>
              <div class="inputrow">
                <i class="fa icon-key fa-fw" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  data-typetoggle="#show"
                  onChange={this.handleChange}
                  value={password}
                  placeholder="Password"
                  required
                />
              </div>

              <div class="remember">
                <input
                  type="checkbox"
                  name="remember_login"
                  value="1"
                  id="remember_login"
                />
                <label for="remember_login" class="radio">
                  Remember me
                </label>
              </div>
              <div class="button-center">
                <button class="btn-log" type="submit" id="submit">
                  Login
                </button>
                {fetching && (
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                )}
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { entities: {users}, reducers:{logedinUser} } = state;
  
  
  return {
    users,
    logedinUser,
  };
};

const connectedLoginPage = withRouter(connect(mapStateToProps, {loginUser})(Login));
export default connectedLoginPage;
