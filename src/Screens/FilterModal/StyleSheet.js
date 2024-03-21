import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../Metrics';

const Style = StyleSheet.create({
  blur: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.9,
    backgroundColor: 'lightgrey',
  },
  iconbtn: {
    alignItems: 'flex-end',
    right: horizontalScale(10),
  },
  iconclose: {
    marginLeft: horizontalScale(5),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
  },
  txtselecttype:{
    fontSize:moderateScale(18),
    color:'black',
    fontWeight:'bold',
    marginLeft:horizontalScale(23),
    marginBottom:verticalScale(6)
  },
  Main: {
    zIndex: 1,
    flex: 1,
    backgroundColor: 'white',
    marginVertical: verticalScale(40),
    marginHorizontal: horizontalScale(25),
    marginBottom: verticalScale(170),
    borderRadius: moderateScale(20),
    elevation: 10,
    shadowColor: 'grey',
  },
  btnFilter: {
    borderWidth: 1,
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(25),
    paddingVertical: verticalScale(5),
    backgroundColor: 'rgb(0, 172, 255)',
  },
  txtFilter: {
    textAlign: 'center',
    fontSize: moderateScale(25),
    color: 'white',
    fontWeight: '800',
    justifyContent: 'center',
  },
  btnview: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(135),
  },
  btnaplly: {
    borderWidth: 1,
    backgroundColor: 'rgb(0, 172, 255)',
    borderRadius: moderateScale(25),
    paddingVertical: verticalScale(15),
    marginTop: verticalScale(50),
    paddingHorizontal: horizontalScale(10),
    marginHorizontal: horizontalScale(20),
  },
  txtaplly: {
    textAlign: 'center',
    fontSize: moderateScale(20),
    color: 'white',
    fontWeight: '900',
  },
  btnreset: {
    borderWidth: 1,
    backgroundColor: 'rgb(0, 172, 255)',
    borderRadius: moderateScale(25),
    paddingVertical: verticalScale(15),
    marginTop: verticalScale(50),
    paddingHorizontal: horizontalScale(25),
    marginHorizontal: horizontalScale(20),
  },
  txtreset: {
    textAlign: 'center',
    fontSize: moderateScale(20),
    color: 'white',
    fontWeight: '900',
  },
  dropdown: {
    height: verticalScale(50),
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: moderateScale(8),
    paddingHorizontal: horizontalScale(8),
    marginHorizontal:horizontalScale(22),
  },
  icon: {
    marginRight: horizontalScale(5),
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: horizontalScale(22),
    top: verticalScale(8),
    zIndex: 999,
    paddingHorizontal: horizontalScale(8),
    fontSize: moderateScale(14),
  },
 
  selectedTextStyle: {
    fontSize: moderateScale(16),
    color:'black'
  },
  iconStyle: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
  containerStyle:{
    borderRadius:moderateScale(10),
    // paddingTop:verticalScale(5),
    top:verticalScale(16)
  },
  maxprice: {
    fontSize: moderateScale(20),
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: verticalScale(120),
  },
  multuslider: {
    backgroundColor: 'rgb(0, 172, 255)',
    borderColor: 'rgb(0, 172, 255)',
    borderBottomWidth:6,
    
  },
  markerstyle:{
    top:verticalScale(3),
    padding:9,
    
  }
});
export default Style;
