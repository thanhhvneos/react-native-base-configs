
const initialState = {
    theme: 'Light',
    language: 'English'
}

const types = {
    CHANGE_THEME: 'CHANGE_THEME',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
}


const changeTheme = (oldState) => {
    let { theme } = oldState

    if (theme == 'Light') theme = 'Dark'
    else theme = 'Light'

    return { ...oldState, theme }
}

const changeLanguage = (oldState) => {
    let { language } = oldState

    if (language == 'English') language = 'Vietnamese'
    else language = 'English'

    return { ...oldState, language }
}

export {
    initialState,
    types,
    changeTheme,
    changeLanguage
}