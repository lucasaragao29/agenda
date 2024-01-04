import {Txt, Header} from '../style'

export default function Head(){
  return(
    <Header style={{
      borderBottomWidth: 5,
      borderLeftWidth: 5,
      borderRightWidth: 5,
      borderBottomColor: '#ccc',
      borderLeftColor: '#ccc',
      borderRightColor: '#ccc'
    }}>
      <Txt>
        Lista de Afazeres
      </Txt>
    </Header>
  )
}