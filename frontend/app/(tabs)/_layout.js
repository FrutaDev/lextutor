import { Tabs } from "expo-router";
import { HomeIcon, ConfigurationIcon, advisorIcon, AdvisorIcon } from "../../assets/Icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


const AppTabs = () => {
    return (
        <Tab.Navigator>
            <Tabs
            screenOptions={{
                title:"Back",
                headerShown: false,
                tabBarStyle: {backgroundColor: "#2f2e2eff"},
                tabBarActiveTintColor: "#7d1733ff"
            }}>
                <Tabs.Screen
                name="index"
                options={{
                    title:"Home",
                    tabBarIcon: ({color}) => <HomeIcon color={color}/>
                }}
                />
                <Tabs.Screen
                name="Asesores"
                options={{
                    title:"Asesores",
                    tabBarIcon:({color}) => <AdvisorIcon color={color}/>
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
        </Tab.Navigator>
    )
}

export default function TabsLayout() {

    return (
                    <Stack.Screen name="AppTabs" component={AppTabs}/>
    )
}