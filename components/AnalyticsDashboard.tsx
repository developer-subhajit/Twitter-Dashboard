"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MetricsGrid from "./MetricsGrid";
import GrowthChart from "./GrowthChart";
import EngagementChart from "./EngagementChart";
import ImpressionsChart from "./ImpressionChart";
import { TwitterData } from "@/types/twitterData";
interface AnalyticsDashboardProps {
    data: TwitterData[];
}

export default function AnalyticsDashboard({ data }: AnalyticsDashboardProps) {
    return (
        <div className="space-y-8">
            <MetricsGrid data={data} />

            <Tabs defaultValue="growth" className="w-full">
                <TabsList>
                    <TabsTrigger value="growth">Account Growth</TabsTrigger>
                    <TabsTrigger value="engagement">Engagement</TabsTrigger>
                    <TabsTrigger value="reach"> Impressions </TabsTrigger>
                </TabsList>
                <TabsContent value="growth">
                    <Card className="p-4">
                        <h2 className="text-lg font-semibold mb-4">
                            Account Growth Metrics ( New followers to Profile
                            visits ratio)
                        </h2>
                        <GrowthChart data={data} />
                    </Card>
                </TabsContent>
                <TabsContent value="engagement">
                    <Card className="p-4">
                        <h2 className="text-lg font-semibold mb-4">
                            Engagement Metrics
                        </h2>
                        <EngagementChart data={data} />
                    </Card>
                </TabsContent>
                <TabsContent value="reach">
                    <Card className="p-4">
                        <h2 className="text-lg font-semibold mb-4">
                            Reach Metrics
                        </h2>
                        <ImpressionsChart data={data} />
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
