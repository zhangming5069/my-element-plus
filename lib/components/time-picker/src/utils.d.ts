import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
export declare type TimeList = [number | undefined, number, undefined | number];
export declare const buildTimeList: (value: number, bound: number) => TimeList;
export declare const rangeArr: (n: number) => number[];
export declare const extractDateFormat: (format: string) => string;
export declare const extractTimeFormat: (format: string) => string;
export declare const dateEquals: (a: Date | unknown, b: Date | unknown) => boolean;
export declare const valueEquals: (a: Array<Date> | unknown, b: Array<Date> | unknown) => boolean;
export declare const parseDate: (date: string | number | Date, format: string | undefined, lang: string) => dayjs.Dayjs | undefined;
export declare const formatter: (date: string | number | Date | Dayjs, format: string | undefined, lang: string) => string | number | Date | dayjs.Dayjs;
export declare const makeList: (total: number, method?: (() => number[]) | undefined) => boolean[];
