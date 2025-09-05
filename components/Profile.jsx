import { View, Text, Image } from "react-native"
import profile from '../assets/user.png'
// import {newUsers} from '../assets/newUsers.js'

export default function Profile () {

    return (
        <View className="flex items-center mb-2">
            <Image className="mt-5"
            source={profile}
            style={{width: 100, height: 100}}
            />
            <Text className="text-white font-bold pt-5 text-xl">
                Erick Romero
            </Text>
        </View>
    )
}