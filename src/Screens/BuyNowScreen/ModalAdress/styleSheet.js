import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../Metrics';
import Colors from '../../../../assets/Colour/colour';

const style = StyleSheet.create({
  blur: {
    backgroundColor: Colors.shadowcolour,
    flex:1,
    justifyContent:'center'
  },
  
  Main: {
    backgroundColor: 'white',
    marginHorizontal:horizontalScale(10),
    borderRadius:moderateScale(20),
    paddingVertical:verticalScale(20),

    

  },
  btnadd:{
    borderWidth:1,
    marginHorizontal:horizontalScale(30),
    borderRadius:moderateScale(100),
    marginTop:verticalScale(20),
    paddingVertical:verticalScale(10),
    backgroundColor:Colors.primarycolour,
    marginVertical:verticalScale(10)
  },
  txtadd:{
    textAlign:'center',
    fontSize:moderateScale(20),
    color:Colors.backgroundScreen
  },
  trass:{
    alignSelf:'flex-end',
    right:horizontalScale(20)
  }
 
});
export default style;
