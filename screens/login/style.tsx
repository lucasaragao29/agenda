import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #0D0F36;
  flex: 1;
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: end;
`;
export const ContInpt = styled.View`
  background-color: #294380;
  height: 500px;
  border-radius: 15px 15px 0 0;
  align-items: center;
  justify-content: center;
`;
export const EmailInput = styled.TextInput`
  width: 370px;
  height: 70px;
  background: #FFE;
  margin: 0 10px 50px 10px;
  border-radius: 15px;
`;
export const SenhaInput = styled.TextInput`
width: 370px;
height: 70px;
background: #FFE;
margin: 20px 10px 50px 10px;
border-radius: 15px;
`;
export const BtnLogin = styled.TouchableOpacity`
width: 140px;
height: 60px;
border-radius: 15px;
background: #8FFF37;
justify-content: center;
`;
export const BtnTxt = styled.Text`
font-size: 30px;
color: black;
`;
export const Txt = styled.Text`
font-size: 20px;
margin-top: 15px;
`;

