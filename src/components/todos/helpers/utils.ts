export function pad(num: number, places: number) {
    return String(num).padStart(places, '0')
}

export const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function dateWithOffset(date: Date) {
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset())
    return date
}