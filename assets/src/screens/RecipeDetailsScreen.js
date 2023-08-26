import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView
} from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";


const RecipeDetailScreen = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item);

  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <SafeAreaView
        style={{ flexDirection: "row", marginHorizontal: 20, marginTop: 20 }}
      >
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name={"arrow-circle-left"} size={28} color={"white"} />
        </Pressable>
        <Pressable>
          <FontAwesome name={"heart-o"} size={28} color={"white"} />
        </Pressable>
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#ffffff",
          flex: 1,
          marginTop: 140,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            // backgroundColor: "red",
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>

        {/* Recipe Name  */}
        <Text style={{ marginTop: 160, fontSize: 28, fontWeight: "700" }}>
          {item.name}{" "}
        </Text>

          <View style={{flex:1}}> 
          <ScrollView showsVerticalScrollIndicator={false}>
             {/* Recipe Description  */}
        <Text
          style={{
            fontSize: 20,
            marginVertical: 16,
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          {item.description}
        </Text>
        {/* Recipe Extra Data */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(255,0,0,0.38)",
              paddingVertical: 26,
              borderRadius: 8,
              alignItems: "center",
              width:100
            }}
          >
            <Text style={{ fontSize: 40 }}>⏰</Text>
            <Text style={{ fontSize: 20, fontWeight: "400" }}>{item.time}</Text>
          </View>
          <View
            style={{
              backgroundColor: "rgba(135,206,235,0.38)",
              paddingVertical: 26,
              borderRadius: 8,
              alignItems: "center",
              width:100
            }}
          >
            <Text style={{ fontSize: 40 }}>🥣</Text>
            <Text style={{ fontSize: 20, fontWeight: "400" }}>
              {item.difficulty}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "rgba(255,165,0,0.38)",
              paddingVertical: 26,
              borderRadius: 8,
              alignItems: "center",
              width:100
            }}
          >
            <Text style={{ fontSize: 40 }}>🔥</Text>
            <Text style={{ fontSize: 20, fontWeight: "400" }}>
              {item.calories}
            </Text>
          </View>
        </View>

        {/* RECIPE INGREDIENTS */}

        <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: "600", marginBottom:16, marginTop:32 }}>Ingredients</Text>
          {item.ingredients.map((ingredient,index) => {
            return (
              <View style={{ flexDirection: "row", alignItems: "center", marginVertical:8 }}>
                <View
                key={index}
                  style={{
                    backgroundColor: "red",
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                  }}
                ></View>
                <Text style={{ fontSize: 18, marginLeft: 6 }}>
                  {ingredient}
                </Text>
              </View>
            );
          })}
        </View>

          {/* RECIPE STEPS */}

          <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: "600", marginBottom:6 }}>Steps</Text>
          {item.steps.map((step,index) => {
            return (
               
                
                <Text 
                key={index}
                style={{ fontSize: 18, marginLeft: 6, marginVertical:16 }}>
                  {`${index+1}) ${step}`}
                </Text>
              
            );
          })}
        </View>

          </ScrollView>
          </View>

        

      </View>
    </View>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({});
