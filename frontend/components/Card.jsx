import { View, Text } from "react-native";
import { PlusIcon } from "../assets/Icons";

export default function Card( {option, description, icon, props} ) {
    return (
        <View className="p-4 bg-white rounded-lg shadow-md m-2" {...props}>
            <View className="flex-row justify-between mb-2">
                <Text className="text-lg font-bold mb-2">{option}</Text>
                {icon ? icon : <PlusIcon/>}
            </View>
                <Text className="text-gray-700">{description}</Text>
        </View>
    );
}   