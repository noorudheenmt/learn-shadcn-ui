"use client";
import { Button } from "@/components/ui/button";

function buttonPage() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button variant="outline" size="lg" onClick={handleClick}>
        Click Me
      </Button>
    </div>
  );
}

export default buttonPage;
