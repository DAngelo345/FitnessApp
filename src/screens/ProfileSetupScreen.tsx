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
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [weight, setWeight] = useState('');

  const handleContinue = async () => {
    if (!name || !age || !sex || !feet || !inches || !weight) {
      Alert.alert('Please fill out all fields');
      return;
    }

    const totalHeightInches = Number(feet) * 12 + Number(inches);

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'test2frontend-new@example.com',
          name,
          age: Number(age),
          sex,
          height: totalHeightInches,
          weight: Number(weight),
        }),
      });

      const data = await response.json();

      console.log('Status:', response.status);
      console.log('Response:', data);

      if (!response.ok) {
        Alert.alert(data.error || 'Something went wrong');
        return;
      }

      Alert.alert('Profile saved');
    } catch (error) {
      console.error(error);
      Alert.alert('Something went wrong');
    }
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
      <View style={styles.heightContainer}>
        <TextInput
          style={styles.heightInput}
          value={feet}
          onChangeText={setFeet}
          placeholder="Feet"
          placeholderTextColor="#888"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.heightInput}
          value={inches}
          onChangeText={setInches}
          placeholder="Inches"
          placeholderTextColor="#888"
          keyboardType="numeric"
        />
      </View>

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
  heightContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  heightInput: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    color: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
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