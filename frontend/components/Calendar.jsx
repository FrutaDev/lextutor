import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

    export default function Calendar() {
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const onDateChange = (date) => {
        setSelectedStartDate(date);
    }

    
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    return (
      <View className="bg-white p-4 rounded-lg shadow-md mt-10">
        <CalendarPicker 
            startFromMonday={true}
            todayBackgroundColor="#4C0D1E"
            selectedDayColor="#41146eff"
            selectedDayTextColor="#FFFFFF"
        onDateChange={onDateChange} />
        <View>
          <Text>SELECTED DATE:{startDate}</Text>
        </View>
      </View>
    );
  



}