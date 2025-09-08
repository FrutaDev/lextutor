import { View, Image } from "react-native";

export default function Logo () {
    const logo = require('../assets/logo.png')
    return (
        <View>
            <Image className="w-14 h-12" 
            source={logo}/>
        </View>
    )
}