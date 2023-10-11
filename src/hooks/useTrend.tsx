import { useState } from "react";

export const useTrend = (state: any) => {
  const [tuple, setTuple] = useState([null, state]);
  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }
  return tuple[0] ? state > tuple[0] ? 1 : -1 : 1
}