import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Home from './screen/Home'
import Profile from './screen/Profile'
import Event from './screen/Event'
import EditProfile from './screen/EditProfile'

import { Provider } from './modal/context'
import { initialState } from './modal/store/StoreBase'
import reducer, { ReducerBase } from './modal/reducer'

const App = () => <Provider
    initialState={initialState}
    reducer={ReducerBase}>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Event" component={Event} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
    </NavigationContainer>
</Provider>


export default App;