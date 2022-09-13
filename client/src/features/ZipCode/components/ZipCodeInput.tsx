import { FormHelperText, TextField } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField/TextField';
import React, { useCallback } from 'react';
import { useAtom } from 'jotai';
import { countryAtom, zipCodeAtom } from '../zipcode.state';

type ZipCodeInputProps = {
    errorMessage?: string,
    onSearch: (args: { countryCode: string, zipCode: string }) => void
} & TextFieldProps

function ZipCodeInput({ errorMessage, onSearch, ...props }: ZipCodeInputProps) {
    const [value, setValue] = useAtom(zipCodeAtom)
    const [country] = useAtom(countryAtom);

    const updateZipCode = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }, [setValue]);

    const isError = !!(props.error || errorMessage);
    return <>
        <TextField data-testid="zip-code-input"
                   label="Zip Code"
                   variant="outlined"
                   sx={{ width: 200 }}
                   error={isError}
                   type="search"
                   value={value}
                   onChange={updateZipCode}
                   onKeyPress={(e) => {
                       if (e.key === 'Enter') {
                           e.preventDefault();
                           onSearch({ zipCode: value, countryCode: country.id.toLowerCase() });
                       }
                   }}
                   {...props} />

        {isError && <FormHelperText error={isError} sx={{ position: { md: 'absolute' } }}>
            {props.error || errorMessage}
        </FormHelperText>}
    </>
}

export default React.memo(ZipCodeInput);