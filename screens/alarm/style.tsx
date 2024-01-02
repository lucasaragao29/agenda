import styled from 'styled-components/native'

export const Container = styled.View`
flex:1;
justify-content:center;
align-items:center;
background-color:#f1f6ce;
`;
export const ContAlarm = styled.View`
background-color: #ccc;
height: 500px;
width: 350px;
justify-content: flex-start;
flex-direction:row;
bottom:10px;
`;
export const Txt = styled.Text`
font-size: 30px;
margin-right:40px;
`;
export const Switch = styled.Switch`
`;
export const ContTaf = styled.View`
flex-direction: column;
background-color:red;
height:100px;
width:350px;
margin-top:5px;
`;
export const IconAddCont = styled.TouchableOpacity`
position:fixed;
left:150px;
top:10px;
`;
export const TimeSwitch = styled.View`
flex-direction: row;
justify-content: space-between;
`;