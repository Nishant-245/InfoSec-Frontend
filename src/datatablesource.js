export const userColumns = [
  {
    field: "Type",
    headerName: "Type",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.Type}`}>
          {params.row.Type}
        </div>
      );
    },
  },
  {
    field: "API",
    headerName: "API",
    width: 450,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <div class="textContent">
            <span class="cellName">{params.row.username}</span>
            <span class="cellDescription">Description</span>
          </div>
        </div>
      );
    },
  },

  {
    field: "LastUpdated",
    headerName: "Last Updated",
    width: 250,
  },

  {
    field: "Attacks",
    headerName: "No of attacks",
    width: 200,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    Type: "GET",
    LastUpdated: "1snow@gmail.com",
    Attacks: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    LastUpdated: "2snow@gmail.com",
    Type: "POST",
    Attacks: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    LastUpdated: "3snow@gmail.com",
    Type: "POST",
    Attacks: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    LastUpdated: "4snow@gmail.com",
    Type: "GET",
    Attacks: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    LastUpdated: "5snow@gmail.com",
    Type: "POST",
    Attacks: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    LastUpdated: "6snow@gmail.com",
    Type: "GET",
    Attacks: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    LastUpdated: "7snow@gmail.com",
    Type: "DELETE",
    Attacks: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    LastUpdated: "8snow@gmail.com",
    Type: "PUT",
    Attacks: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    LastUpdated: "snow@gmail.com",
    Type: "PUT",
    Attacks: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    LastUpdated: "snow@gmail.com",
    Type: "GET",
    Attacks: 65,
  },
];
