import { View, Text, Image } from "react-native"
import profile from '../assets/user.png'
// import {newUsers} from '../assets/newUsers.js'

export default function Profile () {

    return (
        <View className="flex items-center mb-2 bg-[#4C0D1E]">
            <Image className="mt-5"
            source={profile}
            style={{width: 100, height: 100}}
            />
            <Text className="text-white font-bold pt-3 pb-3 border-b-2 border-black-500 text-xl">
                Erick Romero
            </Text>
        </View>
    )
}