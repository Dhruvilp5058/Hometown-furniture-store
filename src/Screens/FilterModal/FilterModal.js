import React, { useCallback, useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import Style from './StyleSheet';
import { Dropdown } from 'react-native-element-dropdown';
import { FunnelSimple, X } from 'phosphor-react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
const filterOption = [
  { label: 'All', value: 'All' },
  { label: 'Chair', value: 'Chair' },
  { label: 'Sofa', value: 'Sofa' },
  { label: 'Bed', value: 'Bed' },
  { label: 'Armchair', value: 'Armchair' },
];

const FilterModal = ({ isVisible, onClose, applyFilter }) => {
  const [selectedValue, setSelectedValue] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 600]);
  const resetFilter = () => {
    setSelectedValue('All');
    setPriceRange([0, 600]);
    applyFilter('All', 0, 600);
    onClose();
  };
  const applyAndCloseModal = () => {
    applyFilter(selectedValue, priceRange[0], priceRange[1]);
    onClose();
  };
 
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={Style.blur}>
        <View style={Style.Main}>
        <TouchableOpacity onPress={onClose} style={Style.iconbtn}>
        <X size={25} weight='bold' style={Style.iconclose} />
        </TouchableOpacity>
          <Text style={Style.txtselecttype} >Selected Type</Text>
          <Dropdown
            style={[Style.dropdown]}
            selectedTextStyle={Style.selectedTextStyle}
            itemTextStyle={{color:'black'}}
            iconStyle={Style.iconStyle}
            containerStyle={Style.containerStyle}
            data={filterOption}
            maxHeight={300}
            labelField="label"
            valueField="value"
            value={selectedValue}
            onChange={(item) => {
              setSelectedValue(item.value);
            }}
            renderLeftIcon={() => <FunnelSimple style={Style.icon} size={20} />}
          />
          <View style={{ alignItems: 'center' }}>
            <Text style={Style.maxprice}>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
            <MultiSlider
              values={priceRange}
              sliderLength={300}
              min={0}
              max={400}
              onValuesChange={(values) => setPriceRange(values)}
              minMarkerOverlapDistance={20}
              selectedStyle={Style.multuslider}
              unselectedStyle={{ backgroundColor: 'black' }}
              containerStyle={{ marginTop: 20, }}
              allowOverlap={false}
              snapped={true}
              markerStyle={Style.markerstyle}
              
              
            />
          </View>
          <View style={Style.btnview}>
          <TouchableOpacity
            style={Style.btnaplly}
            onPress={applyAndCloseModal}>
            <Text style={Style.txtaplly}>Apply Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.btnreset} onPress={resetFilter}>
            <Text style={Style.txtreset}>Reset</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
