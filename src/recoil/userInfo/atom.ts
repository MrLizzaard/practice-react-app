import { atom } from "recoil";
type UserInfo = {
  userId: string;
  authToken: string | undefined;
};

const userInfoAtom = atom<UserInfo>({
  key: "userInfo",
  default: {
    userId: "",
    authToken: undefined,
  },
});

export default userInfoAtom;
