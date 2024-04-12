import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../Metrics';
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
    borderWidth: 1,
    elevation: 8,
    shadowColor: Colors.shadowcolour,
    marginHorizontal: horizontalScale(25),
    marginTop: verticalScale(20),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(20),
    backgroundColor: Colors.backgroundScreen,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    borderRadius: moderateScale(10)
  },
  txtviewmain: {
    justifyContent: 'space-between'
  },
  txttype: {
    color: Colors.blackcolour,
    fontSize: moderateScale(25),
    fontWeight: '600',
    textAlign: 'center'
  },
  txtprice: {
    color: Colors.blackcolour,
    fontSize: moderateScale(25),
    fontWeight: '900',
    textAlign: 'center'
  },
  viewqty: {
    justifyContent: 'center',
    right: horizontalScale(5)
  },
  qty: {
    color: Colors.blackcolour,
    fontSize: moderateScale(20),
    fontWeight: '800',
  },
  offerview: {
    marginTop: verticalScale(30),
    marginHorizontal: horizontalScale(25),
    paddingVertical: verticalScale(15),
    flexDirection: 'row',
    elevation: 1,
    backgroundColor: Colors.backgroundScreen,
    borderRadius: moderateScale(15),
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20)
  },
  txtoffer: {
    fontSize: moderateScale(25),
    color: Colors.blackcolour,
  },
  addcodebtn: {
    justifyContent: 'center',
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
    fontWeight: '600'
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
    color: Colors.blackcolour,
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
    fontSize: moderateScale(20)
  },
  addadress: {
    color: Colors.blackcolour,
    fontSize: moderateScale(15),
    top: verticalScale(3),
    fontWeight: '500'
  },
  viewbtn: {
    // borderTopWidth: 1,
    backgroundColor: Colors.backgroundScreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
    // borderColor:Colors.offerprice
  },
  txtpay: {
    color: 'black',
    fontSize: moderateScale(25),
    fontWeight: '700'
  },
  btnpaynow: {
    borderWidth: 1,
    borderRadius: moderateScale(10),
    backgroundColor: Colors.primarycolour,
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(5)
  },
  txtpaynow: {
    textAlign: 'center',
    fontSize: moderateScale(22),
    color: Colors.backgroundScreen,
    fontWeight: '600'
  },
});
export default style;
