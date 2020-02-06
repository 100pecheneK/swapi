import React from "react"

const Header = ({onServiceChange}) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark elegant-color-dark">
            <a className="navbar-brand" href="/">SWAPI</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <button className="list-group-item list-group-item-action elegant-color">
                        People
                    </button>
                    <button className="list-group-item list-group-item-action elegant-color">
                        Planets
                    </button>
                    <button className="list-group-item list-group-item-action elegant-color">
                        Starships
                    </button>
                    <button className="list-group-item list-group-item-action elegant-color-dark"
                            onClick={onServiceChange}>
                        Change Service
                    </button>
                </ul>
            </div>
        </nav>
    )

}
export default Header