import React from 'react';
import { SectionList } from 'react-native';
import styled from 'styled-components/native';
import Appointment from '../components/Appointment';
import SectionTitle from '../components/SectionTitle';

const DATA = [
  {
    title: '12 september',
    data: [
      {
        active: true,
        time: '11:00',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Кречетов Дмитрий',
          phone: '+(380)501908898',
          avatar: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png',
        },
      },
      {
        active: true,
        time: '11:00',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Кречетов Дмитрий',
          phone: '+(380)501908898',
          avatar: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png',
        },
      },
      {
        active: true,
        time: '11:00',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Кречетов Дмитрий',
          phone: '+(380)501908898',
          avatar: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png',
        },
      },
      {
        time: '16:40',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Иван Иванов',
          phone: '+(380)501908898',
          avatar: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png',
        },
      },
    ],
  },
  {
    title: '16 september',
    data: [
      {
        time: '12:00',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Кречетов Дмитрий',
          phone: '+(380)501908898',
          avatar: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png',
        },
      },
      {
        time: '15:20',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Самойленко Ярослав',
          phone: '+(380)661906991',
          avatar: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png',
        },
      },
    ],
  },
  {
    title: '20 september',
    data: [
      {
        time: '12:00',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Кречетов Дмитрий',
          phone: '+(380)501908898',
          avatar: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png',
        },
      },
      {
        time: '15:20',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Самойленко Ярослав',
          phone: '+(380)661906991',
          avatar: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png',
        },
      },
      {
        time: '15:20',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Самойленко Ярослав',
          phone: '+(380)661906991',
          avatar: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png',
        },
      },
      {
        time: '15:20',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Самойленко Ярослав',
          phone: '+(380)661906991',
          avatar: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png',
        },
      },
    ],
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Appointment navigate={navigation.navigate} item={item} />}
        renderSectionHeader={({ section: { title } }) => <SectionTitle>{title}</SectionTitle>}
      />
    </Container>
  );
};

HomeScreen.navigationOptions = {
  title: 'Пациенты',
  headerTintColor: '#2A86ff',
  headerStyle: {
    elevation: 0.8,
    shadowOpacity: 0.8,
  },
  headerTitleStyle: {
    fontWeight: '600',
    fontSize: 22,
  },
};
const Container = styled.View`
  margin-top: 30px;
  flex: 1;
`;

export default HomeScreen;
