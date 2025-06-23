import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async () => {
    if (!name || !email || !msg) {
      Alert.alert('Validation Error', 'Please fill all fields.');
      return;
    }

    try {
      const encodedBody = `name=${encodeURIComponent(name)}&email=${encodeURIComponent(
        email
      )}&message=${encodeURIComponent(msg)}&_captcha=false`;

      const response = await fetch('https://formsubmit.co/abhishekabhi61995@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodedBody,
      });

      const responseText = await response.text();

      if (response.ok) {
        Alert.alert('Message Sent', `Thank you, ${name}!`);
        setName('');
        setEmail('');
        setMsg('');
      } else {
        console.warn('FormSubmit response:', responseText);
        Alert.alert('Error', 'Message not sent. Please try again later.');
      }
    } catch (error) {
      console.error('Network error:', error);
      Alert.alert('Network Error', 'Please check your internet connection.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Contact Me</Text>

        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textarea}
          placeholder="Your Message"
          placeholderTextColor="#888"
          multiline
          numberOfLines={5}
          value={msg}
          onChangeText={setMsg}
        />

        <View style={styles.buttonWrapper}>
          <Button title="Send Message" onPress={handleSubmit} color="#17a2b8" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#000',
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    height: 120,
    backgroundColor: '#fff',
    color: '#555',
    textAlignVertical: 'top',
  },
  buttonWrapper: {
    marginTop: 20,
  },
});
