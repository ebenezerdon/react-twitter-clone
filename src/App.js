import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, LeftPane, RightPane } from './components'
import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
       <div className="app">
         <LeftPane />
         <Switch>
           <Route path="/" component={Home} exact />
           <Route path="/explore">Explore</Route>
           <Route path="/notifications">Notifications</Route>
           <Route path="/messages">Messages</Route>
           <Route path="/bookmarks">Bookmarks</Route>
           <Route path="/lists">Lists</Route>
           <Route path="/profile">Profile</Route>
         </Switch>
         <RightPane />
       </div>
    </BrowserRouter>
  )
}

export default App
