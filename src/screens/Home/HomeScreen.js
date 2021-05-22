import React from 'react';
import { FlatList, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import { getCategoryName } from '../../data/MockDataAPI';

const HomeScreen = (props) => {



  /* const navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: () => <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  }); */


  const onPressRecipe = () => {
    props.navigation.navigate('Recipe', { initalState, initial: false, });
  };

  const renderItem = ( {item} ) => (

  <TouchableHighlight   activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={() => console.log("Press")}>
      <View  style={styles.container}>
        <Image  style={styles.photo} source={{ uri: item.photo_url }} />
        <Text  style={styles.title}>{item.title}</Text>
        <Text  style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  )

    return (
      <View>
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


export default HomeScreen;