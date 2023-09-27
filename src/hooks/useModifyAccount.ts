import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from '../redux/hook';
import {setAccount} from '../redux/reducers/modifyAccountReducer';

export const useModifyAccount = () => {
  const dispatch = useAppDispatch();
  const {userData} = useAppSelector(state => state.accountReducer);

  const modifyAccount = (data: any) => {
    dispatch(setAccount(data));
  };

  useEffect(() => {
    const getAccount = async () => {
      const account = await AsyncStorage.getItem('@account');
      if (account) {
        dispatch(setAccount(JSON.parse(account)));
      }
    };
    getAccount();
  }, [dispatch]);

  return {modifyAccount, userData};
};
