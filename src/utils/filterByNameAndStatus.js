export const filterByNameAndStatus = (searchValue, status) => {
    return (dataEl) => {
        const fullName = `${dataEl.firstName}${dataEl.lastName}`.toLowerCase()
        const searchValueTest = fullName.includes(
            searchValue.toLowerCase().replace(" ", "")
        )
        const statusTest =
            status !== "all" ? dataEl.status.toLowerCase() === status : true
        const matchTests = searchValueTest && statusTest

        return matchTests
    }
}

export default filterByNameAndStatus
