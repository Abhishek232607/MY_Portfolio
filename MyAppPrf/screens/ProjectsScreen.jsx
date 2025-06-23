import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ProjectsScreen = () => {
  const projects = [
    {
      title: '1. Municipal Corporation System',
      description:
        'A JSP-based web application designed to manage and streamline municipal operations such as complaint handling, billing, and employee data.',
      tools: 'Eclipse, XAMPP Server',
    },
    {
      title: '2. College Management System',
      description:
        'A PHP-based web application used to manage students, faculty, courses, exams, and attendance efficiently for educational institutions.',
      tools: 'Visual Studio, XAMPP Server',
    },
    {
      title: '3. Pollution Control Services',
      description:
        'JSP web application built to track and report environmental pollution data, enabling real-time reporting and awareness.',
      tools: 'Eclipse, WAMP Server',
    },
    {
      title: '4. Locker Application',
      description:
        'Java Swing desktop application used for locker service systems at public places (malls, temples, stations) allowing users to store and retrieve items securely.',
      tools: 'NetBeans, MySQL Workbench',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>📁 My Projects</Text>

      {projects.map((project, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.text}>{project.description}</Text>
          <Text style={styles.tools}>
            <Text style={styles.label}>Tools Used: </Text>
            {project.tools}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ProjectsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    color: '#28a745',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#e9f5ec',
    padding: 20,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#28a745',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20,
  },
  title: {
    color: '#155724',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  text: {
    fontSize: 15,
    color: '#333',
    marginBottom: 6,
  },
  tools: {
    fontSize: 15,
    color: '#333',
  },
  label: {
    fontWeight: 'bold',
  },
});
