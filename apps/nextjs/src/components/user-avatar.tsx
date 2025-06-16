import type { AvatarProps } from "@radix-ui/react-avatar";
import type { User } from "@nexos/auth";

import { Avatar, AvatarFallback, AvatarImage } from "@nexos/ui/avatar";
import * as Icons from "@nexos/ui/icons";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "image" | "name">;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage alt="Picture" src={user.image} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          <Icons.User className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
