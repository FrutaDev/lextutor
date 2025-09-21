import { Link, Stack } from "expo-router"
import { Image, Pressable, Text, View } from "react-native"
import { ScrollView } from "react-native"
import ConfigurationComponent from "../../components/ConfigurationComponent"
import AvailableAdvisors from "../../components/AvailableAdvisors"

export default function Configuration () {


    return (
        <>
                <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: "#4C0D1E"},
                    headerLeft: () => {},
                    headerTitle: () => (
                        <Text className="text-white font-bold text-xl">Configuración</Text>
                        )
                    }}
                    />
                <View className="flex items-center bg-gray-300">
                    <AvailableAdvisors/>
                </View>
        </>
    )
}