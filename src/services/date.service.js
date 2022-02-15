import { utilsService } from "./utils-service"
function getRandomDates() {
    let date = new Date()
    let currYear = date.getFullYear()
    const firstDate = new Date(utilsService.getRandomInt(2017, currYear - 1), utilsService.getRandomInt(0, 5), 1)
    const secondDate = new Date(firstDate.getFullYear(), firstDate.getMonth() + 12, 1)
    return [firstDate.toISOString(), secondDate.toISOString()]

}

export const dateService = {
    getRandomDates
}