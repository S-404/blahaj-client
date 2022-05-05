export const isValidEmail = (email: string) => {
    return !!email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}

export const isValidString = (text: string) => {
    return !!text.match(
        /^[a-zA-Zа-яА-Я0-9\s_.-]*$/
    )
}

export const isValidPhone = (text: string) => {
    return !!text.match(
        /^[+\-]?[0-9]{0,3}?[-\s.]?[(]?[0-9]{1,3}[)]?[-\s.]?[-\s./0-9]*(x|ext\.?)?[-\s./0-9]{0,10}$/
    )
}

export const isValidName = (text: string) => {
    return !!text.match(
        /^[a-zA-Z0-9_-]*$/
    )
}

export const isValidPassword = (text: string) => {
    return !!text.match(
        /^(?=.*\d)[a-zA-Z0-9]{4,}$/
    )
}