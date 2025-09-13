import AvailableCourses from "../../components/AvailableCourses"
import Main from "../../components/Main"
import { Stack } from "expo-router"

export default function Index () {
    return (
        <>
                                        <Stack.Screen
                                        options={{
                                            headerStyle: {backgroundColor: "#4C0D1E"},
                                            headerLeft: () => {},
                                            headerRight: () => {}
                                            }}
                                        />
            <Main/>
        </>
    )
}