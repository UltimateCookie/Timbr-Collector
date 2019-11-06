# Timbr-Collector
TP

## pré-requis
```
git clone https://github.com/UltimateCookie/Timbr-Collector.git
cd Timbr-Collector
npm install
```

## Comment tester sur navigateur
```
ionic serve
```
le navigateur s'ouvre à l'adresse: http://localhost:8100/home.
L'application est responsive design et fonctionne avec un écran de taille galaxy s9 (par exemple).

## Comment tester sur android avec ionicDevApp
- Avoir un compte et l'application ionicDevApp.
- Etre sur le même réseau WIFI.
```
ionic serve --devapp
```
L'application est disponible.

## Comment tester sur android en installant l'application
```
ionic cordova run android
```

## Bug connus à ce jour:

### Sous android seulement:
Lors de l'ajout d'un timbre, il n'apparait pas immédiatement dans la collection.
Il est nécessaire de mettre un filtre, puis de le désactiver.

### sous toutes les platformes:
La photo du timbre n'apparait pas en background dans la collection.


## Perspectives d'améliorations:
- Savegarder les données/Envoyer ou récupérer depuis un serveur
- Selectionner la couleur avec un color picker
- Ajouter des filtres

