document.addEventListener('DOMContentLoaded', function() {
    const eventsList = document.getElementById('events-list');

    const events = [
    {
        id: 1,
        title: "DJ Night",
        date: "2024-07-01",
        time: "8:00 PM",
        venue: "Main Hall",
        description: "Join us for an electrifying night with top DJs.",
        imageUrl: "https://cdn.alivenetwork.com/media/partydjs-4.jpg?width=767&height=575&aspect_ratio=4:3&class=largefull" 
    },
    {
        id: 2,
        title: "Music Contest",
        date: "2024-07-15",
        time: "6:00 PM",
        venue: "Auditorium",
        description: "Participants from around the region showcasing their musical talents.",
        imageUrl: "https://img.freepik.com/premium-vector/music-contest-stage-with-guitar-microphone_37787-1033.jpg" 
    },
    {
        id: 3,
        title: "Food Festival",
        date: "2024-07-20",
        time: "5:00 PM",
        venue: "Auditorium",
        description: "Participants from around the region showcasing their musical talents.",
        imageUrl: "https://www.tourmyindia.com/blog//wp-content/uploads/2019/03/National-Street-Food-Festival.jpg" 
    },
    {
        id: 4,
        title: "Fashion Show",
        date: "2024-07-23",
        time: "8:00 PM",
        venue: "Auditorium",
        description: "Participants from around the region showcasing their musical talents.",
        imageUrl: "https://iso.500px.com/wp-content/uploads/2020/02/Christophe-Josse-Finale-By-Milton-Tan.jpeg" 
    },
    {
        id: 5,
        title: "Art Exhibition",
        date: "2024-07-25",
        time: "4:00 PM",
        venue: "Auditorium",
        description: "Participants from around the region showcasing their musical talents.",
        imageUrl: "https://d197irk3q85upd.cloudfront.net/catalog/product/cache/95dbdf78ad5a0d4b547132f80fbac8f3/e/x/exhibition_banner_1.jpg" 
    },
    {
        id: 6,
        title: "Comedy Night",
        date: "2024-07-26",
        time: "8:00 PM",
        venue: "Auditorium",
        description: "Participants from around the region showcasing their musical talents.",
        imageUrl: "https://thebasie.org/wp-content/uploads/2022/03/R1-OPEN-MIC-BASIE-CINEMAS-1240x698-1-1024x576.jpg" 
    }
    // Add more events as needed
];

    // Function to generate HTML for events
    function generateEventsHTML(eventsArray) {
        return eventsArray.map(event => `
            <div class="event">
                <img src="${event.imageUrl}" alt="${event.title}">
                <div class="event-info">
                    <h2>${event.title}</h2>
                    <p>Date: ${event.date}</p>
                    <p>Time: ${event.time}</p>
                    <p>Venue: ${event.venue}</p>
                    <button onclick="showEventDetails(${event.id})">Details</button>
                </div>
            </div>
        `).join('');
    }   

    // Display upcoming events
    eventsList.innerHTML = generateEventsHTML(events);
});

// Function to show event details on event-details.html
function showEventDetails(eventId) {
    // Redirect to event-details.html and pass event ID as query parameter
    window.location = `event-details.html?id=${eventId}`;
}
