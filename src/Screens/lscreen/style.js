import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../Metrics";
import Colors from "../../../assets/Colour/colour";

const style = StyleSheet.create({
    flatmain:{
        flex:1
    },
    itemview:{
        flexDirection:'row',
        marginHorizontal:horizontalScale(20),
        marginVertical:verticalScale(10),
        borderRadius:moderateScale(10),
        elevation:8,
        backgroundColor:Colors.backgroundScreen,
        paddingVertical:verticalScale(10)
    },
    image:{
        height:verticalScale(85),
        width:horizontalScale(85),
        aspectRatio:1,
        borderRadius:moderateScale(10),
        margin:moderateScale(5)
    },
    txtview:{
        justifyContent:'space-between',
        marginLeft:horizontalScale(20),
        width:horizontalScale(100)
    },
    txttype:{
        fontSize:moderateScale(23),
        color:Colors.blackcolour,
        textAlign:'center',
        fontWeight:'700',
        width:horizontalScale(100)
    },
    txtprice:{
        fontSize:moderateScale(20),
        color:Colors.blackcolour,
        textAlign:'center',
        fontWeight:'600'
    },
    iconview:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: horizontalScale(18),
    },
    txtamount:{
        borderWidth: 1,
        width: horizontalScale(30),
        paddingVertical: verticalScale(1),
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20,
        borderRadius: 5,
        color: Colors.blackcolour,
    }
})
export default style