import {View, Text, Button} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="second" component={SecondScreen} />
    </Stack.Navigator>
  );
};
const HomeScreen = ()=>{
    const navigation = useNavigation()
    return(
        <View>
            <Text>HomeScreen</Text>
            <Button  title='op' onPress={()=>navigation.navigate('second')}/>
        </View>
    )
}
const SecondScreen = ()=>{
    return(
        <View>
            <Text>SecondScreen</Text>
        </View>
    )
}
export default Main;
