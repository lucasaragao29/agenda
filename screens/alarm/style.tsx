import styled from 'styled-components/native'

export const Container = styled.View`
flex:1;
justify-content:center;
align-items:center;
background-color:#f1f6ce;
`;
export const ContAlarm = styled.View`
background-color: #ccc;
height: 470px;
width: 370px;
justify-content: center;
align-items: center;
flex-direction:row;
bottom:50px;
`;
export const Txt = styled.Text`
font-size: 30px;
margin-right:40px;
`;
export const Switch = styled.Switch`
`;
export const IconAddCont = styled.TouchableOpacity`
position:fixed;
left:150px;
bottom:10px;
`;