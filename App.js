import React, {useState} from 'react';
import { Text, View, Image, TextInput, Button, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { styles } from './src/styles/MainStyle';


const App = () => {
  const [username, setUsername] = useState('');
  const [workToDo, setWorkToDo] = useState('');
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  return (
    <View style={styles.container}>
            <TouchableOpacity
      onPress={() => setCount(prev => prev + 1)}>
      <Image
        style={styles.ImageContainer}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      </TouchableOpacity>
      <TextInput
      style={styles.TextInput}
      value={username}
      onChangeText={(text)=> setUsername(text)}/>
      
      <TextInput
      style={styles.TextInput}
      value={workToDo}
      onChangeText={(text)=> setWorkToDo(text)}/>

  
    </View>
  );
};

export default App;