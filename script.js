/* 
sorting upcoming and past shows
*/
const showsData = [
    { date: "2026-02-18", text: "February 18 - Los Angeles, CA - Minaret Records Piano Party" },
    { date: "2026-06-03", text: "June 3 - Brooklyn, NY - Three's Brewing" },
    { date: "2026-06-04", text: "June 4 - Brooklyn, NY - Mudhouse" },
    { date: "2026-06-06", text: "June 6 - Manhattan, NY - Close Up" },
    { date: "2026-07-13", text: "July 13 - Stanford, CA - Stanford Jazz Festival", link: "https://stanfordjazz.org/event/christina-galisatus-quintet-plays-joni-mitchell/" }
];

const upcomingContainer = document.querySelector('.upcoming');
const pastContainer = document.querySelector('.past-shows');

const today = new Date();
today.setHours(0, 0, 0, 0);

showsData.forEach(show => {
    const [year, month, day] = show.date.split('-');
    const showDate = new Date(year, month - 1, day); //include shows that are today
    const div = document.createElement('div');
    div.classList.add('show');

    console.log("test");
    if (show.link) {
        div.innerHTML = `<p>${show.text} <a href="${show.link}" target="_blank">🎟️</a></p>`;
    } else {
    div.innerHTML = `<p>${show.text}</p>`;
    }

    if (showDate < today) {
        pastContainer.appendChild(div);
    } else {
        upcomingContainer.appendChild(div);
    }
});