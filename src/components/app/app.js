import React, {Component} from "react"

import Header from "../header"
import RandomPlanet from "../random-planet"
import SwapiService from "../../services/swapi-service"
import DummySwapiService from "../../services/dummy-swapi-service.js"

import ErrorBoundary from "../error-boundary"

import {SwapiServiceProvider} from "../swapi-service-context"
import {
    PeoplePage,
    PlanetPage,
    StarshipPage
} from "../pages"

export default class App extends Component {

    state = {
        selectedItem: Math.floor(Math.random() * 10) + 1,
        swapiService: new DummySwapiService(),
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
                    <Header onServiceChange={this.onServiceChange}/>
                    <PeoplePage/>
                    <PlanetPage/>
                    <StarshipPage/>
                    <RandomPlanet updateInterval={10000}/>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}
