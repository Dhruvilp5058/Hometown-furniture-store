import {StyleSheet} from 'react-native';
import { horizontalScale,moderateScale,verticalScale } from '../Metrics';

const stylesheet = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    zIndex: 1,
  },
  blueView: {
    backgroundColor: 'rgb(0, 172, 255)',
    paddingBottom: 70,
    flexDirection: 'row',
  },
  searchtxt: {
    borderWidth: 1,
    position: 'absolute',
    width:'90%',
    marginLeft:'5%',
    paddingLeft:50,
    paddingRight:5,
    borderRadius:25,
    backgroundColor:'white',
    marginTop:15,
    paddingVertical:15,
    color:'black'
  },
  mglass: {
    opacity: 0.3,
    left:horizontalScale(30),
    zIndex:1,
    top:verticalScale(30)
  },
  iconheart:{
  left:horizontalScale(280),
  top:verticalScale(28),
  zIndex:1
  },
  itemview: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    marginHorizontal: 18,
    shadowOpacity: 10,
    shadowColor: 'grey',
    borderRadius: 22,
    elevation: 15,
    top: 20,
    marginBottom: verticalScale(23),
    paddingBottom:verticalScale(5)
  },
  imageitem: {
    height: 75,
    width: 75,
    tintColor: 'rgb(0, 172, 255)',
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  txttype: {
    color: 'black',
    fontSize: 21,
    fontFamily: 'ProtestStrike-Regular',
    position: 'absolute',
    left: '45%',
    top: 10,
    textAlign: 'center',
  },
  txtofferprice: {
    color: 'grey',
    fontSize: 27,
    textDecorationLine: 'line-through',
    fontWeight: '500',
    position: 'absolute',
    left: horizontalScale(290),
    top: 10,
    opacity: 0.5,
  },
  txtprice: {
    color: 'purple',
    fontWeight: '800',
    fontSize: 28,
    position: 'absolute',
    left: '84%',
    top: 50,
  },
  iconview: {
    flexDirection: 'row',
    left: 45,
    top: 45,
  },
  icontxt: {
    borderWidth: 1,
    height: 30,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
    paddingHorizontal: 8,
    borderColor: 'grey',
    borderRadius: 5,
  },
});
export default stylesheet;
