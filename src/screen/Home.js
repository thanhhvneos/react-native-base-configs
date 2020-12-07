import React from 'react'
import { Button, Text, View } from 'react-native'
import { useStateValue } from '../modal/context'
import { types } from '../modal/store/StoreBase'

export default ({ }) => {
    const [state, dispatch] = useStateValue()

    return <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Text style={{ fontSize: 20 }}>Theme: {JSON.stringify(state)}</Text>
        <Button title='Change Theme'
            onPress={() => dispatch({ type: types.CHANGE_THEME })} />
    </View>
}