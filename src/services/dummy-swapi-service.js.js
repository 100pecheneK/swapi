export default class DummySwapiService {
    _testImg = 'https://starwars-visualguide.com/assets/img/planets/13.jpg'
    _people = [
        {
            id: 1,
            name: 'Bilbo',
            gender: 'male',
            birthYear: 'long',
            eyeColor: 'dark brown'
        }
    ]

    _planets = [
        {
            id: 1,
            name: 'Earth',
            population: '7000000',
            rotationPeriod: '24 h',
            diameter: '12 km'
        }
    ]
    _starships = [
        {
            id: 1,
            name: 'USS',
            model: "DS-1 Orbital Battle Station",
            manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems"
        }
    ]
    getAllPeople = async () => {
        return this._people
    };
    getPerson = async (id) => {
        return this._people[0]
    };
    getPersonImage = ({
        id
    }) => {
        return `${this._testImg}`
    };
    // Planets
    getALlPlanets = async () => {
        return this._planets
    };
    getPlanet = async (id) => {
        return this._planets[0]
    };
    getPlanetImage = ({
        id
    }) => {
        return `${this._testImg}`
    };
    // Starships
    getALlStarships = async () => {
        return this._starships
    };
    getStarship = async (id) => {
        return this._starships[0]
    };
    getStarshipImage = ({
        id
    }) => {
        return `${this._testImg}`
    };
}