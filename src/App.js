import './App.css'
import Home from './components/Home/Home'
import Table from './components/Table/Table'
import Add from './components/Add/Add'
import Bed from './components/Bed/Bed'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/item/add">
                        <Add />
                    </Route>

                    <Route path="/farm/detect">
                        <Bed/>
                    </Route>

                    <Route path="/:type">
                        <Table />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
