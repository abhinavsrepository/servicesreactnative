import { View, Text, TouchableOpacity,StyleSheet,TextInput, ScrollView, KeyboardAvoidingView} from 'react-native'
import React, { useEffect ,useState} from 'react'
import PageHeading from '../../Components/PageHeading'
import {Ionicons} from '@expo/vector-icons'
import { FlatList } from 'react-native-gesture-handler'
import CalendarPicker from "react-native-calendar-picker";
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';

export default function BookingModal({hideModal}) {
  const [timeList,setTimeList] =useState()
  const [selectedTime,setSelectedTime]=useState();
  const [selectedDate,setSelectedDate]=useState();
  const [note,setNote]=useState();
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
    <ScrollView>
    <KeyboardAvoidingView style={{padding:20}}>
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
        <CalendarPicker onDateChange={setSelectedDate}
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
          onPress ={()=>setSelectedTime(item.time)}>
        
            <Text style={[ selectedTime ==item.time? styles.selectedTime:styles.useSelectedTime]}>{item.time}</Text>
          </TouchableOpacity>
        )}/>
      </View>
      
      {/* Note Section */}
      <View style={{paddingTop:20}}>
      <Heading text={'Any Query Note'}/>
      <TextInput placeholder='Note'
      numberOfLine={4}
      multiline={true}

      style={styles.noteTextArea}
      onChange={(text)=>setNote(text)}/>

    </View>
    {/* conformation button */}
    <TouchableOpacity style={{marginTop:15}}>
      <Text style={styles.confirmbutton}>Confirm & Book</Text>
    </TouchableOpacity>
    </KeyboardAvoidingView>
    </ScrollView>
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
noteTextArea:{
borderWidth:1.5,
borderRadius:15,
textAlignVertical:'top',
padding:22,
fontSize:16,
fontFamily:'outfit',
borderColor:Colors.LIGHTBLACK
},
confirmbutton:{
textAlign:'center',
fontFamily:'outfit-medium',
fontSize:17,
backgroundColor:Colors.PRIMARY,
color:Colors.WHITE,
padding:14,
borderRadius:99,
elevation:8
}

})