import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const styleFilters = ['Chic', 'Décontracté', 'Simple', 'Sportwear', 'Bureau', 'Vacances'];

const wardrobeItems = [
  {
    id: 1,
    type: 'Haut',
    name: 'Chemise beige',
    color: 'Beige',
    season: 'Printemps',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    type: 'Bas',
    name: 'Jean droit',
    color: 'Bleu',
    season: 'Toute saison',
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    type: 'Chaussures',
    name: 'Sneakers blanches',
    color: 'Blanc',
    season: 'Printemps',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    type: 'Accessoire',
    name: 'Sac à main',
    color: 'Marron',
    season: 'Automne',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
  },
];

const looks = [
  {
    id: 1,
    title: 'Look du jour',
    recommendation: 'Cheveux lâchés',
    temp: '26°',
    mood: 'Après-midi légère',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    palette: ['#E7D7C9', '#D7C1A6', '#8B6A4B'],
  },
  {
    id: 2,
    title: 'Look bureau',
    recommendation: 'Mise en beauté naturelle',
    temp: '22°',
    mood: 'Coup de frais le matin',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    palette: ['#BFD1D5', '#E8E0D6', '#A87F65'],
  },
];

const calendarDays = [
  { day: 'Lun', active: false },
  { day: 'Mar', active: false },
  { day: 'Mer', active: true },
  { day: 'Jeu', active: false },
  { day: 'Ven', active: false },
  { day: 'Sam', active: false },
  { day: 'Dim', active: false },
];

const monthDays = [
  { label: '1', active: false },
  { label: '2', active: false },
  { label: '3', active: true },
  { label: '4', active: false },
  { label: '5', active: false },
  { label: '6', active: false },
  { label: '7', active: false },
  { label: '8', active: false },
  { label: '9', active: false },
  { label: '10', active: false },
  { label: '11', active: false },
  { label: '12', active: false },
  { label: '13', active: false },
  { label: '14', active: false },
  { label: '15', active: false },
  { label: '16', active: false },
  { label: '17', active: false },
  { label: '18', active: false },
  { label: '19', active: false },
  { label: '20', active: false },
  { label: '21', active: true },
  { label: '22', active: false },
  { label: '23', active: false },
  { label: '24', active: false },
  { label: '25', active: false },
  { label: '26', active: false },
  { label: '27', active: false },
  { label: '28', active: false },
  { label: '29', active: false },
  { label: '30', active: false },
];

const tabData = ['Accueil', 'Dressing', 'Calendrier'];

function HomeScreen({ selectedStyle, setSelectedStyle, favoriteLooks, toggleFavorite }) {
  const selectedLook = looks[0];

  return (
    <View style={{ gap: 18 }}>
      <View style={styles.welcomeRow}>
        <View>
          <Text style={styles.smallLabel}>Bonjour</Text>
          <Text style={styles.heading}>Anaïs</Text>
        </View>
        <TouchableOpacity style={styles.iconBox}>
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

      <TouchableOpacity activeOpacity={0.9} style={styles.lookCard}>
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
          onPress={() => toggleFavorite(selectedLook.id)}
          activeOpacity={0.8}
        >
          <Text style={styles.favoriteText}>{favoriteLooks.includes(selectedLook.id) ? '♥' : '♡'}</Text>
        </TouchableOpacity>
      </TouchableOpacity>

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

      <TouchableOpacity style={styles.primaryButton} activeOpacity={0.9}>
        <Text style={styles.primaryButtonText}>+ Ajouter un vêtement</Text>
      </TouchableOpacity>
    </View>
  );
}

function DressingScreen() {
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

function CalendarScreen() {
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

export default function App() {
  const [activeTab, setActiveTab] = useState('Accueil');
  const [selectedStyle, setSelectedStyle] = useState('Chic');
  const [favoriteLooks, setFavoriteLooks] = useState([1]);

  const currentTab = useMemo(() => {
    if (activeTab === 'Dressing') return 'dressing';
    if (activeTab === 'Calendrier') return 'calendar';
    return 'home';
  }, [activeTab]);

  const toggleFavorite = (lookId) => {
    setFavoriteLooks((current) =>
      current.includes(lookId) ? current.filter((id) => id !== lookId) : [...current, lookId]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F0EA" />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {currentTab === 'home' && (
          <HomeScreen
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
            favoriteLooks={favoriteLooks}
            toggleFavorite={toggleFavorite}
          />
        )}
        {currentTab === 'dressing' && <DressingScreen />}
        {currentTab === 'calendar' && <CalendarScreen />}
      </ScrollView>

      <View style={styles.tabBar}>
        {tabData.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <TouchableOpacity
              key={tab}
              style={[styles.tabItem, isActive && styles.tabItemActive]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>{tab}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F0EA',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F0EA',
  },
  contentContainer: {
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 110,
  },
  welcomeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  smallLabel: {
    fontSize: 14,
    color: '#846C5B',
    fontWeight: '500',
  },
  heading: {
    fontSize: 32,
    color: '#1E1B1B',
    fontWeight: '700',
  },
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
  iconText: {
    fontSize: 22,
    color: '#1E1B1B',
  },
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
  cardTitle: {
    fontSize: 13,
    color: '#8F7B6D',
    marginBottom: 4,
  },
  weatherText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E1B1B',
  },
  weatherIcon: {
    fontSize: 34,
  },
  lookCard: {
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#111',
    height: 290,
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 10 },
  },
  lookImage: {
    width: '100%',
    height: '100%',
  },
  lookOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(16, 15, 15, 0.18)',
  },
  lookMeta: {
    position: 'absolute',
    left: 18,
    right: 18,
    bottom: 20,
  },
  lookTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 6,
  },
  lookRecommendation: {
    fontSize: 16,
    color: '#f2e8df',
    marginBottom: 10,
  },
  swatchesRow: {
    flexDirection: 'row',
    gap: 8,
  },
  swatch: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
  },
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
  favoriteText: {
    fontSize: 24,
    color: '#fff',
  },
  filterSection: {
    gap: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E1B1B',
  },
  filterRow: {
    gap: 10,
    paddingBottom: 10,
  },
  filterChip: {
    backgroundColor: '#F1E4DA',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  filterChipActive: {
    backgroundColor: '#1E1B1B',
  },
  filterText: {
    fontSize: 13,
    color: '#1E1B1B',
    fontWeight: '600',
  },
  filterTextActive: {
    color: '#fff',
  },
  calendarCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  mutedText: {
    color: '#8F7B6D',
    fontSize: 13,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  dayCell: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F2EE',
  },
  dayCellActive: {
    backgroundColor: '#1E1B1B',
  },
  dayText: {
    color: '#6C5B52',
    fontWeight: '600',
    fontSize: 12,
  },
  dayTextActive: {
    color: '#fff',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
  },
  monthDay: {
    width: 30,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthDayActive: {
    backgroundColor: '#E5D5C7',
  },
  monthDayText: {
    fontSize: 12,
    color: '#48403D',
  },
  monthDayTextActive: {
    color: '#1E1B1B',
    fontWeight: '700',
  },
  primaryButton: {
    backgroundColor: '#1E1B1B',
    borderRadius: 18,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 6,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
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
  tabBar: {
    position: 'absolute',
    bottom: 10,
    left: 18,
    right: 18,
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  tabItem: {
    flex: 1,
    borderRadius: 16,
    paddingVertical: 10,
    alignItems: 'center',
  },
  tabItemActive: {
    backgroundColor: '#F2E4D7',
  },
  tabLabel: {
    fontSize: 13,
    color: '#6C5B52',
    fontWeight: '600',
  },
  tabLabelActive: {
    color: '#1E1B1B',
  },
});
