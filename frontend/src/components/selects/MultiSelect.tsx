import { Autocomplete, TextField } from "@mui/material";
import './Select.css'

interface SelectProps {
    label: string;
    setValue: (value: string[]) => void;
    options: Array<{ value: string; label: string }>;
    isOneLine: boolean;
}

function MultiSelect({ label, setValue, options, isOneLine }: SelectProps) {
    const handleChange = (
        event: React.SyntheticEvent<Element, Event>, 
        newValue: unknown
    ) => {
        const typedValue = newValue as { value: string; label: string }[];
        console.log("Selected values:", typedValue);

        setValue(typedValue.map((option) => option.value));
    };
    return (
        <div className={"select-wrapper" + (isOneLine ? " one-line" : "")}>
                <Autocomplete
                    options={options}
                    renderInput={(params) => (<TextField {...params} label={label} variant="outlined" />)}
                    multiple
                    onChange={handleChange}
                    size="medium"
                />
        </div>
    );
}
export default MultiSelect;