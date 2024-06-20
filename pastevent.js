document.addEventListener('DOMContentLoaded', function () {
    const eventsList = document.getElementById('events-list');

    const events = [
        {
            id: 11,
            title: "Bike Exhibition",
            date: "2024-07-01",
            time: "8:00 PM",
            venue: "Main Hall",
            description: "Join us for an electrifying night top modified bike from all over the world.",
            imageUrl: "https://wide.piaggiogroup.com/articles/events/il-gruppo-piaggio-al-motor-bike-expo-di-verona/foto1.jpg"
        },
        {
            id: 12,
            title: "Car Expo",
            date: "2024-07-15",
            time: "6:00 PM",
            venue: "Auditorium",
            description: "Participants from around the region showcasing their extra ordinary cars.",
            imageUrl: "https://www.exhibitionshowcase.com/wp-content/uploads/2022/03/auto-expo_c282b7f2-0e86-11e8-9ced-6b0f736beaca.jpg"
        },
        {
            id: 13,
            title: "Stand-up Comedy ",
            date: "2024-07-20",
            time: "5:00 PM",
            venue: "Auditorium",
            description: "Participants from around the region showcasing their sarcasm skills.",
            imageUrl: "https://classiebit.com/storage/posts/April2024/VfNU58WA3O72tq2bkBWQ.webp"
        },
        {
            id: 14,
            title: "Fancy Dress",
            date: "2024-07-20",
            time: "5:00 PM",
            venue: "Auditorium",
            description: "Participants from around the region showcasing their extraordinary dressing sense.",
            imageUrl: "https://images.halloweencostumes.co.uk/media/164/adult-costumes/costume-ideas-for-adults.jpg"
        },
        {
            id: 15,
            title: "Party Pizzazz",
            date: "2024-07-20",
            time: "5:00 PM",
            venue: "Auditorium",
            description: "Participants from around the region showcasing taste for pizza.",
            imageUrl: "https://t3.ftcdn.net/jpg/03/16/47/42/360_F_316474238_69Akk15i3gsEp78WNv9aB5TMXFLO9YD6.jpg"
        },
        {
            id: 16,
            title: "Fitness Frenzy",
            date: "2024-07-20",
            time: "5:00 PM",
            venue: "Auditorium",
            description: "Participants from around the region showcasing their musical talents.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArwhrqpdA02cnydB6s5h7P3Ib_D50FkErnQ&usqp=CAU"
        }
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
