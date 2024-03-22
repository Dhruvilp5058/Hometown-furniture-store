import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../Metrics';
import Colors from '../../../../assets/Colour/colour';

const style = StyleSheet.create({
  blur: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.9,
    backgroundColor: 'lightgrey',
  },
  container:{
    flex:1
  },
  Main: {
    backgroundColor: 'white',
    marginHorizontal:horizontalScale(10),
    borderRadius:moderateScale(20),
    justifyContent:'center',
    paddingVertical:verticalScale(30),
    marginTop:verticalScale(50)

  },
  btnadd:{
    borderWidth:1,
    marginHorizontal:horizontalScale(30),
    borderRadius:moderateScale(20),
    marginVertical:verticalScale(20),
    paddingVertical:verticalScale(5),
    backgroundColor:Colors.primarycolour
  },
  txtadd:{
    textAlign:'center',
    fontSize:moderateScale(25),
    color:Colors.backgroundScreen
  },
 
});
export default style;
