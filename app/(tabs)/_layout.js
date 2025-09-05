import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { HomeIcon, ConfigurationIcon } from "../../assets/Icons";

export default function TabsLayout() {
    return (
        <Tabs
        screenOptions={{
            title:"Back",
            headerShown: false,
            tabBarStyle: {backgroundColor: "#000"},
            tabBarActiveTintColor: "#5E386B"
        }}>
            <Tabs.Screen
            name="index"
            options={{
                title:"Home",
                tabBarIcon: ({color}) => <HomeIcon color={color}/>
            }}
            />
            <Tabs.Screen
            name="Configuration"
            options={{
                title:"Configuration",
                tabBarIcon: ({color}) => <ConfigurationIcon color={color}/>
            }}
            />

        </Tabs>
    )
}