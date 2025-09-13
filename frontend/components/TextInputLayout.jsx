import { View, Text, TextInput } from "react-native";

export default function TextInputLayout({ placeholder }) {
    return (
        <View className="mb-2 mt-2 rounded-sm">
            <TextInput classname="" placeholder={placeholder}
            style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} />
        </View>
    )
}