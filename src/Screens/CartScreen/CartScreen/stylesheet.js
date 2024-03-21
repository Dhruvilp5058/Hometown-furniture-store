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
    // marginTop:10,
    marginLeft: 25,
    marginRight: 20,
    marginBottom: 5,
    flexDirection: 'row',
  },
  imageitem: {
    height: 80,
    width: 80,
    tintColor: Colors.primarycolour,
    margin: 15,
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
    marginLeft: 10,
  },
  txttype: {
    fontSize: 25,
    color: Colors.blackcolour,
    fontWeight: '300',
  },
  txtprice: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.blackcolour,
    marginLeft: 5,
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
    borderTopWidth: 1,
    marginHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    left: 5,
  },
  txttotal: {
    fontSize: moderateScale(25),
    fontWeight: '500',
    color: Colors.blackcolour,
    marginLeft: horizontalScale(10),
  },
  txtpricetotal: {
    fontSize: moderateScale(25),
    fontWeight: '900',
    color: Colors.blackcolour,
    top:verticalScale(2),
    marginLeft:horizontalScale(5)
  },
  ruppes:{
    top:verticalScale(8)
  },
  placeorderbtn:{
    borderWidth:1,
    marginLeft:horizontalScale(70),
    justifyContent:'center',
    paddingHorizontal:horizontalScale(10),
    borderRadius:moderateScale(10),
    backgroundColor:Colors.primarycolour,
    paddingVertical:verticalScale(10)
  },
  placeordertxt:{
    fontSize:moderateScale(15),
    color:Colors.backgroundScreen,
    fontWeight:'700'
  },
  swipeableActions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'red',
    paddingRight: 20,
    margin: verticalScale(15),
    borderRadius: moderateScale(20),
  },
  deleteButton: {
    backgroundColor: 'rgb(0, 172, 255)',
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