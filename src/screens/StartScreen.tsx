import * as React from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import {Button} from '../ui/Button';
import {styles} from './styles';
import {useStartScreen} from './useStartScreen';

interface RenderUsers {
  item: {
    id: string;
    username: string;
  };
}

const renderUsers = ({item}: RenderUsers) => {
  return (
    <Text style={styles.listItem}>
      {`ID: ${item.id},`} &nbsp;
      <Text style={styles.listItem}>{`${item.username}`}</Text>
    </Text>
  );
};

export const StartScreen: React.FC = () => {
  const {
    users,
    loadingUsers,
    onChangeUsername,
    onChangeAge,
    addUser,
    removeUser,
    onChangeUserId,
  } = useStartScreen();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Start screen</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          onChangeText={onChangeUsername}
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          onChangeText={onChangeAge}
          style={styles.input}
          placeholder="Age"
          keyboardType="numeric"
        />
        <TextInput
          onChangeText={onChangeUserId}
          style={styles.input}
          placeholder="Remove user by user id"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Submit"
          type="primary"
          onPress={addUser}
          style={styles.button}
        />
        <Button
          title="Remove User"
          type="primary"
          onPress={removeUser}
          style={styles.button}
        />
      </View>
      {!loadingUsers && (
        <FlatList
          data={users}
          renderItem={renderUsers}
          style={styles.usersList}
        />
      )}
    </View>
  );
};
