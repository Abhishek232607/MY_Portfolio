import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'Abhishek' && password === 'abhi123') {
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 30, backgroundColor: '#f4f4f4' },
  title: { fontSize: 26, marginBottom: 30, fontWeight: 'bold', textAlign: 'center', color: '#333' },
  input: { height: 50, borderColor: '#ccc', borderWidth: 1, paddingHorizontal: 15, borderRadius: 8, marginBottom: 20, backgroundColor: '#3d3f3f',color: '#fff' },
});
