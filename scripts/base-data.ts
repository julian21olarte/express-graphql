import { PersonsModel } from 'app/models/persons.model'
import { FlightsModel } from 'app/models/flights.model'

import personsJson from './persons.json'
import flightsJson from './flights.json'

export const loadData = async () => {
    await PersonsModel.insertMany(personsJson);
    console.log(` --- Loaded ${personsJson.length} persons ---`)

    await FlightsModel.insertMany(flightsJson)
    console.log(` --- Loaded ${flightsJson.length} flights ---`)
}
