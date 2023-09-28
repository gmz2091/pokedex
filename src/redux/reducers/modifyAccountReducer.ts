import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AccountState {
  fullName: string;
  birthdate: string;
  imageProfile: string;
}

interface UserData {
  userData: AccountState;
}

const initialState: UserData = {
  userData: {
    fullName: 'John Doe',
    birthdate: '1999-01-01',
    imageProfile: '',
  },
};

const accountReducer = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<AccountState>) => {
      state.userData = action.payload;
      AsyncStorage.setItem('@account', JSON.stringify(action.payload));
    },
  },
});

export const {setAccount} = accountReducer.actions;

export default accountReducer.reducer;
