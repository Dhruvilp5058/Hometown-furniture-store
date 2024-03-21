import {StyleSheet} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../Metrics';

const style = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: 'rgb(0, 172, 255)',
  },
  blueview: {
    backgroundColor: 'rgb(0, 172, 255)',
    paddingBottom: '10%',
  },
  editview: {
    flexDirection: 'row',
  },
  backarrow: {
    marginLeft: '2%',
  },
  txteditprofile: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    marginLeft: '5%',
  },
  btnedit: {
    marginLeft: '80%',
    top: '23%',
    justifyContent: 'center',
    position: 'absolute',
  },
  btnsave: {
    marginLeft: '79%',
    top: '23%',
    justifyContent: 'center',
    position: 'absolute',
  },
  txtsave: {
    fontWeight: '700',
    color: 'white',
    fontSize: 18,
  },
  iconview: {
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: '35%',
    backgroundColor: 'lightgrey',
    borderRadius: 60,
    paddingVertical: 5,
    marginTop: '8%',
  },
  image: {
    height: verticalScale(114),
    width: horizontalScale(118),
    // aspectRatio:1.5,
    borderRadius:moderateScale(50)
  },
  usericon: {
    top: verticalScale(9),
    color: 'rgb(0, 172, 255)',
  },
  whiteview: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  errormsg:{
    color:'red',
    marginLeft:horizontalScale(35),
    fontSize:moderateScale(15)

  },
  txtlable: {
    marginTop: 15,
    fontSize: 18,
    top: '15%',
    left: '10%',
    color: 'grey',
    fontWeight: '400',
  },
  txtinput: {
    color:'black',
    borderBottomWidth: 1,
    marginHorizontal: '10%',
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 15,
    paddingRight: 10,
  },
  txtgender: {
    marginTop: 15,
    fontSize: 18,
    // top:'15%',
    left: '10%',
    color: 'grey',
    fontWeight: '400',
  },
});
export default style;
