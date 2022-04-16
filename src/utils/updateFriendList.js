const acceptPersonUpdate = (rootData, id) => {
    return rootData.map((person) => {
        if (person.id === id) {
            return {
                ...person,
                status: "ACCEPTED"
            }
        }
        return person
    })
}
const deletePerson = (rootData, id) => {
    return rootData.filter((person) => person.id !== id)
}
const updateList = {
    acceptPersonUpdate,
    deletePerson
}
export default updateList
