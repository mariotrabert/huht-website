'use client'
import Link from "next/link";
import { Button, Text } from "@radix-ui/themes";
import { EnterIcon, ExitIcon } from "@radix-ui/react-icons";

interface Session {
  status: string;
}

const AuthButton = (session: Session) => {
  return (
    <>
      {session.status === "unauthenticated" && (
        <Link href="/api/auth/signin">
        <Button>
          <EnterIcon />
          <Text>Anmelden</Text>
        </Button>
      </Link>
      )}
      {session.status === "authenticated" && (
        <div className="flex pl-4">
          <Link href="/api/auth/signout">
            <Button>
              <ExitIcon />
              <Text>Abmelden</Text>
            </Button>
          </Link>
        </div>
      )}
    </>
  )
}

export default AuthButton