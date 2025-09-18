import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from './types';

type CriarTarefaNavigationProp = StackNavigationProp<RootStackParamList, 'CriarTarefa'>;
type CriarTarefaRouteProp = RouteProp<RootStackParamList, 'CriarTarefa'>;

type Props = {
  navigation: CriarTarefaNavigationProp;
  route: CriarTarefaRouteProp;
};

export default function CriarTarefa({ navigation, route }: Props) {
  const { addTarefa } = route.params; // <- deve receber a função do Gestor
  const [descricao, setDescricao] = useState('');

  const handleCriar = () => {
    if (!descricao.trim()) return alert('Digite a descrição da tarefa');

    addTarefa({ id: Date.now().toString(), descricao, status: 'a fazer' });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Nova Tarefa</Text>
      <TextInput
        style={styles.input}
        placeholder="Descrição da tarefa"
        value={descricao}
        onChangeText={setDescricao}
      />
      <Button title="Criar" onPress={handleCriar} color="#1E90FF" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f0f2f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { backgroundColor: '#fff', padding: 12, borderRadius: 10, borderWidth: 1, borderColor: '#ccc', marginBottom: 15 }
});
