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
import {PersonDetails} from "../sw-components/"

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
                        <Route path="/people" component={PeoplePage} exact/>
                        <Route path="/people/:id"
                               render={({match}) => {
                                   const {id} = match.params
                                   return <PersonDetails itemId={id}/>
                               }}/>

                        <Route path="/planets" component={PlanetsPage} exact/>

                        <Route path="/starships" component={StarshipsPage}/>



                        <RandomPlanet updateInterval={10000}/>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}
