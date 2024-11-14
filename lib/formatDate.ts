import { format } from "date-fns";

interface BaseChartData {
    [key: string]: any;
}

export function formatDate<T extends BaseChartData>(
    data: T[],
    dateKey: string
) {
    return data.map((item) => {
        try {
            if (!item[dateKey]) {
                console.warn(`Missing ${dateKey} for item:`, item);
                return {
                    ...item,
                    date: "No Date",
                };
            }

            const date = new Date(item[dateKey]);

            if (isNaN(date.getTime())) {
                console.warn(`Invalid date format:`, item[dateKey]);
                return {
                    ...item,
                    date: "Invalid Date",
                };
            }

            return {
                ...item,
                date: format(date, "dd MMM yyyy"),
            };
        } catch (error) {
            console.error(`Error formatting date for item:`, item, error);
            return {
                ...item,
                date: "Error",
            };
        }
    });
}
