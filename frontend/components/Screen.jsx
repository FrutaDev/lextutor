import { View } from "react-native";

export default function Screen ({children, backgroundColor = "bg-black"}) {
    return (
        <View className={`flex-1 ${backgroundColor} pl-2 pr-2`}>{children}</View>
    )
}