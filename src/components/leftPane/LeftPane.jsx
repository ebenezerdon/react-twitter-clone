import { NavLink } from 'react-router-dom'
import { home, explore, twitter, notifications, messages, bookmarks, lists, profile, more } from './icons'
import './leftPane.scss'

const LeftPane = () => {
  return (
    <div className="left-pane">
      <div className="container">
        <header>{twitter}</header>

        <nav>
          <NavLink to="/" activeClassName="selected">
            <span>{home} Home</span>
          </NavLink>
          <NavLink to="/explore" activeClassName="selected">
            <span>{explore} Explore</span>
          </NavLink>
          <NavLink to="/notifications" activeClassName="selected">
            <span>{notifications} Notifications</span>
          </NavLink>
          <NavLink to="/messages" activeClassName="selected">
            <span>{messages} Messages</span>
          </NavLink>
          <NavLink to="/bookmarks" activeClassName="selected">
            <span>{bookmarks} Bookmarks</span>
          </NavLink>
          <NavLink to="/lists" activeClassName="selected">
            <span>{lists} Lists</span>
          </NavLink>
          <NavLink to="/profile" activeClassName="selected">
            <span>{profile} Profile</span>
          </NavLink>
          <button className="more">
            <span>{more} More</span>
          </button>
        </nav>

        <button className="tweet">Tweet</button>

        <footer>
          <button className="account">
            <div className="photo">
              <img
                alt="Ebenezer Don"
                src="https://pbs.twimg.com/profile_images/1393551558210633732/KYsC54go_normal.jpg"
              />
            </div>
            <div>
              <div className="name">Ebenezer Don</div>
              <div className="username">@ebenezerDN</div>
            </div>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default LeftPane
