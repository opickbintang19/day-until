dayjs.extend(dayjs_plugin_duration);

function activeCountdown(element, dateString){
    const targetDate = dayjs(dateString);
    // console.log(targetDate)
    element.querySelector(".until__event").textContent = `Until ${targetDate.format("D MMMM YYYY")}`;

    setInterval(()=>{
        const now = dayjs();
        const duration = dayjs.duration(targetDate.diff(now));

        element.querySelector(".until__numeric--seconds").textContent = duration.seconds().toString();
        element.querySelector(".until__numeric--minutes").textContent = duration.minutes().toString();
        element.querySelector(".until__numeric--hours").textContent = duration.hours().toString();
        element.querySelector(".until__numeric--days").textContent = duration.asDays().toFixed(0).toString();
    }, 250)
}

activeCountdown(document.getElementById("myCountdown"), "2022-12-31");