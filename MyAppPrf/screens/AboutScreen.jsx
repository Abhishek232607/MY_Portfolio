import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>About Me</Text>

      {/* Contact Panel */}
      <View style={styles.panel}>
        <Text style={styles.title}>📞 Contact Me</Text>
        <Text style={styles.text}><Text style={styles.label}>Name:</Text> Abhishek</Text>
        <Text style={styles.text}><Text style={styles.label}>Email:</Text> abhishekabhi61995@gmail.com</Text>
        <Text style={styles.text}><Text style={styles.label}>Phone:</Text> +91-7975829123</Text>
      </View>

      {/* Education Panel */}
      <View style={styles.panel}>
        <Text style={styles.title}>🎓 Education</Text>
        <Text style={styles.text}><Text style={styles.label}>Master of Computer Applications</Text></Text>
        <Text style={styles.text}>Jawaharlal Nehru National College of Engineering</Text>
        <Text style={styles.text}>Visvesvaraya Technological University, Bangalore</Text>
        <Text style={styles.text}><Text style={styles.label}>Year:</Text> 2020</Text>
      </View>

      {/* Core Competencies */}
      <View style={styles.panel}>
        <Text style={styles.title}>🧠 Core Competencies</Text>
        {['Software Development', 'Programming', 'Debugging', 'Build and Deployment', 'Linux', 'Performance Optimization'].map((item, index) => (
          <Text key={index} style={styles.text}>• {item}</Text>
        ))}
      </View>

      {/* Technical Skills */}
      <View style={styles.panel}>
        <Text style={styles.title}>💻 Technical Skills</Text>
        {[
          'Java, Spring Boot, MySQL',
          'HTML, CSS, React',
          'Java Swings',
          'Redis Cache, WSL',
          'Git & GitHub'
        ].map((skill, i) => (
          <Text key={i} style={styles.text}>• {skill}</Text>
        ))}
      </View>

      {/* Core Objective */}
      <View style={styles.panel}>
        <Text style={styles.title}>🎯 Core Objective</Text>
        <Text style={styles.text}>
          Passionate software developer eager to tackle challenging roles, leveraging advanced skills in Java, Spring Boot, MySQL and React JS with additional skills in Linux.
        </Text>
      </View>

      {/* Profile Summary */}
      <View style={styles.panel}>
        <Text style={styles.title}>📝 Profile Summary</Text>
        {[
          'Over 2.9 years of experience in software development specializing in Java Swings, Spring Boot, MySQL, and React.',
          'Strong knowledge of Java 8 features like Functional Interface, Streams, and Memory Management.',
          'Developed and enhanced REST APIs using Spring Boot.',
          'Skilled in debugging and optimizing performance using Java 8.',
          'Hands-on with Redis Cache Server and WSL on Spring Boot framework.'
        ].map((point, i) => (
          <Text key={i} style={styles.text}>• {point}</Text>
        ))}
      </View>

      {/* Certifications */}
      <View style={styles.panel}>
        <Text style={styles.title}>📜 Certifications</Text>
        <Text style={styles.text}>• Certified “JAVA Programming” course by NPTEL</Text>
        <Text style={styles.text}>• Certified basic “PYTHON” course by NPTEL</Text>
      </View>

      {/* Work Experience */}
      <View style={styles.panel}>
        <Text style={styles.title}>🏢 Work Experience</Text>
        <Text style={styles.text}><Text style={styles.label}>Java Developer</Text> — AuroTec, Bangalore</Text>
        <Text style={styles.text}><Text style={styles.label}>From:</Text> April 1st 2022 – Present</Text>
        {[
          'Developed TUCKIT desktop application using Java Swings, Servlets, and SQL.',
          'Built sports scoring and display products (Cricket, Football, Hockey, etc.) using Java Swings.',
          'Developed ITS (Internet Transport System) for buses using Java.',
          'Experience in debugging Java and Spring Boot applications.',
          'Developed people-counting system and advertisement projects.',
          'Worked with React.js, React Native, Spring Boot REST APIs.',
          'Used Redis Cache, WSL, Git, Eclipse, IntelliJ, and Visual Studio.',
          'Worked on MySQL database and REST API development.'
        ].map((exp, i) => (
          <Text key={i} style={styles.text}>• {exp}</Text>
        ))}
      </View>

      {/* Personal Details */}
      <View style={styles.panel}>
        <Text style={styles.title}>🙋 Personal Details</Text>
        <Text style={styles.text}><Text style={styles.label}>Date of Birth:</Text> 13th Nov 1995</Text>
        <Text style={styles.text}><Text style={styles.label}>Languages Known:</Text> English, Kannada, Telugu</Text>
        <Text style={styles.text}><Text style={styles.label}>Address:</Text> No:144, 4th Main, 8th Block, Nandini Layout, Bengaluru, 56009</Text>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
    marginBottom: 20,
  },
  panel: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#343a40',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
    marginBottom: 5,
  },
  label: {
    fontWeight: '600',
    color: '#000',
  },
});
