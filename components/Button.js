import React from 'react';
import styled from 'styled-components/native';
const Button = ({ children, color }) => {
  return (
    <ButtonWrapper color={color}>
      <ButtonTxt>{children}</ButtonTxt>
    </ButtonWrapper>
  );
};
Button.defaultProps = {
  color: '#2a86ff',
};
const ButtonWrapper = styled.TouchableOpacity`
  display: flex;
  border-radius: 30px;
  background: ${(props) => props.color};
  align-items: center;
  justify-content: center;
  height: 45px;
`;
const ButtonTxt = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
export default Button;
