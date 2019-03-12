var simplify = function(epochTime) {
    let lastSeen = 'Last seen: ';
    let currentTime = Date.now()/1000;
    let elapsed = currentTime - epochTime;
    const toMins = mins => Math.floor(mins/60);
    const toHours = hours => Math.floor(toMins(hours)/60);
    const toDays = days => Math.floor(toHours(days)/24);

    elapsed < 120 ? lastSeen += 'moments ago'
    : elapsed < 3600 ? lastSeen += toMins(elapsed) + ' minutes ago'
    : elapsed < 7000 ? lastSeen += '1 hour ago'
    : elapsed < 86400 ? lastSeen += toHours(elapsed) + ' hours ago'
    : elapsed < 172000 ? lastSeen += '1 day ago'
    : lastSeen += toDays(elapsed) + ' days ago';

    return lastSeen;
}
