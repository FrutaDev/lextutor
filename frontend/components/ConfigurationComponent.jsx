import { Pressable, Text } from "react-native"
import { Link } from "expo-router"

export default function ConfigurationComponent ({ label, to = '' }) {
    return (
        <Link asChild href={to}>
            <Pressable className="flex items-center pt-5 pb-5 border-b border-gray-500/30 w-80 active:bg-gray-400 active:w-full" >
                <Text className="text-black">
                    {label}
                </Text>
            </Pressable>
        </Link>

    )
}
            