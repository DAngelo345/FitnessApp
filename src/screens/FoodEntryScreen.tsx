import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function FoodEntryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Entry</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Take Photo</Text>
      </TouchableOpacity>

      <View style={styles.imagePlaceholder}>
        <Text style={styles.placeholderText}>
          No image selected
        </Text>
      </View>

      <TouchableOpacity
        style={styles.disabledButton}
        disabled
      >
        <Text style={styles.buttonText}>
          Analyze Food
        </Text>
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
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 24,
  },
  disabledButton: {
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    paddingVertical: 16,
    marginTop: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  imagePlaceholder: {
    height: 250,
    borderWidth: 2,
    borderColor: '#444',
    borderStyle: 'dashed',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#888',
    fontSize: 16,
  },
});