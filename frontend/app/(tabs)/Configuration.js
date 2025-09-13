import { Link, Stack } from "expo-router"
import { Image, Pressable, Text, View } from "react-native"
import { ScrollView } from "react-native"
import ConfigurationComponent from "../../components/ConfigurationComponent"

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
            <ScrollView className="flex-1 bg-gray-300">
                <View className="items-center bg-gray-300">
                    <ConfigurationComponent label="Accesibilidad" to="accesibilidad"/>
                    <ConfigurationComponent label="Cuenta" to="cuenta"/>
                    <ConfigurationComponent label="Versión" to="version"/>
                    <ConfigurationComponent label="Ayuda" to="ayuda"/>
                    <ConfigurationComponent label="Cerrar Sesión"
                    
                    />
                </View>
            </ScrollView>
        </>
    )
}