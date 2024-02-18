"use client";
import { Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export default function RootNotFound() {
  const router = useRouter();

  return (
    <div className="mx-auto flex h-screen w-full flex-col items-center justify-center ">
      <Typography
        className="text-7xl font-bold text-button-primary"
        placeholder="404"
      >
        404
      </Typography>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Button
        className="mt-2"
        onClick={() => router.replace("/")}
        placeholder="btn"
      >
        Go Back
      </Button>
    </div>
  );
}
