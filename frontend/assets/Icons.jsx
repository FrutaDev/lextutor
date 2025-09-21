import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const CircleIconInfo = ({props}) => (
    <Entypo name="info-with-circle" size={22} color="white" {...props}/>

)

export function HomeIcon (props) {
    return (
        <Entypo name="home" size={24} color="black" {...props}/>
    )
}

export function ConfigurationIcon (props) {
    return (
        <Ionicons name="options" size={24} color="black" {...props}/>
    )
}

export function PlusIcon (props) {
    return (
        <Feather name="plus" size={24} color="black" {...props}/>
    )
}

export function AdvisorIcon (props) {
    return (
        <FontAwesome5 name="chalkboard-teacher" size={24} color="black" {...props}/>
    )
}

