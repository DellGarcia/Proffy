import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import Study from '../pages/Study';

const { Navigator, Screen} = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={Landing}/>
                <Screen name="Study" component={Study}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;