import {  View, Text } from "react-native";
import { Stack } from "expo-router";
import AboutComponent from "../components/AboutComponent";
import Screen from "../components/Screen";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { styled } from "nativewind";
import { CircleIconInfo } from "../assets/Icons";

export default function About () {
    const StyledPressable = styled(Pressable)
    return (
        <Screen backgroundColor="bg-gray-300">
            <Stack.Screen
              options={{
                headerStyle: {backgroundColor: "#4C0D1E"},
                headerLeft: () => {},
                headerTitle: () => (
                    <Text className="text-white font-bold text-xl">Versión</Text>
                ),
                headerRight: () => (
                        <Link asChild className=" pl-2 text-blue-400" href="/about">
                            <StyledPressable className={`active:opacity-50 -ml-4`}>
                                <CircleIconInfo/>
                            </StyledPressable>
                        </Link>
                ),
                title: "Versión",
              }}
        />
            <View className="flex-1 bg-gray-300 pt-4 pl-2">
                    <Text className="text-black">Versión 0.3.2</Text>
                    <Text className="text-black">Desarrollado por Erick Gomez</Text>
                    <Text className="text-black">Contacto: erickgromero.19@gmail.com</Text>
            </View>
        </Screen>
    )
}