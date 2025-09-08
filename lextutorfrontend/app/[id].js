import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import courses from "../assets/courses";
import Screen from "../components/Screen";
import {Stack} from "expo-router";

export default function Detail () {
    const { id } = useLocalSearchParams()
    const course = courses[id]

    return (
        <>
            <Stack.Screen
            options={{
                title: course.subject,
                headerStyle: {backgroundColor: "#54236B"},
                headerLeft: () => {},
                headerTitle: () => (
                    <Text className="text-white font-bold text-xl">Asesoria</Text>
                )
            }}
            />
            <Screen>
                <View className="flex items-center justify-center pt-5 g-black h-full">
                            <Text className="text-white text-lg font-bold">
                               Materia: {course.subject}
                            </Text>
                            <Text className="r text-white text-lg font-bold">
                                Asesor: {course.teacher}
                            </Text>
                        <Pressable className="flex items-center mt-5 w-48 bg-purple-700/80 active:opacity-50 border rounded-xl border-white-100">
                            <Text className="text-white p-1 text-lg">
                                Agendar Asesoria
                            </Text>
                        </Pressable>
                </View>
            </Screen>
        </>
    )
}
    // {
    //     id: 2,
    //     subject: "Contabilidad De Costos",
    //     teacher: "Jaime Rodriguez",
    //     fecha: "05-Sep-2025",
    //     hora: "16:00-17:00",
    //     lugar: "FCA UACh"
    // },