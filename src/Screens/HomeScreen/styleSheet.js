import {StyleSheet} from 'react-native';
import Colors from '../../../assets/Colour/colour';
import {horizontalScale, moderateScale, verticalScale} from '../Metrics';

const stylesheet = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
    zIndex: 1,
  },
  blueView: {
    backgroundColor: Colors.primarycolour,
    // backgroundColor: '	#000100',
    paddingBottom: verticalScale(30),
    // flexDirection: 'row',
  },
  viewsearch: {
    flexDirection: 'row',
    marginTop: verticalScale(15),
    borderColor:'white',
    // alignSelf:'center'
    marginHorizontal:horizontalScale(20),
    
  },
  searchtxt: {
    // borderWidth: 1,
    width: horizontalScale(260),
    backgroundColor: Colors.backgroundScreen,
    borderRadius: moderateScale(15),
    paddingHorizontal: horizontalScale(20),
    fontSize: moderateScale(20),
    marginTop: verticalScale(20),
    paddingLeft: horizontalScale(42),
    right: horizontalScale(20),
    color:Colors.blackcolour
  },
  mglass: {
    zIndex: 1,
    left: horizontalScale(18),
    top: verticalScale(32),
  },
  btnfilter: {
    borderWidth: 1,
    height: verticalScale(49),
    justifyContent: 'center',
    backgroundColor: Colors.backgroundScreen,
    marginTop: verticalScale(23),
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(3),
  },

  itemview: {
    backgroundColor: Colors.backgroundScreen,
    flexDirection: 'row',
    marginHorizontal: 18,
    shadowOpacity: 10,
    shadowColor: Colors.shadowcolour,
    borderRadius: 22,
    elevation: 15,
    top: 20,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(5),
    marginBottom: verticalScale(27),
    // borderWidth:1
  },
  imageitem: {
    height: verticalScale(75),
    width: horizontalScale(75),
    aspectRatio: 1,
    marginLeft: horizontalScale(10),
    borderRadius:moderateScale(10)
  },
  viewtype: {
    alignItems: 'center',
    marginLeft: horizontalScale(42),
    width: horizontalScale(90),
    // borderWidth:1,
    justifyContent:'space-between'
  },
  txttype: {
    color: Colors.blackcolour,
    fontSize: moderateScale(21),
    fontFamily: 'ProtestStrike-Regular',
    textAlign: 'center',
    bottom:verticalScale(5)
  },
  viewprice: {
    marginLeft: verticalScale(30),
    width: horizontalScale(100),
  },
  txtofferprice: {
    color: Colors.blackcolour,
    fontSize: moderateScale(27),
    textDecorationLine: 'line-through',
    fontWeight: '500',
    top: verticalScale(5),
    opacity: 0.5,
    textAlign: 'center',
  },
  txtprice: {
    color: 'purple',
    fontWeight: '800',
    fontSize: moderateScale(22),
    textAlign: 'center',
    top: verticalScale(8),
    right:horizontalScale(4)
  },
  iconview: {
    flexDirection: 'row',
    alignItems: 'center',
    // top: verticalScale(12),
  },
  icontxt: {
    borderWidth: 1,
    height: 30,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    color: Colors.blackcolour,
    paddingHorizontal: 8,
    borderColor: 'grey',
    borderRadius: 5,
  },
});
export default stylesheet;
