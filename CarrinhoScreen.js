import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { CarrinhoContexto } from '../contextos/CarrinhoContexto';
import { useContext} from 'react';
import { Carrinho } from '../componentes/Carrinho';

export function CarrinhoScreen() {
  //Faz o contexto dos objetosentre as telas
  const [carrinho, setCarrinho] = useContext(CarrinhoContexto);

//Limpa o carrinho
  const comprar = () => {
    setCarrinho([]);
  };

//Soma os preços dos produtos para colocar no valor total
  let total = carrinho.reduce(getTotal, 0);
  function getTotal(total, item) {
    return total + item.preco;
  }

  return (
    <ScrollView>
      <View style={style.responsividade}>
        <FlatList
          data={carrinho}
          renderItem={({ item }) => (
            <Carrinho
              lanche={item.lanche}
              local={item.local}
              preco={item.preco}
            />
          )}
          />
          
          <View style={style.valorCompra}>
        <Text style={style.total}>Total: </Text>
        <Text style={style.total}>R${total.toFixed(2)}</Text>
        </View>
        
          <View style={style.centralizador}>
            <TouchableOpacity style={style.botCompra} onPress={comprar}>
              <Text style={style.textCompra}>Comprar</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  botCompra: {
    borderColor: '#FF0000',
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
    padding: 5,
  },
  textCompra: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FF0000',
  },
  centralizador: {
    alignItems: 'center',
  },
  responsividade: {
    marginBottom: 30,
  },
  valorCompra:{
  margin: 10,
  alignItems: 'center'
  },
  total: {
  fontWeight: 'bold',
  fontSize: 20
  }
});
