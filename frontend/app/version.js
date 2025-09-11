import {  View, Text } from "react-native";
import { Stack } from "expo-router";
import AboutComponent from "../components/AboutComponent";
import Screen from "../components/Screen";

export default function About () {
    return (
        <Screen backgroundColor="bg-gray-300">
            <Stack.Screen
              options={{
                headerStyle: {backgroundColor: "#4C0D1E"},
                headerLeft: () => {},
                headerTitle: () => (
                    <Text className="text-white font-bold text-xl">Version</Text>
                )
              }}
        />
            <View className="flex-1 bg-gray-300 p-4">
                    <Text className="text-black">Version 0.3.2</Text>
                    <Text className="text-black">Developed by Erick Romero</Text>
                    <Text className="text-black">Contact: erickgromero.19@gmail.com</Text>
            </View>
        </Screen>
    )
}