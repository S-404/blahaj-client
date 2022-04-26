export interface isValidValues {
    isValid: boolean;
    isInvalid: boolean;
}

export interface IsValidInputsValues {
    username: isValidValues;
    email: isValidValues;
    password1: isValidValues;
    password2: isValidValues;
}

