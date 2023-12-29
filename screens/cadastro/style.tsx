import styled from "styled-components/native"

export const Container = styled.View`
flex:1;
justify-content:center;
align-items:center;
background-color: #294380;
`;
export const Txt = styled.Text`
font-size: 30px;
color: #FFFFFF;
bottom:20px;
font-family:'Roboto';
`;

export const Input = styled.TextInput`
width: 350px;
height: 70px;
background: #FFE;
margin: 20px 0px 20px 0px;
border-radius: 15px;
`;

export const BtnCadastro = styled.TouchableOpacity`
width: 160px;
height: 60px;
border-radius: 15px;
top:50px;
background: #8FFF37;
justify-content: space-between;
align-items: center;
flex-direction: row;
`;

export const TxtBtn = styled.Text`
font-size: 30px;
color: black;
font-family:'Roboto';
`;

export const IconContBtn = styled.View`
  background-color: #6FC829;
  height: 60px;
  width: 60px;
  border-radius: 0 15px 15px 0;
  justify-content: center;
  align-items: center;
`;