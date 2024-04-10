import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Style from './StyleSheet';
import {Dropdown} from 'react-native-element-dropdown';
import {FunnelSimple, X} from 'phosphor-react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {verticalScale} from '../Metrics';
const filterOption = [
  {label: 'All', value: 'All'},
  {label: 'Chair', value: 'Chair'},
  {label: 'Sofa', value: 'Sofa'},
  {label: 'Bed', value: 'Bed'},
  {label: 'Armchair', value: 'Armchair'},
  {label: 'Table', value: 'Table'},
  {label: 'Daining Table', value: 'Daining Table'},
];

const FilterModal = ({isVisible, onClose, applyFilter}) => {
  const [selectedValue, setSelectedValue] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 36000]);
  const [minPrice, setminPrice] = useState('');
  const [maxPrice, setmaxPrice] = useState('');
  const resetFilter = () => {
    setSelectedValue('All');
    setPriceRange([0, 36000]);
    setminPrice('');
    setmaxPrice('');
    applyFilter('All', 0, 36000);
    onClose();
  };
  const applyAndCloseModal = () => {
    let min = parseFloat(minPrice) || 0;
    let max = parseFloat(maxPrice) || 36000;

    if (!minPrice && !maxPrice) {
      min = priceRange[0];
      max = priceRange[1];
    }

    applyFilter(selectedValue, min, max);
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={Style.blur}>
            <TouchableWithoutFeedback>
              <View style={Style.Main}>
                <TouchableOpacity onPress={onClose} style={Style.iconbtn}>
                  <X size={25} weight="bold" style={Style.iconclose} />
                </TouchableOpacity>
                <Text style={Style.txtselecttype}>Selected Type</Text>
                <Dropdown
                  style={[Style.dropdown]}
                  selectedTextStyle={Style.selectedTextStyle}
                  itemTextStyle={{color: 'black'}}
                  iconStyle={Style.iconStyle}
                  containerStyle={Style.containerStyle}
                  data={filterOption}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={selectedValue}
                  onChange={item => {
                    setSelectedValue(item.value);
                  }}
                  renderLeftIcon={() => (
                    <FunnelSimple style={Style.icon} size={20} />
                  )}
                />
                <Text style={Style.txtpricerenge}>Price Renge</Text>
                <View style={Style.viewinput}>
                  <TextInput
                    style={Style.inputfilter}
                    placeholder="min"
                    placeholderTextColor={'black'}
                    value={minPrice}
                    onChangeText={text => setminPrice(text)}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={Style.inputfilter}
                    placeholder="max"
                    placeholderTextColor={'black'}
                    value={maxPrice}
                    onChangeText={text => setmaxPrice(text)}
                    keyboardType="numeric"
                  />
                </View>
                <View style={Style.pricefilter}>
                  <Text style={Style.maxprice}>
                    {priceRange[0]}₹ - {priceRange[1]}₹
                  </Text>
                  <MultiSlider
                    values={priceRange}
                    min={0}
                    max={36000}
                    onValuesChange={values => setPriceRange(values)}
                    minMarkerOverlapDistance={20}
                    selectedStyle={Style.multuslider}
                    unselectedStyle={{backgroundColor: 'grey'}}
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
                  <TouchableOpacity
                    style={Style.btnreset}
                    onPress={resetFilter}>
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
