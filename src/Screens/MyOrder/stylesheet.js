import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../Metrics';
import Colors from '../../../assets/Colour/colour';

const style = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
  },
  myorderview:{
    backgroundColor:Colors.primarycolour,
  },
  myorder:{
    textAlign: 'center',
    fontSize: moderateScale(30),
    fontWeight: '900',
    color: 'white',
    bottom: '30%',
    paddingTop: verticalScale(10),
  },
  iconback:{
    top: verticalScale(24),
    left: horizontalScale(8),
    zIndex: 1,
  },
  come:{
    textAlign:'center',
    width: 80,
    color:Colors.backgroundScreen,
    backgroundColor:Colors.primarycolour,
    borderBottomLeftRadius:moderateScale(5),
    borderBottomRightRadius:moderateScale(5),
    padding:1,
    right: horizontalScale(5),
    top: verticalScale(1)

  },
  flatlist:{
    flexDirection: 'row',
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    elevation: 2,
    backgroundColor: Colors.backgroundScreen,
    height: verticalScale(100),
  },
  txtview:{
    justifyContent: 'space-evenly',
    marginLeft:horizontalScale(20),
    alignItems:'flex-start',
    // borderWidth:1,
    width:horizontalScale(144)
    // margin:moderateScale(5)
  },
  txttype:{
    fontSize:moderateScale(22),
    color:Colors.blackcolour,
    textAlign:'center',
    // width: horizontalScale(95),
  },
  viewqty:{
    // marginRight:horizontalScale(20)
  },
  txtqty:{
    color:Colors.blackcolour,
    fontSize:moderateScale(20),
    fontWeight:'700',
    textAlign:'center',
    top:verticalScale(19)
    // borderWidth:1
  },
  orderview:{
    alignSelf:'center'
  },
  txtorder:{
    fontSize:moderateScale(22),
    color:Colors.blackcolour,
    textAlign:'center',
    width: horizontalScale(120),
    alignSelf:'center',
  },
  image:{
    height: verticalScale(80),
    width: horizontalScale(80),
    aspectRatio: 1,
    alignSelf:'center',
    marginLeft:horizontalScale(10),
    borderRadius:moderateScale(5)
  }
 
});
export default style;
