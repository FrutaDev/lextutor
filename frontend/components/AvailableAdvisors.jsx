import { FlatList, Pressable, Text, View, Image, ActivityIndicator, useColorScheme } from "react-native"
import { StatusBar } from "expo-status-bar"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Link } from "expo-router"
import { styled } from "nativewind"
import { useEffect, useState } from "react"
import { fetchData, fetchOne} from '../axios/requests.js'
import DropDown from "./DropDown.jsx"



export default function AvailableAdvisors () {
    


    const insets = useSafeAreaInsets()
    const StyledPressable = styled(Pressable)

    const [advisors, setAdvisors] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchAdvisors = fetchData('users')
        .then(data => {
            setAdvisors(data)
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
                    <StatusBar style="light"/>
                        {/* <DropDown 
                        styles={"flex items-end pr-3 mb-2]"}
                        /> */}
                        {loading && <ActivityIndicator className="flex justify-center items-center" size="large" color="white" />}
                        <FlatList className="flex"
                                data={advisors}
                                keyExtractor={(advisor) => advisor._id}
                                contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10, paddingBottom: 170 }}
                                renderItem={({ item: advisor }) => (
                            <Link
                            asChild href={``}>
                            <StyledPressable className="flex-1 mb-3 active:opacity-50 bg-gray-100 rounded-xl shadow-xl">
                                    <View className="rounded-xl border-black/50 pl-3 pr-2 pt-4 pb-3">
                                        <View className="flex-row pt-4 pb-4 w-full justify-between">
                                            <Text className="text-black font-bold">
                                            {advisor.name}
                                        </Text>
                                        <Text>
                                            ⭐⭐⭐⭐⭐
                                        </Text>
                                        </View>
                                    </View>
                                </StyledPressable>
                            </Link>
                            )}
                        />
                </View>
    )
}