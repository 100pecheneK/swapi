import React, {useEffect} from "react"
import {PersonDetails, PersonList} from "../sw-components"
import {withRouter} from "react-router-dom"
import scrollToTop from "../../services/scrollToTop"

const PeoplePage = ({history, match}) => {
    const {id} = match.params
    const useScroll = (value) => {
        useEffect(() => {
            scrollToTop()
        }, [value])
    }
    useScroll(id)

    return (
        <React.Fragment>
            <PersonDetails itemId={id}/>
            <PersonList
                onItemSelected={(id) => history.push(id)}/>
        </React.Fragment>
    )
}
export default withRouter(PeoplePage)