import {StyleSheet} from 'react-native';
import { horizontalScale,moderateScale,verticalScale } from '../../Metrics';
import Colors from '../../../../assets/Colour/colour';
const style = StyleSheet.create({
  Main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.backgroundScreen,
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
    flexDirection:'row',
    // borderWidth:1,
    marginHorizontal:horizontalScale(20),
    paddingVertical:verticalScale(10),
    borderRadius:moderateScale(10),
    elevation:8,
    backgroundColor:Colors.backgroundScreen,
    justifyContent:'space-between',
    marginBottom:verticalScale(10),
    marginTop:verticalScale(20)
  },
  imageview:{
    marginLeft:horizontalScale(10),
    alignSelf:'center'
  },
  imageitem: {
    height: verticalScale(90),
    width: horizontalScale(90),
    aspectRatio:1,
    borderRadius:moderateScale(10)
  },

  itemtxtview: {
  justifyContent:'space-between'
  },
  txttype: {
    fontSize: moderateScale(25),
    color: Colors.blackcolour,
    fontWeight: '400',
    textAlign:'center',
    width:horizontalScale(100)
  },
  txtprice: {
    fontSize: moderateScale(27),
    fontWeight: '700',
    color: Colors.blackcolour,
    textAlign:'center'
  },
  addcart:{
    // borderWidth:1,
  },
  swipedelete:{
    backgroundColor:Colors.primarycolour,
    color:Colors.backgroundScreen,
    fontSize:moderateScale(10),
    textAlign:'center',
    padding:moderateScale(1),
    borderBottomLeftRadius:moderateScale(5),
    borderBottomRightRadius:moderateScale(5),
    right:horizontalScale(8),
    bottom:verticalScale(9)
  },
  btnbuynow: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor:Colors.primarycolour,
    justifyContent:'center',
    marginVertical:verticalScale(20),
    right:horizontalScale(10),
    paddingHorizontal:horizontalScale(5),
    height:verticalScale(45),
    alignSelf:'center'
  },
  btnitem: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor:'lightgrey',
    justifyContent:'center',
    marginVertical:verticalScale(20),
    right:horizontalScale(10),
    paddingHorizontal:horizontalScale(5),
    height:verticalScale(45),
    alignSelf:'center'
  },
  txtbuynow: {
    fontSize: 15,
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
    backgroundColor: Colors.primarycolour,
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScale(80),
    height: verticalScale(50),
    borderRadius: moderateScale(20),
  },
  deleteButtonText: {
    color: Colors.backgroundScreen,
    fontSize: moderateScale(16),
  },
});
export default style;
