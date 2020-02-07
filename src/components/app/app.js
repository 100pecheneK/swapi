import React, {Component} from "react"

import Header from "../header"
import RandomPlanet from "../random-planet"
import SwapiService from "../../services/swapi-service"
import DummySwapiService from "../../services/dummy-swapi-service.js"
import ErrorBoundary from "../error-boundary"

import {SwapiServiceProvider} from "../swapi-service-context"
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage
} from "../pages"
import {BrowserRouter as Router, Route} from "react-router-dom"

export default class App extends Component {

    state = {
        selectedItem: Math.floor(Math.random() * 10) + 1,
        swapiService: new SwapiService(),
    }
    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService
            return {
                swapiService: new Service()
            }
        })
    }

    render() {
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <Header onServiceChange={this.onServiceChange}/>

                        <Route path="/" render={() => <h1>Hello!</h1>} exact/>

                        <Route path="/people/:id?" component={PeoplePage}/>
                        <Route path="/planets/:id?" component={PlanetsPage}/>
                        <Route path="/starships/:id?" component={StarshipsPage}/>


                        <RandomPlanet updateInterval={10000}/>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}
