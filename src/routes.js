import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Initial from './pages/Initial';

export default function Routes(){
    return(
        <NavigationContainer>

            <Stack.Navigator 
              // screenOptions={{ headerShown: false }}
              >
                <Stack.Screen name="Initial" component={Initial} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}
