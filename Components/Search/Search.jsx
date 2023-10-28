import React, { useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';
//import queryString from 'query-string';
function Search() {
  // const [searchInput, setSearchInput] = useState('');
  // const [currentLocation, setCurrentLocation] = useState('');
  // const [departureDate, setDepartureDate] = useState('');

  //lam theo cai tren

  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  // const handleSearch = () => {
  //   // Thực hiện tìm kiếm (gọi hàm onSearch và truyền các thông tin cần thiết)
  //   onSearch({
  //     location: searchInput,
  //     currentLocation: currentLocation,
  //     departureDate: departureDate,
  //   });
  // const handleSearch = () => {
  //   // Tạo một đối tượng chứa thông tin tìm kiếm
  //   const searchInfo = {
  //     location: searchInput,
  //     currentLocation,
  //     departureDate,
  //   };
  //   // Chuyển đối tượng searchInfo thành một chuỗi query string
  //   const query = queryString.stringify(searchInfo);

  //   // Chuyển hướng đến trang Flightbook và truyền query string thông qua URL
  //   window.location.href = `/flightbook?${query}`;
  // };
  //};

  
  // const handleSearch = () => {
  //   // Tạo URL với thông tin tìm kiếm
  //   const url = `/flightbook?location=${searchInput}&currentLocation=${currentLocation}&departureDate=${departureDate}`;
    
  //   // Redirect đến trang Flightbook
  //   window.location.href = url;
  // }; xoa cai duoi thi lam cai nay
  
  const handleSearch = () => {
    // Tạo URL với thông tin tìm kiếm
    const url = `/flightbook?from=${departureCity}&to=${destinationCity}&date=${departureDate}`;

    // Redirect đến trang Flightbook
    window.location.href = url;
  };


  return (
    <div className="search container">
      <div className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>
          <div className="singleBtn">
            <span>Business Class</span>
          </div>
          <div className="singleBtn">
            <span>First class</span>
          </div>
        </div>
        <div className="searchInputs flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className='icon' />
            </div>
            <div className="texts">
              <h4>Điểm đến</h4>
              <input
                type="text"
                placeholder='Hôm nay bạn muốn đi đâu'
                value={destinationCity}
                onChange={(e) => setDestinationCity(e.target.value)}
              />
            </div>
          </div>
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className='icon' />
            </div>
            <div className="texts">
              <h4>Điểm xuất phát</h4>
              <input
                type="text"
                placeholder='Địa điểm hiện tại'
                value={departureCity}
                onChange={(e) => setDepartureCity(e.target.value)}
              />
            </div>
          </div>
          <div className="singleInput flex">
            <div className="iconDiv">
              <SlCalender className='icon' />
            </div>
            <div className="texts">
              <h4>Ngày khởi hành</h4>
              <input
                type="text"
                placeholder='Ngày khởi hành'
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>
          </div>
          <button className='btn btnBlock flex' onClick={handleSearch}>Tìm chuyến bay</button>
        </div>
      </div>
    </div>
  );
}

export default Search;


