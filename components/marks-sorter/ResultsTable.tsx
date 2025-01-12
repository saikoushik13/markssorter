import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet } from 'react-native';

export function ResultsTable({ results }) {
  return (
    <ThemedView style={styles.container}>
      {/* Add table display logic */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  }
});