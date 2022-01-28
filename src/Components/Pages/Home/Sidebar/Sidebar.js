import axios from "axios";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const url = "https://pacific-retreat-04444.herokuapp.com/addBlog";
    axios.get(url).then((res) => {
      setItem(res.data);
    });
  }, []);
  let sortednumbers = item.sort((a, b) => parseInt(b.cost) - parseInt(a.cost));
  console.log(sortednumbers);

  return (
    <div>
      <h3>SideBar</h3>
    </div>
  );
};

export default Sidebar;
