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
                    <Text className="text-white font-bold text-xl">Versión</Text>
                ),
                title: "Versión",
              }}
        />
            <View className="flex-1 bg-gray-300 pt-4 pl-2">
                    <Text className="text-black">Versión 0.3.2</Text>
                    <Text className="text-black">Desarrollado por Erick Gomez</Text>
                    <Text className="text-black">Contacto: erickgromero.19@gmail.com</Text>
            </View>
        </Screen>
    )
}