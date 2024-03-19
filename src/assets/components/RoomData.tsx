import room1 from './components/images/room/room1.png'
import room2 from './components/images/room/room2.png'
import room3 from './components/images/room/room3.png'
import room4 from './components/images/room/room4.png'
import room5 from './components/images/room/room5.png'
import room6 from './components/images/room/room6.png'


interface Room {
    room_id: number;
    room_image: string;
    room_name: string;
    room_price: number;
    room_capacity: string; // changed to match the casing in your data
    room_description: string;
}

const RoomData: Room[] = [
    {
        room_id: 1,
        room_image: room1,
        room_name: "Classic Room White",
        room_price: 4000,
        room_capacity: "2",
        room_description: "The Classic Room White: Timeless elegance in a minimalist space, perfect for those seeking tranquility and style."
    },
    {
        room_id: 2,
        room_image: room2,
        room_name: "Deluxe Room",
        room_price: 5000,
        room_capacity: "4",
        room_description: "The Deluxe Room: Indulge in opulence and sophistication, where every detail is designed for an exquisite experience."
    },
    {
        room_id: 3,
        room_image: room3,
        room_name: "Deluxe Premier",
        room_price: 5000,
        room_capacity: "4",
        room_description: "Deluxe Premier: A pinnacle of luxury, offering refined elegance and unparalleled comfort for an unforgettable stay."
    },
    {
        room_id: 4,
        room_image: room4,
        room_name: "Classic Room Blue",
        room_price: 4000,
        room_capacity: "2",
        room_description: "The Classic Room Blue: A serene oasis adorned in soothing hues, inviting relaxation amidst timeless charm."
    },
    {
        room_id: 5,
        room_image: room5,
        room_name: "Family Room Wolseley",
        room_price: 8000,
        room_capacity: "8",
        room_description: "The Family Room Wolseley: A harmonious space tailored for families, blending comfort and functionality seamlessly."
    },
    {
        room_id: 6,
        room_image: room6,
        room_name: "Family Room Maisonette",
        room_price: 8000,
        room_capacity: "8",
        room_description: "Family Room Maisonette: A sanctuary crafted for families, offering comfort and versatility for cherished moments."
    }
];

export default RoomData;


// import axios from 'axios';
// import room1 from './components/images/room/room1.png'
// import room2 from './components/images/room/room2.png'
// import room3 from './components/images/room/room3.png'
// import room4 from './components/images/room/room4.png'
// import room5 from './components/images/room/room5.png'
// import room6 from './components/images/room/room6.png'

// interface Room {
//     room_id: number;
//     room_image: string; // Change type to string to store image URLs
//     room_name: string;
//     room_price: number;
//     room_capacity: string; // Changed to room_capacity to match the API response
//     room_description: string;
// }

// async function fetchRoomDataFromAPI(): Promise<Room[]> {
//     try {
//         const response = await axios.get('https://nodejs-mysql-dbcollege-api-oriyami.onrender.com/api/v1/posts1/getroom');
//         const roomData = response.data.data.map((room: any) => {
//             // Construct the image URL based on the room_image from API
//             const imageUrl = `/components/images/room/${room.room_image}.png`; // Assuming the image extension is always PNG
//             // const imageUrl = `${room.room_image}`; // Assuming the image extension is always PNG

//             console.log('Image URL:', imageUrl);
//             return {
//                 ...room,
//                 room_image: imageUrl
//             };
//         });

//         console.log('Fetched Room Data:', roomData); // Log the fetched room data

//         return roomData;
//     } catch (error) {
//         console.error('Error fetching room data from API:', error);
//         return [];
//     }
// }

// async function updateRoomDataWithAPI(): Promise<Room[]> {
//     try {
//         const roomDataFromAPI = await fetchRoomDataFromAPI();

//         console.log('Updated Room Data:', roomDataFromAPI); // Log the updated room data

//         return roomDataFromAPI;
//     } catch (error) {
//         console.error('Error updating room data with API data:', error);
//         return [];
//     }
// }

// const RoomData = await updateRoomDataWithAPI();

// export default RoomData;
