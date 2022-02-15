import { utilService } from "./util-service"
function getRandomDates() {
    let date = new Date()
    let currYear = date.getFullYear()
    const firstDate = date(utilService.getRandomInt(2017, currYear - 1), utilService.getRandomInt(0, 5), 1)
    const secondDate = date(firstDate.getFullYear(), firstDate.getMonth() + 6, 1)
    return [firstDate.toISOString(), secondDate.toISOString()]
}

export const dateService = {
    getRandomDates
}