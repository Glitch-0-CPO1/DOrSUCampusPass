import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StudentProfile } from '../types/student';
import { StatusBadge } from './StatusBadge';

interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
}

export const StudentCard: React.FC<StudentCardProps> = ({ student, isActive }) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Image source={{ uri: student.avatarUrl }} style={styles.avatar} />
        <View style={styles.details}>
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.idNumber}>{student.idNumber}</Text>
          <Text style={styles.program}>{student.program}</Text>
          <Text style={styles.yearLevel}>{student.yearLevel}</Text>
        </View>
      </View>
      <StatusBadge isActive={isActive} />
      <Text style={styles.campus}>Campus: {student.campus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, gap: 8 },
  topRow: { flexDirection: 'row', gap: 12, alignItems: 'center' },
  avatar: { width: 60, height: 60, borderRadius: 30 },
  details: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold' },
  idNumber: { fontSize: 12, color: '#555' },
  program: { fontSize: 12, color: '#555' },
  yearLevel: { fontSize: 12, color: '#555' },
  campus: { fontSize: 12, marginTop: 4 },
});