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



// atualizada a página do Entregador, para listar toda as tarefas do dia.
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RouteProp } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
// import { RootStackParamList } from './types';

// type WelcomeGestorNavigationProp = StackNavigationProp<RootStackParamList, 'WelcomeGestor'>;
// type WelcomeGestorRouteProp = RouteProp<RootStackParamList, 'WelcomeGestor'>;

// type Props = {
//   navigation: WelcomeGestorNavigationProp;
//   route: WelcomeGestorRouteProp;
// };

// type Tarefa = {
//   id: string;
//   descricao: string;
//   status: 'a fazer' | 'concluida';
// };

// export default function WelcomeGestor({ navigation, route }: Props) {
//   const { username } = route.params;
//   const [tarefas, setTarefas] = useState<Tarefa[]>([
//     { id: '1', descricao: 'Entrega Rua A, 123', status: 'a fazer' },
//     { id: '2', descricao: 'Entrega Rua B, 456', status: 'concluida' }
//   ]);

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Bem-vindo, {username}!</Text>

//       <Button
//         title="Criar Nova Tarefa"
//         color="#1E90FF"
//         onPress={() =>
//           navigation.navigate('CriarTarefa', {
//             addTarefa: (tarefa: Tarefa) => setTarefas([...tarefas, tarefa]),
//           })
//         }
//       />


//       <Text style={styles.subtitle}>A Fazer</Text>
//       {tarefas.filter(t => t.status === 'a fazer').map(t => (
//         <View key={t.id} style={styles.card}>
//           <Text>{t.descricao}</Text>
//         </View>
//       ))}

//       <Text style={styles.subtitle}>Concluídas</Text>
//       {tarefas.filter(t => t.status === 'concluida').map(t => (
//         <View key={t.id} style={[styles.card, { backgroundColor: '#d4edda' }]}>
//           <Text>{t.descricao}</Text>
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
//   title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
//   subtitle: { fontSize: 20, fontWeight: 'bold', marginTop: 15, marginBottom: 10 },
//   card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10 }
// });

