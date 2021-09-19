import mongoose, { Schema } from 'mongoose'
import { Flight } from 'app/interfaces/flight'

const schema = new Schema<Flight>(
    {
        code: { required: true, type: String },
        origin: { required: true, type: String },
        destination: { required: true, type: String },
        passengers: [String],
        status: String,
    },
    { timestamps: true }
)

export const FlightsModel = mongoose.model('Flights', schema)
