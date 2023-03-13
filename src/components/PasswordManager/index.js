import {Component} from 'react'

import './index.css'

class PasswordManager extends Component {
  state = {
    count: 0,
  }

  render() {
    return (
      <div className="bg-container">
        <div className="manager-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="image-app"
          />
          <div className="card-image-input-container">
            <form className="card-form-input-container">
              <h1 className="heading-manager">Add New Password</h1>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="logo"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-Element"
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="logo"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-Element"
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="logo"
                />
                <input
                  type="text"
                  placeholder="Enter Password"
                  className="input-Element"
                />
              </div>
              <button type="submit" className="button-add">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-image-manager"
            />
          </div>
          <div className="bg-card-second-Container">
            <div className="count-search-container">
              <p className="your-count">Your Passwords {}</p>
              <div className="input-container-search">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-input-icon"
                />
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search"
                />
              </div>
            </div>
            {}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
