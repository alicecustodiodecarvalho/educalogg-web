Projeto: App de Gerenciamento de Entregas
Descrição

Este é um aplicativo de gerenciamento de entregas desenvolvido em React Native.
O app possui dois perfis de usuário: Entregador e Gestor, com telas de login e dashboards distintos, oferecendo funcionalidades específicas para cada perfil.

Funcionalidades
Gestor

Mensagem de boas-vindas personalizada.

Resumos e alertas do dia em cards.

Botões para:

Entregas

Entregadores

Relatórios

Notificações

Configuração

Sair

Entregador

Mensagem de boas-vindas personalizada:
“Olá, [nome]! Pronto para as entregas de hoje?”

Lista resumida das próximas entregas do dia, com cards mostrando:

Endereço

Status (pendente, concluída, atrasada)

Horário

Nome do destinatário

Ícone de status colorido

Botões para cada entrega:

Ver detalhes

Concluir entrega

Reportar problema

Resumo rápido de entregas do dia:

Total

Concluídas

Pendentes

Botão de Logout

Estrutura do Projeto
educalogg-web/
│
├─ screens/
│   ├─ LoginScreen.tsx
│   ├─ WelcomeGestor.tsx
│   ├─ WelcomeEntregador.tsx
│   └─ types.ts
│
├─ assets/
│   └─ images/  (logos, ícones)
│
├─ App.tsx

Tecnologias Utilizadas

React Native (sem Expo)

TypeScript

React Navigation (stack)

FlatList e ScrollView para listas e rolagem

Componentes básicos do React Native (View, Text, Button, TextInput)

Pré-requisitos

Node.js >= 18

npm

Android Studio ou emulador iOS/Android configurado (ou dispositivo físico)

VSCode ou outro editor de código

Passo a passo para rodar o projeto

Clonar o repositório

git clone <https://github.com/alicecustodiodecarvalho/educalogg-web.git>
cd <educalogg-web>


Instalar dependências

npm install


Instalar dependências adicionais do React Native

npm install @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
npm install --save-dev @types/react @types/react-native


Rodar o projeto no emulador ou dispositivo físico

npx react-native run-android  # Para Android
npx react-native run-ios      # Para iOS (macOS)


Se houver problema de cache ou erros de import, rode:

npx react-native start --reset-cache