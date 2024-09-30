import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[show,setShow]=useState(true)
  return (
    <View style={styles.container}>
      <Text style={{fontSize:25}}>Show/Hide Component </Text>
      <StatusBar style="auto" />
     { 
      show ? <User/>:null
     }

      <Button title='toggle component' onPress={()=>{setShow(!show)}}/>
        
     
    </View>
  );
}
const User=()=>{

 let timer =setInterval(()=>{
  console.warn("timer working");
  
 },2000)

  useEffect(() => {
    return () => clearInterval(timer) 
    
  })

  return(
    <View>
      <Text style={styles.usertxt}>
        User Component
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#fff',
  paddingTop:35,
  },
  usertxt:{
    color:"green",
    fontSize:20,
  }
});
