import React, {useState, useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const App = () => {
  // useState [변수명, set변수명] = useState(기본값);
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState('');

  const handleChangeTodo = useCallback((todo) => {
    setTodo(todo);
  }, []);

  const addTodoInList = useCallback(() => {
    setList([
      ...list,
      {
        todo,
        isDone: false,
        isDelete: false,
      },
    ]);
  }, [list, todo]);

  // useEffect(() => {
  //   console.log('list', JSON.stringify(list));
  // }, [list]);

  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <SafeAreaView>
        {/* 투두리스트 제목 */}
        <View style={styles.titleLayout}>
          <Text style={styles.titleText}>To-Do-List</Text>
        </View>
        {/* 텍스트 인풋 및 버튼 */}
        <View style={styles.inputLayout}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={handleChangeTodo}
          />
          <TouchableOpacity style={styles.buttonView} onPress={addTodoInList}>
            <View style={styles.buttonTextLayout}>
              <Text>저장</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* 투두리스트 */}
        <View>
          <FlatList
            data={list}
            renderItem={({item}) => <Text>{item.todo}</Text>}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  titleLayout: {
    paddingVertical: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  inputLayout: {
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    height: 50,
  },
  inputStyle: {
    flex: 1,
    height: 50,
    borderColor: '#404040',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginRight: 10,
    lineHeight: 0,
    fontSize: 17,
  },
  buttonView: {
    width: 50,
    height: 50,
    borderColor: '#404040',
    borderWidth: 1,
  },
  buttonTextLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
