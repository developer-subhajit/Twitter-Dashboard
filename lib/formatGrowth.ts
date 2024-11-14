interface GrowthData {
    [key: string]: any;
    "New follows": number;
    "Profile visits": number;
}

export function calculateGrowthRate(data: GrowthData[]) {
    return data.map(item => {
        try {
            const newFollows = item["New follows"] || 0;
            const profileVisits = item["Profile visits"] || 0;
            
            const growth = profileVisits > 0 ? (newFollows / profileVisits) : 0;

            return {
                ...item,
                growth: Number(growth.toFixed(4))
            };
        } catch (error) {
            console.error("Error calculating growth rate:", error);
            return {
                ...item,
                growth: 0
            };
        }
    });
}
