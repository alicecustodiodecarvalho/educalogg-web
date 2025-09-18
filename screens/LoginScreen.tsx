import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Picker, KeyboardAvoidingView, Platform } from 'react-native';
import { RootStackParamList } from './types';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function LoginScreen({ navigation }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'Gestor' | 'Entregador'>('Entregador');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Preencha todos os campos');
      return;
    }
    if (role === 'Gestor') {
      navigation.navigate('WelcomeGestor', { username });
    } else {
      navigation.navigate('WelcomeEntregador', { username });
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.label}>Selecione o perfil:</Text>
      <Picker
        selectedValue={role}
        style={styles.picker}
        onValueChange={(itemValue) => setRole(itemValue)}
      >
        <Picker.Item label="Entregador" value="Entregador" />
        <Picker.Item label="Gestor" value="Gestor" />
      </Picker>
      <View style={styles.button}>
        <Button title="Entrar" onPress={handleLogin} color="#1E90FF" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#333' },
  input: { width: '100%', borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 15, borderRadius: 10, backgroundColor: '#fff' },
  label: { fontSize: 16, marginBottom: 5, color: '#555' },
  picker: { width: '100%', marginBottom: 20 },
  button: { marginTop: 10, borderRadius: 10, overflow: 'hidden' }
});
