import { Stack } from "expo-router";
import { View, Text } from "react-native";


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
            <View className="flex-1 justify-center items-center">
                <Text>Ayuda</Text>
            </View>
        </>
    )
}