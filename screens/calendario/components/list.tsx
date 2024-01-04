import { Text, FlatList } from "react-native";

export default function Lista(){
  const data = [
    { id:'1',texto:'Tarefa dia 1' },
    { id:'2',texto:'Tarefa dia 2'},
    { id:'3',texto:'Tarefa dia 3' },
    { id:'4',texto:'Tarefa dia 3' },
  ];
  type ItemProps = {texto: string}
  const Item = ({texto}: ItemProps) => {
    return (
      <Text style={{fontSize:20}}>
        {texto}
        </Text>
    )}
    return(
      <FlatList
          data={data}
          renderItem={({ item }) => <Item texto={item.texto} />}
          keyExtractor={item => item.id} />
    )
}