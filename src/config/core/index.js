import {Alert} from 'react-native';
import APP from '../constants';

export const showErrorMessage = (error) => {
  try {
    showMessage(error.response.data.message);
  } catch (e) {
    showMessage('Erro desconhecido');
  }
};

export const showMessage = (msg) => {
  Alert.alert(APP.NAME, msg);
};
