// screens/SkillsScreen.jsx
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const SkillsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🛠 Skills & Certifications</Text>

      <View style={styles.section}>
        <Text style={styles.heading}>Core Competencies</Text>
        <Text style={styles.item}>• Software Development</Text>
        <Text style={styles.item}>• Programming</Text>
        <Text style={styles.item}>• Debugging</Text>
        <Text style={styles.item}>• Build and Deployment</Text>
        <Text style={styles.item}>• Linux</Text>
        <Text style={styles.item}>• Performance Optimization</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Technical Skills</Text>
        <Text style={styles.item}>• Java</Text>
        <Text style={styles.item}>• Spring Boot</Text>
        <Text style={styles.item}>• MySQL</Text>
        <Text style={styles.item}>• HTML, CSS, React JS</Text>
        <Text style={styles.item}>• Redis Cache</Text>
        <Text style={styles.item}>• WSL</Text>
        <Text style={styles.item}>• Git & GitHub</Text>
        <Text style={styles.item}>• Java Swings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Soft Skills</Text>
        <Text style={styles.item}>• Communication</Text>
        <Text style={styles.item}>• Reliable</Text>
        <Text style={styles.item}>• Flexible</Text>
        <Text style={styles.item}>• Adaptability</Text>
        <Text style={styles.item}>• Analytical</Text>
        <Text style={styles.item}>• Team Work</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Certifications</Text>
        <Text style={styles.item}>• JAVA Programming – NPTEL</Text>
        <Text style={styles.item}>• PYTHON Basics – NPTEL</Text>
      </View>
    </ScrollView>
  );
};

export default SkillsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#17a2b8',
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#138496',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
});
