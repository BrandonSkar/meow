import React from 'react';

function ViewerPage({data, image}) {
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
                                {formatTime(Number(data.nonsc.raceTotal))} <span className="color-yellow">({numberToRank(data.nonsc.raceTotalRank)})</span>
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
                                {formatTime(Number(data.nonsc.lapTotal))} <span className="color-yellow">({numberToRank(data.nonsc.lapTotalRank)})</span>
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
                                {formatTime(Number(data.sc.raceTotal))} <span className="color-yellow">({numberToRank(data.sc.raceTotalRank)})</span>
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
                                {formatTime(Number(data.sc.lapTotal))} <span className="color-yellow">({numberToRank(data.sc.lapTotalRank)})</span>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div className="image-container">
                <img className="image" src={`assets/images/${image}.png`} alt="Mario Kart 64" />
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

    // Ensure two digits formatting
    let formattedMinutes = String(minutes).padStart(2, '0');
    let formattedSeconds = String(fullSeconds).padStart(2, '0');
    let formattedMilliseconds = String(milliseconds).padStart(2, '0');

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