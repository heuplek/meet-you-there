import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import './Pickers.css'

interface TimepickerProps {
  setTime: (time: Date | undefined) => void;
}

function Timepicker({setTime}: TimepickerProps) {
  const handleSetTime = (newValue: any) => {
    console.log(newValue);
    setTime(newValue ? newValue.toDate() : undefined);
  };
  return (
    <div className="picker-wrapper">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker label="Arrival Time" onChange={handleSetTime}/>
      </LocalizationProvider>
    </div>
  );
}
export default Timepicker;