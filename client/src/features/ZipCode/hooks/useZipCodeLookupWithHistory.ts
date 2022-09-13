import { useCallback, useEffect, useState } from 'react';
import { useLookupZipCodeQuery } from '@/generated/graphql';
import { HistoryItem } from '@/types/history';
import { zipCodeToHistoryItem } from '@/features/ZipCode/lib';
import config from '@/data/config';
import { ZipCodeFormInputs } from '@/types/countries';

function useZipCodeLookupWithHistory(defaultCountryCode: string, defaultZipCode: string = '') {
    const [history, setHistory] = useState<HistoryItem[]>([])
    const [input, setInput] = useState<ZipCodeFormInputs>({
        countryCode: defaultCountryCode,
        zipCode: defaultZipCode
    });
    const [validationError, setValidationError] = useState('');
    const { loading, error, data } = useLookupZipCodeQuery({
        variables: input,
        skip: !input.zipCode
    });

    useEffect(() => {
        const result = data?.getZipCodeDetails
        if (result) {
            setHistory(prevState => [
                zipCodeToHistoryItem(result),
                ...prevState.slice(0, Math.max(1, config.maxHistory - 1))
            ])
            setInput(prevState => ({ ...prevState, zipCode: '' }))
        }
    }, [data]);

    const setCountryAndZipCode = useCallback(({ countryCode, zipCode }: ZipCodeFormInputs) => {
        if (!zipCode) {
            setValidationError(`Zip code cannot be empty`)
        } else {
            setInput({ countryCode, zipCode });
            setValidationError('');
        }
    }, []);

    function clearHistory() {
        setHistory([]);
    }

    const removeFromHistory = useCallback((index: string) => {
        setHistory(prevState => prevState.filter((item) => item.key !== index));
    }, [])

    return {
        countryCode: input.countryCode,
        zipCode: input.countryCode,
        setCountryAndZipCode,
        history, clearHistory, removeFromHistory,
        loading,
        error: error?.message || validationError
    }
}

export default useZipCodeLookupWithHistory;