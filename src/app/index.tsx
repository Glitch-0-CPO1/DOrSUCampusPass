import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Pressable, Text } from 'react-native';
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

// A SECOND student profile — proves the SAME StudentCard component
// can be reused with completely different data, just by changing props.
const mariaProfile: StudentProfile = {
  name: 'Maria Clara S. Santos',
  idNumber: '2024-009183-MT',
  program: 'BS in Information Technology (BSIT)',
  yearLevel: '2nd Year — Section B',
  avatarUrl: 'https://i.pravatar.cc/150?img=45',
  campus: 'Main Campus (Guang-guang, Mati City)',
};

export default function Index() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [showPeerDemo, setShowPeerDemo] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <StudentCard student={juanProfile} isActive={isActive} />

        <ScanCounter
          count={count}
          onScan={() => setCount(prev => prev + 1)}
          onReset={() => setCount(0)}
        />

        <Pressable style={styles.toggleBtn} onPress={() => setIsActive(prev => !prev)}>
          <Text style={styles.toggleText}>Simulate Pass Suspension</Text>
        </Pressable>

        <Pressable style={styles.peerBtn} onPress={() => setShowPeerDemo(prev => !prev)}>
          <Text style={styles.peerText}>
            {showPeerDemo ? 'Hide Peer Component Demo' : 'Show Peer Component Demo'}
          </Text>
        </Pressable>

        {showPeerDemo && (
          <>
            <Text style={styles.peerLabel}>PEER PROPS DEMO:</Text>
            <StudentCard student={mariaProfile} isActive={true} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f2f2f2' },
  container: { padding: 16, gap: 12 },
  toggleBtn: { marginTop: 4, backgroundColor: '#333', padding: 12, borderRadius: 8, alignItems: 'center' },
  toggleText: { color: '#fff', fontWeight: 'bold' },
  peerBtn: { backgroundColor: '#6c5ce7', padding: 12, borderRadius: 8, alignItems: 'center' },
  peerText: { color: '#fff', fontWeight: 'bold' },
  peerLabel: { fontWeight: 'bold', marginTop: 8, color: '#333' },
});