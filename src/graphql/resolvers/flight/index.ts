import { FlightsModel } from 'app/models/flights.model'

const flights = async () => {
    return await FlightsModel.find()
}

export default {
    flights,
}
