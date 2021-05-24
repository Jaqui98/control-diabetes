import React, { useEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { services } from "../../data/dataArrays";
import { recipes } from "../../data/dataArrays";
import DrawerActions from "react-navigation";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getNumberOfRecipes } from "../../data/MockDataAPI";

import { Header } from "react-native-elements";

const HomeScreen = (props) => {
  const navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: () => (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    ),
  });

  useEffect(() => {
    navigationOptions;
  }, []);

  const onPressCategory = (item) => {
    const title = item.name;
    const service = item;
    if (title === "Alimentacion") {
      console.log("Alimentacion");
      props.navigation.navigate("Alimentacion", { service, title });
    }
    if (title === "Ejercicios") {
      props.navigation.navigate("Ejercicios", { service, title });
    }
    if (title === "Nivel de glucosa") {
      props.navigation.navigate("Niveles de Glucosa", { service, title });
    }
    /* props.navigation.navigate("RecipesList", { service, title }); */
  };

  const renderItem = ({ item }) => (
    <TouchableHighlight
      underlayColor="#fbc082"
      onPress={() => onPressCategory(item)}
    >
      <View style={styles.categoriesItemContainer}>
        <Image
          style={styles.categoriesPhoto}
          source={{ uri: item.photo_url }}
        />
        <Text style={styles.categoriesName}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <>
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
      <View>
        <FlatList
          data={services}
          scrollEnabled={true}
          showsVerticalScrollIndicator={true}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    </>
  );
};

export default HomeScreen;
