"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from "@/components/AuthProvider";
export default function Home() {
  const {user} = useAuth();
  return (
    <>
      <main className="flex flex-col items-center justify-center py-5">
        {user ? (
          <h1>Welcome to the app as a logged in user {user?.uid}</h1>
        ):(
         <h2> You are not logged in.</h2>
        )}

        {user ?
        (
          <Button onClick={()=> signOut(auth)} className="mt-10">
            Sign Out
          </Button>
        ):
        (
          <Link href="/login">
            <Button  className="mt-10">
              Sign In
            </Button>
          </Link>
        )}
        </main>
    </>
  );
}
