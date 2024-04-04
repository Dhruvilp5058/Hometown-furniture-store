import {StyleSheet} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../Metrics';
import Colors from '../../../assets/Colour/colour';

const style = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor:Colors.primarycolour,
  },
  blueview: {
    backgroundColor: Colors.primarycolour,
    paddingBottom: '10%',
  },
  editview: {
    flexDirection: 'row',
  },
  backarrow: {
    marginLeft: '2%',
  },
  txteditprofile: {
    color: Colors.backgroundScreen,
    fontSize: 30,
    fontWeight: '700',
    marginLeft: '5%',
  },
  btnedit: {
    marginLeft: '80%',
    top: '23%',
    justifyContent: 'center',
    position: 'absolute',
  },
  btnsave: {
    marginLeft: '79%',
    top: '23%',
    justifyContent: 'center',
    position: 'absolute',
  },
  txtsave: {
    fontWeight: '700',
    color: 'white',
    fontSize: 18,
  },
  iconview: {
    borderWidth: 1,
    borderRadius:moderateScale(120/2),
    backgroundColor:Colors.backgroundScreen,
    height:verticalScale(120),
    width:horizontalScale(120),
    marginTop:verticalScale(18),
    alignSelf:'center'
  
  },
  image: {
    height: verticalScale(122),
    width: horizontalScale(122),
    borderRadius:moderateScale(60)
  },
  usericon: {
    top: verticalScale(9),
    color: Colors.primarycolour,
    alignSelf:"center"
  },
  whiteview: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  errormsg:{
    color:'red',
    marginLeft:horizontalScale(35),
    fontSize:moderateScale(15)

  },
  txtlable: {
    marginTop: 15,
    fontSize: 18,
    top: '15%',
    left: '10%',
    color: 'grey',
    fontWeight: '400',
  },
  txtinput: {
    color:'black',
    borderBottomWidth: 1,
    marginHorizontal: horizontalScale(30),
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 15,
    paddingRight: 10,
  },
  txtgender: {
    marginTop: 15,
    fontSize: 18,
    // top:'15%',
    left: '10%',
    color: 'grey',
    fontWeight: '400',
  },
});
export default style;
