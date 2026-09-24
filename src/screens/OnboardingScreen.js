import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function OnboardingScreen({ onComplete }) {
  const steps = [
    {
      title: 'Organise ta garde-robe',
      text: 'Ajoute tes vêtements, accessoires et pièces préférées en quelques secondes.',
    },
    {
      title: 'Découvre les looks',
      text: 'AL STUDIO te propose des tenues adaptées à la météo, ton style et tes envies du jour.',
    },
    {
      title: 'Gagne du temps le matin',
      text: 'Planifie ta semaine et garde tes looks favoris accessibles en un clin d’œil.',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.brand}>AL STUDIO</Text>
        <Text style={styles.title}>Votre dressing intelligent</Text>
        <Text style={styles.subtitle}>
          Une application pensée pour simplifier chaque matin et révéler votre style sans effort.
        </Text>
      </View>

      <View style={styles.stepsWrap}>
        {steps.map((step, index) => (
          <View key={step.title} style={styles.stepCard}>
            <View style={styles.stepBadge}><Text style={styles.stepBadgeText}>{index + 1}</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepText}>{step.text}</Text>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={onComplete} activeOpacity={0.9}>
        <Text style={styles.primaryButtonText}>Commencer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0EA',
    paddingHorizontal: 22,
    paddingTop: 60,
    paddingBottom: 30,
    justifyContent: 'space-between',
  },
  topContent: {
    gap: 10,
  },
  brand: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1.5,
    color: '#A17D62',
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1E1B1B',
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#624E42',
  },
  stepsWrap: {
    gap: 14,
  },
  stepCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    gap: 14,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  stepBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F2E4D7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepBadgeText: {
    color: '#1E1B1B',
    fontWeight: '800',
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E1B1B',
    marginBottom: 4,
  },
  stepText: {
    fontSize: 14,
    color: '#6C5B52',
    lineHeight: 20,
  },
  primaryButton: {
    backgroundColor: '#1E1B1B',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
});
