import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StudentCard } from '../components/StudentCard';
import { ScanCounter } from '../components/ScanCounter';
import { StudentProfile } from '../types/student';

const juanProfile: StudentProfile = {
  name: 'Juan Carlos D. Dela Cruz',
  idNumber: '2024-008492-MT',
  program: 'BS in Information Technology (BSIT)',
  yearLevel: '3rd Year — Section A',
  avatarUrl: 'https://i.pravatar.cc/150?img=12',
  campus: 'Main Campus (Guang-guang, Mati City)',
};

export default function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <StudentCard student={juanProfile} isActive={isActive} />
        <ScanCounter
          count={count}
          onScan={() => setCount(prev => prev + 1)}
          onReset={() => setCount(0)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f2f2f2' },
  container: { padding: 16 },
});