import './index.css'

const YourPassword = props => {
  const {EachListManager, checkBoxed, onClickDeleteEach} = props
  const {userName, Password, website, id} = EachListManager
  const letterOne = website[0]
  const onClickDelete = () => {
    onClickDeleteEach(id)
  }
  return (
    <li className="list-each-identifier">
      <div className="container-letter">
        <p className="letter-one">{letterOne}</p>
      </div>
      <div>
        <p className="website-each-manager">{website}</p>
        <p className="username-each-manager">{userName}</p>
        {checkBoxed ? (
          <p className="password-each-manager">{Password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="image-stars"
          />
        )}
      </div>
      <button
        type="button"
        className="button-image-delete"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default YourPassword
