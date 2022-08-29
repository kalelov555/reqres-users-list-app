import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUsersListAction } from "../../store/users/action";
import { Navbar } from "../Navbar/Navbar";
import "../../styles/Home.css";
import { Content } from "./Content";
import { User } from "../../typings/user";
import { Spinner } from "../Spinner/Spinner";

export type Props = {
  user: User;
  status: "idle" | "loading" | "succeeded";
  handleLogout: () => void;
};

function Home({ user, handleLogout }: Props) {
  const { users, status } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status !== "succeeded") dispatch(getUsersListAction());
  }, [dispatch, users, status]);

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <div className='home'>
      <div className='nav'>
        <Navbar currentUser={user} handleLogout={handleLogout} />
      </div>
      <div className='content'>
        <Content users={users} />
      </div>
    </div>
  );
}

export default Home;
