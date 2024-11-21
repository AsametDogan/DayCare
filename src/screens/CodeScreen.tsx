import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen';


const CodeScreen = () => {
  const [code, setCode] = useState('');
  const [verifyCode, setVerifyCode] = useState('');

  const navigation = useNavigation();
  
  const handlePress = () => {
  const code = '1234';
    if (verifyCode === code) {
      // Kullanıcı doğrulama başarılı
      navigation.navigate('login');
    } else{
      // Kullanıcı doğrulama başarısız
      Alert.alert('Hata', 'Kodu kontrol ediniz');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kodu Giriniz</Text>
      <TextInput
        label="Kod"
        value={verifyCode}
        onChangeText={(text) => setVerifyCode(text)}
        mode="outlined"
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handlePress}
        style={styles.button}
      >
        Giriş
      </Button>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: 5,
    backgroundColor: '#6200ee',
  },
});

export default CodeScreen;
