import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
//allow override tailwind classes since it can combine 2 classes, but when there's a dupe, the right one takes precedence. 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
