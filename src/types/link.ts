export type LinkType = 'bandcamp' | 'spotify' | 'itunes' | 'twitter' | 'soundcloud' | 'instagram' | 'store' | 'other';

export type Link = {
  to: string;
  type: LinkType;
  label?: string;
  caption?: string;
  sitename?: string;
  notAvailable?: boolean;
}