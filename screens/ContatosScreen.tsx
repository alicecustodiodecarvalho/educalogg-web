import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Alert } from 'react-native';
import api from '../api';

type Contato = {
  id: number;
  nome: string;
  telefone: string;
  email: string;
};

export default function ContatosScreen() {
  const [contatos, setContatos] = useState<Contato[]>([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [editId, setEditId] = useState<number | null>(null); // para editar

  // Carregar todos os contatos
  const carregarContatos = async () => {
    try {
      const res = await api.get('/contatos');
      setContatos(res.data);
    } catch (err) {
      console.error(err);
      Alert.alert('Erro', 'Não foi possível carregar os contatos.');
    }
  };

  useEffect(() => {
    carregarContatos();
  }, []);

  // Salvar ou atualizar contato
  const salvarContato = async () => {
    if (!nome || !telefone || !email) {
      Alert.alert('Atenção', 'Preencha todos os campos');
      return;
    }

    try {
      if (editId !== null) {
        // Editar
        await api.put(`/contatos/${editId}`, { nome, telefone, email });
        setEditId(null);
      } else {
        // Adicionar
        await api.post('/contatos', { nome, telefone, email });
      }
      setNome('');
      setTelefone('');
      setEmail('');
      carregarContatos();
    } catch (err) {
      console.error(err);
      Alert.alert('Erro', 'Não foi possível salvar o contato.');
    }
  };

  // Deletar contato
  const deletarContato = async (id: number) => {
    try {
      await api.delete(`/contatos/${id}`);
      carregarContatos();
    } catch (err) {
      console.error(err);
      Alert.alert('Erro', 'Não foi possível deletar o contato.');
    }
  };

  // Preparar edição
  const editarContato = (contato: Contato) => {
    setNome(contato.nome);
    setTelefone(contato.telefone);
    setEmail(contato.email);
    setEditId(contato.id);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contatos</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <Button title={editId !== null ? "Atualizar" : "Adicionar"} onPress={salvarContato} />

      <Text style={styles.subtitle}>Lista de Contatos</Text>
      {contatos.map(c => (
        <View key={c.id} style={styles.card}>
          <Text style={styles.cardText}>Nome: {c.nome}</Text>
          <Text style={styles.cardText}>Telefone: {c.telefone}</Text>
          <Text style={styles.cardText}>Email: {c.email}</Text>
          <View style={styles.cardButtons}>
            <Button title="Editar" onPress={() => editarContato(c)} color="#1E90FF" />
            <Button title="Deletar" onPress={() => deletarContato(c.id)} color="red" />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f0f2f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 10 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10 },
  cardText: { fontSize: 16, marginBottom: 5 },
  cardButtons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }
});
