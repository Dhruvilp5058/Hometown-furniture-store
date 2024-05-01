import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../Metrics';
import Colors from '../../../assets/Colour/colour';
import font from '../../../assets/font/font';

const styleSheet = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor:Colors.backgroundScreen
  },
  myprofileview: {
    backgroundColor:Colors.primarycolour,
  },

  myprofile:{
    textAlign: 'center',
    fontSize: moderateScale(30),
    fontWeight: '900',
    color: 'white',
    bottom: '30%',
    paddingTop: verticalScale(10),
    marginTop:verticalScale(10)
  },
  logoview: {
    paddingBottom: verticalScale(40),
    backgroundColor: Colors.primarycolour,
  },
  btnlogout: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingVertical:verticalScale(13)
   
  },
  txtlogout: {
    color: Colors.blackcolour,
    fontSize: moderateScale(23),
    fontFamily: font.signika,
    width:horizontalScale(180),
    marginRight:horizontalScale(40)
  },
  iconuser: {
    color: Colors.primarycolour,
    left:horizontalScale(15)
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
    backgroundColor: Colors.backgroundScreen,
    margin:moderateScale(5),
    marginTop:verticalScale(10),
    paddingVertical:verticalScale(10),
    borderRadius:moderateScale(10),
    elevation:2
  },
  iconview: {
    borderWidth:1,
    height:verticalScale(100),
    width:horizontalScale(100),
    margin:moderateScale(5),
    marginLeft:horizontalScale(8),
    borderRadius:moderateScale(100),
    justifyContent:'center'

  },
  image: {
   height:verticalScale(100),
   width:horizontalScale(100),
   borderRadius:moderateScale(200),
   alignSelf:'center'
  //  left:horizontalScale(1)

  },
  iconmain: {
  alignSelf:'center',

  },
  viewlogout: {
    marginHorizontal: horizontalScale(5),
    backgroundColor: Colors.backgroundScreen,
    elevation: 2,
    borderRadius: moderateScale(10),
    marginTop:verticalScale(5),
    
  },
  txtemail: {
    fontSize: moderateScale(15),
    color: Colors.blackcolour,
    maxWidth: horizontalScale(250),
    paddingHorizontal: horizontalScale(1),
  },
  viewtxt: {
    // borderWidth:1,
    width:horizontalScale(255),
    justifyContent:'center'
  },
});
export default styleSheet;
