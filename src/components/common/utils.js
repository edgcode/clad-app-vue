const d3 = require("d3")

const parseVideoTitle = (videoTitle) => {



    videoTitle = videoTitle.replace("output ", "")

    const parts = videoTitle.split(" to ")

    const from = parts[0].split(" ")
    const to = parts[1].split(" ")

    console.log("from", from)
    console.log("to", to)

    const startDay = new Date( +from[2], +from[1]-1, +from[0], 0, 0)
    const endDay = new Date( +to[2], +to[1]-1, +to[0], 23, 59)

    this.startDay = startDay
    this.endDay = endDay

    const startTime = new Date( +from[2], +from[1]-1, +from[0], +from[3].slice(0,2), +from[3].slice(-2))
    const endTime = new Date( +to[2], +to[1]-1, +to[0], +to[3].slice(0,2), +to[3].slice(-2))

    const output = {
        dates : {
        start: startDay,
        end: endDay
        },

        times: {
        start: startTime,
        end: endTime
        }
    }

    console.log('dateinfo', output)

    return output

}

const formatTime = d3.timeFormat("%d %B - %H:%M");


exports.parseVideoTitle = parseVideoTitle

exports.formatTime = formatTime