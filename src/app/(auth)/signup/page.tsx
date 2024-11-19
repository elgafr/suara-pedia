import { Metadata } from "next";
import signupImage from "@/assets/signup-image.png";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Sign Up to Suara Pedia</h1>
            <p className="text-muted-foreground">
              A place where you can connect with people from around the world.
            </p>
          </div>
          <div className="space-y-5">
            <SignUpForm />
            <div className="block text-center">
            <span>Already have an account? </span>
              <Link href="/login" className=" hover:underline text-primary">
                Log in
              </Link>
            </div>
          </div>
        </div>

        <Image
          src={signupImage}
          alt=""
          className="hidden w-1/2 object-contain md:block"
        />
      </div>
    </main>
  );
}
