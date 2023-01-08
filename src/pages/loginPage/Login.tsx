import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

type UserData = {
  userId: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<UserData>();

  const onSubmit: SubmitHandler<UserData> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("userId")} />
        <input type="password" {...register("password")} />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
