import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { stylesDetalle } from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
} from "../../data/MockDataAPI";
import BackButton from "../../components/BackButton/BackButton";
import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";

import { Header } from "react-native-elements";

const { width: viewportWidth } = Dimensions.get("window");

export default class DetalleScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: "true",
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={stylesDetalle.imageContainer}>
        <Image style={stylesDetalle.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  onPressIngredient = (item) => {
    var name = getIngredientName(item);
    let ingredient = item;
    this.props.navigation.navigate("Ingredient", { ingredient, name });
  };

  render() {
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const item = this.props.route.params.item;
    const category = getCategoryById(item.rutinaId);
    const title = getCategoryName(category.id);

    return (
      <ScrollView style={stylesDetalle.container}>
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
        <View style={stylesDetalle.carouselContainer}>
          <View style={stylesDetalle.carousel}>
            <TouchableHighlight>
              <View style={stylesDetalle.imageContainer}>
                <Image
                  style={stylesDetalle.image}
                  source={{ uri: item.photo_url }}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={stylesDetalle.infoRecipeContainer}>
          <Text style={stylesDetalle.infoRecipeName}>{item.title}</Text>
          <View style={stylesDetalle.infoContainer}>
            <TouchableHighlight
              onPress={() => navigation.navigate("Home", { category, title })}
            >
              <Text style={stylesDetalle.category}>
                {getCategoryName(item.categoryId).toUpperCase()}
              </Text>
            </TouchableHighlight>
          </View>

          <View style={stylesDetalle.infoContainer}>
            <Image
              style={stylesDetalle.infoPhoto}
              source={require("../../../assets/icons/time.png")}
            />
            <Text style={stylesDetalle.infoRecipe}>{item.time} minutos </Text>
          </View>

          <View style={stylesDetalle.infoContainer}>
            <Text style={stylesDetalle.infoDescriptionRecipe}>
              {item.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

/*cooking steps
<View style={stylesDetalle.infoContainer}>
  <Image style={stylesDetalle.infoPhoto} source={require('../../../assets/icons/info.png')} />
  <Text style={stylesDetalle.infoRecipe}>Cooking Steps</Text>
</View>
<Text style={stylesDetalle.infoDescriptionRecipe}>{item.description}</Text>
*/
