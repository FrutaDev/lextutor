import {  View, Text } from "react-native";
import { Stack } from "expo-router";
import AboutComponent from "../components/AboutComponent";
import Screen from "../components/Screen";

export default function About () {
    return (
        <Screen>
            <Stack.Screen
              options={{
                headerStyle: {backgroundColor: "#54236B"},
                headerLeft: () => {},
                headerTitle: () => (
                    <Text className="text-white font-bold text-xl">About Us</Text>
                )
              }}
        />
            <View className="bg-black p-2">
                    <AboutComponent/>
            </View>
        </Screen>
    )
}