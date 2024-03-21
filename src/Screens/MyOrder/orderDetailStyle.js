import { StyleSheet } from "react-native"
import { horizontalScale, moderateScale, verticalScale } from "../Metrics"


const orderDetailStyle = StyleSheet.create({
    main:{
        flex:1
    },
    blueview:{
    backgroundColor:'rgb(0, 172, 255)',
    bottom:verticalScale(18)
    },
    backbtn:{
    top:verticalScale(20),
    left:horizontalScale(10),
    width:horizontalScale(30),
    zIndex:1
    },
   
    itemview:{
        flexDirection:'row',
        justifyContent:"space-between",
        marginHorizontal:horizontalScale(25),
        padding:moderateScale(15),
        elevation:8,
        borderRadius:moderateScale(20),
        backgroundColor:'white',
        marginTop:verticalScale(50)
    },
    txttype:{
        fontSize:moderateScale(30),
        fontWeight:'900',
        color:'black',
        left:horizontalScale(25),
        top:verticalScale(1)
    },
    txtprice:{
        fontSize:moderateScale(28),
        fontWeight:'900',
        color:'black',
        left:horizontalScale(25),
        top:verticalScale(6)
    },
    image:{
        height:verticalScale(80),
        width:horizontalScale(80),
        aspectRatio:1,
        tintColor:'rgb(0, 172, 255)',
    },
    addview:{
        marginTop:verticalScale(20),
        marginHorizontal:horizontalScale(25),
        padding:moderateScale(15),
        elevation:8,
        borderRadius:moderateScale(20),
        backgroundColor:'white'
    },
  
    txtuser:{
        fontSize:moderateScale(20),
        fontWeight:'800',
        color:'black',
        left:horizontalScale(1.5)
    },
    address:{
     fontSize:moderateScale(18),
     color:'black',
     fontWeight:'700'
    
    },
 
})
  

export default orderDetailStyle