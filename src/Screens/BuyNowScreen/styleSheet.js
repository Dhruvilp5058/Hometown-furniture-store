import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../Metrics';
import Colors from '../../../assets/Colour/colour';

const style = StyleSheet.create({
  Main: {
    flex: 1,
    borderRightColor: Colors.backgroundScreen,
  },
  blueview: {
    backgroundColor: Colors.primarycolour,
  },
  btnback: {
    zIndex: 1,
    width: 10,
  },
  backicon: {
    top: verticalScale(13),
    left: horizontalScale(8),
  },
  txtmycart: {
    fontSize: moderateScale(24),
    color: Colors.backgroundScreen,
    fontWeight: '900',
    textAlign: 'center',
    bottom: verticalScale(20),
  },
  itemview: {
    elevation: 8,
    shadowColor: Colors.shadowcolour,
    marginHorizontal: horizontalScale(25),
    marginTop: verticalScale(20),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(20),
    backgroundColor: Colors.backgroundScreen,
  },
  rowview: {
    flexDirection: 'row',
  },
  imageview: {
    flex: 0.35,
    elevation: 2,
    backgroundColor: Colors.backgroundScreen,
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    marginLeft: verticalScale(10),
  },
  itmimage: {
    height: verticalScale(90),
    width: horizontalScale(90),
    aspectRatio: 1,
    marginLeft: horizontalScale(15),
    borderRadius:moderateScale(10)
  },
  txttype: {
    color: Colors.blackcolour,
    fontSize: moderateScale(25),
    fontWeight: '600',
    left: horizontalScale(25),
  },
  txtprice: {
    color: Colors.blackcolour,
    fontSize: moderateScale(25),
    fontWeight: '900',
    top: verticalScale(42),
    left: horizontalScale(25),
  },
  offerview: {
    marginTop: verticalScale(30),
    marginHorizontal: horizontalScale(25),
    paddingVertical: verticalScale(15),
    flexDirection: 'row',
    elevation: 1,
    backgroundColor: Colors.backgroundScreen,
    borderRadius: moderateScale(15),
  },
  txtoffer: {
    fontSize: moderateScale(25),
    color: Colors.blackcolour,
    left: horizontalScale(15),
  },
  addcodebtn: {
    left: horizontalScale(195),
    top: verticalScale(5),
  },
  addcode: {
    color: Colors.shadowcolour,
  },
  ordersummry: {
    marginTop: verticalScale(20),
    elevation: 1,
    marginHorizontal: horizontalScale(25),
    backgroundColor: Colors.backgroundScreen,
    borderRadius: moderateScale(15),
    paddingTop: verticalScale(15),
    paddingBottom: verticalScale(15),
  },
  txtordersummery: {
    fontSize: moderateScale(20),
    color: Colors.blackcolour,
    left: horizontalScale(30),
    fontWeight:'600'
  },
  orderview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20),
    marginTop: verticalScale(30),
  },
  txtorder: {
    color: Colors.blackcolour,
    fontSize: moderateScale(25),
  },
  orderprice: {
    color: Colors.blackcolour,
    fontSize: moderateScale(25),
  },
  Delivery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20),
    marginTop: verticalScale(10),
  },
  txtdil: {
    color: Colors.blackcolour,
    fontSize: moderateScale(25),
  },
  txtdilprice: {
    color:Colors.blackcolour,
    fontSize: moderateScale(20),
    top: verticalScale(4),
  },
  totalprice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20),
    marginTop: verticalScale(10),
  },
  txttotal: {
    color: Colors.blackcolour,
    fontSize: moderateScale(25),
  },
  txttotalprice: {
    color: Colors.blackcolour,
    fontSize: moderateScale(25),
    fontWeight: '900',
  },
  addressview: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(25),
    elevation: 1,
    backgroundColor: Colors.backgroundScreen,
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(15),
  },
  adress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20),
  },
  txtadress: {
    color: Colors.blackcolour,
    fontWeight: '800',
    fontSize:moderateScale(20)
  },
  addadress: {
    color: Colors.blackcolour,
    fontSize: moderateScale(15),  
    top:verticalScale(3),
    fontWeight:'500'
  },
  btnpaynow: {
    borderWidth: 1,
    marginHorizontal: horizontalScale(35),
    borderRadius: moderateScale(18),
    marginTop: verticalScale(100),
    paddingVertical: verticalScale(8),
    backgroundColor: Colors.primarycolour,
    bottom:verticalScale(20)
  },
  txtpaynow: {
    textAlign: 'center',
    fontSize: moderateScale(25),
    color: Colors.backgroundScreen,
    fontWeight:'600'
  },
});
export default style;
