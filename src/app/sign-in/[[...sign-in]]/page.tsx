import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="m-auto flex h-screen max-w-5xl items-center justify-center px-3">
      <SignIn appearance={{ variables: { colorPrimary: "#000000" } }} />
    </div>
  );
}
