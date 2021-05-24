import React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Siguiente</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Hecho</Text>
    </TouchableOpacity>
);


const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        NextButtonComponent={Next}
        SkipButtonComponent={Skip}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
  
        pages={[
          {
            backgroundColor: '#489ad3',
            image: <Image source={require('../../assets/Autonomia.png')} />,
            title: 'Cuidando tu salud',
            subtitle: 'Usando nuestra aplicación te ayudaremos a manternte siempre saludable.',
          },
          {
            backgroundColor: '#87d489',
            image: <Image source={require('../../assets/prueba2.png')} />,
            title: 'Generado habitos',
            subtitle: 'Haciendo de tus habitos un ejemplo de rutina saludable.',
          },
          {
            backgroundColor: '#fbc082',
            image: <Image source={require('../../assets/Ejercicio.png')} />,
            title: 'Ejercicios en casa',
            subtitle: 'No necesitas salir de casa para mantenerte activo.',
          },
          
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});