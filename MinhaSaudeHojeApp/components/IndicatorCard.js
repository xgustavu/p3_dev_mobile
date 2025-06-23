import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function IndicatorCard({ titulo, valor, icone }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.6}>
      <View style={styles.cardContent}>
        <View>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.valor}>{valor}</Text>
        </View>
        <View style={styles.icone}>{icone}</View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    height: 100,
    justifyContent: "center",
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  valor: {
    marginTop: 8,
    fontSize: 16,
    color: '#333'
  },
  icone: {
    marginLeft: 12,
  },
});