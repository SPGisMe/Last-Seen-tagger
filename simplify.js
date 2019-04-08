_lastSeen = function(epochTime) { // make epochTime the timestamp of the users' last login
    let lastSeen = 'Last seen: ';
    const currentTime = Date.now();
    const elapsed = currentTime - epochTime; //elapsed will be time since the last login in ms
    const toMins = mins => Math.floor((mins/1000)/60);
    const toHours = hours => Math.floor(toMins(hours)/60);
    const toDays = days => Math.floor(toHours(days)/24);

    elapsed < 120000 ? lastSeen += 'moments ago'
    : elapsed < 3600000 ? lastSeen += toMins(elapsed) + ' minutes ago'
    : elapsed < 7000000 ? lastSeen += '1 hour ago'
    : elapsed < 86400000 ? lastSeen += toHours(elapsed) + ' hours ago'
    : elapsed < 172000000 ? lastSeen += '1 day ago'
    : lastSeen += toDays(elapsed) + ' days ago';

    return lastSeen;
}

_memberSince = function(epochTime) { // use for static join date
    const since = new Date(epochTime);

    return `${since.getDate()}/${since.getMonth()}/${since.getFullYear()}`;
}
