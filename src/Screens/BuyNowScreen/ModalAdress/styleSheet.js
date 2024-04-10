import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../Metrics';
import Colors from '../../../../assets/Colour/colour';

const style = StyleSheet.create({
  blur: {
    opacity: 0.9,
    backgroundColor: 'lightgrey',
    flex:1,
    justifyContent:'center'
  },
  
  Main: {
    backgroundColor: 'white',
    marginHorizontal:horizontalScale(10),
    borderRadius:moderateScale(20),
    paddingVertical:verticalScale(30),
    

  },
  btnadd:{
    borderWidth:1,
    marginHorizontal:horizontalScale(30),
    borderRadius:moderateScale(20),
    marginTop:verticalScale(20),
    paddingVertical:verticalScale(5),
    backgroundColor:Colors.primarycolour
  },
  txtadd:{
    textAlign:'center',
    fontSize:moderateScale(25),
    color:Colors.backgroundScreen
  },
  trass:{
    alignSelf:'flex-end',
    right:horizontalScale(20)
  }
 
});
export default style;
