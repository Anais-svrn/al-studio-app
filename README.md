import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { profileData } from '../data/mockData';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Informations</Text>
        <Text style={styles.info}>Prénom : {profileData.firstName}</Text>
        <Text style={styles.info}>Styles : {profileData.stylePreferences.join(', ')}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Colorimétrie</Text>
        <Text style={styles.info}>Peau : {profileData.colorimetry.skin}</Text>
        <Text style={styles.info}>Yeux : {profileData.colorimetry.eyes}</Text>
        <Text style={styles.info}>Cheveux : {profileData.colorimetry.hair}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Tailles</Text>
        <Text style={styles.info}>Haut : {profileData.sizes.top}</Text>
        <Text style={styles.info}>Bas : {profileData.sizes.bottom}</Text>
        <Text style={styles.info}>Chaussures : {profileData.sizes.shoes}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 18,
  },
  title: {
    fontSize: 32,
    color: '#1E1B1B',
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  subtitle: {
    color: '#1E1B1B',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  info: {
    color: '#4F3F39',
    fontSize: 15,
    marginBottom: 6,
  },
});
