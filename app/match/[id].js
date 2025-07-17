import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MatchScreen() {
  const [commentary, setCommentary] = useState([]);
  const [currentEvent, setCurrentEvent] = useState('');

  const addCommentary = () => {
    if (currentEvent.trim()) {
      const newComment = {
        id: Date.now(),
        event: currentEvent,
        time: new Date().toLocaleTimeString(),
      };
      setCommentary([...commentary, newComment]);
      setCurrentEvent('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Live Match</Text>
        <Text style={styles.subtitle}>Manchester United vs Liverpool</Text>
      </View>

      <ScrollView style={styles.commentaryList}>
        {commentary.map((item) => (
          <View key={item.id} style={styles.commentaryItem}>
            <Text style={styles.commentaryTime}>{item.time}</Text>
            <Text style={styles.commentaryText}>{item.event}</Text>
          </View>
        ))}
        {commentary.length === 0 && (
          <Text style={styles.emptyText}>No events yet. Add your first commentary!</Text>
        )}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={currentEvent}
          onChangeText={setCurrentEvent}
          placeholder="Describe what's happening..."
          multiline
        />
        <TouchableOpacity style={styles.addButton} onPress={addCommentary}>
          <Text style={styles.addButtonText}>Add Event</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 16,
    color: '#8E8E8F',
    marginTop: 4,
  },
  commentaryList: {
    flex: 1,
    padding: 20,
  },
  commentaryItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  commentaryTime: {
    fontSize: 12,
    color: '#8E8E8F',
    marginBottom: 4,
  },
  commentaryText: {
    fontSize: 16,
    color: '#1A1A1A',
  },
  emptyText: {
    textAlign: 'center',
    color: '#8E8E8F',
    fontSize: 16,
    marginTop: 40,
  },
  inputContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  input: {
    backgroundColor: '#F8F9FA',
    padding: 16,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 12,
    minHeight: 60,
  },
  addButton: {
    backgroundColor: '#00B14F',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
}); 