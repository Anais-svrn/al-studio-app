import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { wardrobeItems } from '../data/mockData';

export default function DressingScreen() {
  return (
    <View style={{ gap: 16 }}>
      <View style={styles.sectionHeader}>
        <Text style={styles.heading}>Dressing</Text>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Ajouter</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemsGrid}>
        {wardrobeItems.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <Image source={{ uri: item.image }} style={styles.itemImage} resizeMode="cover" />
            <Text style={styles.itemType}>{item.type}</Text>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemMeta}>{item.color} · {item.season}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    color: '#1E1B1B',
    fontWeight: '700',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#F1E4DA',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  secondaryButtonText: {
    color: '#1E1B1B',
    fontWeight: '700',
  },
  itemsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  itemCard: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    paddingBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  itemImage: {
    width: '100%',
    height: 150,
  },
  itemType: {
    color: '#8F7B6D',
    fontSize: 11,
    marginTop: 10,
    marginHorizontal: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  itemName: {
    color: '#1E1B1B',
    fontWeight: '700',
    marginHorizontal: 12,
    marginTop: 6,
  },
  itemMeta: {
    color: '#6C5B52',
    marginHorizontal: 12,
    marginTop: 4,
  },
});
