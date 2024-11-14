interface TwitterData {
    Impressions?: number | number[];
    Engagements?: number | number[];
    Posts?: number | number[];
    Likes?: number | number[];
    Share?: number | number[];
    Bookmarks?: number | number[];
    Replies?: number | number[];
    Reposts?: number | number[];
    "New follows"?: number | number[];
    "Profile visits"?: number | number[];
    "Media views"?: number | number[];
    "Video views"?: number | number[];
}

export type { TwitterData };
