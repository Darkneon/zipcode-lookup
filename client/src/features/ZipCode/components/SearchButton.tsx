import ActionButton, { ActionButtonProps } from '../../../components/ActionButton';
import React, { useCallback } from 'react';

import { useAtom } from 'jotai';
import { countryAtom, zipCodeAtom } from '../zipcode.state';

type SearchButtonProps = {
    onSearch: (args: { countryCode: string, zipCode: string }) => void
} & ActionButtonProps

const SearchButton = ({ onSearch, ...props }: SearchButtonProps) => {
    const [zipCode] = useAtom(zipCodeAtom);
    const [country] = useAtom(countryAtom);

    const searchClicked = useCallback(() => {
        onSearch({ zipCode, countryCode: country.id.toLowerCase() });
    }, [onSearch, zipCode, country]);

    return <ActionButton disableRipple onClick={searchClicked} {...props}>Search</ActionButton>
}

export default SearchButton;



