import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	ScrollView,
	TouchableOpacity,
	View,
	KeyboardAvoidingView,
	Image,
} from 'react-native';
import * as firebase from 'firebase';

import { Layout, Text, TextInput, Button } from 'react-native-rapi-ui';

export default function ({ navigation }) {
	const [email, setEmail] = useState('');
	const [peso, setPeso] = useState('');
	const [estatura, setEstatura] = useState('');
	const [fechaNac, setFechaNac] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	async function register() {
		setLoading(true);
		await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// ...
				setLoading(false);
				alert(errorMessage);
			});
	}

	return (
		<KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
			<StatusBar style="auto" translucent backgroundColor="#f7f7f7" />
			<Layout>
				<ScrollView
					contentContainerStyle={{
						flexGrow: 1,
					}}
				>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: '#f7f7f7',
						}}
					>
						<Image
							resizeMode="contain"
							style={{
								height: 220,
								width: 220,
							}}
							source={require('../../../assets/register.png')}
						/>
					</View>
					<View
						style={{
							flex: 3,
							paddingHorizontal: 20,
							paddingBottom: 20,
							backgroundColor: '#fff',
						}}
					>
						<Text
							fontWeight="bold"
							size="h3"
							style={{
								alignSelf: 'center',
								padding: 30,
							}}
						>
							Registro
						</Text>
						<Text>Correo electronico</Text>
						<TextInput
							containerStyle={{ marginTop: 15 }}
							placeholder="Digita tu correo"
							value={email}
							autoCapitalize="none"
							autoCompleteType="off"
							autoCorrect={false}
							keyboardType="email-address"
							onChangeText={(text) => setEmail(text)}
						/>
						<Text>Peso (Kg)</Text>
						<TextInput
							containerStyle={{ marginTop: 15 }}
							placeholder="Digita tu peso kiligramos"
							value={peso}
							autoCapitalize="none"
							autoCompleteType="off"
							autoCorrect={false}
							keyboardType="email-address"
							onChangeText={(text) => setPeso(text)}
						/>
						<Text>Estatura (m)</Text>
						<TextInput
							containerStyle={{ marginTop: 15 }}
							placeholder="Digita tu estatura metros"
							value={estatura}
							autoCapitalize="none"
							autoCompleteType="off"
							autoCorrect={false}
							onChangeText={(text) => setEstatura(text)}
						/>
						<Text>Fecha de nacimiento</Text>
						<TextInput
							containerStyle={{ marginTop: 15 }}
							placeholder="Digita tu fecha de nacimiento"
							value={fechaNac}
							autoCapitalize="none"
							autoCompleteType="off"
							autoCorrect={false}
							onChangeText={(text) => setFechaNac(text)}
						/>

						<Text style={{ marginTop: 15 }}>Contraseña</Text>
						<TextInput
							containerStyle={{ marginTop: 15 }}
							placeholder="Escribe una contraseña"
							value={password}
							autoCapitalize="none"
							autoCompleteType="off"
							autoCorrect={false}
							secureTextEntry={true}
							onChangeText={(text) => setPassword(text)}
						/>
						<Button
							text={loading ? 'Cargando' : 'Crear cuenta'}
							onPress={() => {
								register();
							}}
							style={{
								marginTop: 20,
							}}
							disabled={loading}
						/>

						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: 15,
								justifyContent: 'center',
							}}
						>
							<Text size="md">¿Ya tienes una cuenta?</Text>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate('Login');
								}}
							>
								<Text
									size="md"
									fontWeight="bold"
									style={{
										marginLeft: 5,
									}}
								>
									Entrar aquí
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</Layout>
		</KeyboardAvoidingView>
	);
}