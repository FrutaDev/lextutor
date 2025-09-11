import { Link, Stack } from "expo-router"
import { Image, Pressable, Text, View } from "react-native"
import { ScrollView } from "react-native-web"
import ConfigurationComponent from "../../components/ConfigurationComponent"

export default function Configuration () {


    return (
        <>
            <View className="flex-1 items-center bg-gray-300">
                <ConfigurationComponent label="Accesibilidad" to="accesibilidad"/>
                <ConfigurationComponent label="Cuenta"/>
                <ConfigurationComponent label="Versión" to="version"/>
                <ConfigurationComponent label="Cerrar Sesión"/>
            </View>
        </>
    )
}