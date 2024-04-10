import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { CaretLeft } from 'phosphor-react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import ToggelSwitch from '../../component/Toggel_Switch/ToggelSwitch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './stylesheet';

const NotificationScreen = () => {
  const navigation = useNavigation();
  const [enbleproduct, setenbleproduct] = useState(false);
  const [enblecomments, setenblecomments] = useState(false);
  const [enbleupdate, setenbleupdate] = useState(false);
  const [enblenotification, setenblenotification] = useState(false);

 useFocusEffect(
   useCallback(() => {
    const loadSwitchState = async () => {
      try {
        const productState = await AsyncStorage.getItem('enbleproduct');
        if (productState !== null) {
          setenbleproduct(JSON.parse(productState));
        }
        
        const commentsState = await AsyncStorage.getItem('enblecomments');
        if (commentsState !== null) {
          setenblecomments(JSON.parse(commentsState));
        }
        
        const updateState = await AsyncStorage.getItem('enbleupdate');
        if (updateState !== null) {
          setenbleupdate(JSON.parse(updateState));
        }

        const notificationState = await AsyncStorage.getItem('enblenotification');
        if (notificationState !== null) {
          setenblenotification(JSON.parse(notificationState));
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadSwitchState();
  }, []))

  return (
    <View style={style.main}>
      <View style={style.blue}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={style.iconback}>
          <CaretLeft size={40} weight="bold" color="white" />
        </TouchableOpacity>
        <Text style={style.txtnotification}>Notification</Text>
      </View>
      <View style={style.viewlist}>
        <View>
          <Text style={style.txtproduct}>Product Update</Text>
          <ToggelSwitch value={enbleproduct} onValueChange={setenbleproduct} storageKey="enbleproduct" />
          <Text style={style.txtdetailproduct}>Stair Gifts Free the freedom of your home</Text>
        </View>
        <View>
          <Text style={style.txtproduct}>Comments</Text>
          <ToggelSwitch value={enblecomments} onValueChange={setenblecomments} storageKey="enblecomments" />
          <Text style={style.txtdetailproduct}>Stair Gifts Free the freedom of your home</Text>
        </View>
        <View>
          <Text style={style.txtproduct}>Other Update</Text>
          <ToggelSwitch value={enbleupdate} onValueChange={setenbleupdate} storageKey="enbleupdate" />
          <Text style={style.txtdetailproduct}>Stair Gifts Free the freedom of your home</Text>
        </View>
        <View>
          <Text style={style.txtcomment}>Notifications</Text>
          <ToggelSwitch value={enblenotification} onValueChange={setenblenotification} storageKey="enblenotification" />
          <Text style={style.txtdetailcomment}>Stair Gifts Free the freedom of your home</Text>
        </View>
      </View>
      
    </View>
  );
};


export default NotificationScreen;
