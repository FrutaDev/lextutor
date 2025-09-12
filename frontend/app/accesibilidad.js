import React, { useContext, useState } from 'react';
import { View, Text, Button, Switch, Pressable, ScrollView } from 'react-native';
import { Stack } from 'expo-router';


export default function ThemeToggle() {

  return (
    <>
    <Stack.Screen options={
            {title:"Accesibilidad",
                headerLeft: () => {},
                headerRight: () => {},
            }}
            />
        <ScrollView className="p-4 bg-gray-300 flex-1">
            <View>
                <Text className="text-lg font-bold">
                    Cambiar Tema    
                </Text>
            </View>
                <Pressable className="flex-row items-center rounded-md font-bold justify-between mt-4 p-4 bg-white" onPress={() => {}}>
                    <Text>
                        Dark Mode
                    </Text>
                    <Switch/>
                </Pressable>
        </ScrollView>
    </>
  );
}
