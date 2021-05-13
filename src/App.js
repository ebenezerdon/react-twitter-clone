import { Home, LeftPane, RightPane } from './components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
       <div className="app">
         <LeftPane />
         <Switch>
           <Route path="/">
             <Home />
           </Route>
           <Route path="/profile">
             Profile here
           </Route>
           <Route path="/messages">
             Messages
           </Route>
         </Switch>
         <RightPane />
       </div>
    </BrowserRouter>
  )
}

export default App
