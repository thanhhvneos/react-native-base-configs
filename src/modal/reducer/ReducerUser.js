import { changeName, typesUser } from '../store/StoreUser'

export default (state, action) => {
    const { type, payload } = action

    switch (type) {

        case typesUser.CHANGE_NAME:
            return changeName(state, payload.name)

        default: return state
    }
}