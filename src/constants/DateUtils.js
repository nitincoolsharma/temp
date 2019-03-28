export const abbreviatedMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

export const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes} ${ampm}`;
};

export const getDateStr = d => {
    const date = new Date(d);
    return `${date.getDate()} ${abbreviatedMonths[date.getMonth()]} ${date.getFullYear()}`;
};

export const getDateTimeStr = d => {
    const date = new Date(d);
    return `${date.getDate()} ${abbreviatedMonths[date.getMonth()]} ${date.getFullYear()}, ${formatAMPM(date)}`;
};