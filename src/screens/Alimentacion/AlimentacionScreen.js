import React from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";

import { Header } from "react-native-elements";

export default function AlimentacionScreen(props) {
  const onPressRecipe = (item) => {
    console.log("Navegando a recipe");
    props.navigation.navigate("Recipe", { item });
  };

  const renderItem = ({ item }) => (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => onPressRecipe(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "Diabetes Healty ",
          style: { color: "#fff", fontSize: 18 },
        }}
        rightComponent={{ icon: "home", color: "#fff" }}
        containerStyle={{
          backgroundColor: "#87d489",
          justifyContent: "space-around",
        }}
        onTouchEnd={() => props.navigation.openDrawer()}
      />
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.recipeId}
      />
    </View>
  );
}
