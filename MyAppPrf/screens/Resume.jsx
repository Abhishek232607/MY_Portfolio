// import React from 'react';

// const styles = {
//   resumeFull: {
//     padding: '30px',
//     backgroundColor: '#ffffff',
//     fontFamily: 'Segoe UI, sans-serif',
//     borderRadius: '10px',
//     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//   },
//   heading: {
//     marginBottom: '20px',
//     color: '#007bff',
//   },
//   actions: {
//     marginBottom: '20px',
//     display: 'flex',
//     gap: '20px',
//   },
//   resumeButton: {
//     textDecoration: 'none',
//     padding: '10px 20px',
//     backgroundColor: '#007bff',
//     color: 'white',
//     borderRadius: '6px',
//     transition: 'background-color 0.3s ease',
//   },
//   sourceButton: {
//     textDecoration: 'none',
//     padding: '10px 20px',
//     backgroundColor: '#28a745',
//     color: 'white',
//     borderRadius: '6px',
//     transition: 'background-color 0.3s ease',
//   },
// };

// const Resume = () => {
//   return (
//     <div style={styles.resumeFull}>
//       <h1 style={styles.heading}>My Resume</h1>
//       <div style={styles.actions}>
//         <a
//           href="/resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={styles.resumeButton}
//           onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
//           onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
//         >
//           View PDF
//         </a>
//         <a
//           href="https://github.com/yourusername/your-resume-source"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={styles.sourceButton}
//           onMouseOver={(e) => (e.target.style.backgroundColor = '#1e7e34')}
//           onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
//         >
//           View Source
//         </a>
//       </div>
//       <iframe
//         src="/resume.pdf"
//         width="100%"
//         height="700px"
//         title="Resume"
//         frameBorder="0"
//       ></iframe>
//     </div>
//   );
// };

// export default Resume;
import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const ResumeScreen = () => {
  const openGitHub = () => {
    Linking.openURL('https://github.com/yourusername/your-resume-source');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Resume</Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={openGitHub} style={styles.buttonGreen}>
          <Text style={styles.buttonText}>View Source</Text>
        </TouchableOpacity>
      </View>

      <WebView
        source={{ uri: 'https://example.com/your_resume.pdf' }} // ✅ replace with your PDF URL
        style={styles.webview}
      />
    </View>
  );
};

export default ResumeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color: '#007bff' },
  buttonGroup: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
  buttonGreen: {
    backgroundColor: '#28a745',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  webview: {
    flex: 1,
    height: Dimensions.get('window').height - 200,
  },
});
// ResumeScreen.jsx
