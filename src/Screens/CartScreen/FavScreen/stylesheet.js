import {StyleSheet} from 'react-native';
import { horizontalScale,moderateScale,verticalScale } from '../../Metrics';
const style = StyleSheet.create({
  Main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  animationcart: {
    height: '100%',
    width: '100%',
  },
  Favmsg:{
    textAlign:'center',
    fontSize:moderateScale(25),
    bottom:verticalScale(280),
    color:'lightgrey',
    fontWeight:'600'
  },
  itemrow: {
    // marginTop:10,
    marginLeft: 25,
    marginRight: 20,
    marginBottom: 5,
    flexDirection: 'row',
  },
  imageitem: {
    height: 80,
    width: 80,
    tintColor: 'rgb(0, 172, 255)',
    margin: 15,
  },
  imageview: {
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: 5,
    shadowOpacity: 10,
    shadowRadius: 10,
    borderRadius: 15,
  },
  itemtxtview: {
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  txttype: {
    fontSize: 25,
    color: 'black',
    fontWeight: '300',
  },
  txtprice: {
    fontSize: 27,
    fontWeight: '700',
    color: 'black',
    marginLeft: 5,
  },
  btnbuynow: {
    borderWidth: 1,
    borderRadius: 10,
    width: '30%',
    paddingVertical: 5,
    alignSelf: 'flex-end',
    bottom: '52%',
    right: '5%',
    backgroundColor: 'rgb(0, 172, 255)',
  },
  txtbuynow: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  swipeableActions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'red', 
    paddingRight: 20, 
    margin:verticalScale(20),
    borderRadius:moderateScale(20),
  },
  deleteButton: {
    backgroundColor: 'rgb(0, 172, 255)', 
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScale(80),
    height:verticalScale(50), 
    borderRadius:moderateScale(20)
  },
  deleteButtonText: {
    color: 'white',
    fontSize: moderateScale(16),
  },
});
export default style;
