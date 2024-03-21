import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../Metrics";

const style = StyleSheet.create({
    Main:{
        flex:1,
    },
    ItemVIew:{
        flexDirection:'row',
        backgroundColor:'white',
        marginHorizontal:horizontalScale(20),
        marginVertical:verticalScale(10),
        paddingVertical:verticalScale(15),
        justifyContent:'space-between',
        borderRadius:moderateScale(15),
        elevation:8

    },
    imageitem:{
        height:verticalScale(80),
        width:horizontalScale(80),
        aspectRatio:1,
        right:horizontalScale(20)
    },
    txtview:{
        elevation:8,
       width:horizontalScale(80),
       left:horizontalScale(20),
       top:verticalScale(10),
       backgroundColor:'white',
       borderRadius:moderateScale(10),
       paddingVertical:verticalScale(5)

    },
    txtarrive:{
        color:'black',
        fontSize:moderateScale(20),
        fontWeight:'800',
        left:horizontalScale(10),
        bottom:verticalScale(8)
    },
    txttype:{
        color:'black',
        fontSize:moderateScale(15),
        textAlign:'center'
    },
    txtprice:{
        color:'black',
        fontSize:moderateScale(15),
        textAlign:'center'
    }
})
export default style