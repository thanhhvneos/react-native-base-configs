
const initialStateUser = {
    name: 'Thanh',
    age: 29
}

const typesUser = {
    CHANGE_NAME: 'CHANGE_NAME'
}

const changeName = (oldState, newName) => {
    return { ...oldState, name: newName }
}

export {
    initialStateUser,
    typesUser,
    changeName
}