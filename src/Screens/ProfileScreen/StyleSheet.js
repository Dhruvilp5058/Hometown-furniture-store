import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../Metrics';
import Colors from '../../../assets/Colour/colour';
import font from '../../../assets/font/font';

const styleSheet = StyleSheet.create({
  main: {
    flex: 1,
  },
  blueview: {
    paddingBottom: verticalScale(40),
    backgroundColor: Colors.primarycolour,
  },
  logoview: {
    paddingBottom: verticalScale(40),
    backgroundColor: Colors.primarycolour,
  },
  btnlogout: {
    borderBottomWidth: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(30),
  },
  txtlogout: {
    color: Colors.blackcolour,
    fontSize: moderateScale(20),
    fontFamily: font.signika,
    marginLeft: verticalScale(30),
  },
  iconuser: {
    color: Colors.primarycolour,
    marginLeft: horizontalScale(10),
  },
  btnlogoute: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(30),
  },
  txtlogoute: {
    color: Colors.blackcolour,
    fontSize: moderateScale(20),
    fontFamily: font.signika,
    marginLeft: verticalScale(30),
  },
  icondetail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(30),
    paddingHorizontal: horizontalScale(5),
    borderRadius: 10,
    paddingVertical: verticalScale(30),
    elevation: 8,
    backgroundColor: Colors.backgroundScreen,
  },
  iconview: {
    borderWidth: 1,
    height: verticalScale(110),
    width: horizontalScale(110),
    borderRadius: moderateScale(80),
    // paddingTop:verticalScale(10),
    // paddingHorizontal:horizontalScale(5)
  },
  image: {
    height: verticalScale(114),
    width: horizontalScale(110),
    aspectRatio: 1,
    borderRadius: moderateScale(50),
  },
  iconmain: {
    top: verticalScale(30),
    alignSelf: 'center',
  },
  viewlogout: {
    marginHorizontal: horizontalScale(30),
    backgroundColor: Colors.backgroundScreen,
    elevation: 8,
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    marginTop: verticalScale(20),
    // paddingVertical:verticalScale(30)
  },
  txtemail: {
    fontSize: moderateScale(15),
    color: 'black',
    fontWeight: '900',
    maxWidth: horizontalScale(190),
    paddingHorizontal: horizontalScale(1),
  },
  viewtxt: {
    justifyContent: 'space-evenly',
    // borderWidth:1
  },
});
export default styleSheet;
