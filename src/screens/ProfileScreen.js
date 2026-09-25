import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { styleFilters, looks, calendarDays, monthDays } from '../data/mockData';

export default function HomeScreen({
  selectedStyle,
  setSelectedStyle,
  favoriteLooks,
  toggleFavorite,
  onAddClothing,
  onLookPress,
  onMenuPress,
}) {
  const selectedLook = looks[0];

  return (
    <View style={{ gap: 18 }}>
      <View style={styles.welcomeRow}>
        <View>
          <Text style={styles.smallLabel}>Bonjour</Text>
          <Text style={styles.heading}>Anaïs</Text>
        </View>
        <TouchableOpacity style={styles.iconBox} onPress={onMenuPress}>
          <Text style={styles.iconText}>☰</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.weatherCard}>
        <View>
          <Text style={styles.cardTitle}>Aujourd'hui</Text>
          <Text style={styles.weatherText}>Après-midi 26°</Text>
        </View>
        <Text style={styles.weatherIcon}>☀️</Text>
      </View>

      <TouchableOpacity style={styles.lookCard} activeOpacity={0.9} onPress={() => onLookPress?.(selectedLook)}>
        <Image source={{ uri: selectedLook.image }} style={styles.lookImage} resizeMode="cover" />
        <View style={styles.lookOverlay} />
        <View style={styles.lookMeta}>
          <Text style={styles.lookTitle}>{selectedLook.title}</Text>
          <Text style={styles.lookRecommendation}>{selectedLook.recommendation}</Text>
          <View style={styles.swatchesRow}>
            {selectedLook.palette.map((color, index) => (
              <View key={`${color}-${index}`} style={[styles.swatch, { backgroundColor: color }]} />
            ))}
          </View>
        </View>
        <TouchableOpacity
          style={styles.favoriteBtn}
          onPress={(event) => {
            event.stopPropagation?.();
            toggleFavorite(selectedLook.id);
          }}
          activeOpacity={0.8}
        >
          <Text style={styles.favoriteText}>{favoriteLooks.includes(selectedLook.id) ? '♥' : '♡'}</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <View style={styles.metricsRow}>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Météo</Text>
          <Text style={styles.metricValue}>26°</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Style</Text>
          <Text style={styles.metricValue}>Chic</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Temps</Text>
          <Text style={styles.metricValue}>2 min</Text>
        </View>
      </View>

      <View style={styles.filterSection}>
        <Text style={styles.sectionTitle}>Styles</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
          {styleFilters.map((style) => {
            const active = selectedStyle === style;
            return (
              <TouchableOpacity
                key={style}
                style={[styles.filterChip, active && styles.filterChipActive]}
                onPress={() => setSelectedStyle(style)}
              >
                <Text style={[styles.filterText, active && styles.filterTextActive]}>{style}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.beautyCard}>
        <Text style={styles.sectionTitle}>Beauté associée</Text>
        <View style={styles.beautyRow}>
          <View style={styles.beautyPill}>
            <Text style={styles.beautyPillLabel}>Coiffure</Text>
            <Text style={styles.beautyPillValue}>{selectedLook.beauty.hair}</Text>
          </View>
          <View style={styles.beautyPill}>
            <Text style={styles.beautyPillLabel}>Maquillage</Text>
            <Text style={styles.beautyPillValue}>{selectedLook.beauty.makeup}</Text>
          </View>
        </View>
      </View>

      <View style={styles.calendarCard}>
        <View style={styles.calendarHeader}>
          <Text style={styles.sectionTitle}>Calendrier</Text>
          <Text style={styles.mutedText}>Septembre</Text>
        </View>
        <View style={styles.weekRow}>
          {calendarDays.map((day) => (
            <View key={day.day} style={[styles.dayCell, day.active && styles.dayCellActive]}>
              <Text style={[styles.dayText, day.active && styles.dayTextActive]}>{day.day}</Text>
            </View>
          ))}
        </View>
        <View style={styles.daysGrid}>
          {monthDays.map((item, index) => (
            <View key={`${item.label}-${index}`} style={[styles.monthDay, item.active && styles.monthDayActive]}>
              <Text style={[styles.monthDayText, item.active && styles.monthDayTextActive]}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton} activeOpacity={0.9} onPress={onAddClothing}>
        <Text style={styles.primaryButtonText}>+ Ajouter un vêtement</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  smallLabel: { fontSize: 14, color: '#846C5B', fontWeight: '500' },
  heading: { fontSize: 32, color: '#1E1B1B', fontWeight: '700' },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  iconText: { fontSize: 22, color: '#1E1B1B' },
  weatherCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  cardTitle: { fontSize: 13, color: '#8F7B6D', marginBottom: 4 },
  weatherText: { fontSize: 24, fontWeight: '700', color: '#1E1B1B' },
  weatherIcon: { fontSize: 34 },
  lookCard: {
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#111',
    height: 300,
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 10 },
  },
  lookImage: { width: '100%', height: '100%' },
  lookOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(16, 15, 15, 0.18)' },
  lookMeta: { position: 'absolute', left: 18, right: 18, bottom: 20 },
  lookTitle: { fontSize: 28, color: '#fff', fontWeight: '700', marginBottom: 6 },
  lookRecommendation: { fontSize: 16, color: '#f2e8df', marginBottom: 10 },
  swatchesRow: { flexDirection: 'row', gap: 8 },
  swatch: { width: 18, height: 18, borderRadius: 9, borderWidth: 1, borderColor: 'rgba(255,255,255,0.8)' },
  favoriteBtn: {
    position: 'absolute',
    right: 16,
    top: 16,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteText: { fontSize: 24, color: '#fff' },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  metricCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  metricLabel: { color: '#8F7B6D', fontSize: 12, marginBottom: 4 },
  metricValue: { color: '#1E1B1B', fontWeight: '700', fontSize: 18 },
  filterSection: { gap: 10 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#1E1B1B' },
  filterRow: { gap: 10, paddingBottom: 10 },
  filterChip: { backgroundColor: '#F1E4DA', borderRadius: 20, paddingVertical: 10, paddingHorizontal: 16 },
  filterChipActive: { backgroundColor: '#1E1B1B' },
  filterText: { fontSize: 13, color: '#1E1B1B', fontWeight: '600' },
  filterTextActive: { color: '#fff' },
  beautyCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  beautyRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },
  beautyPill: {
    flex: 1,
    backgroundColor: '#F7EEE7',
    borderRadius: 16,
    padding: 12,
  },
  beautyPillLabel: { fontSize: 11, color: '#8F7B6D', textTransform: 'uppercase' },
  beautyPillValue: { marginTop: 8, color: '#1E1B1B', fontWeight: '700', fontSize: 13 },
  calendarCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  calendarHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  mutedText: { color: '#8F7B6D', fontSize: 13 },
  weekRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  dayCell: { width: 42, height: 42, borderRadius: 12, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8F2EE' },
  dayCellActive: { backgroundColor: '#1E1B1B' },
  dayText: { color: '#6C5B52', fontWeight: '600', fontSize: 12 },
  dayTextActive: { color: '#fff' },
  daysGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8 },
  monthDay: { width: 30, height: 30, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  monthDayActive: { backgroundColor: '#E5D5C7' },
  monthDayText: { fontSize: 12, color: '#48403D' },
  monthDayTextActive: { color: '#1E1B1B', fontWeight: '700' },
  primaryButton: { backgroundColor: '#1E1B1B', borderRadius: 18, paddingVertical: 15, alignItems: 'center', marginTop: 6 },
  primaryButtonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
