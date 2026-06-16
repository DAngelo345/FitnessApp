import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function ProfileSetupScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

const handleContinue = () => {
  if (!name || !age || !sex || !height || !weight) {
    Alert.alert('Please fill out all fields');
    return;
  }

  console.log({
    name,
    age,
    sex,
    height,
    weight,
  });
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete Your Profile</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Enter your age"
        placeholderTextColor="#888"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Sex</Text>
      <View style={styles.sexContainer}>
        <TouchableOpacity
          style={[
            styles.sexButton,
            sex === 'Male' && styles.selectedSexButton,
          ]}
          onPress={() => setSex('Male')}
        >
          <Text style={styles.sexButtonText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.sexButton,
            sex === 'Female' && styles.selectedSexButton,
          ]}
          onPress={() => setSex('Female')}
        >
          <Text style={styles.sexButtonText}>Female</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Height</Text>
      <TextInput
        style={styles.input}
        value={height}
        onChangeText={setHeight}
        placeholder="Height in inches"
        placeholderTextColor="#888"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Weight</Text>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        placeholder="Weight in lbs"
        placeholderTextColor="#888"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
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
    marginBottom: 40,
    textAlign: 'center',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#1C1C1C',
    color: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  sexContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  sexButton: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  selectedSexButton: {
    backgroundColor: '#4CAF50',
  },
  sexButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    paddingVertical: 16,
    marginTop: 32,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});