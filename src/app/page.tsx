'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { clear } from "console";

import { useState } from "react";

export default function Home() {

  const [counter, setCounter] = useState(0);

  function increaseUp() {
    setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 100);
  }

  function stopTimer() {
    setCounter(0);
  }


  return (
    <div className="grid grid-cols-3 gap-8">

      <div>
        <div>
          <Card className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <CardTitle>Timer</CardTitle>
              <CardDescription>Press start to begin workout</CardDescription>
            </CardHeader>
            <CardContent>
              {counter}
            </CardContent>
            <CardFooter>
              <Button className="w-1/2 m-1" onClick={increaseUp}>GO!</Button>
              <Button className="w-1/2 m-1" variant="destructive" onClick={stopTimer}>STOP!</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
    </div>
  );
}