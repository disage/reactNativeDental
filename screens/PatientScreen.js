import React from 'react';
import { Foundation, Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { Text, View, TouchableOpacity } from 'react-native';
import SecondaryTxt from '../components/SecondaryTxt';
import Button from '../components/Button';
import Badge from '../components/Badge';

const PatientScreen = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <PatientDetails>
      <PatientFullname>{navigation.getParam('user').fullname}</PatientFullname>
      <SecondaryTxt>{navigation.getParam('user').phone}</SecondaryTxt>

      <ButtonsWrapper>
        <FormulaButtonView>
          <Button>Формула зубов</Button>
        </FormulaButtonView>
        <PhoneButtonView>
          <Button color="#84D269">
            <Foundation name="telephone" size={22} color="white" />
          </Button>
        </PhoneButtonView>
      </ButtonsWrapper>
    </PatientDetails>
    <PatientAppointments>
      <Container>
        <ApointmentCard>
          <MoreBtn>
            <Ionicons name="md-more" size={24} color="rgba(0,0,0,0.4)" />
          </MoreBtn>
          <ApointmentCardRow>
            <Ionicons name="ios-medical" size={16} color="#A3A3A3" />
            <ApointmentCardLbl>
              Зуб:
              <Text style={{ fontWeight: '600' }}> 12</Text>
            </ApointmentCardLbl>
          </ApointmentCardRow>
          <ApointmentCardRow>
            <Foundation name="clipboard-notes" size={16} color="#A3A3A3" />
            <ApointmentCardLbl>
              Диагноз:
              <Text style={{ fontWeight: '600' }}> пульпит</Text>
            </ApointmentCardLbl>
          </ApointmentCardRow>
          <ApointmentCardRow style={{ justifyContent: 'space-between', marginTop: 15 }}>
            <Badge active style={{ width: 160 }}>
              11.10.2020 - 15:40
            </Badge>
            <Badge style={{ width: 80 }} color="green">
              1100uah
            </Badge>
          </ApointmentCardRow>
        </ApointmentCard>
      </Container>
    </PatientAppointments>
  </View>
);

PatientScreen.navigationOptions = {
  title: 'Карта Пациента',
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
  padding: 25px;
  background: #fff;
  flex: 1;
`;
const PatientDetails = styled(Container)`
  flex: 0.3;
`;

const PatientFullname = styled.Text`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 5px;
`;
const ButtonsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
const FormulaButtonView = styled.View`
  flex: 1;
`;
const PhoneButtonView = styled.View`
  width: 45px;
  margin-left: 10px;
`;
const PatientAppointments = styled.View`
  flex: 1;
  background: #f7f9fb;
`;
const ApointmentCard = styled.View`
  padding: 12.5px 20px;
  shadow-color: #ccc;
  elevation: 0.6;
  shadow-opacity: 0.4;
  shadow-radius: 5;
  border-radius: 10px;
  background: #fff;
`;
const ApointmentCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 7.5px;
  margin-top: 7.5px;
`;
const ApointmentCardLbl = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;
const MoreBtn = styled.TouchableOpacity`
  position: absolute;
  right: 25px;
  top: 15px;
`;
export default PatientScreen;
