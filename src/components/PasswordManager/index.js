import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import YourPassword from '../YourPassword'

import './index.css'

class PasswordManager extends Component {
  state = {
    count: 0,
    userName: '',
    Password: '',
    website: '',
    listManager: [],
    checkBox: false,
    searchBar: '',
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({Password: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {userName, Password, website} = this.state
    const updateObject = {
      id: uuidv4(),
      userName,
      Password,
      website,
    }
    this.setState(prevState => ({
      listManager: [...prevState.listManager, updateObject],
      userName: '',
      Password: '',
      website: '',
      count: prevState.count + 1,
    }))
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({checkBox: !prevState.checkBox}))
  }

  onClickDeleteEach = id => {
    const {listManager, count} = this.state
    const deleteButton = listManager.filter(eachObject => eachObject.id !== id)
    this.setState({listManager: deleteButton, count: count - 1})
  }

  renderListManger = filterObject => {
    const {checkBox} = this.state
    return (
      <ul className="lists-objects">
        {filterObject.map(eachObject => (
          <YourPassword
            EachListManager={eachObject}
            key={eachObject.id}
            checkBoxed={checkBox}
            onClickDeleteEach={this.onClickDeleteEach}
          />
        ))}
      </ul>
    )
  }

  onChangeSearch = event => {
    this.setState({searchBar: event.target.value})
  }

  render() {
    const {
      website,
      userName,
      Password,
      count,
      listManager,
      searchBar,
    } = this.state
    const filterObject = listManager.filter(eachObject =>
      eachObject.website.toLowerCase().includes(searchBar),
    )

    return (
      <div className="bg-container">
        <div className="manager-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="image-app"
          />
          <div className="card-image-input-container">
            <form
              className="card-form-input-container"
              onSubmit={this.onSubmitForm}
            >
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
                  onChange={this.onChangeWebsite}
                  value={website}
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
                  onChange={this.onChangeUserName}
                  value={userName}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="logo"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-Element"
                  onChange={this.onChangePassword}
                  value={Password}
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
              <div className="count-container">
                <h1 className="your-count-name">Your Passwords</h1>
                <p className="count">{count}</p>
              </div>
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
                  onChange={this.onChangeSearch}
                />
              </div>
            </div>
            <hr className="horizontal-line" />
            <li
              className="list-show-password"
              onClick={this.onClickShowPassword}
            >
              <input type="checkbox" id="password" className="check-box" />
              <label htmlFor="password" className="show-password">
                Show passwords
              </label>
            </li>
            {filterObject.length <= 0 ? (
              <div className="container-image-no-password">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords"
                />
                <p className="no-passwords-heading">No Passwords</p>
              </div>
            ) : (
              <>{this.renderListManger(filterObject)}</>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
