import {View, StyleSheet, TouchableOpacity, Linking, Text} from 'react-native';
import React from 'react';
import Mapbox from '@rnmapbox/maps';

Mapbox.setWellKnownTileServer('Mapbox');
Mapbox.setAccessToken(
  'pk.eyJ1IjoibHV4d2lzZSIsImEiOiJjbG13amR3eTMwd2t1MmtudDdmbTFmcWVuIn0._OM0mqtMUuq23VM0czniUA',
);
Mapbox.setConnected(true);
Mapbox.setTelemetryEnabled(false);

const App = () => {
  return (
    <View style={styles.page}>
      <Mapbox.MapView style={styles.map}>
        <Mapbox.Camera
          zoomLevel={15}
          centerCoordinate={[-74.149165, 4.602565]}
          animationMode={'flyTo'}
          animationDuration={6000}
        />
        <Mapbox.PointAnnotation
          id="marker"
          coordinate={[-74.151879, 4.603966]}
        />
      </Mapbox.MapView>
      <TouchableOpacity
        style={styles.fabLocation}
        onPress={() => {
          Linking.openURL('waze://?ll=4.69365465,-74.05495725&navigate=yes');
        }}>
        <View style={styles.fab}>
          1<Text style={styles.fabText}>waze</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  fabLocation: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
});

export default App;
