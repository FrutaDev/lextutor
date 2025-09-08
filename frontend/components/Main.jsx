import { View, Text, Image } from "react-native";
import AvailableCourses from "./AvailableCourses";
import user from '../assets/user.png'
import Profile from "./Profile";


export default function Main () {
    return (
        <View className="flex-1 bg-black">
            <Profile/>
            <AvailableCourses/>
        </View>
    )
}