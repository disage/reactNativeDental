import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import SecondaryTxt from './SecondaryTxt';
import Badge from './Badge';

export default function Appointment({ navigate, item }) {
  const { user, diagnosis, active, time } = item;
  return (
    <GroupItem onPress={navigate.bind(this, 'Patient', item)}>
      <Avatar
        source={{
          uri: user.avatar,
        }}
      />
      <View style={{ flex: 1 }}>
        <FullName>{user.fullname}</FullName>
        <SecondaryTxt>{diagnosis}</SecondaryTxt>
      </View>
      <Badge active={active}>{time}</Badge>
    </GroupItem>
  );
}

Appointment.defaultProps = {
  title: 'untitled',
  items: [],
};

const GroupItem = styled.TouchableOpacity`
  flex-direction: row;
  padding: 20px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;
const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;
const FullName = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;
