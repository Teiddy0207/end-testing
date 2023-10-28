// import React from 'react'
// import './Flightbook.css';
// import { useLocation } from 'react-router-dom';

// const Flightbook = () => {
//   // Sử dụng useLocation để lấy thông tin từ URL
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);

//   const from = searchParams.get('from'); // Lấy điểm xuất phát từ query string
//   const to = searchParams.get('to'); // Lấy điểm đến từ query string
 
//   const flights = [
//     {
//       flightNumber: 'XYZ123',
//       departure: 'New York',
//       destination: 'Los Angeles',
//       departureDate: 'October 30, 2023',
//       departureTime: '10:00 AM',
//     },
//     {
//       flightNumber: 'A23',
//       departure: 'Nha Trang',
//       destination: 'Hà Nội',
//       departureDate: 'October 30, 2023',
//       departureTime: '10:00 AM',
//     },
 
//   ];
//   const filteredFlights = flights.filter((flight) => {
//     return flight.departure === from && flight.destination === to;
//   });
//  return (
// <div>
//       {flights.map((flight, index) => (
//         <div key={index} className="flight-container">
//           <h1>Flight Information</h1>
//           <p>Flight Number: {flight.flightNumber}</p>
//           <p>Departure: {flight.departure}</p>
//           <p>Destination: {flight.destination}</p>
//           <p>Departure Date: {flight.departureDate}</p>
//           <p>Departure Time: {flight.departureTime}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Flightbook
import React from 'react';
import './Flightbook.css';
import { useLocation } from 'react-router-dom';

const Flightbook = () => {
  // Sử dụng useLocation để lấy thông tin từ URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const from = searchParams.get('from'); // Lấy điểm xuất phát từ query string
  const to = searchParams.get('to'); // Lấy điểm đến từ query string
  const selectedDate  = searchParams.get('date');
  
  const flights = [
    {
      flightNumber: 'XYZ123',
      departure: 'New York',
      destination: 'Los Angeles',
      departureDate: '30/10/2023',
      departureTime: '10:00 AM',
      company: 'Vietnam Airline',
    },
    {
      flightNumber: 'XYZ123',
      departure: 'New York',
      destination: 'Los Angeles',
      departureDate: '30/10/2023',
      departureTime: '10:00 AM',
      company: 'American star',
    },
    {
      flightNumber: 'A23',
      departure: 'Nha Trang',
      destination: 'Hà Nội',
      departureDate: '30/10/2023',
      departureTime: '10:00 AM',
      company :"VietJet",
    },
    {
      flightNumber: 'A24',
      departure: 'Nha Trang',
      destination: 'Hà Nội',
      departureDate: '30/10/2023',
      departureTime: '11:00 AM',
      company :"Bammboo",
    },
    {
      flightNumber: 'A23',
      departure: 'Nha Trang',
      destination: 'Hà Nội',
      departureDate: '31/10/2023',
      departureTime: '00:00 AM',
      company :"Star",
    },
    // Thêm thông tin về các chuyến bay khác (nếu cần)
  ];

  // Lọc danh sách chuyến bay dựa trên thông tin tìm kiếm
 // Lọc chuyến bay dựa trên điểm đến, điểm đi và danh sách ngày khởi hành đã chọn
 const filteredFlights = flights.filter((flight) => {
  return (
    flight.departure === from &&
    flight.destination === to &&
    (selectedDate.includes(flight.departureDate) ||
      selectedDate.includes(flight.departureDate.replace('/', '-'))
    )
  );
});

  return (
    <div>
      {filteredFlights.length > 0 ? (
        filteredFlights.map((flight, index) => (
          <div key={index} className="flight-container">
            <h1>Flight Information</h1>
            <p>Flight Number: {flight.flightNumber}</p>
            <p>Departure: {flight.departure}</p>
            <p>Destination: {flight.destination}</p>
            <p>Departure Date: {flight.departureDate}</p>
            <p>Departure Time: {flight.departureTime}</p>
            <p>company : {flight.company}</p>
          </div>
        ))
      ) : (
        <p>No flights found for the selected route.</p>
      )}
    </div>
  );
};

export default Flightbook;


