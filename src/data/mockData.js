import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import DressingScreen from './src/screens/DressingScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AddClothingScreen from './src/screens/AddClothingScreen';
import { tabData } from './src/data/mockData';

export default function App() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [activeTab, setActiveTab] = useState('Accueil');
  const [selectedStyle, setSelectedStyle] = useState('Chic');
  const [favoriteLooks, setFavoriteLooks] = useState([1]);
  const [showAddClothing, setShowAddClothing] = useState(false);

  const currentTab = useMemo(() => {
    if (activeTab === 'Dressing') return 'dressing';
    if (activeTab === 'Calendrier') return 'calendar';
    if (activeTab === 'Profil') return 'profile';
    return 'home';
  }, [activeTab]);

  const toggleFavorite = (lookId) => {
    setFavoriteLooks((current) =>
      current.includes(lookId) ? current.filter((id) => id !== lookId) : [...current, lookId]
    );
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
          />
        )}
        {currentTab === 'dressing' && <DressingScreen onAddClothing={() => setShowAddClothing(true)} />}
        {currentTab === 'calendar' && <CalendarScreen />}
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
    fontSize: 12,
    color: '#6C5B52',
    fontWeight: '600',
  },
  tabLabelActive: {
    color: '#1E1B1B',
  },
});
