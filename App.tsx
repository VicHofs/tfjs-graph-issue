import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as tf from '@tensorflow/tfjs';
import { loadModel } from './tensorflow';

export default function App() {
  const [loaded, setLoaded] = useState(true);
  const [model, setModel] = useState<tf.GraphModel | tf.LayersModel>();
  useEffect(() => {
    const load = async () => {
      try {
        await tf.ready();
        const model = await loadModel('custom-model');
        setModel(model || undefined);
      } catch (err) {
        console.error('Error loading tensorflow model:', err);
      } finally {
        setLoaded(true);
      }
    };
    load();
  });

  return loaded ? (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  ) : (
    <View />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
