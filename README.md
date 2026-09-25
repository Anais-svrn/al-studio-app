import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { profileData } from '../data/mockData';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profil</Text>

      <View style={styles.heroCard}>
        <Text style={styles.heroName}>{profileData.firstName}</Text>
        <Text style={styles.heroSubtitle}>Votre style préféré et votre palette de journée</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Styles préférés</Text>
        <View style={styles.pillWrap}>
          {profileData.stylePreferences.map((style) => (
            <Text key={style} style={styles.pill}>{style}</Text>
          ))}
        </View>
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

      <View style={styles.card}>
        <Text style={styles.subtitle}>Mes objectifs</Text>
        {profileData.goals.map((goal) => (
          <Text key={goal} style={styles.goalItem}>• {goal}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
    gap: 18,
  },
  title: {
    fontSize: 32,
    color: '#1E1B1B',
    fontWeight: '700',
  },
  heroCard: {
    backgroundColor: '#1E1B1B',
    borderRadius: 22,
    padding: 20,
  },
  heroName: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 4,
  },
  heroSubtitle: {
    color: '#D7C5B3',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
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
    marginBottom: 12,
  },
  pillWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  pill: {
    backgroundColor: '#F1E4DA',
    color: '#1E1B1B',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontWeight: '600',
    overflow: 'hidden',
  },
  info: {
    color: '#4F3F39',
    fontSize: 15,
    marginBottom: 6,
  },
  goalItem: {
    color: '#4F3F39',
    fontSize: 15,
    marginBottom: 6,
  },
});
