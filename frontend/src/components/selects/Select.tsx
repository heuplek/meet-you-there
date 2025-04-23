import { Autocomplete, TextField, styled} from "@mui/material";
import './Select.css'

interface SelectProps {
    label: string;
    setValue: (value: string) => void;
    options: Array<{ value: string; label: string }>;
}


function Select({ label, setValue,  options }: SelectProps) {
    const handleChange = (
        event: React.SyntheticEvent<Element, Event>,
        value: unknown
    ) => {
        const newValue = value as { value: string; label: string } | null;
        console.log("Selected value:", newValue);
        if (newValue) {
            setValue(newValue.value);
        }
    }
    return (
        <div className="select-wrapper">
            <label>
                <Autocomplete
                    options={options}
                    renderInput={(params) => (<TextField {...params} label={label} variant="outlined" />)}
                    onChange={handleChange}
                    sx={{ width: "600", borderColor: "white", }}
                />
            </label>
        </div>
    );
}
export default Select;