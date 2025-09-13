import { View } from "react-native";
import React, { useEffect, useState as userState } from "react";
import AvailableCourses from "./AvailableCourses";
import Profile from "./Profile";
import Login from "./Login";
import { Stack, useNavigation } from "expo-router";


export default function Main () {

    const [isAuthenticated, setIsAuthenticated] = userState(false);
    const navigation = useNavigation();
    const authenticated = () => {
            setIsAuthenticated(!isAuthenticated);
    }

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {},
            headerRight: () => {}
        })
    }, [isAuthenticated])


    return (
        <>
                {!isAuthenticated && (
                    <>
                        <Login
                            onPress={authenticated}
                        />
                    </>
                )}
                {isAuthenticated && (
                    <>
                        <Stack.Screen
                        options={{
                            headerStyle: {backgroundColor: "#4C0D1E"},
                            headerLeft: () => {},
                            headerRight: () => {}
                        }}
                        />
                        <View>
                            <Profile/>
                            <AvailableCourses/>
                        </View>
                    </>
                )
            }
        </>
    )
}