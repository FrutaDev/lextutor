import { Stack } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import Help from "../components/Help";


export default function Ayuda () {
    return (
        <>
        <Stack.Screen
            options={{
                headerStyle: {backgroundColor: "#4C0D1E"},
                headerLeft: () => {},
                headerTitle: () => (
                    <Text className="text-white font-bold text-xl">Ayuda</Text>
                ),
                headerRight: () => {},
                title: "Versión",
                }}
            />
            <ScrollView className="flex-1 w-48 mr-6 ml-24">
                    <Help className="flex items-center"/>
            </ScrollView>
        </>
    )
}