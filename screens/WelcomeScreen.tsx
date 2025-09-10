import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from './types';
import Logo from '../assets/images/logo.png';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;
type WelcomeScreenRouteProp = RouteProp<RootStackParamList, 'Welcome'>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
  route: WelcomeScreenRouteProp;
};

export default function WelcomeScreen({ navigation, route }: Props) {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo, {username}!</Text>
      <Button title="Sair" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { width: 80, height: 80, marginBottom: 20 },
  title: { fontSize: 22, marginBottom: 20 }
});
