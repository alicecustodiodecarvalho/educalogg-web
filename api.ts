import axios from 'axios';
import { Platform } from 'react-native';

// Configura a baseURL dependendo da plataforma
const api = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'http://10.0.2.2:3001' // emulador Android
      : 'http://localhost:3001', // web ou iOS
});

export default api;
