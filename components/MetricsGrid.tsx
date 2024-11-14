import { Card } from "@/components/ui/card";
import {
    Users,
    Heart,
    Share2,
    Bookmark,
    MessageCircle,
    Repeat2,
    UserPlus,
    Eye,
    Image,
    Film,
} from "lucide-react";
import { TwitterData } from "@/types/twitterData";

interface MetricCardProps {
    title: string;
    value: number | undefined;
    icon: React.ReactNode;
}

function MetricCard({ title, value, icon }: MetricCardProps) {
    return (
        <Card className="p-4">
            <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">{icon}</div>
                <div>
                    <p className="text-sm text-muted-foreground">{title}</p>
                    <p className="text-2xl font-bold">
                        {value?.toLocaleString() ?? "0"}
                    </p>
                </div>
            </div>
        </Card>
    );
}

export default function MetricsGrid({ data }: { data: TwitterData[] }) {
    const sumMetric = (key: keyof TwitterData): number | undefined => {
        if (!data) return undefined;
        return data.reduce((sum, item) => {
            const value = item[key];
            if (!value) return sum;
            return sum + (Array.isArray(value) 
                ? value.reduce((a, b) => a + b, 0)
                : value);
        }, 0);
    };

    const metrics = [
        {
            title: "Impressions",
            value: sumMetric("Impressions"),
            icon: <Eye className="h-4 w-4" />,
        },
        {
            title: "Engagements",
            value: sumMetric("Engagements"),
            icon: <Heart className="h-4 w-4" />,
        },
        {
            title: "Posts",
            value: sumMetric("Posts"),
            icon: <MessageCircle className="h-4 w-4" />,
        },
        {
            title: "Likes",
            value: sumMetric("Likes"),
            icon: <Heart className="h-4 w-4" />,
        },
        {
            title: "Shares",
            value: sumMetric("Share"),
            icon: <Share2 className="h-4 w-4" />,
        },
        {
            title: "Bookmarks",
            value: sumMetric("Bookmarks"),
            icon: <Bookmark className="h-4 w-4" />,
        },
        {
            title: "Replies",
            value: sumMetric("Replies"),
            icon: <MessageCircle className="h-4 w-4" />,
        },
        {
            title: "Reposts",
            value: sumMetric("Reposts"),
            icon: <Repeat2 className="h-4 w-4" />,
        },
        {
            title: "New Follows",
            value: sumMetric("New follows"),
            icon: <UserPlus className="h-4 w-4" />,
        },
        {
            title: "Profile Visits",
            value: sumMetric("Profile visits"),
            icon: <Users className="h-4 w-4" />,
        },
        {
            title: "Media Views",
            value: sumMetric("Media views"),
            icon: <Image className="h-4 w-4" />,
        },
        {
            title: "Video Views",
            value: sumMetric("Video views"),
            icon: <Film className="h-4 w-4" />,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {metrics.map((metric) => (
                <MetricCard
                    key={metric.title}
                    title={metric.title}
                    value={metric.value}
                    icon={metric.icon}
                />
            ))}
        </div>
    );
}
