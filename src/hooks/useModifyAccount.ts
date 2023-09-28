import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from '../redux/hook';
import {setAccount} from '../redux/reducers/modifyAccountReducer';
import {useUtils} from './useUtils';

export const useModifyAccount = () => {
  const {date, showAlert} = useUtils();
  const dispatch = useAppDispatch();
  const {userData} = useAppSelector(state => state.accountReducer);

  const [dataUsr, setDataUsr] = useState({
    fullName: userData.fullName || '',
    birthdate: userData.birthdate || date || '',
    imageProfile: userData.imageProfile || '',
  });

  const modifyAccount = () => {
    dispatch(setAccount(dataUsr as any));
    showAlert('Success', 'Account has been modified');
  };

  useEffect(() => {
    const getAccount = async () => {
      const account = await AsyncStorage.getItem('@account');
      console.log('account', account);
      if (account) {
        dispatch(setAccount(JSON.parse(account)));
      }
    };
    getAccount();
  }, [dispatch, dataUsr]);

  return {modifyAccount, userData, dataUsr, setDataUsr};
};
