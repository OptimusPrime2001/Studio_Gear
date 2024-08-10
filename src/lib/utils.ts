import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidv4 } from 'uuid';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const uniqueArray = (number: number): number[] => {
  if (number <= 0) return [];
  const uniqueArray = new Set();
  while (uniqueArray.size < number) {
    const randomNumber = Math.floor(Math.random() * 100000);
    uniqueArray.add(randomNumber);
  }
  return Array.from(uniqueArray) as number[];
};
export const formatVnd = (price: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(Math.floor(price));
};
export const uniqueId = () => uuidv4();
