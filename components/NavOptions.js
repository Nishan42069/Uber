import { Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';
const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pm",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    },
]
const NavOptions = () => {

    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return (
    <FlatList 
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({ item}) => {
        <TouchableOpacity 
        onPress={()  => navigation.navigate(item.screen) }
        style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
        disabled={!origin}  


            <View style={tww`${!origin && "opacity-20"}`}>
                <Image>
                    style={{ width: 120, height: 120, resizeMode: "contain"}}
                    source={{ url: item, image }}
                </Image>
                <Text style={tq`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon 
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright" color="white" type="antdesign"
                />
                </View>
        </TouchableOpacity>
    }}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})