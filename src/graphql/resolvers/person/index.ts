import { Person, PersonInput } from 'app/interfaces/person'
import { PersonsModel } from 'app/models/persons.model'

const persons = async () => await PersonsModel.find()

const getPersonByName = async ({ name }: Person) =>
    await PersonsModel.findOne({ name })

const getPerson = async ({ name, gender, email }: Person) =>
    await PersonsModel.find({ $or: [{ name }, { gender }, { email }] })

const createPerson = async ({ person }: PersonInput) =>
    await PersonsModel.create(person)

const updatePersonByName = async ({ person }: PersonInput) => {
    return await PersonsModel.findOneAndUpdate({ name: person.name }, person, {
        new: true,
    })
}

export default {
    persons,
    getPersonByName,
    getPerson,
    createPerson,
    updatePersonByName,
}
