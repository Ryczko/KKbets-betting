import { format, formatDistanceToNowStrict, formatRelative } from 'date-fns';

export const getTimeDistance = (date: string): string => {
  return formatDistanceToNowStrict(new Date(date), { addSuffix: true });
};

export const formatDate = (date: string, formatType = 'dd/MM/yyyy'): string => {
  return format(new Date(date), formatType);
};

export const formatEventDate = (date: string): string => {
  return formatRelative(new Date(date), new Date());
};
