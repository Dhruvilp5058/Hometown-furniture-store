import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../Metrics';

const style = StyleSheet.create({
  blur: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.9,
    backgroundColor: 'lightgrey',
  },

  Main: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'white',
    marginVertical: verticalScale(50),
    marginHorizontal: horizontalScale(20),
    justifyContent: 'center',
    borderRadius: moderateScale(20),
    paddingVertical: verticalScale(20),
  },
  btndelete: {marginLeft: horizontalScale(280), marginRight: 25},
  txtinput: {
    marginTop: verticalScale(32),
  },
  BtnAdd: {
    borderWidth: 1,
    marginHorizontal: horizontalScale(30),
    marginTop: verticalScale(20),
    borderRadius: moderateScale(30),
    paddingVertical: verticalScale(5),
    backgroundColor: 'rgb(0, 172, 255)',
  },
  txtAdd: {
    textAlign: 'center',
    fontSize: moderateScale(25),
    color: 'white',
    fontWeight: '900',
  },
  shortAddressText: {
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(10),
    fontSize: moderateScale(16),
    color: 'grey',
  },
});
export default style;
