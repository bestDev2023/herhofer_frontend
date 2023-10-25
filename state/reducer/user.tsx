import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserType = {
  user: {};
  isLoggedIn: boolean;
  notification: [];
  customPageData: {};
  copyright_text: "";
  socialData: [];
  logo: string;
  icoChat: [];
  supportChat: [];
  notificationData: [];
};

const initialState: any = {
  user: {},
  isLoggedIn: false,
  isLoading: true,
  notification: [],
  icoChat: [],
  customPageData: null,
  copyright_text: null,
  socialData: null,
  supportChat: [],
  logo: "",
  notificationData: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    setAuthenticationState: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setNotification: (state, action: PayloadAction<any>) => {
      state.notification = action.payload;
    },
    setLogo: (state, action: PayloadAction<any>) => {
      state.logo = action.payload;
    },
    seticoChat: (state, action: any) => {
      state.icoChat = action.payload;
    },
    setChatico: (state, action: any) => {
      state.icoChat = [...state.icoChat, action.payload];
    },
    setsupportChat: (state, action: any) => {
      state.supportChat = action.payload;
    },
    setSupportico: (state, action: any) => {
      state.supportChat = [...state.supportChat, action.payload];
    },
    setCustomPageData: (state, action: any) => {
      state.customPageData = action.payload;
    },
    setCopyright_text: (state, action: any) => {
      state.copyright_text = action.payload;
    },
    setSocialData: (state, action: any) => {
      state.socialData = action.payload;
    },
    setNotificationData: (state, action: any) => {
      state.notificationData = action.payload;
    },
    setOneNotification: (state, action: any) => {
      state.notificationData.unshift(action.payload);
    },
  },
});

export const {
  login,
  logout,
  setUser,
  setAuthenticationState,
  setLoading,
  setLogo,
  seticoChat,
  setChatico,
  setsupportChat,
  setSupportico,
  setCustomPageData,
  setCopyright_text,
  setSocialData,
  setNotificationData,
  setOneNotification,
} = userSlice.actions;
export default userSlice.reducer;
