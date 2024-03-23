'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
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
              {(new Date().toLocaleTimeString())}
            </CardContent>
            <CardFooter>
              <Button className="w-1/2 m-1">GO!</Button>
              <Button className="w-1/2 m-1" variant="destructive">STOP!</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
    </div>
  );
}