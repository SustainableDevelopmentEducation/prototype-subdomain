export function generateFilters(data) {
    const filters = {};

    // Iterate over each item in the data
    data.forEach((item) => {
        // Iterate over each property in the item
        Object.keys(item).forEach((key) => {
            // Skip non-array properties, 'id', 'keyDetails', 'howToGetInvolved', and 'goals'
            if (
                key === "id" ||
                key === "name" ||
                key === "description" ||
                key === "targetDemographics" ||
                key === "keyDetails" ||
                key === "howToGetInvolved" ||
                key === "goals" ||
                typeof item[key] !== "string"
            ) {
                return;
            }

            // Initialize filter if not exists
            if (!filters[key]) {
                filters[key] = {
                    id: key,
                    name: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the key
                    options: [],
                };
            }

            // Check if option already exists in the filter
            const existingOption = filters[key].options.find(
                (opt) => opt.value === item[key]
            );

            // If not, add it to the filter options
            if (!existingOption) {
                filters[key].options.push({
                    value: item[key],
                    label: item[key],
                    checked: true,
                });
            }
        });
    });

    // Return an array of filters
    return Object.values(filters);
}
