const queries = {
    getZipCodeDetails: async (parent, {countryCode, zipcode}, { services }, info) => {
        return services.zipCode.search(countryCode, zipcode);
    }
};

export const zipCodeResolvers = { queries };
