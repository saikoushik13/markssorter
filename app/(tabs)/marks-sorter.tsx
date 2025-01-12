import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Collapsible } from '@/components/Collapsible';
import { useState } from 'react';

export default function MarksSorterScreen() {
  const [sections, setSections] = useState([]);
  const [marksData, setMarksData] = useState({});

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Marks Sorter</ThemedText>
      </ThemedView>

      <Collapsible title="Add New Section">
        <ThemedView style={styles.inputContainer}>
          {/* Add section input components here */}
        </ThemedView>
      </Collapsible>

      <Collapsible title="Enter Marks">
        <ThemedView style={styles.marksContainer}>
          {/* Add marks input components here */}
        </ThemedView>
      </Collapsible>

      <Collapsible title="Results">
        <ThemedView style={styles.resultsContainer}>
          {/* Add results display here */}
        </ThemedView>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inputContainer: {
    gap: 8,
    marginBottom: 8,
  },
  marksContainer: {
    gap: 8,
    marginBottom: 8,
  },
  resultsContainer: {
    gap: 8,
    marginBottom: 8,
  }
});