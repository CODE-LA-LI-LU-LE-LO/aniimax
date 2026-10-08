import { textKo as koreanText, htmlKo as koreanHtml, localizeElement as koreanElement, itemNameKo as koreanItem } from './locale-ko.js';

export const language = globalThis.document?.documentElement.lang || 'ko';
export const isKorean = language === 'ko';
export const textKo = value => isKorean ? koreanText(value) : value;
export const htmlKo = value => isKorean ? koreanHtml(value) : value;
export const localizeElement = root => { if (isKorean) koreanElement(root); };
export const itemNameKo = name => isKorean ? koreanItem(name) : name === 'coins' ? 'Home Coins' : name?.replaceAll('_', ' ').replace(/\b[a-z]/g, c => c.toUpperCase());
