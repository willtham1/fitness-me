import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

interface Props {
  set: number;
  inputArray: Array<any>;
  setInputArray: any;
}

// This compoonent represents 1 row inside of the workout table
export default function WorkoutSet({ set, setInputArray, inputArray }: Props) {
  const index = set - 1;

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {

    const data = [...inputArray];
    data[index][event.target.name] = Number(event.target.value);
    setInputArray(data);
  };

  return (
    <div className="grid grid-cols-7 gap-5 mt-5 justify-stretch">
        <div className="col-span-1">
          <Label>Set</Label>
          <p>{set}</p>
        </div>
        <div className="col-span-2">
          <Label>Previous</Label>
          <p>dummy</p>
        </div>
        <div className="col-span-2">
          <Label>Weight</Label>
          <Input
            name="weight"
            type="text"
            value={inputArray[index].weight}
            onChange={handleFormChange}
          />
        </div>
        <div className="col-span-2">
          <Label>Reps</Label>
          <Input
            name="reps"
            type="text"
            value={inputArray[index].reps}
            onChange={handleFormChange}
          ></Input>
        </div>
    </div>
  );
}
