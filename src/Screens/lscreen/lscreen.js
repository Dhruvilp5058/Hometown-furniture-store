import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { AirplaneInFlight } from 'phosphor-react-native';
import Modalfil from './modal';

const Lscreen = () => {
  const [detail, setDetail] = useState({});
  const [modal, setModal] = useState(false);
  const modalopen = () => {
    setModal(true)
  }
  const modalclose = () => {
    setModal(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        const groupedDetail = response.data.products.reduce((acc, item) => {
          if (acc[item.category]) {
            acc[item.category].push(item);
          } else {
            acc[item.category] = [item];
          }
          return acc;
        }, {});
        setDetail(groupedDetail);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const navigation = useNavigation();





  return (
    <View>
      <TouchableOpacity style={{ borderWidth: 1 }} onPress={() => modalopen()}>
        <AirplaneInFlight size={32} />
      </TouchableOpacity>
      <Modalfil isVisible={modal} modalclose={modalclose} />
      <FlatList
        data={Object.keys(detail)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View>

            <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10, color: 'black' }}>{item}</Text>
            <FlatList
              data={detail[item]}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('image', { item })}>
                    <Image style={{ height: 100, width: 100 }} source={{ uri: item.images[0] }} />
                  </TouchableOpacity>
                  <Text style={{ color: 'black' }}>{item.title}</Text>
                  <Text style={{ color: 'black' }}>{item.price}</Text>
                </View>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Lscreen;
