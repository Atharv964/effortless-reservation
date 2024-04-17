// Add event listeners for the section links
document.addEventListener('DOMContentLoaded', () => {
    const hotelSection = document.querySelector('#hotels');
    const restaurantSection = document.querySelector('#restaurants');
    const eventSection = document.querySelector('#events');

    // Navigate to the hotel reservation page when clicking on the hotel section
    hotelSection.addEventListener('click', () => {
        window.location.href = 'hotel_reservation.html';
    });

    // Navigate to the restaurant reservation page when clicking on the restaurant section
    restaurantSection.addEventListener('click', () => {
        window.location.href = 'restaurant_reservation.html';
    });

    // Navigate to the event reservation page when clicking on the event section
    eventSection.addEventListener('click', () => {
        window.location.href = 'event_reservation.html';
    });
});
