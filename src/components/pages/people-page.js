import React, {Component} from "react"
import {PersonDetails, PersonList} from "../sw-components"
import scrollToTop from "../../services/scrollToTop"

export default class PeoplePage extends Component {
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
                <PersonDetails itemId={selectedItem}/>
                <PersonList
                    onItemSelected={this.onItemSelected}/>
            </React.Fragment>
        )
    }

}