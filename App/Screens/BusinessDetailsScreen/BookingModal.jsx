import { View, Text, TouchableOpacity,StyleSheet} from 'react-native'
import React, { useEffect ,useState} from 'react'
import PageHeading from '../../Components/PageHeading'
import {Ionicons} from '@expo/vector-icons'
import { FlatList } from 'react-native-gesture-handler'
import CalendarPicker from "react-native-calendar-picker";
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';

export default function BookingModal({hideModal}) {
  const [timeList,setTimeList] =useState()
  const [selecteTime,setSelectedTime]=useState()

  useEffect(()=>{
    getTime();
  },[])
const getTime=()=>{
  const timeList =[];
  for (let i=9;i<=12;i++)
  {
    timeList.push({
      time:i+ ':00AM'
    })
    timeList.push({
      time:i+ ':30 AM'
    })
  };
  for (let i=1;i<=9;i++)
  {
    timeList.push({
      time:i+ ':00 PM'
    })
    timeList.push({
      time:i+ ':30 PM'
    })
  }
  setTimeList(timeList)

}
  return (
    <View style={{padding:20}}>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center"
        }}
        onPress={() => hideModal()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
          Booking
        </Text>
      </TouchableOpacity>
      {/* Calendar sectioon */}
      <Heading text ={'Select Date '}/>
      <View style={styles.calendarContainer}>
        <CalendarPicker onDateChange={this.onDateChange}
        width={340} 
        minDate={Date.now()}
        todayBackgroundColor={Colors.BLACK}
        todayTextStyle={{color:Colors.WHITE}}
        selectedDayColor={Colors.PRIMARY}
        selectedDayTextColor={Colors.WHITE}
        />

      </View>
      {/* Time Select Selection */}
      <View style={{marginTop:20}}>
        <Heading text={'Select TIme Slot'}/>
        <FlatList
        data={timeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}

        renderItem ={({item,index})=>(
          <TouchableOpacity  style={{marginRight:10}}
          onPress ={()=>setSelectedTime(item.time?
            styles.selectedTime:unSelectedTime)}>
            <Text style={[ selectedTime == styles.useSelectedTime]}>{item.time}</Text>
          </TouchableOpacity>
        )}/>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
    calendarContainer:{
        backgroundColor:Colors.LIGHT_BLUE,
        padding:20,
        borderRadius:15


},
selectedTime:{
  padding:10,
  borderWidth:1,
  borderColor:Colors.PRIMARY,
  borderRadius:99,
  paddingHorizontal:18,
  backgroundColor:Colors.PRIMARY,
  color:Colors.WHITE


},
useSelectedTime:{
  padding:10,
  borderWidth:1,
  borderColor:Colors.PRIMARY,
  borderRadius:99,
  paddingHorizontal:18,
  color:Colors.PRIMARY

},
unSelectedTime:{
  padding:10,
  borderWidth:1,
  borderColor:Colors.PRIMARY,
  borderRadius:99,
  paddingHorizontal:18,
  color:Colors.PRIMARY}
})