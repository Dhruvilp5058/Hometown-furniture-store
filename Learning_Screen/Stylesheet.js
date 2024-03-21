import { StyleSheet } from "react-native";
import { verticalScale , horizontalScale ,moderateScale } from "../src/Screens/Metrics";

const stylesheet = StyleSheet.create({
    main:{
        flex:1,
        // alignItems:'center',
        backgroundColor:'white'
    },
    blueview:{
        paddingBottom:verticalScale(60),
        backgroundColor:'skyblue',

    },
    secondview:{
        // backgroundColor:'red'
    },
    txtinput:{
        borderWidth:4,
        marginHorizontal:horizontalScale(20),
        marginTop:verticalScale(30),
        borderRadius:moderateScale(30),
        borderColor:'skyblue',
        color:'black',
        paddingLeft:horizontalScale(20)
    },
    btn:{
        borderWidth:1,
        marginHorizontal:horizontalScale(50),
        paddingVertical:verticalScale(10),
        borderRadius:moderateScale(30),
        marginTop:verticalScale(30),
        backgroundColor:'skyblue'
    },
    btntxt:{
        color:'white',
        textAlign:'center',
        fontSize:moderateScale(25)
    }
})
export default stylesheet