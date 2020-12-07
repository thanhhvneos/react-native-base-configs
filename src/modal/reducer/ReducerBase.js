import { changeLanguage, changeTheme, types } from '../store/StoreBase'

export default (state, action) => {
    switch (action.type) {

        case types.CHANGE_LANGUAGE:
            return changeLanguage(state)

        case types.CHANGE_THEME:
            return changeTheme(state)

        default: return state
    }
}