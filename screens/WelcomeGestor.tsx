import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from './types';

type WelcomeGestorNavigationProp = StackNavigationProp<RootStackParamList, 'WelcomeGestor'>;
type WelcomeGestorRouteProp = RouteProp<RootStackParamList, 'WelcomeGestor'>;

type Props = {
  navigation: WelcomeGestorNavigationProp;
  route: WelcomeGestorRouteProp;
};

export default function WelcomeGestor({ navigation, route }: Props) {
  const { username } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bem-vindo, {username}!</Text>

      <View style={styles.card}><Text style={styles.cardText}>Resumo de entregas do dia</Text></View>
      <View style={styles.card}><Text style={styles.cardText}>Alertas recentes</Text></View>

      <View style={styles.buttonContainer}>
        <Button title="Entregas" onPress={() => {}} color="#1E90FF" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Entregadores" onPress={() => {}} color="#1E90FF" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Relatórios" onPress={() => {}} color="#1E90FF" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Notificações" onPress={() => {}} color="#1E90FF" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Configuração" onPress={() => {}} color="#1E90FF" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sair" onPress={() => navigation.navigate('Login')} color="red" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f0f2f5', alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  card: { width: '100%', backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 3 }, shadowRadius: 5, elevation: 3 },
  cardText: { fontSize: 16, color: '#555' },
  buttonContainer: { width: '100%', marginVertical: 5, borderRadius: 10, overflow: 'hidden' }
});
