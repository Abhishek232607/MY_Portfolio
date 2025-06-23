import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SidebarScreen = ({ navigation }) => {
  const [open, setOpen] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.sidebar}>
      {/* ☰ Toggle Button */}
      <TouchableOpacity onPress={() => setOpen(!open)} style={styles.toggleBtn}>
        <Text style={styles.toggleText}>☰</Text>
      </TouchableOpacity>

      {/* 👤 Profile Image Panel */}
      {open && (
        <>
          <View style={styles.profilePanel}>
            <Image source={require('../assets/profile.png')} style={styles.profileImg} />
          </View>

          <Text style={styles.heading}>My Portfoliofdd</Text>

          {/* Navigation Links */}
          <View style={styles.navList}>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
              <Text style={styles.link}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
              <Text style={styles.link}>About Me</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Skills')}>
              <Text style={styles.link}>Skills</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Education')}>
              <Text style={styles.link}>Education</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
              <Text style={styles.link}>Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
              <Text style={styles.link}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Resume')}>
              <Text style={styles.link}>Resume</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default SidebarScreen;

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#343a40',
    padding: 20,
    fontSize: 30,
    fontFamily: 'Segoe UI',
    flexGrow: 1,
  },
  toggleBtn: {
    alignSelf: 'flex-start',
    padding: 10,
    backgroundColor: '#17a2b8',
    borderRadius: 5,
    marginBottom: 10,
  },
  toggleText: {
    color: '#fff',
    fontSize: 22,
  },
  profilePanel: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ffffff',
    resizeMode: 'cover',
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  heading: {
    fontSize: 22,
    color: '#17a2b8',
    marginBottom: 20,
    textAlign: 'center',
  },
  navList: {
    gap: 20,
  },
  link: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 15,
  },
});
