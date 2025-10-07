import { View, Text, TextInput, Pressable } from "react-native";
import TextInputLayout from "./TextInputLayout";
import { useAuth } from "../app/context/AuthContext";

export default function Login() {
    const {onLogin} = useAuth()
    return (
        <View className="flex-1 items-center justify-center  bg-gray-300 p-4">
            <Text>Login</Text>
            <TextInputLayout placeholder={"email"}/>
            <TextInputLayout placeholder={"password"}/>
            <Pressable onPress={onLogin} 
            className="bg-[#4C0D1E] p-2 pl-5 pr-5 rounded-xl mt-4 active:bg-[#420a19]">
                <Text className="text-white font-bold">Login</Text>
            </Pressable>
        </View>
    )
}