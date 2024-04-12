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
      discription:'Introducing the epitome of comfort and style, our Chair  is designed to elevate your seating experience to new heights. Crafted with precision and passion, this chair seamlessly blends contemporary aesthetics with unparalleled functionality.'
    },
    {
      id: 2,
      type: 'Sofa',
      image: images.imgsofa,
      price: '20000',
      discription:'Introducing our Sofa , where comfort meets elegance. Sink into luxury with its plush cushions and sleek design. Perfect for lounging or entertaining guests, this sofa adds a touch of sophistication to any living space. Experience the epitome of relaxation with our Sofa  today.'
    },
    {
      id: 3,
      type: 'Bed',
      image: images.imgbed,
      price: '18000',
      discription:' Introducing our Bed , where dreams meet design. Crafted for comfort and style, this bed transforms your bedroom into a sanctuary of relaxation. With its sturdy construction and timeless appeal, it Elevate your sleep experience with our Bed  today.'
    },
    {
      id: 4,
      type: 'Chair',
      image: images.imgchair,
      price: '12000',
      discription:'Introducing our versatile  Chair , the ultimate space-saving solution. Seamlessly transitioning from a cozy chair to a comfortable bed, its perfect for small spaces or overnight guests. With its modern design and premium comfort, its a stylish addition to any room. Experience the convenience and comfort of our Chair today.'
    },
    {
      id: 5,
      type: 'sofa',
      image: images.imglsofa,
      price: '20000',
      discription:'Introducing our Sofa , the perfect blend of style and functionality. Designed to complement your living space, it offers a versatile surface for decor and convenience. With its sleek design and sturdy build, its a stylish addition to any sofa ensemble. Elevate your living room with our Sofa   today.'
    },
    {
      id: 6,
      type: 'Bed',
      image: images.imgbed2,
      price: '5000',
      discription:'Introducing our Bed, where dreams find their sanctuary. Crafted for optimal comfort and style, it s a haven for rest and rejuvenation. With its durable build and timeless design, it transforms any bedroom into a retreat of tranquility. Elevate your sleep experience with our Bed today.'
    },
    {
      id: 7,
      type: 'ArmChair',
      image: images.imgpchair,
      price: '10000',
      discription:'Introducing our Armchair , the epitome of convenience and style. Designed to accompany your favorite armchair, it provides a convenient surface for beverages, books, or snacks. With its compact size and elegant design, it adds a touch of sophistication to any seating area. Enhance your relaxation space with our Armchair Table today.'
    },
    {
      id: 8,
      type: 'Table',
      image: images.imgtable,
      price: '15000',
      discription:'Introducing our Armchair , where relaxation meets refinement. Designed for both comfort and style, its the perfect spot to unwind after a long day. With its sleek silhouette and plush cushions, it adds a touch of elegance to any room. Elevate your lounging experience with our Armchair  today.'
    },
    {
      id: 9,
      type: 'Daining Table',
      image: images.imgdtable,
      price: '35000',
      discription:'Introducing our Dining Table , where meals become memories. Crafted with quality materials and stylish design, its the centerpiece of every gathering. With ample space and durability, it invites family and friends to share laughter and stories. Transform your dining experience with our Dining Table  today.'
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
