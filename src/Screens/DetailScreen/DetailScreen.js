import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import styleDetilScreen from './styledetailScreen';
import { CaretLeft, Heart, ShoppingCart} from 'phosphor-react-native';
import { useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const DetailScreen = props => {
  useEffect(() => {
    // Load data from AsyncStorage when component mounts
    const loadData = async () => {
      try {
        const existingItems = await AsyncStorage.getItem('@favItem');
        if (existingItems) {
          const items = JSON.parse(existingItems);
          if (items[item.id]) {
            setFocus(true);
          }
        }
      } catch (error) {
        console.log('Error loading data from AsyncStorage:', error);
      }
    };

    loadData();
  }, []);
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;
  const [Focus, setFocus] = useState(false);
  const setItemData = async () => {
    try {
      const existingItems = await AsyncStorage.getItem('@cartItems');
      let items = {};
      if (existingItems) {
        items = JSON.parse(existingItems);
      }
      items[item.id] = item;
      await AsyncStorage.setItem('@cartItems', JSON.stringify(items));
      console.log('set item====', items);
    } catch (error) {
      console.error('Error storing item: ', error);
    }
  };
  const favItemData = async item => {
    try {
      setFocus(!Focus);
      const existingItems = await AsyncStorage.getItem('@favItem');
      let items = {};
      if (existingItems) {
        items = JSON.parse(existingItems);
      }
      if (Focus && items[item.id]) {
        delete items[item.id];
      } else {
        items[item.id] = item;
      }
      await AsyncStorage.setItem('@favItem', JSON.stringify(items));
      console.log('Store Fav Item', items);
    } catch (e) {
      console.log('error storing item', e);
    }
  };
 
  return (
    <ScrollView style={styleDetilScreen.Main}>
      <StatusBar backgroundColor={'rgb(0, 172, 255)'} />
      <View style={styleDetilScreen.blueview}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <CaretLeft size={40} color="white" weight="bold" />
        </TouchableOpacity>
      </View>
      <Image style={styleDetilScreen.itemimage} source={item.image} />
      <View style={styleDetilScreen.itemview}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styleDetilScreen.txttype}>{item.type}</Text>
            <Text style={styleDetilScreen.txtprice}>{item.price}</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity
              style={styleDetilScreen.iconitem}
              onPress={() => favItemData(item)}>
              <Heart
                size={60}
                weight={Focus ? 'fill' : 'regular'}
                color={Focus ? 'red' : 'black'}
              />
            </TouchableOpacity>

            <TouchableOpacity
            
              style={styleDetilScreen.btnitem}>
              <Text style={styleDetilScreen.btntxt}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styleDetilScreen.txtdec}>Description</Text>
      <Text style={styleDetilScreen.decdetail}>
        this product is very good owowmwmmoifiowfmiwwmiwfm{'.\n'}
        cncjnncncjcnjcncnncjncnjnjcnjcnad{'\n'}
        nccjncjcncjnjcnnnkssaasssvsv{',\n'}
        wfmwiomnfwfmwwmifmwfmsss{'.\n'}wfimfifmiwmm
      </Text>
      
      <TouchableOpacity
        style={styleDetilScreen.addcartbtn}
        onPress={() => setItemData()}> 
        <Text style={styleDetilScreen.addcarttxt}>Add to cart</Text>
      </TouchableOpacity>
      <ShoppingCart size={30} style={styleDetilScreen.iconcart} />
    
    </ScrollView>
  );
};

export default DetailScreen;
