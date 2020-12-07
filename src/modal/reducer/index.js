
import ReducerBase from './ReducerBase'
import ReducerUser from './ReducerUser'

export {
    ReducerBase,
    ReducerUser
}

export default ({
    base, user
}, action) => {
    return {
        base: ReducerBase(base, action),
        user: ReducerUser(user, action)
    }
}