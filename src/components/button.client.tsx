"use client";
import { FC, useState } from "react";
import { fetchData } from "../utils/fetch-name";

type ClientButtonProps = {
  data: string;
  extended?: boolean;
}
export const ClientButton: FC<ClientButtonProps> = ({ data, extended  }) => {
  const [state, setState] = useState(true);
  const [sData, setData] = useState(data);
  const handleClick = () => {
    setState((old) => !old);
    if(extended) {
      fetchData().then(setData);
    }
  }
  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-md bg-${state ? "blue" : "red"}-500 text-white`}
    >
      with onClick - {sData}
    </button>
  );
};
