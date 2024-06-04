import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../Metrics';
import Colors from '../../../../assets/Colour/colour';

const stylesheet = StyleSheet.create({
  Main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.backgroundScreen,
  },
  lottieView: {
    height: '100%',
    width: '100%',
    bottom: verticalScale(20),
  },
  txtemty: {
    fontSize: moderateScale(24),
    color: 'lightgrey',
    zIndex: 1,
    bottom: verticalScale(300),
    textAlign: 'center',
    fontWeight: '600',
  },
  flatmain: {
    flex: 1,
  },
  itemview: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    elevation: 8,
    backgroundColor: Colors.backgroundScreen,
    paddingVertical: verticalScale(10),
  },
  image: {
    height: verticalScale(85),
    width: horizontalScale(85),
    aspectRatio: 1,
    borderRadius: moderateScale(10),
    margin: moderateScale(5),
  },
  txtview: {
    justifyContent: 'space-between',
    marginLeft: horizontalScale(20),
    width: horizontalScale(100),
  },
  txttype: {
    fontSize: moderateScale(23),
    color: Colors.blackcolour,
    textAlign: 'center',
    fontWeight: '700',
    width: horizontalScale(100),
  },
  txtprice: {
    fontSize: moderateScale(20),
    color: Colors.blackcolour,
    textAlign: 'center',
    fontWeight: '600',
  },
  btntextview:{
    marginLeft:horizontalScale(5)
  },
  txtswipe:{
    color:Colors.backgroundScreen,
    backgroundColor:Colors.primarycolour,
    padding:moderateScale(2),
    bottom:verticalScale(9),
    borderBottomLeftRadius:horizontalScale(5),
    borderBottomRightRadius:horizontalScale(5),
    paddingRight:horizontalScale(3),
    paddingLeft:horizontalScale(3),
    fontSize:moderateScale(10),
    textAlign:'center'
  },
  iconview: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop:verticalScale(15)
  },
  txtamount: {
    borderWidth: 1,
    width: horizontalScale(30),
    paddingVertical: verticalScale(1),
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
    borderRadius: 5,
    color: Colors.blackcolour,
  },

  basketview: {
    flexDirection: 'row',
    borderTopWidth: 2,
    marginHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
  },
  txttotal: {
    fontSize: moderateScale(25),
    fontWeight: '500',
    color: Colors.blackcolour,
    marginLeft: horizontalScale(10),
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtpricetotal: {
    fontSize: moderateScale(22),
    fontWeight: '800',
    color: Colors.blackcolour,
    marginLeft: horizontalScale(5),
    alignSelf: 'center',
    width: horizontalScale(100),
  },
  ruppes: {
    alignSelf: 'center',
  },
  placeorderbtn: {
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    backgroundColor: Colors.primarycolour,
    paddingVertical: verticalScale(10),
    alignSelf: 'center',
    width: horizontalScale(120),
    marginLeft: horizontalScale(29),
  },
  placeordertxt: {
    fontSize: moderateScale(15),
    color: Colors.backgroundScreen,
    fontWeight: '700',
    textAlign: 'center',
  },
  swipeableActions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'lightgrey',
    paddingRight: 20,
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(20),
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(15),
  },
  deleteButton: {
    backgroundColor: Colors.primarycolour,
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScale(80),
    height: verticalScale(50),
    borderRadius: moderateScale(20),
  },
  deleteButtonText: {
    color: Colors.backgroundScreen,
    fontSize: moderateScale(16),
  },
});
export default stylesheet;
