import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import { getCategoryName } from "../../data/MockDataAPI";
import BackButton from "../../components/BackButton/BackButton";
import { TextInput, Button } from "react-native-rapi-ui";

import { Header } from "react-native-elements";

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

  render() {
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const service = this.props.route.params.service;
    const title = this.props.route.params.title;

    return (
      <ScrollView style={styles.container}>
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
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <TouchableHighlight>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{ uri: service.photo_input }}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{title}</Text>
          <View style={styles.infoContainer}>
            <TouchableHighlight
              onPress={() => navigation.navigate("Home", { category, title })}
            >
              <Text style={styles.category}>
                {getCategoryName(service.id).toUpperCase()}
              </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.infoRecipeContainer}>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Digita tu nivel de azucar"
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
            />
            <Button
              text={"Saber mi estado de salud"}
              onPress={() => {
                console.log("Press");
              }}
              style={{
                marginTop: 20,
              }}
            />
          </View>

          {/* Van los inputs */}
        </View>
      </ScrollView>
    );
  }
}
