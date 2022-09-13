import { Autocomplete, AutocompleteProps, TextField } from '@mui/material';
import React, { useCallback } from 'react';

import { CountryType } from '@/types/countries';
import { countries } from '@/data/countries';
import { useAtom } from 'jotai';
import { countryAtom } from '../zipcode.state';

type MUIBoolean = boolean | undefined
type CountrySelectProps<T> = Omit<AutocompleteProps<T, MUIBoolean, MUIBoolean, MUIBoolean>, 'renderInput' | 'options'>

function CountrySelect(props: CountrySelectProps<CountryType>) {
    const [value, setValue] = useAtom(countryAtom)

    const updateCountry = useCallback((e: React.SyntheticEvent<Element, Event>, newValue: unknown) => {
        setValue((newValue as CountryType))
    }, [setValue]);

    return <>
        <Autocomplete
            options={countries}
            sx={{ width: 200 }}
            clearIcon={null}
            value={value}
            onChange={updateCountry}
            getOptionLabel={(option: unknown) => (option as CountryType).label}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a country"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
            {...props}
        />
    </>
}

export default React.memo(CountrySelect);