import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../Metrics';
import Colors from '../../../../assets/Colour/colour';

const stylesheet = StyleSheet.create({
  Main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:Colors.backgroundScreen,
  },
  lottieView: {
    height: '100%',
    width: '100%',
    bottom:verticalScale(20)
  },
  txtemty:{
    fontSize:moderateScale(24),
    color:'lightgrey',
    zIndex:1,
    bottom:verticalScale(300),
    textAlign:'center',
    fontWeight:'600'
  },
  txtbasket: {
    fontSize: 30,
    color: Colors.backgroundScreen,
    textAlign: 'center',
    // marginTop:'5%',
    paddingBottom: '4%',
  },
  cartitem: {
    fontSize: 30,
    fontWeight: '900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemrow: {
    marginLeft: 25,
    marginRight: 20,
    marginBottom: 5,
    flexDirection: 'row',
    elevation:8,
    backgroundColor:Colors.backgroundScreen,
    borderRadius:moderateScale(10)
  },
  imageitem: {
    height: verticalScale(80),
    width: horizontalScale(80),
    margin: 15,
    aspectRatio:1
  },
  imageview: {
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: Colors.blackcolour,
    shadowOffset: 5,
    shadowOpacity: 10,
    shadowRadius: 10,
    borderRadius: 15,
  },
  itemtxtview: {
    justifyContent: 'space-between',
    marginLeft: horizontalScale(15),
  },
  txttype: {
    fontSize: 25,
    color: Colors.blackcolour,
    fontWeight: '500',
    textAlign:'center',
    top:verticalScale(5),
    right:horizontalScale(9)
  },
  txtprice: {
    fontSize: moderateScale(26),
    fontWeight: '700',
    color: Colors.blackcolour,
    textAlign:'center',
    bottom:verticalScale(5)
  },
  iconview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconmainview: {
    alignItems: 'flex-end',
    bottom: '45%',
    right: '7%',
  },
  txtcount: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
    borderRadius: 5,
    color: Colors.blackcolour,
  },
  basketview: {
    flexDirection: 'row',
    borderTopWidth: 2,
    marginHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
  },
  txttotal: {
    fontSize: moderateScale(25),
    fontWeight: '500',
    color: Colors.blackcolour,
    marginLeft: horizontalScale(10),
    alignItems:"center",
    alignSelf:'center'
  },
  txtpricetotal: {
    fontSize: moderateScale(25),
    fontWeight: '900',
    color: Colors.blackcolour,
    marginLeft:horizontalScale(5),
    alignSelf:'center'
  
  },
  ruppes:{
    alignSelf:'center'
  },
  placeorderbtn:{
    borderWidth:1,
    justifyContent:'center',
    borderRadius:moderateScale(10),
    backgroundColor:Colors.primarycolour,
    paddingVertical:verticalScale(10),
    alignSelf:'center',
    width:horizontalScale(120),
    marginLeft:horizontalScale(40)
  },
  placeordertxt:{
    fontSize:moderateScale(15),
    color:Colors.backgroundScreen,
    fontWeight:'700',
    textAlign:'center'
  },
  swipeableActions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'lightgrey',
    paddingRight: 20,
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(20),
    marginTop:verticalScale(20),
    marginHorizontal:horizontalScale(15)
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
export default stylesheet;
