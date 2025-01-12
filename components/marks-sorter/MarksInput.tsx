import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { TextInput, StyleSheet } from 'react-native';

export function MarksInput({ section, onMarksChange }) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">{section.name}</ThemedText>
      {/* Add marks input fields */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  }
});