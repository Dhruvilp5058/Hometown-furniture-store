import {StyleSheet} from 'react-native';
import { horizontalScale,moderateScale,verticalScale } from '../Metrics';

const styleSheet = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  txtinputemail: {
    borderWidth: 1,
    marginHorizontal: 30,
    borderRadius: 15,
    color: 'black',
  },
  txtlabel: {
    fontSize: 15,
    left: 50,
    fontWeight: '900',
    position: 'absolute',
    paddingHorizontal: 6,
    backgroundColor: 'white',
    zIndex: 1,
  },
  phoneLabel: {
    fontSize: 15,
    left: 75,
    fontWeight: '900',
    position: 'absolute',
  },
  btncountinue: {
    backgroundColor: 'rgb(0, 172, 255)',
    borderRadius: 30,
    marginHorizontal: 30,
    padding: 15,
  },
  textcontinue: {
    fontSize: 20,
    color: 'white',
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
    color: 'black',
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
    bottom:40
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
    color: 'black',
    fontWeight: '600',
    // bottom:34,
    left: 45,
    top: 34,
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
    // position:'absolute'
  },
  phonenumbererror:{
    color: 'red',
    fontSize: 13,
    left:40,
    // position:'absolute',
    // top:55
  }
});

export default styleSheet;
