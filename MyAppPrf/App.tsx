// App.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import AboutScreen from './screens/AboutScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ContactScreen from './screens/ContactScreen';
import EducationScreen from './screens/EducationScreen';
import SidebarScreen from './screens/Sidebar';
import SkillsScreen from './screens/SkillsScreen';
import ResumeScreen from './screens/Resume';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sidebar" component={SidebarScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Projects" component={ProjectsScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Education" component={EducationScreen} />
        <Stack.Screen name="Skills" component={SkillsScreen} />
        <Stack.Screen name="Resume" component={ResumeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
