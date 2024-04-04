import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../Metrics';
import Colors from '../../../assets/Colour/colour';

const Style = StyleSheet.create({
  blur: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.9,
    backgroundColor: Colors.shadowcolour,

  },
  iconbtn: {
    alignItems: 'flex-end',
    right: horizontalScale(10),
    alignSelf:'flex-end',
  },
  iconclose: {
    marginLeft: horizontalScale(5),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
  },
  txtselecttype:{
    fontSize:moderateScale(18),
    color:Colors.blackcolour,
    fontWeight:'bold',
    marginLeft:horizontalScale(23),
    marginBottom:verticalScale(6)
  },
  Main: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
    marginVertical: verticalScale(160),
    marginHorizontal: horizontalScale(25),
    borderRadius: moderateScale(20),
    elevation: 10,
    shadowColor: Colors.shadowcolour,
  },
  btnFilter: {
    borderWidth: 1,
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(25),
    paddingVertical: verticalScale(5),
    backgroundColor: Colors.primarycolour,
  },
  txtFilter: {
    textAlign: 'center',
    fontSize: moderateScale(25),
    color: Colors.backgroundScreen,
    fontWeight: '800',
    justifyContent: 'center',
  },
  btnview: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  btnaplly: {
    borderWidth: 1,
    backgroundColor: Colors.primarycolour,
    borderRadius: moderateScale(25),
    paddingVertical: verticalScale(15),
    marginTop: verticalScale(50),
    paddingHorizontal: horizontalScale(10),
    marginHorizontal: horizontalScale(20),
  },
  txtaplly: {
    textAlign: 'center',
    fontSize: moderateScale(20),
    color: Colors.backgroundScreen,
    fontWeight: '900',
  },
  btnreset: {
    borderWidth: 1,
    backgroundColor:Colors.primarycolour,
    borderRadius: moderateScale(25),
    paddingVertical: verticalScale(15),
    marginTop: verticalScale(50),
    paddingHorizontal: horizontalScale(25),
    marginHorizontal: horizontalScale(20),
  },
  txtreset: {
    textAlign: 'center',
    fontSize: moderateScale(20),
    color: Colors.backgroundScreen,
    fontWeight: '900',
  },
  dropdown: {
    height: verticalScale(45),
    borderColor: Colors.backgroundScreen,
    borderWidth: 2,
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
    color:Colors.blackcolour
  },
  iconStyle: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
  containerStyle:{
    borderRadius:moderateScale(10),
    width:horizontalScale(280),
    height:verticalScale(150),
    // fontSize:moderateScale(10)
  },
  maxprice: {
    fontSize: moderateScale(20),
    color: Colors.blackcolour,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: verticalScale(50),
  },
  multuslider: {
    backgroundColor: Colors.primarycolour,
    borderColor: Colors.primarycolour,
    borderBottomWidth:6,
    
    
  },
  markerstyle:{
    top:verticalScale(3),
    padding:9,
    
  }
});
export default Style;
