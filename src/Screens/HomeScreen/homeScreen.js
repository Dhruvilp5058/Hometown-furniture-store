import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  BackHandler,
  Alert,
  Keyboard,
} from 'react-native';
import stylesheet from './styleSheet';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  Heart,
  MagnifyingGlass,
  Minus,
  Plus,
  SlidersHorizontal,
} from 'phosphor-react-native';
import {images} from '../../../assets/image';
import {DataContext} from '../DataProvider/DataProvider';
import FilterModal from '../FilterModal/FilterModal';

const HomeScreen = () => {
  const Detail = [
    {
      id: 1,
      type: 'Chair',
      image: images.img2,
      price: '$350',
    },
    {
      id: 2,
      type: 'Sofa',
      image: images.img3,
      price: '$320',
    },
    {
      id: 3,
      type: 'Bed',
      image: images.img4,
      price: '$310',
    },
    {
      id: 4,
      type: 'Chair',
      image: images.img2,
      price: '$600',
    },
    {
      id: 5,
      type: 'sofa',
      image: images.img3,
      price: '$80',
    },
    {
      id: 6,
      type: 'Bed',
      image: images.img4,
      price: '$90',
    },
    {
      id: 7,
      type: 'ArmChair',
      image: images.img1,
      price: '$500',
    },
    {
      id: 8,
      type: 'Armchair',
      image: images.img1,
      price: '$300',
    },
  ];
  const {getData} = useContext(DataContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [cart, setCart] = useState({});
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState([]);
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      let filtered = Detail.filter(item =>
        item.type.toLowerCase().includes(search.toLowerCase()),
      );

      if (selectedFilter !== 'All') {
        filtered = filtered.filter(
          item => item.type.toLowerCase() === selectedFilter.toLowerCase(),
        );
      }

      setFilterData(filtered);
    }, [search, selectedFilter]),
  );
  const applyFilter = (filter, minPrice, maxPrice) => {
    setSelectedFilter(filter);

    let filtered = Detail.filter(item => {
      let itemPrice =
        typeof item.price === 'string'
          ? parseFloat(item.price.replace('$', ''))
          : item.price;
      return itemPrice >= minPrice && itemPrice <= maxPrice;
    });

    if (filter !== 'All') {
      filtered = filtered.filter(
        item => item.type.toLowerCase() === filter.toLowerCase(),
      );
    }

    setFilterData(filtered);
    closeModal();
  };
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert('Confirm exit', 'Are you sure you want to exit the app?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  const increaseCount = async item => {
    const updatedCart = {...cart};
    updatedCart[item.id] = (updatedCart[item.id] || 1) + 1;
    setCart(updatedCart);
    getData(updatedCart);
  };

  const decreaseCount = item => {
    const updatedCart = {...cart};
    if (updatedCart[item.id] && updatedCart[item.id] > 0) {
      updatedCart[item.id] -= 1;
      setCart(updatedCart);
      getData(updatedCart);
    }
  };
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={stylesheet.main}>
      <StatusBar backgroundColor={'rgb(0, 172, 255)'} />
      <View style={stylesheet.blueView}>
        <MagnifyingGlass size={30} style={stylesheet.mglass} />
        <TextInput
          style={stylesheet.searchtxt}
          placeholder="Search...."
          placeholderTextColor={'purple'}
          onChangeText={newtext => setSearch(newtext)}
        />
        <FilterModal
          isVisible={isModalVisible}
          onClose={closeModal}
          applyFilter={applyFilter}
        />
        <TouchableOpacity onPress={() => openModal()}>
          <SlidersHorizontal size={32} style={stylesheet.iconheart} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filterData}
        onScrollBeginDrag={() => Keyboard.dismiss()}
        keyboardDismissMode="on-drag"
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={2}
            onPress={() => navigation.navigate('DetailScreen', {item: item})}>
            <View style={stylesheet.itemview}>
              <Image source={item.image} style={stylesheet.imageitem} />
              <Text style={stylesheet.txttype}>{item.type}</Text>
              <View style={stylesheet.iconview}>
                <TouchableOpacity
                  activeOpacity={0.4}
                  onPress={() => decreaseCount(item)}>
                  <Minus size={25} style={{right: 10, top: 5}} weight="bold" />
                </TouchableOpacity>
                <Text style={stylesheet.icontxt}>{cart[item.id] || 1}</Text>
                <TouchableOpacity
                  activeOpacity={0.4}
                  onPress={() => increaseCount(item)}>
                  <Plus size={25} style={{left: 10, top: 5}} weight="bold" />
                </TouchableOpacity>
              </View>
              <Text style={stylesheet.txtofferprice}>$79</Text>
              <Text style={stylesheet.txtprice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
