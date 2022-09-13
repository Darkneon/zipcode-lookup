type CountryZipCodeArgs = {
    country: string;
    zipCode: string;
}
export const formatCountryZipCode = ({ country, zipCode }: CountryZipCodeArgs) => {
    return `${country} - ${zipCode}`;
};
