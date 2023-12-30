import styled from 'styled-components/native'

export const Container = styled.View`
flex:1;
justify-content:center;
align-items:center;
background-color:#F1F6CE;
`;

export const Header = styled.View`
background-color: #0D0F36;
heigt:330px;
width:450px;
bottom:25px;
position: fixed;
align-items: center;
border-radius: 0px 0px 50px 50px;
`;
export const Txt = styled.Text`
font-size: 35px;
color: #fff;
padding: 40px;
`;
export const ContList = styled.View`
justify-content: center;
align-items: center;
bottom:35px;
position: relative;
height:390px;
width: 4000px;
`;
export const Lista = styled.View`
background-color: #fff;
justify-content:space-between;
height:100px;
width:400px;
border-radius:0 15px 0 15px;
flex-direction: row;
margin-top:10px;
`;
export const TxtList = styled.Text`
font-size:18px;
`;
export const ContIcon = styled.View`
`;
export const IconAddCont = styled.TouchableOpacity`
position:fixed;
left:150px;
bottom:10px;
`;
