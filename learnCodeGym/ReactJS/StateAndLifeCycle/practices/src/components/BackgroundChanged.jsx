import { useState, useEffect } from "react";

export default function BackgroundChange() {
  const [color, setColor] = useState('black');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setColor('pink');
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          paddingTop: 20,
          width: 400,
          height: 80,
          margin: 'auto'
        }}
      />
    </div>
  );
}

   