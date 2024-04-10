import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import style from './stylesheet';
import {CaretLeft} from 'phosphor-react-native';
import BottomSheet from 'react-native-raw-bottom-sheet';
import OrderDetail from './OrderDetail';

const MyOrder = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const bottomSheetRef = useRef(null);
  const openBottomSheet = (item) => {
    setSelectedItem(item); 
    console.log(item);
    if (bottomSheetRef.current) {
      bottomSheetRef.current.open();
    }
  };
  const rdata = useSelector(state => state.counter.cartvalue);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (Array.isArray(rdata)) {
      const flattenedData = rdata.reduce((acc, val) => acc.concat(val), []);
      setProducts(flattenedData);
    } else if (rdata) {
      setProducts([rdata]);
    } else {
      setProducts([]);
    }
  }, [rdata]);
  const navigation = useNavigation();
  return (
    <View style={style.Main}>
      <View style={style.myorderview}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={style.iconback}>
          <CaretLeft size={40} weight="bold" color="white" />
        </TouchableOpacity>
        <Text style={style.myorder}>My Order</Text>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableWithoutFeedback onPress={() => openBottomSheet(item)}>
            <View style={{flex: 1}}>
              <View style={style.flatlist}>
                <Image style={style.image} source={item.image} />
                <View style={style.txtview}>
                  <Text style={style.txttype}>{item?.type ?? []}</Text>
                  <Text style={style.txttype}>{item?.price ?? []}</Text>
                </View>
                <View style={style.viewqty}>
                  <Text style={style.come}>coming soon</Text>
                  {item.qty == null ? (
                    <Text style={style.txtqty}>Qty:1</Text>
                  ) : (
                    <Text style={style.txtqty}>Qty:{item?.qty ?? []}</Text>
                  )}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
      <BottomSheet ref={bottomSheetRef} height={400}>
      {selectedItem && <OrderDetail itemdata={selectedItem} />}
      </BottomSheet>
    </View>
  );
};

export default MyOrder;
