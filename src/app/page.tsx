"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { clear } from "console";
import { useEffect, useState } from "react";
import WorkoutSet from "@/components/workout-set";

// This syntax is saying that I don't know
// what keys their will be in the object,
// but I do know the key is a string, and the value will be a number
interface Input {
  [key: string]: number;
}

export default function Home() {
  let interval: NodeJS.Timeout | undefined;

  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);
  const [setCount, setSetCount] = useState(0);

  const [inputArray, setInputArray] = useState<Input[]>([
    {
      weight: 0,
      reps: 0,
    },
  ]);

  const saveForm = () => {
    console.log(inputArray);
  };

  // When user clicks plus, a new object needs to be addedd into the input array
  // also count needs to increment by 1
  const handlePlus = () => {
    setSetCount(setCount + 1);
    setInputArray([...inputArray, { weight: 0, reps: 0}]);
  }

  // When user clicks plus, an object must be removed at the current count
  // also count needs to decrement by 1
  const handleMinus = (index: number) => {
    const newInputArray = [...inputArray];
    newInputArray.splice(index, 1);
    setInputArray(newInputArray)

    if (setCount > 0) {
      setSetCount(setCount - 1);
    }
  }

  useEffect(() => {
    if (isActive) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  return (
    <div>
      <div className="w-full">
        <div>
          <Card className="flex flex-col justify-between">
            <CardHeader className="gap-y-0.5 items-center">
              <CardTitle>Rest Timer</CardTitle>
              <CardDescription>Press start to begin</CardDescription>
            </CardHeader>
            <CardContent className="self-center text-6xl font-thin">
              {`
              ${Math.floor(timer / 100)
                .toString()
                .padStart(2, "0")}:${(timer % 100).toString().padStart(2, "0")}
              `}
            </CardContent>
            <CardFooter>
              <Button
                className="w-1/2 m-1"
                variant={!isActive ? "go" : "destructive"}
                onClick={() => setIsActive(!isActive)}
              >
                {isActive ? "STOP!" : "GO!"}
              </Button>
              <Button
                className="w-1/2 m-1"
                onClick={() => {
                  setTimer(0);
                  setIsActive(false);
                }}
              >
                RESET
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="gap-y-0.5 items-center">
              <Label>Current Workout</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a workout" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Upper</SelectLabel>
                    <SelectItem value="apple">
                      Flat Benchpress (Barbell)
                    </SelectItem>
                    <SelectItem value="banana">Incline Chest Press</SelectItem>
                    <SelectItem value="blueberry">Dips</SelectItem>
                    <SelectItem value="grapes">Lateral Raises</SelectItem>
                    <SelectItem value="pineapple">Shoulder Press</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </CardHeader>

            <CardContent className="grid-cols-3">
              <div className="flex justify-center">
                <Button variant="outline" size="icon" onClick={() => handleMinus(setCount)}>
                  -
                </Button>

                <h1 className="px-5 pt-1 text-2xl "> {setCount} </h1>

                <Button variant="outline" size="icon"  onClick={handlePlus} >
                  +
                </Button>
              </div>

              {Array(setCount)
                .fill(0)
                .map((x, index) => (
                  <WorkoutSet
                    key={index}
                    inputArray={inputArray}
                    setInputArray={setInputArray}
                    set={index + 1}
                  ></WorkoutSet>
                ))}
            </CardContent>

            <CardFooter className="flex justify-center">
              <Button onClick={saveForm} className="col-start-2">
                Save set
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
