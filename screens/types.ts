export type RootStackParamList = {
  Login: undefined;
  WelcomeGestor: { username: string };
  WelcomeEntregador: { username: string };
  CriarTarefa: { addTarefa: (tarefa: { id: string; descricao: string; status: 'a fazer' | 'concluida' }) => void };
};
