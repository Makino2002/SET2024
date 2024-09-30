import { useState } from "react";
export default function Square({ value, onClick }) {
  //   const [value, setValue] = useState(null);
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
