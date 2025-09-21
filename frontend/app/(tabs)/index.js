import Main from "../../components/Main"
import { AuthProvider, useAuth } from "../context/AuthContext"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../../components/Login"
import { NavigationContainer } from "@react-navigation/native"
import TabsLayout from "./_layout"

const Stack = createNativeStackNavigator()

export default function Index () {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Main/>
                <TabsLayout/>
            </NavigationContainer>
        </AuthProvider>
    )
}

export const Layout = () => {
    const {authState, onLogout} = useAuth()
    console.log(authState.authenticated)
    
    return (
            <Stack.Navigator>
                {authState?.authenticated ?
                    <>
                        <Stack.Screen
                            name="Index"
                            component={Index}
                        options={{
                            headerStyle: {backgroundColor: "#4C0D1E"},
                            headerLeft: () => {},
                            headerRight: () => {},
                            headerShown: false
                        }}
                        />
                    </> : 
                        <Stack.Screen
                        name="Login"
                        component={Login}
                            options={{
                            headerStyle: {backgroundColor: "#4C0D1E"},
                            headerLeft: () => {},
                            headerRight: () => {},
                            headerShown: false
                        }}
                        />
                }
            </Stack.Navigator>
    )
}
