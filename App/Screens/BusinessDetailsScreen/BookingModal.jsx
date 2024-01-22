import { View, Text, TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import PageHeading from '../../Components/PageHeading'
import {Ionicons} from '@expo/vector-icons'
import CalendarPicker from "react-native-calendar-picker";
import Colors from '../../Utils/Colors';

export default function BookingModal({hideModal}) {
  return (
    <View style={{padding:20}}>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
        onPress={() => hideModal()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
          Booking
        </Text>
      </TouchableOpacity>
      {/* Calendar sectioon */}
      <View style={styles.calendarContainer}>
        <CalendarPicker onDateChange={this.onDateChange}
        width={340} 
        minDate={Date.now()}
        todayBackgroundColor={Colors.PRIMARY}
        todayTextStyle={{color:Colors.WHITE}}
        selectedDayColor={Colors.PRIMARY}/>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    calendarContainer:{
        backgroundColor:Colors.LIGHT_BLUE,
        padding:20,
        borderRadius:15


}})