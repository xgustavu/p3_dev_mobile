import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import IndicatorCard from '../components/IndicatorCard';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [data, setData] = useState({
    passos: 0,
    sono: 0,
    hidratacao: 0,
    frequencia: 0
  });

  useEffect(() => {
    const gerarDados = () => {
      setData({
        passos: Math.floor(Math.random() * 10000),
        sono: Math.floor(Math.random() * 12),
        hidratacao: Math.floor(Math.random() * 3000),
        frequencia: Math.floor(Math.random() * (120 - 60) + 60)
      });
    };
    gerarDados();
  }, []);

  const abrirLink = () => {
    Linking.openURL('https://saude.abril.com.br');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Minha Saúde Hoje</Text>
      <Text style={styles.subtitulo}>Prova 3 - Dev Mobile</Text>
      <Text style={styles.subsubtitulo}>Gustavo Carvalho</Text>
      <IndicatorCard titulo="Passos" valor={`${data.passos} passos`} icone={<Ionicons name="walk-outline" size={24} color="#0099cc" />} />
      <IndicatorCard titulo="Sono" valor={`${data.sono} horas`} icone={<Ionicons name="bed-outline" size={24} color="#0099cc" />} />
      <IndicatorCard titulo="Hidratação" valor={`${data.hidratacao} ml`} icone={<Ionicons name="water-outline" size={24} color="#0099cc" />} />
      <IndicatorCard titulo="Frequência Cardíaca" valor={`${data.frequencia} bpm`} icone={<Ionicons name="heart-outline" size={24} color="#0099cc" />} />
      <TouchableOpacity style={styles.botao} onPress={abrirLink}>
        <Text style={styles.botaoTexto}>Ver mais informações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f0f4f8',
    marginTop: 90,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 700,
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 8,
    textAlign: 'center',
  },
  subsubtitulo: {
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 20,
    textAlign: 'center',
  },
  botao: {
    marginTop: 20,
    backgroundColor: '#0099cc',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    height: 70,
    justifyContent: 'center'
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold'
  }
});