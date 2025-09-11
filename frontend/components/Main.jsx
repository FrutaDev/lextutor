import { View, Text, Image, useColorScheme } from "react-native";
import AvailableCourses from "./AvailableCourses";
import Profile from "./Profile";

export default function Main () {
    return (
            <View className="flex-1 bg-gray-300">
                <Profile/>
                <AvailableCourses/>
            </View>
    )
}