import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../Metrics';

const styleSheet = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  blueview: {
    paddingBottom: verticalScale(40),
    backgroundColor: 'rgb(0, 172, 255)',
  },
  logoview: {
    paddingBottom: verticalScale(40),
    backgroundColor: 'rgb(0, 172, 255)',
  },
  btnlogout: {
    paddingBottom: verticalScale(20),
    marginTop: '5%',
    borderColor: 'rgb(0, 172, 255)',
    marginHorizontal: '5%',
    flexDirection: 'row',
  },
  txtlogout: {
    fontSize: 25,
    borderBottomWidth: 3,
    width: '70%',
    paddingBottom: 5,
    borderColor: 'rgb(0, 172, 255)',
    color: 'black',
  },
  iconuser: {
    right: '18%',
    top: '1.5%',
    color: 'rgb(0, 172, 255)',
  },
  mainiconuser: {
    color: 'rgb(0, 172, 255)',
    top: '11%',
  },
  icondetail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: verticalScale(30),
  },
  iconview: {
    borderWidth: 1,
    paddingVertical: verticalScale(11),
    paddingHorizontal: horizontalScale(12),
    borderRadius: moderateScale(80),
  },
  image: {
    paddingVertical: verticalScale(11),
    paddingHorizontal: horizontalScale(12),
    borderRadius: moderateScale(80),
  },
  iconmain: {
    top: verticalScale(10),
  },
  viewlogout: {
    alignItems: 'center',
    marginTop:verticalScale(40)
  },
  txtemail: {
    fontSize: moderateScale(20),
    // top: verticalScale(40),
    paddingRight: horizontalScale(10),
    color:'black',
    fontWeight:'900',
    maxWidth:horizontalScale(230)
  },
});
export default styleSheet;
