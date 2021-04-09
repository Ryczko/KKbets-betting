export const transformDate = (date: string): string => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const day = newDate.getDate();
    const hour = newDate.getHours();
    let minutes = newDate.getMinutes().toString();

    if (minutes.length === 1) minutes = '0' + minutes;
    let time = `${day}.${month}  ${hour}:${minutes}`;

    const actualDate = new Date();
    if (actualDate.getFullYear() === year && actualDate.getMonth() === month && actualDate.getDate() === day) {
        time = `Today  ${hour}:${minutes}`;
    }
    if (actualDate.getFullYear() === year && actualDate.getMonth() === month && actualDate.getDate() === day - 1) {
        time = `Tomorrow  ${hour}:${minutes}`;
    }

    return time;
};
