export const formatDate = date => {
    const months = {
        0: '1',
        1: '2',
        2: '3',
        3: '4',
        4: '5',
        5: '6',
        6: '7',
        7: '8',
        8: '9',
        9: '10',
        10: '11',
        11: '12',
    };

    const time = new Date(date);
    const month = months[time.getMonth()];
    const day = time.getDate();
    const year = time.getFullYear();
    return `${month}/${day}/${year}`;
};