import DropDownPicker from "react-native-dropdown-picker";
import { View } from "react-native";
import React, {useState} from "react";


export default function DropDown ({styles}) {
    
    const [open, setOpen] = React.useState(false);  
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        {label: 'Filtrar', value: ''},
        {label: 'Contabilidad', value: 'Contabilidad'},
        {label: 'TI', value: 'TI'},
        {label: 'Gubernamental', value: 'Gubernamental'},
        {label: 'Internacionales', value: 'Internacionales'},
    ]);

    return (
        <View className={styles}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Filtrar"
                containerStyle={{width: 150}}
                onChangeValue={(value) => console.log(value)}
            />
        </View>
    )
}