import {MagnifyingGlass, SlidersHorizontal} from 'phosphor-react-native';
import React from 'react';
import {TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import FilterModal from '../../../Screens/FilterModal/FilterModal';
import stylesheet from '../../../Screens/HomeScreen/styleSheet';

const HomeHeader = ({
  setSearch,
  isModalVisible,
  closeModal,
  applyFilter,
  openModal,
}) => {
  return (
    <View style={stylesheet.blueView}>
      <View style={stylesheet.viewsearch}>
        <MagnifyingGlass size={30} style={stylesheet.mglass} />
        <TextInput
          style={stylesheet.searchtxt}
          placeholder="Search...."
          placeholderTextColor={'purple'}
          onChangeText={(newtext) => setSearch(newtext)}
        />
        <FilterModal
          isVisible={isModalVisible}
          onClose={closeModal}
          applyFilter={applyFilter}
        />
        <TouchableOpacity
          onPress={() => openModal()}
          style={stylesheet.btnfilter}>
          <SlidersHorizontal size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
