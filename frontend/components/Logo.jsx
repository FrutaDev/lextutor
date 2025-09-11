import { View, Image } from "react-native";

export default function Logo () {
    const logo = require('../assets/logo.png')
    return (
        <View className="flex-1 justify-center">
            <Image className="w-20 h-20" 
            source={logo}/>
        </View>
    )
}