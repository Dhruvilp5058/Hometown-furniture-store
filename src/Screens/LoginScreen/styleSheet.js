import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../Metrics';
import Colors from '../../../assets/Colour/colour';

const styleSheet = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,

  },
  txtinputemail: {
    borderWidth: 1,
    marginHorizontal: horizontalScale(30),
    borderRadius: moderateScale(15),
    color: Colors.blackcolour,
    height: verticalScale(55)
  },
  txtlabel: {
    fontSize: moderateScale(15),
    left: horizontalScale(50),
    fontWeight: '900',
    position: 'absolute',
    paddingHorizontal: horizontalScale(6),
    backgroundColor: Colors.backgroundScreen,
    zIndex: 1,
  },

  btncountinue: {
    backgroundColor: Colors.primarycolour,
    borderRadius: moderateScale(30),
    marginHorizontal: horizontalScale(30),
    padding: moderateScale(15),
  },
  textcontinue: {
    fontSize: moderateScale(20),
    color: Colors.backgroundScreen,
    textAlign: 'center',
    fontWeight: '900',
  },
  or: {
    fontSize: moderateScale(20),
    color: Colors.blackcolour,
    textAlign: 'center',
    paddingVertical: verticalScale(10)
  },
  imagelogo: {
    height: verticalScale(300),
    width: horizontalScale(300),
  },
  imageview: {
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  txtotpverification: {
    fontWeight: 'bold',
    color: Colors.blackcolour,
    fontSize: moderateScale(22),
    marginTop: verticalScale(10),
    left: horizontalScale(30),
  },
  txtothertext: {
    fontWeight: '900',
    fontSize: moderateScale(15),
    left: horizontalScale(30),
    marginTop: verticalScale(15),
    color: 'lightgrey',
  },
  viewtxtinputemail: {
    marginBottom: verticalScale(40),
  },

  viewbtncontiniue: {
    marginTop: verticalScale(30),
  },
  countrycodetxt: {
    color: Colors.blackcolour,
    fontWeight: '600',
    // bottom:34,
    left: 45,
    top: 34,
  },
  viewinput: {
    marginTop: verticalScale(25)
  },
  iconnote: {
    alignSelf: 'flex-end',
    opacity: 0.4,
    top: verticalScale(42),
    right: horizontalScale(40),
    zIndex: 1
  },
  emailerror: {
    color: 'red',
    fontSize: 13,
    left: 40,
  },
  phonenumbererror: {
    color: 'red',
    fontSize: moderateScale(13),
    left: horizontalScale(40),

  },
  googlesign: {
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: horizontalScale(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(30),
    alignItems: 'center',
    marginBottom: verticalScale(5)

  },
  txtgoogle: {
    color: Colors.blackcolour,
    alignSelf: 'center',
    fontSize: moderateScale(20)
  },
  imggoogle: {
    height: verticalScale(30),
    width: horizontalScale(30),
    left: horizontalScale(10)
  }
});

export default styleSheet;
