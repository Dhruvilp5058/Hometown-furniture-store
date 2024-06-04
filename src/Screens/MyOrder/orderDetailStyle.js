import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../Metrics';
import Colors from '../../../assets/Colour/colour';

const orderDetailStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
  },
  itemview: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(10),
    marginTop: verticalScale(10),
    elevation:3,
    backgroundColor:Colors.backgroundScreen,
    borderRadius:moderateScale(10),
    height: verticalScale(100),
    marginBottom:verticalScale(10)
  },
  image: {
    height: verticalScale(80),
    width: horizontalScale(80),
    aspectRatio: 1,
    borderRadius: moderateScale(10),
    alignSelf: 'center',
  },
  txtview: {
    width:horizontalScale(130),
    justifyContent:'space-evenly',
    marginLeft:horizontalScale(20)
  },
  txtprice: {
    color: Colors.blackcolour,
    fontSize: moderateScale(18),
  },
  txttype: {color: Colors.blackcolour, fontSize: moderateScale(18)},
  qty:{
    color: Colors.blackcolour,
    fontSize: moderateScale(18),
    alignSelf:'center',
    fontWeight:'700'
  },
  addressview:{
    marginHorizontal: horizontalScale(10),
    marginTop: verticalScale(10),
    elevation:3,
    backgroundColor:Colors.backgroundScreen,
    borderRadius:moderateScale(10),
    marginBottom:verticalScale(10),
    paddingBottom:verticalScale(10)
  },
  addview:{
    marginLeft:horizontalScale(10)
  },
  Add:{
    color:Colors.blackcolour,
    fontWeight:'700',
    fontSize:moderateScale(20)
  },
  txtaddress:{
    color:Colors.blackcolour,
    fontWeight:'500'
  },
  addmob:{
    color:Colors.blackcolour,
    fontWeight:'800'
  }
});

export default orderDetailStyle;
