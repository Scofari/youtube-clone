export interface VideoData {
  items: Video[];
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  regionCode: string;
}

export interface VideoDetailsData {
  items: Item[];
}

export interface Video {
  id: { kind: IDKind; videoId: string; channelId: string };
  kind: ItemKind;
  snippet: Snippet;
}

export interface Item {
  contentDetails: ContentDetails;
  id: string;
  kind: IDKind.YoutubeVideo;
  snippet: Partial<Snippet> & {
    categoryId: string;
    localized: { title: string; publishedAt: Date };
    tags: string[];
  };
  statistics: {
    commentCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
  };
}

interface ContentDetails {
  caption: string;
}

export enum IDKind {
  YoutubeVideo = "youtube#video",
}

enum ItemKind {
  YoutubeSearchResult = "youtube#searchResult",
}

interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: LiveBroadcastContent;
  publishTime: Date;
  publishedAt: Date;
  thumbnails: Thumbnails;
  title: string;
}

enum LiveBroadcastContent {
  Live = "live",
  None = "none",
}

interface Thumbnails {
  default: Default;
  high: Default;
  medium: Default;
}

interface Default {
  height: number;
  url: string;
  width: number;
}

interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
