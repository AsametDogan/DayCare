import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Text, Button } from "react-native-paper";
import { TextInput } from "../components";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from "../navigation/AuthNavigator";

type LoginScreenProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState('');
  const [schoolName, setSchoolName] = useState('');

  const navigation = useNavigation<LoginScreenProp>();
  
  const handlePress = () => {
    if (userName !== '' && email !== '' && branch !== '' && schoolName !== '') {
      navigation.navigate('Home');
    } else {
      Alert.alert("Lütfen bilgilerinizi eksiksiz bir şekilde giriniz.")
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bilgilerinizi Giriniz</Text>
      <TextInput 
        style={styles.input} 
        placeholder='İsim ve Soyisim Yazınız' 
        value={userName} 
        onChangeText={setUserName} 
      />
      <TextInput 
        style={styles.input} 
        placeholder='E-posta' 
        value={email} 
        onChangeText={setEmail} 
      />
      <TextInput 
        style={styles.input} 
        placeholder='Branş Giriniz' 
        value={branch} 
        onChangeText={setBranch} 
      />
      <TextInput 
        style={styles.input} 
        placeholder='Görev yaptığınız Kurumun İsmini Giriniz' 
        value={schoolName} 
        onChangeText={setSchoolName} 
      />
      <Button
        mode="contained"
        onPress={handlePress}
        style={styles.button}
      >
        Kaydet
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 10,
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

export default LoginScreen

function setAuthenticated(arg0: boolean): Event {
  throw new Error("Function not implemented.");
}
