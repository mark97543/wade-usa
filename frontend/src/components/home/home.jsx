import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css'; // Import CSS modules
import Header from "../header/header.jsx"
import Footer from '../footer/footer.jsx';
import Countdown from './countdown.js';



function Home() {
    const [message, setMessage] = useState('');
  
    // useEffect(() => {
    //   axios.get('/api/hello')
    //     .then(response => setMessage(response.data.message))
    //     .catch(error => console.error('Error fetching data:', error));
    // }, []);

    const [count, setCount] = useState(0);
    const [count1, setCount1]=useState(1);
    const [count2, setCount2]= useState(3);
    useEffect(() => {
      const interval = setInterval(() => {
        setCount(Countdown("Feb, 16, 2025 04:30", "Our Wedding"));
        setCount1(Countdown("Feb, 07, 2025 23:30", "I Arrive To Fa"));
        setCount2(Countdown("Feb, 05, 2025 19:00", "I Travel To Fa"));
    }, 1000)});


  
    return (
      <div>
          <Header />
       
          <h1 className="fancy">Sukanya & Mark</h1>
          <h2 className="fancy">The Future Mr. & Mrs. Wade</h2>

            <h2 className="normal">🇹🇭 ⛪︎ 🇺🇲</h2>
            <h2 className="normal">Date: 2|16|2025</h2>
            <h2 className="normal">Location: Surin Thailand</h2>
            <h2 className="normal">{count2}</h2>
            <h2 className="normal">{count1}</h2>
            <h2 className="normal"> {count} </h2>
            <h2 className="normal">_________________________________________</h2>

            <h2 className="normal">On 2/16/2025 we will be getting married. The wedding will take place in Thailand so I understand family will not be able to attend. Our solution to this is to have a second wedding in the USA after Fa has recived her visa. This will be the best way to allow us to chare this event with both our family. Unfortionatly the second cermony cannot be scheduled at this time due to Fa needing a visa. I will keep everyone posted on this.</h2>
            <h2 className="normal">วันที่ 16/2/2568 เราจะแต่งงานกัน งานแต่งงานจะเกิดขึ้นในประเทศไทย ดังนั้นฉันเข้าใจว่าครอบครัวจะไม่สามารถเข้าร่วมได้ วิธีแก้ปัญหาของเราคือจัดงานแต่งงานครั้งที่สองในสหรัฐอเมริกาหลังจากที่ฟ้าได้รับวีซ่าของเธอแล้ว นี่จะเป็นวิธีที่ดีที่สุดในการช่วยให้เราแบ่งปันกิจกรรมนี้กับทั้งครอบครัวของเรา น่าเสียดายไม่สามารถกำหนดพิธีการครั้งที่สองได้ในขณะนี้เนื่องจากฟ้าต้องการวีซ่า ฉันจะให้ทุกคนโพสต์เกี่ยวกับเรื่องนี้</h2>
        {/* <h1>Home</h1>
        <p>{message}</p> */}
        <Footer />
      </div>
    );
  }

  export default Home;