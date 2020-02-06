import ItemDetail, {Record} from "../item-detail"
import React from "react"
import {withSwapiService} from "../hoc-helper"

const PersonDetails = (props) => {
    return (
        <ItemDetail {...props}>
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye color"/>
        </ItemDetail>
    )
}
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}
export default withSwapiService(mapMethodsToProps)(PersonDetails)