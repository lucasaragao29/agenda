import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #0D0F36;
  flex: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
export const ContInpt = styled.View`
  background-color: #294380;
  height: 450px;
  border-radius: 15px 15px 0 0;
  align-items: center;
  justify-content: center;
`;
export const ContEmail = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
`;
export const ContPassword = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
`;
export const EmailInput = styled.TextInput`
width: 350px;
height: 70px;
background: #FFE;
margin: 20px 0 50px 75px;
border-radius: 15px;
z-index:0;
`;
export const SenhaInput = styled.TextInput`
width: 350px;
height: 70px;
background: #FFE;
margin: 20px 0px 50px 90px;
border-radius: 15px;
z-index:0;
`;
export const BtnLogin = styled.TouchableOpacity`
width: 160px;
height: 60px;
border-radius: 15px;
background: #8FFF37;
justify-content: space-between;
align-items: center;
flex-direction: row;
`;
export const IconContBtn = styled.View`
  background-color: #6FC829;
  height: 60px;
  width: 60px;
  border-radius: 0 15px 15px 0;
  justify-content: center;
  align-items: center;
`;
export const IconCotEmail = styled.View`
background-color:#DBDBCE;
align-items: center;
justify-content: center;
height: 70px;
width: 60px;
z-index:1;
right:60px;
bottom:15px;
border-radius: 0 15px 15px 0;
`;
export const IconCotSenha = styled.View`
background-color:#DBDBCE;
align-items: center;
justify-content: center;
height: 70px;
width: 60px;
z-index:1;
right:60px;
bottom:15px;
border-radius: 0 15px 15px 0;
`;
export const BtnTxt = styled.Text`
font-size: 30px;
color: black;
`;
export const Txt = styled.Text`
font-size: 20px;
margin-top: 15px;
`;
