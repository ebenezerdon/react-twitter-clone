import { NavLink } from 'react-router-dom'
import './leftPane.scss'

const LeftPane = () => {
  return (
    <div className="left-pane">
      <header>Twitter icon</header>
      <nav>
        <NavLink to="/home" activeClassName="selected">Home</NavLink>
        <NavLink to="/explore" activeClassName="selected">Explore</NavLink>
        <NavLink to="/notifications" activeClassName="selected">Notifications</NavLink>
        <NavLink to="/messages" activeClassName="selected">Messages</NavLink>
        <NavLink to="/bookmarks" activeClassName="selected">Bookmarks</NavLink>
        <NavLink to="/lists" activeClassName="selected">Lists</NavLink>
        <NavLink to="/profile" activeClassName="selected">Profile</NavLink>
      </nav>
      <button className="more">More</button>
      <button className="tweet">Tweet</button>
    </div>
  )
}

export default LeftPane
