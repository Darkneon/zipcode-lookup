import { Box } from '@mui/material';
import History from './components/History';
import useZipCodeLookupWithHistory from './hooks/useZipCodeLookupWithHistory';
import React, { useCallback } from 'react';
import ZipCodeForm from './components/ZipCodeForm';
import config from '@/data/config';
import { ZipCodeFormInputs } from '@/types/countries';

function ZipCode() {
    const {
        setCountryAndZipCode,
        history, clearHistory, removeFromHistory,
        error
    } = useZipCodeLookupWithHistory(config.defaultCountryId);

    const updateCountryAndZipCode = useCallback((input: ZipCodeFormInputs) => {
        setCountryAndZipCode(input);
    }, [setCountryAndZipCode])

    return <Box>
        <ZipCodeForm zipCodeError={error} onSearch={updateCountryAndZipCode} />
        <History items={history} removeFromHistory={removeFromHistory} clearHistory={clearHistory} />
    </Box>
}

export default ZipCode;