import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../Metrics';
import Colors from '../../../assets/Colour/colour';

const style = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
  },
  myeditprofieview: {
    backgroundColor: Colors.primarycolour,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(20),
    alignItems: 'center'
  },
  iconback: {
    left:horizontalScale(10)
  },
  myorder: {
    alignItems: 'center',
    fontSize: moderateScale(25),
    fontWeight: '900',
    color: 'white',
  },
  check: {
    right: horizontalScale(10)
  },
  txtsave: {
    fontWeight: '700',
    color: 'white',
    fontSize: 18,
  },
  iconview: {
    borderWidth: 1,
    height: verticalScale(100),
    width: horizontalScale(100),
    alignSelf: 'center',
    marginTop: verticalScale(20),
    borderRadius:moderateScale(52),
    justifyContent:'center'

  },
  image: {
    height: verticalScale(100),
    width: horizontalScale(98),
    borderRadius: moderateScale(52),
    alignSelf:'center'
  },
  usericon: {
    color: Colors.primarycolour,
    alignSelf: "center",
  },
  whiteview: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  errormsg: {
    color: 'red',
    marginLeft: horizontalScale(35),
    fontSize: moderateScale(15)

  },
  txtlable: {
    marginTop: 15,
    fontSize: 18,
    left: horizontalScale(30),
    color: 'grey',
    fontWeight: '400',
    top: verticalScale(15)
  },
  viewname:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:verticalScale(25)

  },
  txtl:{
    fontSize: moderateScale(15),
    color: 'grey',
    fontWeight: '400',
  },
  txt:{
    fontSize: moderateScale(15),
    color: 'grey',
    fontWeight: '400',
    marginLeft:horizontalScale(30),
    marginTop:verticalScale(20)
  },
  txtinputl:{
    color: 'black',
    fontSize: moderateScale(15),
    fontWeight: '500',
    borderBottomWidth:1,
    width:horizontalScale(130)
  },
  txtinput: {
    color: 'black',
    fontSize: moderateScale(15),
    fontWeight: '500',
    borderBottomWidth:1,
    marginHorizontal:horizontalScale(30)
  
  },
  txtgender: {
    marginTop: 15,
    fontSize: 18,
    top: verticalScale(3),
    left: horizontalScale(30),
    color: 'grey',
    fontWeight: '400',
  },
  redioButton: {
    flexDirection: 'row',
    marginLeft: horizontalScale(20),
    marginTop: verticalScale(20),
  },
  imagerror:{
    color:'red',
    textAlign:'center'
  },
  error:{
    color:'red',
    marginLeft:horizontalScale(30)
  }
});
export default style;
