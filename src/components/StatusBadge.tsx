import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBadgeProps } from '../types/student';

export const StatusBadge: React.FC<StatusBadgeProps> = ({ isActive }) => (
  <View style={[styles.pill, { backgroundColor: isActive ? '#2ecc71' : '#e74c3c' }]}>
    <Text style={styles.text}>{isActive ? 'ACTIVE' : 'SUSPENDED'}</Text>
  </View>
);

const styles = StyleSheet.create({
  pill: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  text: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
});