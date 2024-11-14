"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { parseCSV } from "@/lib/csvParser";
import { formatDate } from "@/lib/formatDate";
import { calculateGrowthRate } from "@/lib/formatGrowth";
export default function Home() {
    const [data, setData] = useState<any[] | null>(null);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target?.result as string;
                const parsedData = parseCSV(text);
                const formattedData = formatDate(parsedData, "Date");
                const growthData = calculateGrowthRate(formattedData);
                setData(growthData);
            };
            reader.readAsText(file);
        }
    };

    return (
        <main className="container mx-auto p-4 space-y-8">
            <h1 className="text-4xl font-bold text-center mb-8">
                Twitter Analytics Dashboard
            </h1>

            {!data ? (
                <Card className="p-8 flex flex-col items-center justify-center space-y-4">
                    <Upload className="h-12 w-12 text-gray-400" />
                    <h2 className="text-xl font-semibold">
                        Upload Your Twitter Analytics CSV
                    </h2>
                    <p className="text-muted-foreground text-center max-w-md">
                        Upload your Twitter analytics CSV file to visualize your
                        performance metrics
                    </p>
                    <Button
                        onClick={() =>
                            document.getElementById("file-upload")?.click()
                        }
                        className="w-full max-w-xs"
                    >
                        Choose File
                    </Button>
                    <input
                        id="file-upload"
                        type="file"
                        accept=".csv"
                        onChange={handleFileUpload}
                        className="hidden"
                    />
                </Card>
            ) : (
                <AnalyticsDashboard data={data} />
            )}
        </main>
    );
}
