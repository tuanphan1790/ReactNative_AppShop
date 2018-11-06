import { AsyncStorage } from 'react-native';

const saveToken = async (token) => {
    try {
        await AsyncStorage.setItem('@token', token);
        return 'SUCCESS';
    } catch (error) {
        return error;
    }
};

export default saveToken;
