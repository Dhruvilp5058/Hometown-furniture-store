import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
  Alert,
  BackHandler,
  FlatList,
  Keyboard,
  StatusBar,
  View
} from 'react-native';
import Colors from '../../../assets/Colour/colour';
import { images } from '../../../assets/image';
import HomeFLatlist from '../../component/FLatList/HomeScreen/HomeFLatlist';
import HomeHeader from '../../component/Header/HomeScreen/HomeHeader';
import stylesheet from './styleSheet';

const HomeScreen = () => {
  const Detail = [
    {
      id: 1,
      type: 'Chair',
      image: images.imgpchair,
      price: '9000',
    },
    {
      id: 2,
      type: 'Sofa',
      image: images.imgsofa,
      price: '20000',
    },
    {
      id: 3,
      type: 'Bed',
      image: images.imgbed,
      price: '18000',
    },
    {
      id: 4,
      type: 'Chair',
      image: images.imgchair,
      price: '12000',
    },
    {
      id: 5,
      type: 'sofa',
      image: images.imglsofa,
      price: '20000',
    },
    {
      id: 6,
      type: 'Bed',
      image: images.imgbed2,
      price: '5000',
    },
    {
      id: 7,
      type: 'ArmChair',
      image: images.imgpchair,
      price: '10000',
    },
    {
      id: 8,
      type: 'Table',
      image: images.imgtable,
      price: '15000',
    },
    {
      id: 9,
      type: 'Daining Table',
      image: images.imgdtable,
      price: '35000',
    },
  ];
  const [isModalVisible, setModalVisible] = useState(false);
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
        typeof item.price === 'string' ? parseFloat(item.price) : item.price;
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
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={stylesheet.main}>
      <StatusBar backgroundColor={Colors.primarycolour} />
      <HomeHeader
        {...{
          setSearch,
          isModalVisible,
          closeModal,
          applyFilter,
          openModal,
        }}
      />

      <FlatList
        data={filterData}
        onScrollBeginDrag={() => Keyboard.dismiss()}
        keyboardDismissMode="on-drag"
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <HomeFLatlist {...{ navigation, item }} />
        )}
      />
    </View>
  );
};

export default HomeScreen;
