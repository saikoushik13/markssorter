import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { TextInput, StyleSheet } from 'react-native';

export function SectionInput({ onAddSection }) {
  // Add input logic here
  return (
    <ThemedView style={styles.container}>
      <TextInput 
        placeholder="Section Name (e.g. AS-1)"
        style={styles.input}
      />
      <TextInput 
        placeholder="Subsections (e.g. 1,2 or 10-11)"
        style={styles.input}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  }
});