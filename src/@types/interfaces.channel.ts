import { IDKind } from "./interfaces.video";

export interface ChannelData {
  items: Item[];
  kind: string;
  pageInfo: PageInfo;
}

export interface Item {
  brandingSettings: BrandingSettings;
  contentDetails: ContentDetails;
  id: { kind: IDKind; videoId: string; channelId: string };
  kind: string;
  snippet: Snippet;
  statistics: Statistics;
}

interface BrandingSettings {
  channel: Channel;
  image: Image;
}

interface Channel {
  description: string;
  keywords: string;
  title: string;
  unsubscribedTrailer: string;
}

interface Image {
  bannerExternalUrl: string;
}

interface ContentDetails {
  relatedPlaylists: RelatedPlaylists;
}

interface RelatedPlaylists {
  likes: string;
  uploads: string;
}

interface Snippet {
  customUrl: string;
  description: string;
  localized: Localized;
  publishedAt: Date;
  thumbnails: Thumbnails;
  title: string;
}

interface Localized {
  description: string;
  title: string;
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

interface Statistics {
  hiddenSubscriberCount: boolean;
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
}

interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
