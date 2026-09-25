# AL STUDIO

Application mobile de dressing intelligent pour organiser sa garde-robe, recevoir des recommandations de looks et planifier ses tenues selon la météo et le calendrier.

## Stack

- React Native + Expo
- JavaScript
- FastAPI backend for data and recommendation endpoints

## Installation

Frontend:

```bash
npm install
npm start
```

Backend:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## API endpoints

- GET /health
- GET /looks
- GET /wardrobe
- POST /wardrobe
- GET /calendar
- POST /calendar
- GET /profile
- GET /weather
- GET /recommendation

## Fonctionnalités MVP

- Onboarding utilisateur
- Page d'accueil avec proposition de look du jour
- Météo du moment
- Filtres de style
- Calendrier de planification
- Gestion du dressing virtuel
- Favoris
- Écran de planification hebdomadaire
- API backend pour les données métier

## Démarrage sur mobile

Utiliser Expo Go sur iOS/Android, ou lancer l'émulateur local.

## À venir

- Intégration du scan 3D du corps
- Connexion Pinterest
- Authentification utilisateur
- API météo externe réelle
- Backend FastAPI / PostgreSQL complet
