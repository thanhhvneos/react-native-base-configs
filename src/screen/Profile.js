import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'

export default ({ navigation }) => {
    const pressed = () => {
    }

    return <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Text>Profile</Text>
        <Button title='Go to EditProfile'
            onPress={pressed} />

    </View>
}