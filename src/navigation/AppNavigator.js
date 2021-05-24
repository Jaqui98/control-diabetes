import React, { useContext } from 'react';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../provider/AuthProvider';

// Main
/* import Home from '../screens/Home';
import SecondScreen from '../screens/SecondScreen'; */

// Auth screens
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ForgetPassword from '../screens/auth/ForgetPassword';

import Loading from '../screens/utils/Loading';
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import AlimentacionScreen from '../screens/Alimentacion/AlimentacionScreen';
import EjerciciosScreen from '../screens/Ejercicios/EjerciciosScreen';
import GlucosaScreen from '../screens//Glucosa/GlucosaScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import DetalleScreen from "../screens/Ejercicios/DetalleScreen"
/* import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import SearchScreen from '../screens/Search/SearchScreen';
 */

// Better put your these secret keys in .env file
const firebaseConfig = {
	apiKey: 'AIzaSyBMob3_0bL7CxX21-A7kHP4aw5ynvwr2jU',
	authDomain: 'seminarioproyecto-6dbc2.firebaseapp.com',
	projectId: 'seminarioproyecto-6dbc2',
	storageBucket: 'seminarioproyecto-6dbc2.appspot.com',
	messagingSenderId: '384251908230',
	appId: '1:384251908230:android:dde53497fd9678c32ec107',
};
if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}

const AuthStack = createStackNavigator();

const Auth = () => {
	return (
		<AuthStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<AuthStack.Screen name="Onbarding" component={OnboardingScreen}/>
			<AuthStack.Screen name="Login" component={Login} />
			<AuthStack.Screen name="Register" component={Register} />
			<AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
		</AuthStack.Navigator>
	);
};

const Drawer = createDrawerNavigator();

const Main = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Home"
		>
			<Drawer.Screen name="Home" component={HomeScreen} />
			<Drawer.Screen name="Alimentacion" component={AlimentacionScreen} />
			<Drawer.Screen name="Ejercicios" component={EjerciciosScreen} />
			<Drawer.Screen name="Niveles de Glucosa" component={GlucosaScreen} />
			<Drawer.Screen name="DetalleEjercicio" component={DetalleScreen} />
			<Drawer.Screen name="Recipe" component={RecipeScreen} />
			<Drawer.Screen name="IngredientScreen" component={RecipeScreen} />
			<Drawer.Screen name="IngredientsDetails" component={IngredientsDetailsScreen} />
		</Drawer.Navigator>
	);
};

export default () => {
	const auth = useContext(AuthContext);
	const user = auth.user;
	return (
		<NavigationContainer>
			{user == null && <Loading />}
			{user == false && <Auth />}
			{user == true && <Main />}
		</NavigationContainer>
	);
};
