import { Button } from "@/components/ui/button";
import H1 from "@/components/ui/h1";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <H1>Soda Chats</H1>
      <p className="text-muted-foreground">
        Experience the best way to connect with others!
      </p>
      <Button asChild>
        <Link href='/chat'>Chat Now</Link>
      </Button>
    </div>
  );
}
