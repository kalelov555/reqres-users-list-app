import { List } from "@mui/material";
import { User } from "../../typings/user";
import { UserItem } from "./UserItem";

export type Props = {
  users: User[];
};

export const Content = ({ users }: Props) => {
  return (
    <List
      className='users-list'
      sx={{ width: "100%", bgcolor: "background.paper" }}
    >
      {users.map((user) => {
        return (
          <UserItem
            key={user.id}
            email={user.email}
            first_name={user.first_name}
            last_name={user.last_name}
            avatar={user.avatar}
          />
        );
      })}
    </List>
  );
};
