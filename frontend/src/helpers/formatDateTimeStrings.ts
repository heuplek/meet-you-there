export const formatDateString = (date: Date | undefined): string => {
    //receive date format return string in "YYYY-MM-DD" format
    if (!date) return '';
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    const [month, day, year] = formattedDate.split('/');
    return `${year}-${month}-${day}`;
}
export const formatTimeString = (date: Date | undefined): string => {
    //receive date format return string in "HH:MM" 24hr format
    if (!date) return '';
    const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };
    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);
    const [hour, minute] = formattedTime.split(':');
    return `${hour}:${minute}`;
}
