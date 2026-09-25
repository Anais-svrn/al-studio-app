import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import DressingScreen from './src/screens/DressingScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AddClothingScreen from './src/screens/AddClothingScreen';
import { looks, tabData } from './src/data/mockData';

export default function App() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [activeTab, setActiveTab] = useState('Accueil');
  const [selectedStyle, setSelectedStyle] = useState('Chic');
  const [favoriteLooks, setFavoriteLooks] = useState([1]);
  const [selectedLook, setSelectedLook] = useState(null);
  const [showAddClothing, setShowAddClothing] = useState(false);
  const [calendarPlanner, setCalendarPlanner] = useState({});
  const [showMenu, setShowMenu] = useState(false);
  const [showNewItemForm, setShowNewItemForm] = useState(false);
  const [newItemName, setNewItemName] = useState('');

  const currentTab = useMemo(() => {
    if (activeTab === 'Dressing') return 'dressing';
    if (activeTab === 'Calendrier') return 'calendar';
    if (activeTab === 'Profil') return 'profile';
    return 'home';
  }, [activeTab]);

  const toggleFavorite = (lookId) => {
    setFavoriteLooks((current) =>
      current.includes(lookId)
        ? current.filter((id) => id !== lookId)
        : [...current, lookId]
    );
  };

  const planLookForToday = () => {
    if (!selectedLook) return;
    setCalendarPlanner((current) => ({
      ...current,
      '2026-09-25': selectedLook.id,
    }));
    setSelectedLook(null);
    Alert.alert('Look planifié', 'Cette tenue a été ajoutée à votre journée.');
  };

  const saveNewItem = () => {
    if (!newItemName.trim()) {
      Alert.alert('Nom requis', 'Ajoutez un nom à votre vêtement.');
      return;
    }
    setNewItemName('');
    setShowNewItemForm(false);
    Alert.alert('Vêtement enregistré', `${newItemName} a été ajouté à votre dressing.`);
  };

  if (!hasCompletedOnboarding) {
    return <OnboardingScreen onComplete={() => setHasCompletedOnboarding(true)} />;
  }

  if (showAddClothing) {
    return (
      <AddClothingScreen
        onBack={() => setShowAddClothing(false)}
        onSave={() => setShowAddClothing(false)}
      />
    );
  }

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
            onAddClothing={() => setShowAddClothing(true)}
            onLookPress={setSelectedLook}
            onMenuPress={() => setShowMenu(true)}
          />
        )}
        {currentTab === 'dressing' && (
          <DressingScreen onAddClothing={() => setShowAddClothing(true)} />
        )}
        {currentTab === 'calendar' && <CalendarScreen calendarPlanner={calendarPlanner} />}
        {currentTab === 'profile' && <ProfileScreen />}
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

      <Modal visible={!!selectedLook} transparent animationType="slide" onRequestClose={() => setSelectedLook(null)}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{selectedLook?.title || ''}</Text>
              <TouchableOpacity onPress={() => setSelectedLook(null)}>
                <Text style={styles.closeText}>×</Text>
              </TouchableOpacity>
            </View>
            {selectedLook && (
              <View style={styles.modalContent}>
                <Text style={styles.modalLookSummary}>{selectedLook.mood} · {selectedLook.temp}</Text>
                <View style={styles.beautyCard}>
                  <Text style={styles.beautyLabel}>MISE EN BEAUTÉ SUGGÉRÉE</Text>
                  <Text style={styles.beautyText}>
                    <Text style={styles.bold}>Coiffure : </Text>{selectedLook.beauty?.hair || 'Cheveux lâchés'}
                  </Text>
                  <Text style={styles.beautyText}>
                    <Text style={styles.bold}>Maquillage : </Text>{selectedLook.beauty?.makeup || 'Teint naturel et lèvres nude'}
                  </Text>
                </View>
                <TouchableOpacity style={styles.goldButton} onPress={planLookForToday}>
                  <Text style={styles.goldButtonText}>Planifier pour aujourd'hui</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>

      <Modal visible={showMenu} transparent animationType="fade" onRequestClose={() => setShowMenu(false)}>
        <TouchableOpacity style={styles.menuBackdrop} activeOpacity={1} onPress={() => setShowMenu(false)}>
          <View style={styles.menuCard}>
            <Text style={styles.menuTitle}>AL STUDIO</Text>
            <TouchableOpacity style={styles.menuItem} onPress={() => { setShowMenu(false); setActiveTab('Profil'); }}>
              <Text style={styles.menuItemText}>Mon profil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => { setShowMenu(false); setShowNewItemForm(true); }}>
              <Text style={styles.menuItemText}>Ajouter un vêtement</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal visible={showNewItemForm} transparent animationType="slide" onRequestClose={() => setShowNewItemForm(false)}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Ajouter au dressing</Text>
              <TouchableOpacity onPress={() => setShowNewItemForm(false)}>
                <Text style={styles.closeText}>×</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              value={newItemName}
              onChangeText={setNewItemName}
              placeholder="Ex : blazer noir"
              placeholderTextColor="#9B8C81"
              style={styles.input}
            />
            <TouchableOpacity style={styles.darkButton} onPress={saveNewItem}>
              <Text style={styles.darkButtonText}>Enregistrer dans mon dressing</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F0EA' },
  container: { flex: 1, backgroundColor: '#F5F0EA' },
  contentContainer: { paddingHorizontal: 18, paddingTop: 20, paddingBottom: 110 },
  tabBar: {
    position: 'absolute', bottom: 10, left: 18, right: 18, backgroundColor: '#fff',
    borderRadius: 24, paddingVertical: 10, paddingHorizontal: 8, flexDirection: 'row',
    justifyContent: 'space-between', shadowColor: '#000', shadowOpacity: 0.08,
    shadowRadius: 12, shadowOffset: { width: 0, height: 6 },
  },
  tabItem: { flex: 1, borderRadius: 16, paddingVertical: 10, alignItems: 'center' },
  tabItemActive: { backgroundColor: '#F2E4D7' },
  tabLabel: { fontSize: 11, color: '#6C5B52', fontWeight: '600' },
  tabLabelActive: { color: '#1E1B1B' },
  modalBackdrop: { flex: 1, backgroundColor: 'rgba(28,25,23,0.45)', justifyContent: 'flex-end' },
  modalCard: { backgroundColor: '#F5F0EA', borderTopLeftRadius: 26, borderTopRightRadius: 26, padding: 22, minHeight: 250 },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  modalTitle: { fontSize: 24, fontWeight: '800', color: '#1E1B1B' },
  closeText: { fontSize: 32, lineHeight: 32, color: '#6C5B52' },
  modalContent: { gap: 16 },
  modalLookSummary: { color: '#755E4C', fontSize: 14 },
  beautyCard: { backgroundColor: '#fff', padding: 16, borderRadius: 16, borderWidth: 1, borderColor: '#EADBD1', gap: 6 },
  beautyLabel: { color: '#B8860B', fontSize: 11, fontWeight: '800', letterSpacing: 0.5, marginBottom: 4 },
  beautyText: { color: '#6C5B52', fontSize: 14, lineHeight: 20 },
  bold: { fontWeight: '800', color: '#3B302A' },
  goldButton: { backgroundColor: '#D4AF37', borderRadius: 16, paddingVertical: 15, alignItems: 'center' },
  goldButtonText: { color: '#1E1B1B', fontSize: 14, fontWeight: '800' },
  menuBackdrop: { flex: 1, backgroundColor: 'rgba(28,25,23,0.2)', alignItems: 'flex-end', paddingTop: 75, paddingRight: 18 },
  menuCard: { backgroundColor: '#fff', borderRadius: 18, padding: 16, width: 210, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 12, shadowOffset: { width: 0, height: 6 } },
  menuTitle: { fontSize: 15, fontWeight: '800', letterSpacing: 1, color: '#A17D62', marginBottom: 8 },
  menuItem: { paddingVertical: 12, borderTopWidth: 1, borderTopColor: '#F1E4DA' },
  menuItemText: { color: '#1E1B1B', fontWeight: '600' },
  input: { backgroundColor: '#fff', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 14, fontSize: 16, color: '#1E1B1B', borderWidth: 1, borderColor: '#EADBD1', marginBottom: 16 },
  darkButton: { backgroundColor: '#1C1917', borderRadius: 16, paddingVertical: 15, alignItems: 'center' },
  darkButtonText: { color: '#fff', fontWeight: '700', fontSize: 14 },
});
