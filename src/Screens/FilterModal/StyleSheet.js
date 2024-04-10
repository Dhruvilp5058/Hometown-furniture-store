import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../Metrics';
import Colors from '../../../assets/Colour/colour';

const Style = StyleSheet.create({
  blur: {
    flex:1,
    opacity: 0.9,
    backgroundColor: Colors.shadowcolour,
    justifyContent:'center'
  },
  iconbtn: {
    alignItems: 'flex-end',
    right: horizontalScale(10),
    alignSelf:'flex-end',
  },
  iconclose: {
    marginLeft: horizontalScale(5),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
  },
  txtselecttype:{
    fontSize:moderateScale(18),
    color:Colors.blackcolour,
    fontWeight:'bold',
    marginLeft:horizontalScale(23),
    marginBottom:verticalScale(6)
  },
  Main: {
    backgroundColor: 'white',
    marginHorizontal: horizontalScale(20),
    borderRadius: moderateScale(20),
    paddingVertical: verticalScale(20),
  },
  btnFilter: {
    borderWidth: 1,
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(25),
    paddingVertical: verticalScale(5),
    backgroundColor: Colors.primarycolour,
  },
  txtFilter: {
    textAlign: 'center',
    fontSize: moderateScale(25),
    color: Colors.backgroundScreen,
    fontWeight: '800',
    justifyContent: 'center',
  },
  btnview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: verticalScale(30),
    paddingBottom:verticalScale(30)
  },
  btnaplly: {
    borderWidth: 1,
    backgroundColor: Colors.primarycolour,
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
  },
  txtaplly: {
    textAlign: 'center',
    fontSize: moderateScale(20),
    color: Colors.backgroundScreen,
    fontWeight: '900',
  },
  btnreset: {
    borderWidth: 1,
    backgroundColor:Colors.primarycolour,
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(25),
  },
  txtreset: {
    textAlign: 'center',
    fontSize: moderateScale(20),
    color: Colors.backgroundScreen,
    fontWeight: '900',
  },
  dropdown: {
    height: verticalScale(45),
    borderColor: Colors.blackcolour,
    borderWidth: 1,
    borderRadius: moderateScale(8),
    paddingHorizontal: horizontalScale(8),
    marginHorizontal:horizontalScale(22),
  },
  icon: {
    marginRight: horizontalScale(5),
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: horizontalScale(22),
    top: verticalScale(8),
    zIndex: 999,
    paddingHorizontal: horizontalScale(8),
    fontSize: moderateScale(14),
  },
 
  selectedTextStyle: {
    fontSize: moderateScale(16),
    color:Colors.blackcolour
  },
  iconStyle: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
  containerStyle:{
    borderRadius:moderateScale(10),
    width:horizontalScale(280),
    height:verticalScale(150),
    // fontSize:moderateScale(10)
  },
  txtpricerenge:{
    // textAlign:'center',
    marginLeft:verticalScale(22),
    color:Colors.blackcolour,
    fontSize:moderateScale(22),
    fontWeight:'500',
    marginTop:verticalScale(15)
  },
  viewinput:{
    flexDirection:'row',
    // justifyContent:'space-around',
    marginTop:verticalScale(15),
    // marginHorizontal:horizontalScale(20)
  },
  inputfilter:{
    borderWidth:1,
    width:horizontalScale(100),
    height:verticalScale(40),
    color:Colors.blackcolour,
    fontSize:moderateScale(15),
    paddingHorizontal:horizontalScale(10),
    marginLeft:horizontalScale(25),
    borderRadius:moderateScale(6)
  },
  pricefilter:{
    alignItems:'center',
    marginTop:verticalScale(25)
  },
  maxprice: {
    fontSize: moderateScale(20),
    color: Colors.blackcolour,
    fontWeight: '700',
    textAlign: 'center',
    // marginTop: verticalScale(50),
  },
  multuslider: {
    backgroundColor: Colors.primarycolour,
    borderColor: Colors.primarycolour,
    borderBottomWidth:6,
    
    
  },
  markerstyle:{
    top:verticalScale(3),
    padding:9,
    
  }
});
export default Style;
