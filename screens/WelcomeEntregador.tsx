import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Button, FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import { RootStackParamList } from './types';

type WelcomeEntregadorNavigationProp = StackNavigationProp<RootStackParamList, 'WelcomeEntregador'>;
type WelcomeEntregadorRouteProp = RouteProp<RootStackParamList, 'WelcomeEntregador'>;

type Props = {
  navigation: WelcomeEntregadorNavigationProp;
  route: WelcomeEntregadorRouteProp;
};

const entregasMock = [
  { id: '1', endereco: 'Rua A, 123', status: 'pendente', horario: '10:00', destinatario: 'João' },
  { id: '2', endereco: 'Rua B, 456', status: 'concluida', horario: '12:00', destinatario: 'Maria' },
  { id: '3', endereco: 'Rua C, 789', status: 'atrasada', horario: '14:00', destinatario: 'Carlos' },
];

export default function WelcomeEntregador({ navigation, route }: Props) {
  const { username } = route.params;

  const getStatusColor = (status: string) => {
    if (status === 'concluida') return 'green';
    if (status === 'pendente') return 'orange';
    return 'red';
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Olá, {username}! Pronto para as entregas de hoje?</Text>

      <FlatList
        data={entregasMock}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { borderLeftColor: getStatusColor(item.status) }]}>
            <Text style={styles.cardText}>Endereço: {item.endereco}</Text>
            <Text style={styles.cardText}>Status: {item.status}</Text>
            <Text style={styles.cardText}>Horário: {item.horario}</Text>
            <Text style={styles.cardText}>Destinatário: {item.destinatario}</Text>
            <View style={styles.buttonRow}>
              <Button title="Ver detalhes" onPress={() => {}} color="#1E90FF" />
              <Button title="Concluir entrega" onPress={() => {}} color="green" />
              <Button title="Reportar problema" onPress={() => {}} color="red" />
            </View>
          </View>
        )}
      />

      <View style={{ marginTop: 20 }}>
        <Button title="Sair" onPress={() => navigation.navigate('Login')} color="red" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f0f2f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#333' },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 15, borderLeftWidth: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, elevation: 3 },
  cardText: { fontSize: 16, marginBottom: 3 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }
});


// atualizada(separadas em concluídas e a fazer)
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RouteProp } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
// import { RootStackParamList } from './types';

// type WelcomeEntregadorNavigationProp = StackNavigationProp<RootStackParamList, 'WelcomeEntregador'>;
// type WelcomeEntregadorRouteProp = RouteProp<RootStackParamList, 'WelcomeEntregador'>;

// type Props = {
//   navigation: WelcomeEntregadorNavigationProp;
//   route: WelcomeEntregadorRouteProp;
// };

// type Tarefa = {
//   id: string;
//   descricao: string;
//   status: 'a fazer' | 'concluida';
// };

// export default function WelcomeEntregador({ navigation, route }: Props) {
//   const { username } = route.params;

//   const [tarefas, setTarefas] = useState<Tarefa[]>([
//     { id: '1', descricao: 'Entrega Rua A, 123', status: 'a fazer' },
//     { id: '2', descricao: 'Entrega Rua B, 456', status: 'concluida' },
//     { id: '3', descricao: 'Entrega Rua C, 789', status: 'a fazer' },
//   ]);

//   const concluirTarefa = (id: string) => {
//     setTarefas(tarefas.map(t => t.id === id ? { ...t, status: 'concluida' } : t));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Olá, {username}! Pronto para as entregas de hoje?</Text>

//       {tarefas.map(t => (
//         <View key={t.id} style={[styles.card, t.status === 'concluida' ? { backgroundColor: '#d4edda' } : {}]}>
//           <Text>{t.descricao}</Text>
//           {t.status === 'a fazer' && (
//             <Button title="Concluir" onPress={() => concluirTarefa(t.id)} color="green" />
//           )}
//         </View>
//       ))}

//       <View style={{ marginTop: 20 }}>
//         <Button title="Sair" onPress={() => navigation.navigate('Login')} color="red" />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flexGrow: 1, padding: 20, backgroundColor: '#f0f2f5' },
//   title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
//   card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10 }
// });

