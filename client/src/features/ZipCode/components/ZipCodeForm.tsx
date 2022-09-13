import { Grid } from '@mui/material';
import CountrySelect from './CountrySelect';
import ZipCodeInput from './ZipCodeInput';
import React from 'react';
import SearchButton from './SearchButton';

type Props = {
    zipCodeError: string | undefined,
    onSearch: (args: { countryCode: string, zipCode: string }) => void
}

function ZipCodeForm({ zipCodeError, onSearch }: Props) {
    return <Grid container
                 direction={{ xs: "column", md: "row" }}
                 justifyContent="space-between"
                 alignItems={'center'}
                 spacing={2}>
        <Grid item xs>
            <CountrySelect />
        </Grid>
        <Grid item xs>
            <ZipCodeInput onSearch={onSearch} errorMessage={zipCodeError} />
        </Grid>
        <Grid item xs="auto">
            <SearchButton onSearch={onSearch} />
        </Grid>
    </Grid>
}

export default React.memo(ZipCodeForm);