import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import './Pickers.css'

interface DatepickerProps {
    setDate: (date: Date | undefined) => void;
}

function Datepicker({setDate}: DatepickerProps) {
    const handleDateChange = (newValue: Dayjs | null) => {
        setDate(newValue ? newValue.toDate() : undefined);
    };
    return (
        <div className="picker-wrapper">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Flight Date" onChange={handleDateChange}/>
            </LocalizationProvider>
        </div>
    );
}
export default Datepicker;