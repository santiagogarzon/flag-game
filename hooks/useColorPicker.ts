import { useEffect, useState } from "react";

export default function useColorPicker(initialColor = 'transparent'): [string, (newColor: string) => void
] {
  const [value, setValue] = useState(initialColor);
  
  const changeColor = (newColor: string) => {
    setValue(newColor);
  };
  console.log(value);
  return [value, changeColor];
}
