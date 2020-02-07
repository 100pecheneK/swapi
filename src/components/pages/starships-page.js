import React, {Component} from "react"
import {StarshipDetails, StarshipList} from "../sw-components"
import scrollToTop from "../../services/scrollToTop"

export default class StarshipsPage extends Component {
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
                <StarshipDetails itemId={selectedItem}/>
                <StarshipList
                    onItemSelected={this.onItemSelected}/>
            </React.Fragment>
        )
    }

}