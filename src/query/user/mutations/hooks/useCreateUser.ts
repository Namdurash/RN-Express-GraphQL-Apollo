import {useMutation} from '@apollo/client';
import {GET_ALL_USERS} from '../../query';
import {CREATE_USER} from '../mutations';

interface CreateUser {
  username: string;
  age: number;
}

export const useCreateUser = ({username, age}: CreateUser) => {
  const [newUser] = useMutation(CREATE_USER, {
    refetchQueries: [{query: GET_ALL_USERS}],
  });

  const addUser = () => {
    console.log(username, age);
    newUser({
      variables: {
        input: {
          username,
          age,
        },
      },
    }).then(({data}) => {
      console.log(data);
    });
  };

  return {
    addUser,
  };
};
