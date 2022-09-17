import {useMutation} from '@apollo/client';
import {GET_ALL_USERS} from '../../query';
import {REMOVE_USER} from '../mutations';

export const useRemoveUser = (userId: string) => {
  const [removeUserGQL, {data, loading}] = useMutation(REMOVE_USER, {
    refetchQueries: [{query: GET_ALL_USERS}],
  });

  const removeUser = () => {
    removeUserGQL({
      variables: {
        id: userId,
      },
    });
  };

  return {
    removedUserData: data,
    removeUser,
    loadingRemoveUser: loading,
  };
};
