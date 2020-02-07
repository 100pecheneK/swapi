import React, {useEffect} from "react"
import {PlanetDetails, PlanetList} from "../sw-components"
import {withRouter} from "react-router-dom"
import scrollToTop from "../../services/scrollToTop"

const PlanetsPage = ({history, match}) => {
    const {id} = match.params
    useEffect(() => {
        scrollToTop()
    }, [id])
    return (
        <React.Fragment>
            <PlanetDetails itemId={id}/>
            <PlanetList
                onItemSelected={(id) => history.push(id)}/>
        </React.Fragment>
    )
}
export default withRouter(PlanetsPage)