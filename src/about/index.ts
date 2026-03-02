import { META_DESCRIPTION, SIDEBAR_TEXT } from '@/app/config';

export interface AboutInsert {
  id: number
  title?: string
  subhead?: string
  description?: string
  photoIdAvatar?: string
  photoIdHero?: string
}

export interface About extends AboutInsert {
  createdAt: Date
  updatedAt: Date
}

export const getDescriptionWithFallback = (about?: About) =>
  about?.description ||
  META_DESCRIPTION ||
  SIDEBAR_TEXT;
