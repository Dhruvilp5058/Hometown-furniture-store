import React, { useCallback, useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Style from './StyleSheet';
import { Dropdown } from 'react-native-element-dropdown';
import { FunnelSimple, X } from 'phosphor-react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { verticalScale } from '../Metrics';
const filterOption = [
  { label: 'All', value: 'All' },
  { label: 'Chair', value: 'Chair' },
  { label: 'Sofa', value: 'Sofa' },
  { label: 'Bed', value: 'Bed' },
  { label: 'Armchair', value: 'Armchair' },
];

const FilterModal = ({ isVisible, onClose, applyFilter }) => {
  const [selectedValue, setSelectedValue] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 36000]);
  const resetFilter = () => {
    setSelectedValue('All');
    setPriceRange([0, 36000]);
    applyFilter('All', 0, 36000);
    onClose();
  };
  const applyAndCloseModal = () => {
    applyFilter(selectedValue, priceRange[0], priceRange[1]);
    onClose();
  };


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={Style.blur}>
          <TouchableWithoutFeedback>
            <View style={Style.Main}>
              <TouchableOpacity onPress={onClose} style={Style.iconbtn}>
                <X size={25} weight='bold' style={Style.iconclose} />
              </TouchableOpacity>
              <Text style={Style.txtselecttype} >Selected Type</Text>
              <Dropdown
                style={[Style.dropdown]}
                selectedTextStyle={Style.selectedTextStyle}
                itemTextStyle={{ color: 'black' }}
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
              <View style={{ alignItems: 'center',}}>
                <Text style={Style.maxprice}>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
                <MultiSlider
                  values={priceRange}
                  sliderLength={300}
                  min={0}
                  max={36000}
                  onValuesChange={(values) => setPriceRange(values)}
                  minMarkerOverlapDistance={20}
                  selectedStyle={Style.multuslider}
                  unselectedStyle={{ backgroundColor: 'grey' }}
                  containerStyle={{ marginTop: verticalScale(20), }}
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
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default FilterModal;
