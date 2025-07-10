import {
  Popover,
  Button,
  Flex,
  Avatar,
  Box,
  Text,
  TextArea,
  Checkbox,
  Separator,
} from "@radix-ui/themes";
import AuthButton from "./AuthButton";
import { useSession } from "next-auth/react";
import Link from "next/link";


const UserDropdown = () => {
  const { status, data: session } = useSession();

  return (
    <Flex align="center" justify="end">
      <Popover.Root>
        <Popover.Trigger>
          <Button variant="soft">
            <Text>Mein Bereich</Text>
          </Button>
        </Popover.Trigger>
        <Popover.Content width="360px">
          <Text>Willkommen</Text>
          <Separator my="2" size="4"/>
          <Flex gap="3" align="center">
            <Avatar
              size="3"
              src={session?.user!.image!}
              fallback="?"
              radius="full"
            />
            <Box>
              <Flex direction="column">
                <Text>{session?.user?.name}</Text>
                <Text>{session?.user?.email}</Text>
              </Flex>
            </Box>
          </Flex>
          <AuthButton status={status}/>
        </Popover.Content>
      </Popover.Root>
    </Flex>
  );
};

export default UserDropdown;
