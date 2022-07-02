$(document).ready(function () {
    let style = document.styleSheets[0];

    let space = {
        month: 40,
        day: 85,
        week: 145,
        shiChen: 190,
        hour: 230,
        minute: 290,
        second: 350
    };

    $(".main-content .month").css("left", space.month + "px");
    $(".main-content .day").css("left", space.day + "px");
    $(".main-content .week").css("left", space.week + "px");
    $(".main-content .shiChen").css("left", space.shiChen + "px");
    $(".main-content .hour").css("left", space.hour + "px");
    $(".main-content .minute").css("left", space.minute + "px");
    $(".main-content .second").css("left", space.second + "px");


    $("body").css("color", "#fff");

    var monthLeft = $(".main-content .month").css("left");
    var dayLeft = $(".main-content .day").css("left");
    var weekLeft = $(".main-content .week").css("left");
    var shiChenLeft = $(".main-content .shiChen").css("left");
    var hourLeft = $(".main-content .hour").css("left");
    var minuteLeft = $(".main-content .minute").css("left");
    var secondLeft = $(".main-content .second").css("left");
    var top = $(".main-content .month").css("top");
    var yearLeft = $(".main-content .year span").width() / 2;


    // 进入当前时间
    var Time = {
        currentTime: {
            year: 1970,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            week: 0,
            shiChen: {}
        },
        months: [],
        days: [],
        hours: [],
        minutes: [],
        seconds: [],
        shiChens: [],
        weeks: [],
        yearUnit: "年",
        monthUnit: "月",
        dayUnit: "日",
        weekUnit: "星期",
        hourUnit: "时",
        minuteUnit: "分",
        secondUnit: "秒"
    };

    var month = Time.currentTime.month; // 当前月
    var year = Time.currentTime.year; // 当前年
    initTime(Time);


    $(".main-content .year").append("<span class='current'>" + Time.currentTime.year + Time.yearUnit + "</span>");

    var h = $(".year span").height();
    top = -(parseInt(top)) - parseInt(h) / 2;
    top += "px";


    $(".main-content .month").append("<span class='current'>" + Time.currentTime.month + Time.monthUnit + "</span>");
    $(".main-content .day").append("<span class='current'>" + Time.currentTime.day + Time.dayUnit + "</span>");
    $(".main-content .week").append("<span class='current'>" + Time.currentTime.week + "</span>");
    $(".main-content .shiChen").append("<span class='current'>" + Time.currentTime.shiChen.str + "</span>");
    $(".main-content .hour").append("<span class='current'>" + Time.currentTime.hour + Time.hourUnit + "</span>");
    $(".main-content .minute").append("<span class='current'>" + Time.currentTime.minute + Time.minuteUnit + "</span>");
    $(".main-content .second").append("<span class='current'>" + Time.currentTime.second + Time.secondUnit + "</span>");


    for (const key in Time.months) {
        if (Time.months.hasOwnProperty(key)) {
            const element = Time.months[key];
            if (element != Time.currentTime.month) {
                $(".main-content .month").append("<span>" + element + Time.monthUnit + "</span>");
            }
        }
    }

    for (const key in Time.days) {
        if (Time.days.hasOwnProperty(key)) {
            const element = Time.days[key];
            if (element != Time.currentTime.day) {
                $(".main-content .day").append("<span>" + element + Time.dayUnit + "</span>");
            }
        }
    }

    for (const key in Time.weeks) {
        if (Time.weeks.hasOwnProperty(key)) {
            const element = Time.weeks[key];
            if (element != Time.currentTime.week) {
                $(".main-content .week").append("<span>" + element + "</span>");
            }
        }
    }


    for (const key in Time.shiChens) {
        if (Time.shiChens.hasOwnProperty(key)) {
            const element = Time.shiChens[key];
            if (element != Time.currentTime.shiChen.str) {
                $(".main-content .shiChen").append("<span>" + element + "</span>");
            }
        }
    }

    for (const key in Time.hours) {
        if (Time.hours.hasOwnProperty(key)) {
            const element = Time.hours[key];
            if (element != Time.currentTime.hour) {
                $(".main-content .hour").append("<span>" + element + Time.hourUnit + "</span>");
            }
        }
    }

    for (const key in Time.minutes) {
        if (Time.minutes.hasOwnProperty(key)) {
            const element = Time.minutes[key];
            if (element != Time.currentTime.minute) {
                $(".main-content .minute").append("<span>" + element + Time.minuteUnit + "</span>");
            }
        }
    }

    for (const key in Time.seconds) {
        if (Time.seconds.hasOwnProperty(key)) {
            const element = Time.seconds[key];
            if (element != Time.currentTime.second) {
                $(".main-content .second").append("<span>" + element + Time.secondUnit + "</span>");
            }
        }
    }

    setTimeout(function () {
        $(".month span").each(function (index, element) {
            $(element).css("animation", "month" + index + " 1s linear");
            $(element).css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes month" + index + "{0%{transform: rotateZ(0);transform-origin: -" + monthLeft + " " + top + ";}100%{transform:rotateZ(" + -(360 / 12) * (index) + "deg);transform-origin: -" + monthLeft + " " + top + ";}}", style.rules.length);
        });
    }, 0);

    setTimeout(function () {
        $(".day span").each(function (index, element) {
            $(element).css("animation", "day" + index + " 1s linear");
            $(element).css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes day" + index + "{0%{transform: rotateZ(0);transform-origin: -" + dayLeft + " " + top + ";}100%{transform:rotateZ(" + -(360 / Time.days.length) * index + "deg);transform-origin: -" + dayLeft + " " + top + ";}}", style.rules.length);
        });
    }, 1000);

    setTimeout(function () {
        $(".week span").each(function (index, element) {
            $(element).css("animation", "week" + index + " 1s linear");
            $(element).css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes week" + index + "{0%{transform: rotateZ(0);transform-origin: -" + weekLeft + " " + top + ";}100%{transform:rotateZ(" + -(360 / Time.weeks.length) * index + "deg);transform-origin: -" + weekLeft + " " + top + ";}}", style.rules.length);
        });
    }, 2000);

    setTimeout(function () {
        $(".shiChen span").each(function (index, element) {
            $(element).css("animation", "shiChen" + index + " 1s linear");
            $(element).css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes shiChen" + index + "{0%{transform: rotateZ(0);transform-origin: -" + shiChenLeft + " " + top + ";}100%{transform:rotateZ(" + -(360 / Time.shiChens.length) * index + "deg);transform-origin: -" + shiChenLeft + " " + top + ";}}", style.rules.length);
        });
    }, 3000);

    setTimeout(function () {
        $(".hour span").each(function (index, element) {
            $(element).css("animation", "hour" + index + " 1s linear");
            $(element).css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes hour" + index + "{0%{transform: rotateZ(0);transform-origin: -" + hourLeft + " " + top + ";}100%{transform:rotateZ(" + -(360 / Time.hours.length) * index + "deg);transform-origin: -" + hourLeft + " " + top + ";}}", style.rules.length);
        });
    }, 4000);

    setTimeout(function () {
        $(".minute span").each(function (index, element) {
            $(element).css("animation", "minute" + index + " 1s linear");
            $(element).css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes minute" + index + "{0%{transform: rotateZ(0);transform-origin: -" + minuteLeft + " " + top + ";}100%{transform:rotateZ(" + -(360 / Time.minutes.length) * index + "deg);transform-origin: -" + minuteLeft + " " + top + ";}}", style.rules.length);
        });
    }, 5000);


    setTimeout(function () {
        $(".second span").each(function (index, element) {
            $(element).css("animation", "second" + index + " 1s linear");
            $(element).css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes second" + index + "{0%{transform: rotateZ(0);transform-origin: -" + secondLeft + " " + top + ";}100%{transform:rotateZ(" + -(360 / Time.seconds.length) * index + "deg);transform-origin: -" + secondLeft + " " + top + ";}}", style.rules.length);
        });

    }, 6000);


    // 时间旋转
    setTimeout(function () {
        $(".year span").css("animation", "yearRun 1s linear infinite");
        style.insertRule("@keyframes yearRun {0%{transform: rotateZ(0);transform-origin: -" + yearLeft + " " + top + ";}100%{transform:rotateZ(720deg);transform-origin: -" + yearLeft + " " + top + ";}}", style.rules.length);
        $($(".main-content .second span")[0]).removeClass("current");
        $(".second span").each(function (index, element) {
            $(element).css("animation", "secondRun" + index + " 1s linear infinite");
            style.insertRule("@keyframes secondRun" + index + " {0%{transform: rotateZ(0);transform-origin: -" + secondLeft + " " + top + ";}100%{transform:rotateZ(" + ((index + 1) * 720) + "deg);transform-origin: -" + secondLeft + " " + top + ";}}", style.rules.length);
        });
        $($(".main-content .minute span")[0]).removeClass("current");
        $(".minute span").each(function (index, element) {
            $(element).css("animation", "minuteRun" + index + " 1s linear infinite");
            style.insertRule("@keyframes minuteRun" + index + " {0%{transform: rotateZ(0);transform-origin: -" + minuteLeft + " " + top + ";}100%{transform:rotateZ(" + ((index + 1) * 720) + "deg);transform-origin: -" + minuteLeft + " " + top + ";}}", style.rules.length);
        });
        $($(".main-content .hour span")[0]).removeClass("current");
        $(".hour span").each(function (index, element) {
            $(element).css("animation", "hourRun" + index + " 1s linear infinite");
            style.insertRule("@keyframes hourRun" + index + " {0%{transform: rotateZ(0);transform-origin: -" + hourLeft + " " + top + ";}100%{transform:rotateZ(" + ((index + 1) * 720) + "deg);transform-origin: -" + hourLeft + " " + top + ";}}", style.rules.length);
        });
        $($(".main-content .shiChen span")[0]).removeClass("current");
        $(".shiChen span").each(function (index, element) {
            $(element).css("animation", "shiChenRun" + index + " 1s linear infinite");
            style.insertRule("@keyframes shiChenRun" + index + " {0%{transform: rotateZ(0);transform-origin: -" + shiChenLeft + " " + top + ";}100%{transform:rotateZ(" + ((index + 1) * 720) + "deg);transform-origin: -" + shiChenLeft + " " + top + ";}}", style.rules.length);
        });
        $($(".main-content .week span")[0]).removeClass("current");
        $(".week span").each(function (index, element) {
            $(element).css("animation", "weekRun" + index + " 1s linear infinite");
            style.insertRule("@keyframes weekRun" + index + " {0%{transform: rotateZ(0);transform-origin: -" + weekLeft + " " + top + ";}100%{transform:rotateZ(" + ((index + 1) * 720) + "deg);transform-origin: -" + weekLeft + " " + top + ";}}", style.rules.length);
        });
        $($(".main-content .day span")[0]).removeClass("current");
        $(".day span").each(function (index, element) {
            $(element).css("animation", "dayRun" + index + " 1s linear infinite");
            style.insertRule("@keyframes dayRun" + index + " {0%{transform: rotateZ(0);transform-origin: -" + dayLeft + " " + top + ";}100%{transform:rotateZ(" + ((index + 1) * 720) + "deg);transform-origin: -" + dayLeft + " " + top + ";}}", style.rules.length);
        });
        $($(".main-content .month span")[0]).removeClass("current");
        $(".month span").each(function (index, element) {
            $(element).css("animation", "monthRun" + index + " 1s linear infinite");
            style.insertRule("@keyframes monthRun" + index + " {0%{transform: rotateZ(0);transform-origin: -" + monthLeft + " " + top + ";}100%{transform:rotateZ(" + ((index + 1) * 720) + "deg);transform-origin: -" + monthLeft + " " + top + ";}}", style.rules.length);
        });
    }, 7000);


    // 定义初始化当前时间
    setTimeout(function () {
        var myDate = new Date();
        Time.currentTime.year = myDate.getFullYear();
        Time.currentTime.month = myDate.getMonth() + 1;
        Time.currentTime.day = myDate.getDate();
        Time.currentTime.week = myDate.getDay();
        Time.currentTime.hour = myDate.getHours();
        Time.currentTime.minute = myDate.getMinutes();
        Time.currentTime.second = myDate.getSeconds();
        month = Time.currentTime.month;
        year = Time.currentTime.year;
        initTime(Time);
        $(".main-content .year").html("");
        $(".main-content .year").append("<span class='current'>" + Time.currentTime.year + Time.yearUnit + "</span>");
        $(".main-content .second").html("");
        $(".main-content .second").append("<span class='current'>" + Time.currentTime.second + Time.secondUnit + "</span>");
        for (const key in Time.seconds) {
            if (Time.seconds.hasOwnProperty(key)) {
                const element = Time.seconds[key];
                if (element != Time.currentTime.second) {
                    $(".main-content .second").append("<span>" + element + Time.secondUnit + "</span>");
                }
            }
        }
        $(".main-content .minute").html("");
        $(".main-content .minute").append("<span class='current'>" + Time.currentTime.minute + Time.minuteUnit + "</span>");
        for (const key in Time.minutes) {
            if (Time.minutes.hasOwnProperty(key)) {
                const element = Time.minutes[key];
                if (element != Time.currentTime.minute) {
                    $(".main-content .minute").append("<span>" + element + Time.minuteUnit + "</span>");
                }
            }
        }
        $(".main-content .hour").html("");
        $(".main-content .hour").append("<span class='current'>" + Time.currentTime.hour + Time.hourUnit + "</span>");
        for (const key in Time.hours) {
            if (Time.hours.hasOwnProperty(key)) {
                const element = Time.hours[key];
                if (element != Time.currentTime.hour) {
                    $(".main-content .hour").append("<span>" + element + Time.hourUnit + "</span>");
                }
            }
        }
        $(".main-content .shiChen").html("");
        $(".main-content .shiChen").append("<span class='current'>" + Time.currentTime.shiChen.str + "</span>");
        for (const key in Time.shiChens) {
            if (Time.shiChens.hasOwnProperty(key)) {
                const element = Time.shiChens[key];
                if (element != Time.currentTime.shiChen.str) {
                    $(".main-content .shiChen").append("<span>" + element + "</span>");
                }
            }
        }
        $(".main-content .week").html("");
        $(".main-content .week").append("<span class='current'>" + Time.currentTime.week + "</span>");
        for (const key in Time.weeks) {
            if (Time.weeks.hasOwnProperty(key)) {
                const element = Time.weeks[key];
                if (element != Time.currentTime.week) {
                    $(".main-content .week").append("<span>" + element + "</span>");
                }
            }
        }
        $(".main-content .day").html("");
        $(".main-content .day").append("<span class='current'>" + Time.currentTime.day + Time.dayUnit + "</span>");
        for (const key in Time.days) {
            if (Time.days.hasOwnProperty(key)) {
                const element = Time.days[key];
                if (element != Time.currentTime.day) {
                    $(".main-content .day").append("<span>" + element + Time.dayUnit + "</span>");
                }
            }
        }
        $(".main-content .month").html("");
        $(".main-content .month").append("<span class='current'>" + Time.currentTime.month + Time.monthUnit + "</span>");
        for (const key in Time.months) {
            if (Time.months.hasOwnProperty(key)) {
                const element = Time.months[key];
                if (element != Time.currentTime.month) {
                    $(".main-content .month").append("<span>" + element + Time.monthUnit + "</span>");
                }
            }
        }
    }, 8000);

    // 进来转回到当前时间
    setTimeout(function () {
        $(".second span").each(function (index, element) {
            $(element).css("animation", "second" + index + " 0s linear");
            $(element).css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes second" + index + "{0%{transform: rotateZ(0);transform-origin: -" + secondLeft + " " + top + ";}100%{transform:rotateZ(" + -(360 / Time.seconds.length) * index + "deg);transform-origin: -" + secondLeft + " " + top + ";}}", style.rules.length);
        });


        $(".minute span").each(function (index, element) {
            $(element).css("animation", "minute" + index + " 0s linear");
            $(element).css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes minute" + index + "{0%{transform: rotateZ(0);transform-origin: -" + minuteLeft + " " + top + ";}100%{transform:rotateZ(" + -(360 / Time.minutes.length) * index + "deg);transform-origin: -" + minuteLeft + " " + top + ";}}", style.rules.length);
        });
        $(".hour span").each(function (index, element) {
            $(element).css("animation", "hour" + index + " 0s linear");
            $(element).css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes hour" + index + "{0%{transform: rotateZ(0);transform-origin: -" + hourLeft + " " + top + ";}100%{transform:rotateZ(" + -(360 / Time.hours.length) * index + "deg);transform-origin: -" + hourLeft + " " + top + ";}}", style.rules.length);
        });
        $(".shiChen span").each(function (index, element) {
            $(element).css("animation", "shiChen" + index + " 0s linear");
            $(element).css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes shiChen" + index + "{0%{transform: rotateZ(0);transform-origin: -" + shiChenLeft + " " + top + ";}100%{transform:rotateZ(" + -(360 / Time.shiChens.length) * index + "deg);transform-origin: -" + shiChenLeft + " " + top + ";}}", style.rules.length);
        });
        $(".week span").each(function (index, element) {
            $(element).css("animation", "week" + index + " 0s linear");
            $(element).css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes week" + index + "{0%{transform: rotateZ(0);transform-origin: -" + weekLeft + " " + top + ";}100%{transform:rotateZ(" + -(360 / Time.weeks.length) * index + "deg);transform-origin: -" + weekLeft + " " + top + ";}}", style.rules.length);
        });
        $(".day span").each(function (index, element) {
            $(element).css("animation", "day" + index + " 0s linear");
            $(element).css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes day" + index + "{0%{transform: rotateZ(0);transform-origin: -" + dayLeft + " " + top + ";}100%{transform:rotateZ(" + -(360 / Time.days.length) * index + "deg);transform-origin: -" + dayLeft + " " + top + ";}}", style.rules.length);
        });
        $(".month span").each(function (index, element) {
            $(element).css("animation", "month" + index + " 0s linear");
            $(element).css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes month" + index + "{0%{transform: rotateZ(0);transform-origin: -" + monthLeft + " " + top + ";}100%{transform:rotateZ(" + -(360 / Time.months.length) * index + "deg);transform-origin: -" + monthLeft + " " + top + ";}}", style.rules.length);
        });
    }, 8000);

    setTimeout(function () {
        setInterval(run, 1000);
    }, 8000);

    var seci = 1;
    var mini = 1;
    var houri = 1;
    var shiCheni = 1;
    var weeki = 1;
    var dayi = 1;
    var monthi = 1;

    function run() {
        var next = $(".second span.current").next();
        if (next.text() == "") {
            next = $(".second span").first();
        }
        var secang1 = 6 * (seci - 1);
        var secang2 = 6 * seci;
        $(".second").css("animation", "secondRun" + seci + " 0.5s ease-in-out");
        $(".second").css("animation-fill-mode", "forwards");
        style.insertRule("@keyframes secondRun" + seci + "{0%{transform: rotateZ(" + secang1 + "deg);transform-origin: -" + secondLeft + " " + top + ";} 50%{transform:rotateZ(" + (secang2 + 1) + "deg);transform-origin: -" + secondLeft + " " + top + ";} 100%{transform:rotateZ(" + secang2 + "deg);transform-origin: -" + secondLeft + " " + top + ";}}", style.rules.length);

        $(".second span.current").removeClass("current");
        next.addClass("current");
        seci++;
        if (seci > 60) {
            seci = 1;
        }

        // 展示分钟
        var secText = $(".second span.current").text();

        if (secText == "0秒" || secText == "零秒" || secText == "0 s") {
            var minang1 = 6 * (mini - 1);
            var minang2 = 6 * mini;

            var next = $(".minute span.current").next();

            if (next.text() == "") {
                next = $(".minute span").first();
            }

            $(".minute").css("animation", "minuteRun" + mini + " 0.5s ease-in-out");
            $(".minute").css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes minuteRun" + mini + " {0%{transform: rotateZ(" + minang1 + "deg);transform-origin: -" + minuteLeft + " " + top + ";} 100%{transform:rotateZ(" + minang2 + "deg);transform-origin: -" + minuteLeft + " " + top + ";}}", style.rules.length);

            $(".minute span.current").removeClass("current");
            next.addClass("current");
            mini++;
            if (mini > 60) {
                mini = 1;
            }
        }


        // 展示小时
        var minText = $(".minute span.current").text();

        if ((secText == "0秒" || secText == "零秒" || secText == "0 s") && (minText == "0分" || minText == "零分" || minText == "0 m")) {

            var hourang1 = 15 * (houri - 1);
            var hourang2 = 15 * houri;

            var next = $(".hour span.current").next();

            if (next.text() == "") {
                next = $(".hour span").first();
            }
            $(".hour").css("animation", "hourRun" + houri + " 0.5s ease-in-out");
            $(".hour").css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes hourRun" + houri + " {0%{transform: rotateZ(" + hourang1 + "deg);transform-origin: -" + hourLeft + " " + top + ";} 100%{transform:rotateZ(" + hourang2 + "deg);transform-origin: -" + hourLeft + " " + top + ";}}", style.rules.length);

            $(".hour span.current").removeClass("current");
            next.addClass("current");
            houri++;
            if (houri > 24) {
                houri = 1;
            }
        }

        // 展示时辰
        var hourText = $(".hour span.current").text();
        if ((secText == "0秒" || secText == "零秒" || secText == "0 s") && (minText == "0分" || minText == "零分" || minText == "0 m") && isshiChen(hourText)) {
            var shiChenang1 = 30 * (shiCheni - 1);
            var shiChenang2 = 30 * shiCheni;
            var next = $(".shiChen span.current").next();
            if (next.text() == "") {
                next = $(".shiChen span").first();
            }
            $(".shiChen").css("animation", "shiChenRun" + shiCheni + " 0.5s ease-in-out");
            $(".shiChen").css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes shiChenRun" + shiCheni + " {0%{transform: rotateZ(" + shiChenang1 + "deg);transform-origin: -" + shiChenLeft + " " + top + ";} 100%{transform:rotateZ(" + shiChenang2 + "deg);transform-origin: -" + shiChenLeft + " " + top + ";}}", style.rules.length);
            $(".shiChen span.current").removeClass("current");
            next.addClass("current");
            shiCheni++;
            if (shiCheni > 30) {
                shiCheni = 1;
            }
        }
        // 展示星期和日数
        if ((secText == "0秒" || secText == "零秒" || secText == "0 s") && (minText == "0分" || minText == "零分" || minText == "0 m") && (hourText == "0时" || hourText == "零时" || hourText == "0 h")) {
            var weekang1 = (360 / 7) * (weeki - 1);
            var weekang2 = (360 / 7) * weeki;
            var dayang1 = (360 / Time.days.length) * (dayi - 1);
            var dayang2 = (360 / Time.days.length) * dayi;

            console.log(dayang1);
            var nextweek = $(".week span.current").next();
            var nextday = $(".day span.current").next();
            if (nextweek.text() == "") {
                nextweek = $(".week span").first();
            }
            if (nextday.text() == "") {
                nextday = $(".day span").first();
            }
            $(".week").css("animation", "weekRun" + weeki + " 0.5s ease-in-out");
            $(".week").css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes weekRun" + weeki + " {0%{transform: rotateZ(" + weekang1 + "deg);transform-origin: -" + weekLeft + " " + top + ";} 100%{transform:rotateZ(" + weekang2 + "deg);transform-origin: -" + weekLeft + " " + top + ";}}", style.rules.length);
            $(".day").css("animation", "dayRun" + dayi + " 0.5s ease-in-out");
            $(".day").css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes dayRun" + dayi + " {0%{transform: rotateZ(" + dayang1 + "deg);transform-origin: -" + dayLeft + " " + top + ";} 100%{transform:rotateZ(" + dayang2 + "deg);transform-origin: -" + dayLeft + " " + top + ";}}", style.rules.length);
            $(".week span.current").removeClass("current");
            nextweek.addClass("current");
            weeki++;
            if (weeki > 7) {
                weeki = 1;
            }
            $(".day span.current").removeClass("current");
            nextday.addClass("current");
            dayi++;
            if (dayi > Time.days.length) {
                dayi = 1;
            }
        }
        // 展示月
        var dayText = $(".day span.current").text();
        if ((dayText == "1 day" || dayText == numToSimp(1) + "日" || dayText == numToTrad(1) + "日" || dayText == "1日") && (secText == "0秒" || secText == "零秒" || secText == "0 s") && (minText == "0分" || minText == "零分" || minText == "0 m") && (hourText == "0时" || hourText == "零时" || hourText == "0 h")) {
            var monthang1 = 30 * (monthi - 1);
            var monthang2 = 30 * monthi;
            var next = $(".month span.current").next();
            if (next.text() == "") {
                next = $(".month span").first();
            }
            $(".month").css("animation", "monthRun" + monthi + " 0.5s ease-in-out");
            $(".month").css("animation-fill-mode", "forwards");
            style.insertRule("@keyframes monthRun" + monthi + " {0%{transform: rotateZ(" + monthang1 + "deg);transform-origin: -" + monthLeft + " " + top + ";} 100%{transform:rotateZ(" + monthang2 + "deg);transform-origin: -" + monthLeft + " " + top + ";}}", style.rules.length);
            month++;
            if (month > 12) {
                month = 1;
            }
            // 更新到当前日
            $(".day").html("");
            Time.days = updateDays(2, year, month, 1);
            Time.currentTime.day = getFirstDay(2);
            $(".main-content .day").append("<span class='current'>" + Time.currentTime.day + Time.dayUnit + "</span>");
            for (const key in Time.days) {
                if (Time.days.hasOwnProperty(key)) {
                    const element = Time.days[key];
                    if (element != Time.currentTime.day) {
                        $(".main-content .day").append("<span>" + element + Time.dayUnit + "</span>");
                    }
                }
            }
            $(".day span").each(function (index, element) {
                $(element).css("animation", "day" + index + " 0.5s linear");
                $(element).css("animation-fill-mode", "forwards");
                style.insertRule("@keyframes day" + index + "{0%{transform: rotateZ(0);transform-origin: -" + dayLeft + " " + top + ";}100%{transform:rotateZ(" + -(360 / Time.days.length) * (index + 1) + "deg);transform-origin: -" + dayLeft + " " + top + ";}}", style.rules.length);
            });
            $(".month span.current").removeClass("current");
            next.addClass("current");
            monthi++;
            if (monthi > 12) {
                monthi = 1;
            }
        }
        // 跟新到年
        if (month == 1 && (dayText == "1 day" || dayText == numToSimp(1) + "日" || dayText == numToTrad(1) + "日" || dayText == "1日") && (secText == "0秒" || secText == "零秒" || secText == "0 s") && (minText == "0分" || minText == "零分" || minText == "0 m") && (hourText == "0时" || hourText == "零时" || hourText == "0 h")) {
            year++;
            Time.currentTime.year = getYear(2, year);
            $(".year span").html(getYear(2, year) + Time.yearUnit);
        }
    }
});


function initTime(Time) {
    Time.months = getMonths(2, Time.currentTime.month);
    Time.days = getdays(2, Time.currentTime.year, Time.currentTime.month, Time.currentTime.day);
    Time.weeks = getWeeks(2, Time.currentTime.week);
    Time.hours = getHours(2, Time.currentTime.hour);
    Time.minutes = getMinutes(2, Time.currentTime.minute);
    Time.seconds = getSeconds(2, Time.currentTime.second);
    Time.currentTime.month = numToTrad(Time.currentTime.month);
    Time.currentTime.day = numToTrad(Time.currentTime.day);
    Time.currentTime.week = Time.weekUnit + getWeek(2, Time.currentTime.week);
    Time.currentTime.shiChen = getShiChen(2, Time.currentTime.hour);
    Time.shiChens = getShiChens(2, Time.currentTime.shiChen);
    Time.currentTime.hour = numToTrad(Time.currentTime.hour);
    Time.currentTime.minute = numToTrad(Time.currentTime.minute);
    Time.currentTime.second = numToTrad(Time.currentTime.second);
    Time.currentTime.year = getYear(2, Time.currentTime.year);
}
