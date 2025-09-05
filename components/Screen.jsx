import { View } from "react-native";

export default function Screen ({children}) {
    return (
        <View className="flex-1 bg-black pl-2 pr-2">{children}</View>
    )
}