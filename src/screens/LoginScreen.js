import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const LogingScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Login screen</Text>
            <Button 
                title="Click here"
                onPress={() => navigation.navigate("Button Clicked")}
            />
                
        </View>
    );
};

export default LogingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});