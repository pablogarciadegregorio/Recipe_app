import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image source={require("../../images/welcome1.png")} />
      <Text style={{ color: "#F96163", fontSize: 22, fontWeight: " bold" }}>
        40k+ Premium Recipes
      </Text>
      <Text
        style={{
          fontSize: 42,
          fontWeight: "bold",
          color: "#3c444c",
          marginTop: 44,
          marginBottom: 40,
        }}
      >
        Cook Like a Chef
      </Text>
      <TouchableOpacity
        onPress={()=>navigation.navigate("RecipeList")}
        style={{
          backgroundColor: "#F96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "800" }}>
          Let's Go
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
