import React from "react";
import { Checkbox } from "../../components/Checkbox";

interface IToolbarProps {
  searchValue: string;
  onSearchValueChange: (searchValue: string) => void;
}

export const Toolbar = (props: IToolbarProps) => {
  const { searchValue, onSearchValueChange } = props;
  return (
    <div className="flex w-full p-2 border-gray-600 border-b">
      <input
        className="bg-gray-900 px-2 py-1 w-80"
        value={searchValue}
        onChange={(event) => {
          onSearchValueChange(event.target.value);
        }}
        placeholder="Filter"
      />
      <Checkbox
        id="preserveLog"
        label="Preserve Log"
        className="pl-4"
        checked={false}
        onChange={() => {}}
      />
    </div>
  );
};
