// // DashboardScreen.jsx
import React, { useState } from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
  ScrollView, ImageBackground, Linking
} from 'react-native';

const Sidebar = ({ navigation }) => (
  <View style={styles.sidebar}>
    <View style={styles.profilePanel}>
      <Image source={require('../assets/profile.png')} style={styles.profileImgSmall} />
    </View>
    <Text style={styles.sidebarTitle}>My Portfolio</Text>
    <View style={styles.navLinks}>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}><Text style={styles.link}>Dashboard</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('About')}><Text style={styles.link}>About Me</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Skills')}><Text style={styles.link}>Skills</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Education')}><Text style={styles.link}>Education</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Projects')}><Text style={styles.link}>Projects</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}><Text style={styles.link}>Contact</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Resume')}><Text style={styles.link}>Resume</Text></TouchableOpacity>
    </View>
  </View>
);

const DashboardScreen = ({ navigation }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <ImageBackground source={require('../assets/portfolio.png')} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* ☰ Toggle Button */}
        <TouchableOpacity style={styles.toggleBtn} onPress={() => setShowSidebar(!showSidebar)}>
          <Text style={styles.toggleText}>☰</Text>
        </TouchableOpacity>

        {/* Sidebar */}
        {showSidebar && <Sidebar navigation={navigation} />}

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image source={require('../assets/profile.png')} style={styles.profileImg} />
          <Text style={styles.name}>Abhishek</Text>
          <Text style={styles.title}>Java Developer | 3+ Years Experience</Text>
          <Text style={styles.location}>Bangalore, India</Text>

          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={() => setShowContact(!showContact)} style={styles.btn}>
              <Text style={styles.btnText}>Contact Me</Text>
            </TouchableOpacity>
          </View>

          {showContact && (
            <View style={styles.contactBox}>
              <Text style={styles.contactText}>Name: Abhishek</Text>
              <Text style={styles.contactText}>Mobile: 7975829123</Text>
              <Text style={styles.contactText}>Email: abhishekabhi61995@gmail.com</Text>
            </View>
          )}
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <View style={styles.statBox}>
            <Image source={require('../assets/projects.gif')} style={styles.statImage} />
            <Text style={styles.statNumber}>10+</Text>
            <Text style={styles.statLabel}>Projects Completed</Text>
          </View>
          <View style={styles.statBox}>
            <Image source={require('../assets/experience.gif')} style={styles.statImage} />
            <Text style={styles.statNumber}>3+</Text>
            <Text style={styles.statLabel}>Years of Experience</Text>
          </View>
          <View style={styles.statBox}>
            <Image source={require('../assets/tech.gif')} style={styles.statImage} />
            <Text style={styles.statNumber}>20+</Text>
            <Text style={styles.statLabel}>Technologies Used</Text>
          </View>
        </View>

        {/* Info Panels */}
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>About Me</Text>
          <Text style={styles.panelText}>Passionate developer skilled in Java, Spring Boot, MySQL, React, and Linux.</Text>
          <Text style={styles.listItem}>• Java 8, Streams, Functional Interfaces</Text>
          <Text style={styles.listItem}>• REST APIs, Redis Cache, Linux tools</Text>
        </View>

        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Projects</Text>
          <Text style={styles.listItem}>• Municipal Corporation System – JSP</Text>
          <Text style={styles.listItem}>• College Management – PHP, MySQL</Text>
          <Text style={styles.listItem}>• Pollution Control Services – JSP</Text>
          <Text style={styles.listItem}>• Locker App – Java Swing</Text>
        </View>

        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Education</Text>
          <Text>MCA – JNNCE, VTU (2020)</Text>
        </View>

        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Skills</Text>
          <Text style={styles.listItem}>• Java, Spring Boot, JDBC, Hibernate</Text>
          <Text style={styles.listItem}>• React.js, HTML/CSS</Text>
          <Text style={styles.listItem}>• Linux, Git, REST API, Debugging</Text>
          <Text style={styles.listItem}>• Tools: Eclipse, Postman, MySQL</Text>
        </View>

        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Contact</Text>
          <Text>Email: abhishekabhi61995@gmail.com</Text>
          <Text>Phone: +91-7975829123</Text>
          <Text>Address: Nandini Layout, Bengaluru</Text>
          <Text>Languages: English, Kannada, Telugu</Text>
        </View>

        {/* Social Media Icons */}
        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
            <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}>
            <Image source={require('../assets/instagram.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
            <Image source={require('../assets/twitter.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/919999999999')}>
            <Image source={require('../assets/whatsapp.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </ImageBackground>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
  },
  toggleBtn: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 999,
    backgroundColor: '#343a40',
    padding: 8,
    borderRadius: 6,
  },
  toggleText: {
    fontSize: 20,
    color: '#fff',
  },
  sidebar: {
    backgroundColor: '#343a40',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  profilePanel: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImgSmall: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  sidebarTitle: {
    fontSize: 18,
    color: '#17a2b8',
    marginVertical: 10,
    textAlign: 'center',
  },
  navLinks: { gap: 10 },
  link: {
    fontSize: 15,
    color: '#fff',
    marginBottom: 12,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImg: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: '#22b5e6',
    marginBottom: 10,
  },
  name: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  title: { fontSize: 14, color: '#555', marginBottom: 5 },
  location: { fontSize: 13, color: '#777' },
  buttonGroup: {
    marginTop: 10,
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#17a2b8',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  btnText: {
    color: '#fff',
    fontWeight: '500',
  },
  contactBox: {
    marginTop: 20,
    backgroundColor: 'rgba(82, 80, 80, 0.85)',
    padding: 15,
    borderRadius: 10,
    width: '90%',
  },
  contactText: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 4,
  },
  statsSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
    gap: 10,
  },
  statBox: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
    elevation: 2,
  },
  statImage: {
    width: 40,
    height: 40,
    marginBottom: 6,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#17a2b8',
  },
  statLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: '#3e5880',
  },
  panel: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  panelTitle: {
    color: '#17a2b8',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  panelText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  listItem: {
    fontSize: 13,
    color: '#333',
    marginBottom: 5,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
});
