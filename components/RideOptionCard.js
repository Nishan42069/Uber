import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, Touchable } from 'react-native';
import React, { useState} from 'react';
import { SafeAreaView } from '@react-navigation/native';
import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from 'react-native-web';
import { useSelector } from 'react-redux';
import { selecctTravelTimeInformation } from '../slices/navSlice';

const data = [
    {
        id: "Uber-1",
        title: "Uber",
        multiplier: 1,
        image: "https://links.papreact.com/3pn",
    },
    {
        id: "Uber-2",
        title: "UUberX",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "Uber-3",
        title: "Luxury",
        multiplier: 1.75,
        image: "https://linnks.papareact.com/7pf",

    },
];


const SURGE_CHARGE_RATE  = 1.5;

const RideOptionCard = () => {
    const navigation =useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selecctTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
        <View >
            <TouchableOpacity onPress={() => navigation.navigate("NavigateCard") } style={tw`absolute top-3 left-5 p-3 rounded-full`}>
                <Icon name="chevron-left" type="fontawesome" />
            </TouchableOpacity>
        <Text stylle={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
        </View>

        <FlatList date={data} keyExtractor={(item) => item.id}
        renderItem={({ item:{ id, title, multiplier, image }, item }) => (

            <TouchableOpacity 
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"}`}>
                <Image 
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                }}
                source={{ uri: image }}
                
                />
                <View style={tw`-ml-6`}>
                    <Text style={tw`text-xl font-semibold`}>{Title}</Text>
                    <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
                </View>
                <Text style={tw`text-xl`}>

                {new Intl.NumberFormat('en-gb', {
                    style: 'currency',
                    curremcy: 'GBP'
                }).format(
                    (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE
                    * mulitplier) / 
                        100
                    )}


                </Text>
            </TouchableOpacity>
        )}
        


        />

        <View style={tw`mt-auto border-t border-gray-200`}>
            <TouchableOpacity disable={!selected} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
                <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}
                </Text>
            </TouchableOpacity>
        </View>
      
    </SafeAreaView>
  )
}

export default RideOptionCard

const styles = StyleSheet.create({})