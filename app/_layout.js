import { Text, View, Image, Pressable } from "react-native"
import { Link, Stack } from "expo-router"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Logo from "../components/Logo"
import { styled } from "nativewind"
import { CircleIconInfo } from "../assets/Icons"
import Profile from "../components/Profile"


export default function Layout () {
    const insets = useSafeAreaInsets()
    const StyledPressable = styled(Pressable)
    return (
            <View className="flex-1">
                <Stack 
                screenOptions={{
                    headerStyle: {backgroundColor: "#45254D"},
                    headerTintColor: "white",
                    headerTitle: "",
                    headerLeft: () => <Logo/>,
                    headerRight: () => (
                        <Link asChild className=" pl-2 text-blue-400" href="/about">
                            <StyledPressable className={`active:opacity-50`}>
                                <CircleIconInfo/>
                            </StyledPressable>
                        </Link>
                    )
                }}/>
            </View>
    )
}
