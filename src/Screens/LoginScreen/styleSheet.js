import {StyleSheet} from 'react-native';
import { horizontalScale,moderateScale,verticalScale } from '../Metrics';
import Colors from '../../../assets/Colour/colour';

const styleSheet = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
    
  },
  txtinputemail: {
    borderWidth: 1,
    marginHorizontal: 30,
    borderRadius: 15,
    color: Colors.blackcolour,
  },
  txtlabel: {
    fontSize: 15,
    left: 50,
    fontWeight: '900',
    position: 'absolute',
    paddingHorizontal: 6,
    backgroundColor: Colors.backgroundScreen,
    zIndex: 1,
  },
  phoneLabel: {
    fontSize: 15,
    left: 75,
    fontWeight: '900',
    position: 'absolute',
  },
  btncountinue: {
    backgroundColor: Colors.primarycolour,
    borderRadius: 30,
    marginHorizontal: 30,
    padding: 15,
  },
  textcontinue: {
    fontSize: 20,
    color:Colors.backgroundScreen,
    textAlign: 'center',
    fontWeight: '900',
  },
  imagelogo: {
    height: 300,
    width: 300,
  },
  imageview: {
    alignItems: 'center',
    marginTop: 20,
  },
  txtotpverification: {
    fontWeight: 'bold',
    color: Colors.blackcolour,
    fontSize: 22,
    marginTop: 10,
    left: 30,
  },
  txtothertext: {
    fontWeight: '900',
    fontSize: 15,
    left: 30,
    marginTop: 15,
    color: 'lightgrey',
  },
  viewtxtinputemail: {
    marginTop: 40,
    bottom:40,
  },
  viewtxtinputotp: {
    top:3,
    bottom:30
  },
  viewbtncontiniue: {
    marginTop: 50,
   
    // top:5
  },
  countrycodetxt: {
    color: Colors.blackcolour,
    fontWeight: '600',
    // bottom:34,
    left: 45,
    top: 34,
  },
  viewinput:{
    marginTop:verticalScale(25)
  }, 
  iconnote: {
    left: horizontalScale(310),
    top: verticalScale(40),
    opacity: 0.4,
    // position:'absolute'
  },
  emailerror: {
    color: 'red',
    fontSize: 13,
    left:40,
  },
  phonenumbererror:{
    color: 'red',
    fontSize: 13,
    left:40,

  }
});

export default styleSheet;
