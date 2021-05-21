import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';

const CreateUserScreen = () => {

    const [state, setstate ] = useState({
        name: '',
        email: '',
        phone: ''
    })

    /* Actualiza los valores ingresados en el formulario */
    const handleChangeText = (name, value) => {
        setstate({...state, [name]: value}) 
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder="Name User" 
                    /* Actualiza datos */
                    onChangeText={(value) => handleChangeText('name', value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder="Email User"
                    /* Actualiza datos */
                    onChangeText={(value) => handleChangeText('email', value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder="Phone User"
                    /* Actualiza datos */
                    onChangeText={(value) => handleChangeText('phone', value)}/>
            </View>
            <View>
                <Button title="Save User" onPress={() => console.log(state)}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 35
    },
     
    inputGroup: {
        flex: 1, 
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default CreateUserScreen