import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";
import { useEffect, useState } from "react";

export default function BusinessAboutMe({ business }) {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    business && (
      <View>
        <Heading style={{ padding: 15 }} text={"About Us"} />
        <Text
          style={{
            fontFamily: "outfit",
            lineHeight: 25,
            color: Colors.LIGHT_GRAY,
            fontSize: 16,
            paddingHorizontal: 15,
          }}
          numberOfLines={isReadMore ? 20 : 5}
        >
          {business.about}
        </Text>
        <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
          <Text
            style={{
              color: Colors.PRIMARY,
              fontSize: 16,
              fontFamily: "outfit",
              backgroundColor: Colors.LIGHT_BLUE,
              padding: 5,
              borderRadius: 5,
              paddingLeft: 15,
            }}
          >
            {isReadMore ? "Read Less" : "Read More"}
          </Text>
        </TouchableOpacity>
      </View>
    )
  );
}
