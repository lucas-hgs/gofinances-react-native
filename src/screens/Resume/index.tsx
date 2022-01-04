import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { HistoryCard } from '../../components/HistoryCard';

import {
  Container,
  Header,
  Title
} from './styles';

export function Resume() {
  async function loadData() {
    const dataKey = '@gofinances:transactions';
    const data = await AsyncStorage.getItem(dataKey);
    const currentData = data ? JSON.parse(data) : [];
  }

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      <HistoryCard 
        title='Compras'
        amount='R$150,50'
        color="red"
      />
    </Container>
  )
}