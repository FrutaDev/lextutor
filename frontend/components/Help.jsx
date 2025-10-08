import { Pressable, View, Text, Image } from "react-native";
import logohelpp from '../assets/logohelpp.png'

export default function Help (props) {
    return (
        <View className="flex-1 justrify-center pt-10">
            <Image source={logohelpp} className="w-40 h-40 mx-auto mb-4"/>
                <Pressable className="rounded-md font-bold justify-between mt-4 p-4 bg-white active:opacity-70" onPress={() => {}} {...props}>
                    <Text>
                        Políticas y Privacidad
                    </Text>
                </Pressable>
                <Pressable className="rounded-md font-bold justify-between mt-4 p-4 bg-white active:opacity-70" onPress={() => {}} {...props}>
                    <Text>
                        Contáctanos
                    </Text>
                </Pressable> 
        </View>
    )
}