import useClock from "../hooks/useClock";

export default function MyClock() {
  //Gọi custom hook để sử dụng
  const [time, ampm] = useClock();
  return (
    <div id="Clock-style">
      <p>This is realtime o'clock: {time}<span> {ampm}</span></p>
    </div>
  );
}
