import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>
        This is Piyas
      </h2>

      <Button>Piyas</Button>
      <UserButton/>
    </div>

  );
}
