import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	ScrollView,
	TouchableOpacity,
	View,
	KeyboardAvoidingView,
	Image,
	StyleSheet,
} from 'react-native';
import * as firebase from 'firebase';

import { Layout, Text, theme, TextInput, Button } from 'react-native-rapi-ui';

export default function ({ navigation }) {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);

	async function forget() {
		setLoading(true);
		await firebase
			.auth()
			.sendPasswordResetEmail(email)
			.then(function () {
				setLoading(false);
				navigation.navigate('Login');
				alert('Tú contraseña a sido reestablecida y a sido mandada a tú correo.');
			})
			.catch(function (error) {
				setLoading(false);
				alert(error);
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
							source={require('../../../assets/forget.png')}
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
							size="h3"
							fontWeight="bold"
							style={{
								alignSelf: 'center',
								padding: 30,
							}}
						>
							¿Olvidaste tu contraseña?
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
						<Button
							text={loading ? 'Cargando' : 'Correo enviado.'}
							onPress={() => {
								forget();
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
