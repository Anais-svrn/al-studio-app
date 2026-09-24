import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CalendarScreen() {
  return (
    <View style={{ gap: 18 }}>
      <Text style={styles.heading}>Planification</Text>

      <View style={styles.planCard}>
        <Text style={styles.planDate}>Semaine du 10 septembre</Text>
        <View style={styles.planRow}>
          <View style={styles.planBadge}>
            <Text style={styles.planBadgeText}>Lun</Text>
            <Text style={styles.planLookText}>look chic</Text>
          </View>
          <View style={styles.planBadge}>
            <Text style={styles.planBadgeText}>Mer</Text>
            <Text style={styles.planLookText}>look casual</Text>
          </View>
          <View style={styles.planBadge}>
            <Text style={styles.planBadgeText}>Ven</Text>
            <Text style={styles.planLookText}>look bureau</Text>
          </View>
        </View>
      </View>

      <View style={styles.planList}>
        {[
          { day: 'Mardi', outfit: 'Jean + chemise en lin', status: 'Prêt' },
          { day: 'Jeudi', outfit: 'Robe midi + baskets', status: 'À valider' },
          { day: 'Samedi', outfit: 'Pantalon fluide + top léger', status: 'Prévu' },
        ].map((entry) => (
          <View key={entry.day} style={styles.planEntry}>
            <Text style={styles.entryDay}>{entry.day}</Text>
            <Text style={styles.entryOutfit}>{entry.outfit}</Text>
            <Text style={styles.entryStatus}>{entry.status}</Text>
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
  planCard: {
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 18,
  },
  planDate: {
    color: '#1E1B1B',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 14,
  },
  planRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  planBadge: {
    flex: 1,
    borderRadius: 14,
    backgroundColor: '#F4E8DD',
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  planBadgeText: {
    color: '#1E1B1B',
    fontWeight: '700',
    marginBottom: 6,
  },
  planLookText: {
    color: '#755E4C',
    fontSize: 11,
    textAlign: 'center',
  },
  planList: {
    gap: 12,
  },
  planEntry: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  entryDay: {
    color: '#1E1B1B',
    fontWeight: '700',
    flex: 1,
  },
  entryOutfit: {
    color: '#4A3F3A',
    flex: 2,
    textAlign: 'center',
  },
  entryStatus: {
    flex: 1,
    textAlign: 'right',
    color: '#7A685E',
  },
});
