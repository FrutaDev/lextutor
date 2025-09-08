import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

export const CircleIconInfo = ({props}) => (
    <Entypo name="info-with-circle" size={18} color="white" {...props}/>

)

export function HomeIcon (props) {
    return (
        <Entypo name="home" size={24} color="white" {...props}/>
    )
}

export function ConfigurationIcon (props) {
    return (
        <Ionicons name="options" size={24} color="white" {...props}/>
    )
}