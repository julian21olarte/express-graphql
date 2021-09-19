import personResolvers from './person'
import flightResolvers from './flight'

export default {
    ...personResolvers,
    ...flightResolvers,
}
