import React from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';


function ProfileScreen() {
    return (

    //<SafeAreaView>
        <View style={styles.container}>
            <View style = {styles.topbar}></View>
            <View style = {styles.middle}>
            <View style = {styles.text1}>
                <Text>Welcome to AppName</Text>
            </View>

                <View style = {styles.text1}>
                    <Text>From:</Text>
                </View>
                    <View style={styles.box}>
                        <Text>UCLA</Text>
                    </View>
                
                <View>
                <Text style = {styles.text1}>To:</Text>
                </View>
                    <View style={styles.box}>
                        <Text>LAX</Text>
                    </View>
                <View style = {styles.text1}>
                <Text>On:</Text>
                </View>
                    <View style={styles.box}>
                        <Text>3rd May</Text>
                    </View>
                <View style = {styles.text1}>
                <Text>At:</Text>
                </View>
                    <View style={styles.box}>
                        <Text>6pm</Text>
                    </View>

            </View>
            <View style = {styles.topbar}></View>
        </View>
    //</SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
        // borderWidth: 1
    },
    topbar:{
        //flex: 1,
        backgroundColor:'#FF000F',
        //padding: 20
        height: 100

    },
    middle:{
        //flex: 30,
        //backgroundColor:'white',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor:'#CAFFF2',
        padding: 20,
        alignItems:'center',
        height: 700

    },
   
    box: {
        padding: 20,
        borderWidth: 3,
        width: 300,
        margin: 10,
        alignItems:'flex-start',
        backgroundColor:'white'
    },
    header:
    {
        
        fontSize: 70,
        fontWeight: '800'
    },
    text1:
    {
        textAlign:'left',
        //textAlign:'flex-start',
        fontSize: 20,
        fontWeight: 'normal'
    }
  });



  
//   const styles = StyleSheet.create({
//     container: {
//       flexDirection: 'column',
//       justifyContent: 'space-evenly',
//       alignItems: 'center',
//       height: 700,
//       borderWidth: 1
//     },
//     box: {
      
//       //height: 20
//     }
//   })
export default ProfileScreen;
