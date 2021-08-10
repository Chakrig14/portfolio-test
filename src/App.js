import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import HomeContent from "./component/homecontent/homecontent"

const App = () => (
  <BrowserRouter>
  <Switch>
    <Route path="/" component={HomeContent}/>
  </Switch>
  </BrowserRouter>
)

export default App;
