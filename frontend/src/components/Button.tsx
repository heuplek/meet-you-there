import { Button } from "@mui/material";

interface SubmitButtonProps {
    clickHandler: () => void;
}

function SubmitButton({clickHandler}: SubmitButtonProps) {

    return (
        <div className="button-wrapper">
            <Button
                variant="contained"
                size="large"
                onClick={clickHandler}
            >
                Submit
            </Button>
        </div>
    );
}
export default SubmitButton;