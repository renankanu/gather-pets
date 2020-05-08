import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const wr = Math.min(width / 375, 1);
const hr = Math.min(height / 750, 1);

const fixerWidth = (value) => Math.floor(value * wr);
const fixerHeight = (value) => Math.ceil(value * hr);

export {wr, fixerWidth, fixerHeight};
