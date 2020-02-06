import React, {Component} from "react"
import {PlanetDetails, PlanetList} from "../sw-components"
import scrollToTop from "../../services/scrollToTop"

export default class PlanetPage extends Component {
    state = {
        selectedItem: 1
    }
    onItemSelected = (selectedItem) => {
        scrollToTop()
        this.setState({selectedItem})
    }

    render() {
        const {selectedItem} = this.state
        return (
            <React.Fragment>
                <PlanetDetails itemId={selectedItem}/>
                    <PlanetList
                        onItemSelected={this.onItemSelected}/>
            </React.Fragment>
        )
    }

}