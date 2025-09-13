import { View, Text, TextInput, Pressable } from "react-native";
import TextInputLayout from "./TextInputLayout";

export default function Login({onPress}) {

    return (
        <View className="flex-1 items-center justify-center  bg-gray-300 p-4">
            <Text>Login</Text>
            <TextInputLayout placeholder={"username"}/>
            <TextInputLayout placeholder={"password"}/>
            <Pressable onPress={onPress} 
            className="bg-[#4C0D1E] p-2 pl-5 pr-5 rounded-xl mt-4 active:bg-[#420a19]">
                <Text className="text-white font-bold">Login</Text>
            </Pressable>
        </View>
    )
}