import { FlatList, Pressable, ScrollView, Text, View, Image, ActivityIndicator, useColorScheme } from "react-native"
import { StatusBar } from "expo-status-bar"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Link } from "expo-router"
import { styled } from "nativewind"
import { useEffect, useState } from "react"
import { fetchData, fetchOne} from '../axios/requests.js'
import DropDown from "./DropDown.jsx"



export default function AvailableCourses () {
    


    const insets = useSafeAreaInsets()
    const StyledPressable = styled(Pressable)

    const [courses, setCourses] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchCourses = fetchData('courses')
        .then(data => {
            setCourses(data)
            setLoading(false)
        })
        .catch(err => {
            setError(err)
            setLoading(false)
        })
        .finally(() => setLoading(false))
    },[DropDown.value])


    return (
                <View >
                        {loading && <ActivityIndicator className="flex justify-center items-center" size="large" color="white" />}
                    <StatusBar style="light"/>
                        <DropDown 
                        styles={"flex items-end pr-3 mb-2]"}
                        />
                        <FlatList className=""
                                data={courses}
                                keyExtractor={(course) => course._id}
                                contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10, paddingBottom: 170 }}
                                renderItem={({ item: course }) => (
                            <Link
                            asChild href={`/${course._id}`}>
                            <StyledPressable className="flex mb-3 active:opacity-50 bg-gray-100 rounded-xl shadow-xl">
                                    <View className="flex justify-center rounded-xl border-black/50 pl-3 pr-2 pt-4 pb-3">
                                        <View className="flex-row justify-between">
                                            <Text className="text-black font-bold">
                                            {course.name}
                                        </Text>
                                            <Text className="text-black/60">{Array.isArray(course.days) ? course.days.join(' - ') : course.days}</Text>
                                        </View>
                                        <View className="flex-row justify-between pt-1">
                                            <Text className="text-black/50">
                                                {Array.isArray(course.advisors) ? course.advisors.join(' - ') : course.advisors}
                                            </Text>
                                            <Text className="text-black/30">{course.time}</Text>
                                        </View>
                                    </View>
                                </StyledPressable>
                            </Link>
                            )}
                        />
                </View>
    )
}