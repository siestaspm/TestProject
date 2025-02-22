import React, {useState} from 'react';
import { Text, View, Image,TextInput, TouchableOpacity } from 'react-native';
import { loginstyle } from './src/styles/MainStyle';

const App = () => {
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')

  const handlePress = () => { 
    console.log('hello')
    setUsername('Letran')
    setFirstName('Sean')
  }

  return (
    <View style={loginstyle.container}>
      
      <TextInput 
      value={username}
      style={loginstyle.TextInput}
      onChangeText={(text) => setUsername(text)}
      />
      <TextInput 
      value={firstName}
      style={loginstyle.TextInput}
      onChangeText={(text) => setFirstName(text)}
      />
      <TouchableOpacity
      onPress={handlePress}
      >
       <Image
      style={loginstyle.ImageContainer}
      source={require('./src/assets/Breadcoat-British-Shorthair.jpg')}
      />
      </TouchableOpacity>
    <Text>
      Hello CL7
    </Text>
    </View>

  );
};

export default App;
            {/* <TouchableOpacity
      onPress={() => setCount(prev => prev + 1)}>
      
      </TouchableOpacity> */}
      {/* <Image 
      style={styles.ImageContainer}
      source={require('./src/assets/Breadcoat-British-Shorthair.jpg')}
      /> */}
      {/* <TextInput
      style={styles.TextInput}
      value={username}
      onChangeText={(text)=> setUsername(text)}/>
      
      <TextInput
      style={styles.TextInput}
      value={workToDo}
      onChangeText={(text)=> setWorkToDo(text)}/>

      <Button
      style={styles.SuccessButton}
      title='Click Me!'
      onPress={handleSave}/> */}

{/* 
    <FlatList
      data={data}
      renderItem={({ item }) => <EmployeeNames item={item} setData={setData}/>} 
      keyExtractor={(item, index) => index.toString()} 
      style={{
        flexGrow: 0,
        width: 100,
        alignSelf: 'center',
        marginBottom: 25
    }}/> */}