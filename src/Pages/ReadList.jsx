import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getcartfromlocalStoragne } from "../../public/LocalStorage";

import ReadCard from "./ReadCard";
const ReadList = () => {
  const [list,setlist] = useState([])
    const data = useLoaderData()
    useEffect(()=>{
        const storedata = getcartfromlocalStoragne()
        const convert = storedata.map(item=>parseInt(item))
        const myreadList = data.filter(book=>convert.includes(book.bookId));
        // console.log(myreadList.bookName)
        setlist(myreadList)
    },[])
    console.log(list)

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div>
            {
              list.map(i=><ReadCard i={i}></ReadCard>)
            }

          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
