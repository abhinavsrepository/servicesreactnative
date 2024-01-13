import { View, Text ,Image, StyleSheet} from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function BusinesListItemSmall({business}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:business?.images[0]?.url}}
      style={styles.image}
      />
      <View>
        <Text>
            {business?.name}
        </Text>
        <Text>
            {business?.contactPerson}
        </Text>
        <Text>
            {business?.category.name}
        </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRadius:10,


    },
    image:{
        width:160,
        height:100,
        borderRadius:10,
    }
})