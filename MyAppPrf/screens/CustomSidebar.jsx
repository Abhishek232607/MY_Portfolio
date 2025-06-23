// screens/CustomDrawerContent.jsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      <View style={styles.profileSection}>
        <Image source={require('../assets/profile.png')} style={styles.profileImg} />
        <Text style={styles.name}>Abhishek</Text>
        <Text style={styles.email}>abhishekabhi61995@gmail.com</Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#343a40',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: '#fff',
    borderWidth: 2,
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: '#ccc',
    fontSize: 14,
  },
});
