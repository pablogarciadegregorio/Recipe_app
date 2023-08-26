import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { SafeAreaView } from "react-native-safe-area-context";


const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{flex:1, marginHorizontal:16}}>
        {/* render header */}
        <Header headerText={"Hi, John"} headerIcon={"bell-o"}  />
        {/* render search filter */}
        <SearchFilter icon={"search"} placeholder={"search your recipe"} />
        {/* categories filter */}
        <View style={{marginTop:22}}>
            <Text style={{fontSize:22, fontWeight:"700"}}> Categories</Text>
            {/* Categories List */}
            <CategoriesFilter/>
            {/* <CategoriesFilter/> */}
        </View>

{/* REcipe List Filte} */}

        <View style={{marginTop:22, flex:1, marginBottom:30}}>
            <Text style={{fontSize:22, fontWeight:"700"}}> Popular Recipes</Text>
            {/* Recipe List */}
             <RecipeCard/>
        </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});