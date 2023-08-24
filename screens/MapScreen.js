import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import Map from "../components/Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NaviagteCard"
import RideOptionCard from "../components/RideOptionCardCard"
import { TouchableOpacity } from 'react-native-web';

const MapScreen = () => {

    const navigation = useNavigation();
    const Stack = createStackNavigator();
  return (
    <View>
      <TouchableOpacity 
      onPress={() => navigation.navigate("HomeScreen")  }
      style={tw`bg-gray100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
        <Icon name="menu" />
      </TouchableOpacity>

      <View style={tw`h-1/2`}>
        <Map />


      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>

            <Stack.Screen
                name="NavigateCard"
                component={NavigateCard}
                option={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="RideOptionCard"
                component={RideOptionCard}
                option={{
                    headerShown: false,
                }}

            />
        </Stack.Navigator>


      </View>

    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})