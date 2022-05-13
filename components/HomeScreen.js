import React from 'react';
import { Text, Button, View } from 'react-native';
import {SafeAreaView} from 'react-native';

function HomeScreen(props) {



    return (
      <SafeAreaView>
        <View>
          <Text>'Welcome to AppName'</Text>
          <Button
            title='press me'
            onPress={() => props.navigation.navigate('ProfileScreen')}
          />
        </View>


      </SafeAreaView>
    );
  } 
export default HomeScreen;