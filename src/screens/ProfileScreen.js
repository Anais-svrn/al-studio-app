import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const categoryOptions = ['Haut', 'Bas', 'Veste', 'Chaussures', 'Accessoire'];
const seasonOptions = ['Printemps', 'Été', 'Automne', 'Hiver', 'Toute saison'];

export default function AddClothingScreen({ onBack, onSave }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Haut');
  const [season, setSeason] = useState('Printemps');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backText}>← Retour</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Ajouter un vêtement</Text>
      </View>

      <View style={styles.formBlock}>
        <Text style={styles.label}>Nom</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Ex : chemise blanche"
          placeholderTextColor="#9B8C81"
        />
      </View>

      <View style={styles.formBlock}>
        <Text style={styles.label}>Catégorie</Text>
        <View style={styles.optionGrid}>
          {categoryOptions.map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.optionChip, category === item && styles.optionChipActive]}
              onPress={() => setCategory(item)}
            >
              <Text style={[styles.optionText, category === item && styles.optionTextActive]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.formBlock}>
        <Text style={styles.label}>Saison</Text>
        <View style={styles.optionGrid}>
          {seasonOptions.map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.optionChip, season === item && styles.optionChipActive]}
              onPress={() => setSeason(item)}
            >
              <Text style={[styles.optionText, season === item && styles.optionTextActive]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.imagePlaceholder}>
        <Text style={styles.placeholderText}>Ajouter une photo</Text>
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={onSave}>
        <Text style={styles.primaryButtonText}>Enregistrer</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0EA',
  },
  contentContainer: {
    padding: 22,
    paddingTop: 50,
    gap: 20,
  },
  topRow: {
    gap: 10,
  },
  backText: {
    color: '#1E1B1B',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 30,
    color: '#1E1B1B',
    fontWeight: '800',
  },
  formBlock: {
    gap: 10,
  },
  label: {
    color: '#1E1B1B',
    fontSize: 15,
    fontWeight: '700',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#1E1B1B',
    borderWidth: 1,
    borderColor: '#EADBD1',
  },
  optionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  optionChip: {
    backgroundColor: '#F1E4DA',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
  },
  optionChipActive: {
    backgroundColor: '#1E1B1B',
  },
  optionText: {
    color: '#1E1B1B',
    fontWeight: '600',
  },
  optionTextActive: {
    color: '#fff',
  },
  imagePlaceholder: {
    height: 180,
    backgroundColor: '#F7F0EA',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E9D7C9',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#7D685F',
    fontSize: 16,
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: '#1E1B1B',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
