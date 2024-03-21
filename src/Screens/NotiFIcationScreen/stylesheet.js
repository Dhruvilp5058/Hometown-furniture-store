import {StyleSheet} from 'react-native';
import { horizontalScale, verticalScale } from '../Metrics';

const style = StyleSheet.create({
  main: {
    flex: 1,
  },
  blue: {
    backgroundColor: 'rgb(0, 172, 320)',
  },
  iconback: {
    top: verticalScale(24),
    left: horizontalScale(8),
    zIndex: 1,
  },
  txtnotification: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '900',
    color: 'white',
    bottom: '30%',
    paddingTop: verticalScale(10),
    // top:verticalScale(1)
  },
  viewlist:{
    margin:10,
    marginTop:verticalScale(18),
    elevation:8,
    shadowColor:'grey',
    shadowOpacity:10,
    backgroundColor:'white',
    borderRadius:10,
    padding:15
  },
  txtproduct: {
    color: 'black',
    fontWeight: '900',
    fontSize: 30,
  },
  txtdetailproduct: {
    color: 'grey',
    fontWeight: '500',
    borderBottomWidth: 1,
    paddingBottom: 5,
    bottom: 25,
  },
  txtcomment: {color: 'black', fontWeight: '900', fontSize: 30},
  txtdetailcomment: {
    color: 'grey',
    fontWeight: '500',
    bottom: 25,
  },
  btnupdate:{
    marginTop:verticalScale(60),
    borderWidth:1,
    backgroundColor:'rgb(0, 172, 320)',
    borderRadius:35,
    marginHorizontal:35
  },
  update:{
    textAlign:'center',
    fontSize:30,
    color:'white',
    paddingVertical:12
  }
});
export default style;
