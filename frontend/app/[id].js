import { Pressable, Text, View, ActivityIndicator, useWindowDimensions, ScrollView, Button } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Screen from "../components/Screen";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { fetchOne } from "../axios/requests.js";
import Calendar from "../components/Calendar.jsx";

export default function Detail() {
    const { id } = useLocalSearchParams();

    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    }

    useEffect(() => {
        fetchOne('course', id)
            .then(data => {
                setCourse(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [id]);

    const { height } = useWindowDimensions();

    if (loading) {
        return (
            <>
                <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#4C0D1E" },
                    headerLeft: () => {},
                    headerTitle: () => (
                        <Text className="text-white font-bold text-xl">Asesoria</Text>
                    ),
                    headerRight: () => {}
                }}
            />
                <Screen backgroundColor="bg-white">
                    <ActivityIndicator size="large" color="#ffffffff" />
                </Screen>
            </>
        );
    }

    if (error || !course) {
        return (
            <>
                        <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#4C0D1E" },
                    headerLeft: () => {},
                    headerTitle: () => (
                        <Text className="text-white font-bold text-xl">Asesoria</Text>
                    ),
                    headerRight: () => {}
                }}
            />
                <Screen backgroundColor="bg-white">
                    <Text className="flex p-5 text-red">Error cargando el curso.</Text>
                </Screen>
            </>
        );
    }

    

    return (
        <View className="flex-1 bg-white">
            <Stack.Screen
                options={{
                    title: course.subject,
                    headerStyle: { backgroundColor: "#4C0D1E" },
                    headerLeft: () => {},
                    headerTitle: () => (
                        <Text className="text-white font-bold text-xl">Asesoria</Text>
                    ),
                    headerRight: () => {}
                }}
            />
                <Screen backgroundColor="bg-gray-300">
                        {showCalendar && (
                            <ScrollView className="flex-1 bg-gray-300 w-full h-half">
                                <Calendar/>
                                <View className="flex-arrow justify-between items-center p-4">
                                    <Button title="Agendar Asesoria"/>
                                    <Button title="Cerrar Calendario" onPress={() => toggleCalendar()} />
                                </View>
                            </ScrollView>
                        )}
                        {!showCalendar && (
                    <ScrollView>
                        <View className=" bg-gray-100 rounded-xl border-black/50 shadow-xl flex px-4" style={{ marginTop: height * 0.18 }}>
                            <View className="pt-6 pb-10">
                                    <View className="flex items-center mb-6">
                                        <Text className="text-black font-bold text-xl">{course.name}</Text>
                                        <Text className="text-black opacity-60">{course.category}</Text>
                                    </View>
                                <View>
                                    <Text className="text-black font-bold pt-5">Docente(s): </Text>
                                    <Text className="text-black font-bold pb-3">{Array.isArray(course.advisors) ? course.advisors.join(' - ') : course.advisors}</Text>
                                </View>
                                <View className="flex-row justify-between mb-5">
                                    <Text className="text-black opacity-70">{Array.isArray(course.days) ? course.days.join(' - ') : course.days}</Text>
                                    <Text className="text-black opacity-70">Horario: {course.time}</Text>
                                </View>
                                    <View className="flex items-center pt-5">
                                        <Pressable className="flex justify-center items-center bg-[#681229] rounded-xl rounded-full active:opacity-80"
                                         onPress={() => toggleCalendar()}>
                                            <Text className="text-white pl-10 pr-10 pt-4 pb-4 font-bold">Agendar Asesoria</Text>
                                        </Pressable>
                                    </View>
                            </View>
                        </View>
                    </ScrollView>
                        )}
                </Screen>
        </View>
    );
}