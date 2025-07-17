import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function SetupScreen() {
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');

  const handleStartMatch = () => {
    if (homeTeam && awayTeam) {
      // Navigate to match screen - we'll create this later
      router.push('/match/1');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Match Setup</Text>
        
        <View style={styles.form}>
          <Text style={styles.label}>Home Team</Text>
          <TextInput
            style={styles.input}
            value={homeTeam}
            onChangeText={setHomeTeam}
            placeholder="Enter home team name"
          />
          
          <Text style={styles.label}>Away Team</Text>
          <TextInput
            style={styles.input}
            value={awayTeam}
            onChangeText={setAwayTeam}
            placeholder="Enter away team name"
          />
          
          <TouchableOpacity 
            style={[styles.button, (!homeTeam || !awayTeam) && styles.buttonDisabled]} 
            onPress={handleStartMatch}
            disabled={!homeTeam || !awayTeam}
          >
            <Text style={styles.buttonText}>Start Match</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 40,
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  button: {
    backgroundColor: '#00B14F',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonDisabled: {
    backgroundColor: '#8E8E8F',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
}); 