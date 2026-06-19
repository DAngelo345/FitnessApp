import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome back</Text>
      <Text style={styles.title}>FitnessApp</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Summary</Text>
        <Text style={styles.cardText}>Calories: 0</Text>
        <Text style={styles.cardText}>Protein: 0g</Text>
        <Text style={styles.cardText}>Gym time: 0 min</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log Food</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.buttonText}>Check In To Gym</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  greeting: {
    color: '#AAAAAA',
    fontSize: 18,
    marginBottom: 6,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '800',
    marginBottom: 32,
  },
  card: {
    backgroundColor: '#1C1C1C',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  cardText: {
    color: '#CCCCCC',
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 14,
  },
  secondaryButton: {
    backgroundColor: '#2A2A2A',
    paddingVertical: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
});