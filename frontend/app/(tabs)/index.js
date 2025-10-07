import Main from "../../components/Main"
import { AuthProvider} from "../context/AuthContext"
import useAuth from '../context/AuthContext'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../../components/Login"
import { NavigationContainer } from "@react-navigation/native"
import AppTabs from "./_layout"
import { Text, View } from "react-native"

const Stack = createNativeStackNavigator()

export default function Index () {
    return (
        <AuthProvider>
                <Main/>
                <AppTabs/> 
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
