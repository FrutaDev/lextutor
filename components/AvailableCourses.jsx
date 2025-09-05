import { FlatList, Pressable, ScrollView, Text, View, Image } from "react-native"
import courses from '../assets/courses.jsx'
import { StatusBar } from "expo-status-bar"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Link } from "expo-router"
import { CircleIconInfo } from "../assets/Icons.jsx"
import { styled } from "nativewind"



export default function AvailableCourses () {
    
    const insets = useSafeAreaInsets()
    const StyledPressable = styled(Pressable)

    return (
        
                <View >
                    <StatusBar style="light"/>
                        <FlatList className=""
                                data={courses}
                                keyExtractor={(item) => item.id}
                                contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10, paddingBottom: 170 }}
                                renderItem={({ item: course }) => (
                            <Link asChild href={`/${course.id}`}>
                            <StyledPressable className="active:opacity-50">
                                    <View className="border-2 rounded-xl border-gray-500/30 mb-2 pl-2 pr-2 pt-4 pb-4">
                                        <View className="flex-row justify-between">
                                            <Text className="text-white font-bold">
                                            {course.subject}
                                        </Text>
                                            <Text className="text-white/80">{course.fecha}</Text>
                                        </View>
                                        <View className="flex-row justify-between">
                                            <Text className="text-white/60">{course.teacher}</Text>
                                            <Text className="text-white/40">{course.hora}</Text>
                                        </View>
                                    </View>
                                </StyledPressable>
                            </Link>
                            )}
                        />
                </View>
    )
}