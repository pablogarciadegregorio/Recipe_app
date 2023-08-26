import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingVertical: 16,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginVertical: 16,
        shadowColor:"#000",
        shadowOffset:{width:0,height:4},
        shadowOpacity:0.1,
        shadowRadius:7,
        elevation:3,
        alignItems:'center'
      }}
    >
        <FontAwesome name={icon} size={20} color="#f96163" />
        <TextInput placeholder={placeholder} style={{paddingLeft:8, fontSize:16 }}/>

    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({});
