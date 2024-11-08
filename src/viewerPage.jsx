import React, {useState} from 'react';

function ViewerPage({data, image}) {
    const [isNTSC, setIsNTSC] = useState(JSON.stringify(data.nonsc !== '{}') ? (
        data.nonsc.mainRegion === "NTSC"
    ) : (
        data.sc.mainRegion === "NTSC"
    ))

    return (
        <div className="panel-body">
            <div className="non-sc-container">
                {JSON.stringify(data.nonsc) === '{}' ? (
                    <div className="row">
                        <div className="left">
                            <span
                                className="link"
                                onClick={() => window.open('https://www.mariokart64.com/mk64/ranks/nonsc', '_blank')}
                            >
                                Non-Shortcut Rank
                            </span>
                        </div>
                        <div className="right">Unranked</div>
                    </div>
                ) : (
                    <>
                        <div className="row">
                            <div className="left">
                                <span
                                    className="link"
                                    onClick={() => window.open('https://www.mariokart64.com/mk64/ranks/nonsc', '_blank')}
                                >
                                    Non-Shortcut Rank
                                </span>
                            </div>
                            <div className="right">{data.nonsc.rank}</div>
                        </div>
                        <div className="row">
                            <div className="left">
                                <span
                                    className="link"
                                    onClick={() => window.open('https://www.mariokart64.com/mk64/ranks/arr/nonsc', '_blank')}
                                >
                                    ARR
                                </span>
                            </div>
                            <div className="right">
                                {data.nonsc.arr.toFixed(2)} ({data.nonsc.standard}) <span className="color-yellow">({numberToRank(data.nonsc.arrRank)})</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left">
                                <span
                                    className="link"
                                    onClick={() => window.open('https://www.mariokart64.com/mk64/ranks/af/nonsc', '_blank')}
                                >
                                    Average Finish
                                </span>
                            </div>
                            <div className="right">
                                {data.nonsc.af.toFixed(4)} <span className="color-yellow">({numberToRank(data.nonsc.afRank)})</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left">
                                <span
                                    className="link"
                                    onClick={() => window.open('https://www.mariokart64.com/mk64/ranks/prwr/nonsc', '_blank')}
                                >
                                    PR:WR
                                </span>
                            </div>
                            <div className="right">
                                {Number(data.nonsc.prwr).toFixed(4)} <span className="color-yellow">({numberToRank(data.nonsc.prwrRank)})</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left">
                                <span
                                    className="link"
                                    onClick={() => window.open('https://www.mariokart64.com/mk64/ranks/totaltimes/nonsc', '_blank')}
                                >
                                    3lap Totals
                                </span>
                            </div>
                            <div className="right">
                                {isNTSC ? formatTime(Number(data.nonsc.raceTotal)) : formatTime(Number(data.nonsc.raceTotalPal))}&nbsp;
                                <span className="system-type" onClick={() => setIsNTSC(!isNTSC)}>{isNTSC ? "(NTSC)" : "(PAL)"}</span>&nbsp;
                                <span className="color-yellow">({numberToRank(data.nonsc.raceTotalRank)})</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left">
                                <span
                                    className="link"
                                    onClick={() => window.open('https://www.mariokart64.com/mk64/ranks/totaltimes/nonsc', '_blank')}
                                >
                                    flap Totals
                                </span>
                            </div>
                            <div className="right">
                                {isNTSC ? formatTime(Number(data.nonsc.lapTotal)) : formatTime(Number(data.nonsc.lapTotalPal))}&nbsp;
                                <span className="system-type" onClick={() => setIsNTSC(!isNTSC)}>{isNTSC ? "(NTSC)" : "(PAL)"}</span>&nbsp;
                                <span className="color-yellow">({numberToRank(data.nonsc.lapTotalRank)})</span>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div className="sc-container">
                {JSON.stringify(data.sc) === '{}' ? (
                    <div className="row">
                        <div className="left">
                            <span
                                className="link"
                                onClick={() => window.open('https://www.mariokart64.com/mk64/ranks/sc', '_blank')}
                            >
                                Shortcut Rank
                            </span>
                        </div>
                        <div className="right">Unranked</div>
                    </div>
                ) : (
                    <>
                        <div className="row">
                            <div className="left">
                                <span
                                    className="link"
                                    onClick={() => window.open('https://www.mariokart64.com/mk64/ranks/sc', '_blank')}
                                >
                                    Shortcut Rank
                                </span>
                            </div>
                            <div className="right">{data.sc.rank}</div>
                        </div>
                        <div className="row">
                            <div className="left">
                                <span
                                    className="link"
                                    onClick={() => window.open('https://www.mariokart64.com/mk64/ranks/arr/sc', '_blank')}
                                >
                                    ARR
                                </span>
                            </div>
                            <div className="right">
                                {data.sc.arr.toFixed(2)} ({data.sc.standard}) <span className="color-yellow">({numberToRank(data.sc.arrRank)})</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left">
                                <span
                                    className="link"
                                    onClick={() => window.open('https://www.mariokart64.com/mk64/ranks/af/sc', '_blank')}
                                >
                                    Average Finish
                                </span>
                            </div>
                            <div className="right">
                                {data.sc.af.toFixed(4)} <span className="color-yellow">({numberToRank(data.sc.afRank)})</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left">
                                <span
                                    className="link"
                                    onClick={() => window.open('https://www.mariokart64.com/mk64/ranks/prwr/sc', '_blank')}
                                >
                                    PR:WR
                                </span>
                            </div>
                            <div className="right">
                                {Number(data.sc.prwr).toFixed(4)} <span className="color-yellow">({numberToRank(data.sc.prwrRank)})</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left">
                                <span
                                    className="link"
                                    onClick={() => window.open('https://www.mariokart64.com/mk64/ranks/totaltimes/sc', '_blank')}
                                >
                                    3lap Totals
                                </span>
                            </div>
                            <div className="right">
                                {isNTSC ? formatTime(Number(data.sc.raceTotal)) : formatTime(Number(data.sc.raceTotalPal))}&nbsp;
                                <span className="system-type" onClick={() => setIsNTSC(!isNTSC)}>{isNTSC ? "(NTSC)" : "(PAL)"}</span>&nbsp;
                                <span className="color-yellow">({numberToRank(data.sc.raceTotalRank)})</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left">
                                <span
                                    className="link"
                                    onClick={() => window.open('https://www.mariokart64.com/mk64/ranks/totaltimes/sc', '_blank')}
                                >
                                    flap Totals
                                </span>
                            </div>
                            <div className="right">
                                {isNTSC ? formatTime(Number(data.sc.lapTotal)) : formatTime(Number(data.sc.lapTotalPal))}&nbsp;
                                <span className="system-type" onClick={() => setIsNTSC(!isNTSC)}>{isNTSC ? "(NTSC)" : "(PAL)"}</span>&nbsp;
                                <span className="color-yellow">({numberToRank(data.sc.lapTotalRank)})</span>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div className="image-container">
                <img className="image" src={`assets/images/${image || "banner"}.png`} alt="Mario Kart 64" onClick={() => window.open('https://www.mariokart64.com/mk64/players/' + (JSON.stringify(data.nonsc) === '{}' ? data.sc.id : data.nonsc.id), '_blank')} />
            </div>
            <script src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js"></script>
        </div>
    );
}

export default ViewerPage;

const formatTime = (seconds) => {
    // Calculate the minutes
    let minutes = Math.floor(seconds / 60);

    // Calculate the remaining seconds
    let remainingSeconds = seconds % 60;
    let fullSeconds = Math.floor(remainingSeconds);

    // Extract milliseconds from the remaining seconds
    let milliseconds = Math.round((remainingSeconds - fullSeconds) * 100);

    // Remove leading zeros
    let formattedMinutes = String(minutes);
    let formattedSeconds = fullSeconds.toString().padStart(2, '0');
    let formattedMilliseconds = milliseconds.toString().padStart(2, '0');

    // Return the formatted string
    return `${formattedMinutes}'${formattedSeconds}"${formattedMilliseconds}`;
};

const numberToRank = (num) => {
    if (!num || Number.isNaN(num)) return "";

    let suffix;
    const digit0 = String(num).at(-1);
    const digit1 = String(num).at(-2) ?? "0";
    if (digit1 === "1" || digit0 === "0" || Number(digit0) > 3) {
        suffix = "th";
    } else if (digit0 === "1") {
        suffix = "st";
    } else if (digit0 === "2") {
        suffix = "nd";
    } else if (digit0 === "3") {
        suffix = "rd";
    }

    return `${num}${suffix}`;
};