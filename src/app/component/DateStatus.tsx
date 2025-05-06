import React from 'react';

function DateStatus({date}: { date: any }) {
    const now = new Date(Date.now());

    const formatDate = (date: any) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    };

    const createdDate = new Date(date); // <-- hier kannst du dein Datum setzen!
    // @ts-ignore
    const diffTime = now - createdDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    let color = 'green'; // Standard: aktuell (weniger als 3 Tage)
    if (diffDays > 7) {
        color = 'red'; // älter als 7 Tage
    } else if (diffDays > 3) {
        color = 'orange'; // älter als 3 Tage
    }

    return (
        <div style={{color}}>
            {formatDate(new Date(date))}
        </div>
    );
}

export default DateStatus;