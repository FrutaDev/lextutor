import { Text, View } from "react-native"
import Card from "../components/Card"
import { PlusIcon } from "../assets/Icons"
import { ScrollView } from "react-native"
import { Stack } from "expo-router"

export default function Cuenta () {
    return (
        <>
        <Stack.Screen
            options={{
                headerRight: () => {},
                headerLeft: () => {},
            }}
        />
        <ScrollView className="flex-1 p-4 bg-gray-300">
            <View>
                <Card
                    option="Cambiar Correo"
                    description="Cambia el correo asociado a tu cuenta"
                    icon={<PlusIcon/>}
                    ></Card>
            </View>
            <View>
                <Card
                    option="Cambiar Contraseña"
                    description="Cambia la contraseña de tu cuenta"
                    icon={<PlusIcon/>}
                    ></Card>
                <Card
                    option="Rol"
                    description="Cambia el rol de tu cuenta (Estudiante, Profesor)"
                    icon={<PlusIcon/>}
                    ></Card>
            </View>
                    </ScrollView>
        </>
    )
}