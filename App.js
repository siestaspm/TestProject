import React, {useState} from 'react';
import { Text, View, Image, TextInput, Button, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { styles } from './src/styles/MainStyle';


const EmployeeNames = ({item, setData}) => { 
  
  const handleDelete = () => {
    setData(prev => prev.filter(name => name.id !== item.id))
  }
  return (
    <View style={styles.FlatListContainer}>
      <Text style={styles.FlatListTextStyle}>
        {item.name}
      </Text>
      <Text style={styles.FlatListTextStyle}>
        {item.type}
      </Text>
      <Button
        style={styles.DeleteButton}
        title='Delete Me!'
        onPress={handleDelete}
      />
  </View>
  );

}
const App = () => {
  const [username, setUsername] = useState('');
  const [workToDo, setWorkToDo] = useState('');
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const handleSave = () => { 
    setData(prev => [...prev,{id: prev.length + 1, name: username, type: workToDo}])
    setUsername('')
    setWorkToDo('')
    console.log(data)
  }
  return (
    <View style={styles.container}>
            {/* <TouchableOpacity
      onPress={() => setCount(prev => prev + 1)}>
      <Image
        style={styles.ImageContainer}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      </TouchableOpacity> */}
      <TextInput
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
      onPress={handleSave}/>


    <FlatList
      data={data}
      renderItem={({ item }) => <EmployeeNames item={item} setData={setData}/>} 
      initialNumToRender={1}
      windowSize={5}
      keyExtractor={(item, index) => index.toString()} 
      style={{
        flexGrow: 0,
        width: 100,
        alignSelf: 'center',
        marginBottom: 25
    }}/>
    </View>
  );
};

export default App;