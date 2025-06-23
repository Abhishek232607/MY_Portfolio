import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const EducationScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>🎓 Education</Text>

      <View style={styles.educationBox}>
        <Text style={styles.degree}>SSLC (10th)</Text>
        <Text style={styles.detail}><Text style={styles.label}>Institute:</Text> Government High School Umblebylu</Text>
        <Text style={styles.detail}><Text style={styles.label}>University:</Text> Karnataka State Board</Text>
        <Text style={styles.detail}><Text style={styles.label}>Location:</Text> Shimoga, India</Text>
        <Text style={styles.detail}><Text style={styles.label}>Year:</Text> 2010–2011</Text>
      </View>

      <View style={styles.educationBox}>
        <Text style={styles.degree}>Second Year (12th)</Text>
        <Text style={styles.detail}><Text style={styles.label}>Institute:</Text> Government PU College Shimoga</Text>
        <Text style={styles.detail}><Text style={styles.label}>University:</Text> Karnataka Board</Text>
        <Text style={styles.detail}><Text style={styles.label}>Location:</Text> Shimoga, India</Text>
        <Text style={styles.detail}><Text style={styles.label}>Year:</Text> 2011–2013</Text>
      </View>

      <View style={styles.educationBox}>
        <Text style={styles.degree}>Bachelor of Computer Applications</Text>
        <Text style={styles.detail}><Text style={styles.label}>Institute:</Text> Government First Grade College</Text>
        <Text style={styles.detail}><Text style={styles.label}>University:</Text> Kuvempu University</Text>
        <Text style={styles.detail}><Text style={styles.label}>Location:</Text> Shimoga, India</Text>
        <Text style={styles.detail}><Text style={styles.label}>Year:</Text> 2013–2016</Text>
      </View>

      <View style={styles.educationBox}>
        <Text style={styles.degree}>Master of Computer Applications (MCA)</Text>
        <Text style={styles.detail}><Text style={styles.label}>Institute:</Text> Jawaharlal Nehru National College of Engineering</Text>
        <Text style={styles.detail}><Text style={styles.label}>University:</Text> Visvesvaraya Technological University (VTU)</Text>
        <Text style={styles.detail}><Text style={styles.label}>Location:</Text> Shimoga, India</Text>
        <Text style={styles.detail}><Text style={styles.label}>Year:</Text> 2016–2020</Text>
      </View>
    </ScrollView>
  );
};

export default EducationScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    color: '#17a2b8',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  educationBox: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4,
  },
  degree: {
    fontSize: 20,
    color: '#343a40',
    fontWeight: '600',
    marginBottom: 10,
  },
  detail: {
    color: '#555',
    fontSize: 14,
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
});
