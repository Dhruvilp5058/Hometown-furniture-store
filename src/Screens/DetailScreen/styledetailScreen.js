import {StyleSheet} from 'react-native';
import { horizontalScale, verticalScale } from '../Metrics';

const styleDetilScreen = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: 'white',
  },
  blueview: {
    backgroundColor: 'rgb(0, 172, 255)',
    paddingBottom: 40,
  },
  itemimage: {
    height: 200,
    width: 200,
    tintColor: 'rgb(0, 172, 255)',
    alignSelf: 'center',
    marginTop: '5%',
  },
  itemview: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    elevation: 15,
    shadowColor: 'black',
    shadowRadius: 10,
    paddingBottom: verticalScale(28),
    borderRadius: 20,
    marginTop: '8%',
  },
  txttype: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'ProtestStrike-Regular',
    marginLeft: horizontalScale(25),
    marginTop: verticalScale(20),
    borderBottomWidth: 3,
    borderColor: 'rgb(0, 172, 255)',
     

  
  },
  txtprice: {
    color: 'purple',
    fontWeight: '800',
    fontSize: 35,
    left: horizontalScale(25),
    marginTop: verticalScale(15),
  },
  iconitem: {
    width: '10%',
    alignItems: 'center',
    right:'15%',
    marginTop:'4%'
  },
  btnitem: {
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: 'rgb(0, 172, 255)',
    right:'5%',
    top: '15%',
    width: horizontalScale(150),
    // position:'absolute',
    justifyContent: 'center',
    paddingBottom:verticalScale(8),
    paddingTop:8
  },
  btntxt: {
    textAlign: 'center',
    fontSize: 23,
    color: 'white',
  },
  txtdec:{
    fontSize:30,
    color:'black',
    fontFamily:'Merriweather-Bold',
    left:'8%',
    marginTop:'10%'
  },
  decdetail:{
    fontSize:24,
    padding:10,
    left:'4%',
    fontWeight:'400',
    color:'black'
  },
  addcartbtn:{
    borderWidth:1,
    marginHorizontal:'5%',
    borderRadius:20,
    paddingVertical:15,
    backgroundColor:'rgb(0, 172, 255)',
    marginTop:'2%'
  },
  addcarttxt:{
    fontSize:20,
    color:'white',
    textAlign:'center'
  },
  iconcart:{
   bottom:'5.2%',
   left:'18%',
   color:'white'
  }
});
export default styleDetilScreen;
 