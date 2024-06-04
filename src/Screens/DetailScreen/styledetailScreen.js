import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../Metrics';
import Colors from '../../../assets/Colour/colour';

const styleDetilScreen = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
  },

  blueview: {
    backgroundColor: Colors.primarycolour,
  },
  viewdetail: {
    flexDirection: 'row',
    marginTop: verticalScale(25),
    paddingBottom: verticalScale(20),
  },
  txtdetail: {
    color: Colors.backgroundScreen,
    fontWeight: '900',
    alignSelf: 'center',
    fontSize: moderateScale(25),
    marginLeft: horizontalScale(60),
  },
  itemimage: {
    height: verticalScale(180),
    width: horizontalScale(180),
    aspectRatio:1,
    alignSelf: 'center',
    marginTop: verticalScale(25),
  },
  itemview: {
    backgroundColor: Colors.backgroundScreen,
    marginHorizontal: 20,
    elevation: 15,
    shadowColor: Colors.blackcolour,
    shadowRadius: 10,
    paddingBottom: verticalScale(28),
    borderRadius: 20,
    marginTop: '8%',
  },
  txttype: {
    color: Colors.blackcolour,
    fontSize: 30,
    fontFamily: 'ProtestStrike-Regular',
    marginLeft: horizontalScale(25),
    marginTop: verticalScale(20),
    borderBottomWidth: 3,
    borderColor: Colors.blackcolour,
  },
  txtprice: {
    color: 'purple',
    fontWeight: '800',
    fontSize: 35,
    left: horizontalScale(25),
    marginTop: verticalScale(15),
  },
  iconitem: {
    width: '10%',
    alignItems: 'center',
    right: '15%',
    marginTop: '4%',
  },
  btnitem: {
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: Colors.primarycolour,
    right: '5%',
    top: '15%',
    width: horizontalScale(150),
    // position:'absolute',
    justifyContent: 'center',
    paddingBottom: verticalScale(8),
    paddingTop: 8,
  },
  btntxt: {
    textAlign: 'center',
    fontSize: 23,
    color: Colors.backgroundScreen,
  },
  viewdec: {
    marginHorizontal: horizontalScale(15),
    paddingHorizontal: horizontalScale(10),
    marginVertical:verticalScale(20),
    marginTop:verticalScale(25)
  },
  txtdec: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Merriweather-Bold',
    left:horizontalScale(10)
  },
  decdetail: {
    fontSize: 24,
    fontWeight: '400',
    color: Colors.blackcolour,
    marginTop:verticalScale(10)
  },
  addcartbtn: {
    borderWidth: 1,
    marginHorizontal: horizontalScale(15),
    borderRadius: moderateScale(20),
    paddingVertical: verticalScale(15),
    backgroundColor: Colors.primarycolour,
    marginTop: verticalScale(5),
    flexDirection:'row',
    marginBottom:verticalScale(10)
  },
  addcarttxt: {
    fontSize: 20,
    color: Colors.backgroundScreen,
    textAlign: 'center',
    alignSelf:'center',
    marginLeft:horizontalScale(10)
  },
  iconcart: {
    alignSelf:'center',
    color: Colors.backgroundScreen,
    marginLeft:horizontalScale(100)
  },
});
export default styleDetilScreen;
