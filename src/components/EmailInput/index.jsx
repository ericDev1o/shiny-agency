import { useTheme, useState } from "../../utils/hooks/index.jsx";
import { InputWrapper, StyledLabel, StyledInput } from "./style";

function EmailInput() {
    const { theme } = useTheme();
    const [inputValue, setInputValue] = useState("");

    return (
        <InputWrapper theme={theme}>
            <StyledLabel theme={theme}>Adresse Email</StyledLabel>
            <StyledInput
                theme={theme}
                onChange={(e) => setInputValue(e.target.value)}
            />
            {inputValue}
        </InputWrapper>
    );
}

export default EmailInput;
