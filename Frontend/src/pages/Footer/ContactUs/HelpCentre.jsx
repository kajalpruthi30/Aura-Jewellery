// /* eslint-disable jsx-a11y/anchor-has-content */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react';
// import { FaRegMessage } from "react-icons/fa6";
// import SearchBar from './Search';
// import { Link } from 'react-router-dom';
// import { BsBox2Fill } from "react-icons/bs";
// import { FaTruckFast } from "react-icons/fa6";
// import { FiRotateCcw } from "react-icons/fi";
// import { FaGem } from "react-icons/fa6";
// import { FaWandSparkles } from "react-icons/fa6";
// import { BsPersonFillGear } from "react-icons/bs";
// import { FaBookReader } from "react-icons/fa";

// const HelpCentre = () => {
//   return (
//     <div className="relative h-screen"style={{
//       letterSpacing:"1px"
//     }}>
//       <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('https://theme.zdassets.com/theme_assets/16582269/21665b4d0974ffe79a32471492f21e51f5d22c3b.jpg')", height: 'calc(50vh + 100px)' }}></div>
//       <div className="container relative py-16">
//         <h1 className="flex justify-center text-white" style={{ marginTop: '76px', fontWeight: '600', fontSize: '35px', position: 'relative', left: '24px' }}>
//           Welcome to Lovisa's Help Centre
//         </h1>
//         <div style={{
//           display:"flex",
//           justifyContent:"center",
//           alignItems: "center",
//           width: "100vw",
//         }}>
//         <SearchBar />
//         </div>
//       </div>

//       <div className="relative flex flex-col min-h-screen pb-20 centered-grid" style={{
//         top:"155px"
//       }}>

//         <div className="relative z-10  mb-8 grid-container max-w-7xl">
//           <div className="container" style={{
//             width:"70rem",
//             height:"0.6rem",
//             marginBottom:"180px"
//           }}>
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-3"style={{position:'relative',bottom:"7rem"}} >
//            <div className="py-2 bg-white border border-gray-300 rounded-sm cursor-pointer " style={{ }} >
//                 <Link to='/footer/order-and-product'>
//                   <div style={{backgroundColor:'rgba(255,204,187,1)',width:"60px",height:"60px",display:"block",margin:"0 auto",borderRadius:"50%" ,position:"relative" , bottom:"2.8rem"}}>
//                  <BsBox2Fill style={{color:" #ffffff",position:"relative",top:"1.2rem",left:"1.1rem",fontSize:"1.5em"}}/>
//                   </div>
//                 <h2 className="relative mb-2 text-xl text-center" style={{fontWeight:"500",bottom:"1.5rem"}}>Order & Product</h2>
//                 </Link>
//               </div>

//               <div className="py-2 bg-white border border-gray-300 rounded-sm cursor-pointer ">
//                 <Link to='/footer/delivery'>
//                 <div style={{backgroundColor:'rgba(255,204,187,1)',width:"60px",height:"60px",display:"block",margin:"0 auto",borderRadius:"50%" ,position:"relative" , bottom:"2.8rem"}}>
//                  <FaTruckFast style={{color:" #ffffff",position:"relative",top:"1.2rem",left:"1.1rem",fontSize:"1.5em"}}/>
//                 </div>
//                 <h2 className="relative mb-2 text-xl font-bold text-center"style={{fontWeight:"500",bottom:"1.5rem"}}>Delivery</h2>
//                 </Link>

//               </div>
//               <div className="py-2 bg-white border border-gray-300 rounded-sm cursor-pointer">
//                  <a href=''>
//                  <div style={{backgroundColor:'rgba(255,204,187,1)',width:"60px",height:"60px",display:"block",margin:"0 auto",borderRadius:"50%" ,position:"relative" , bottom:"2.8rem"}}>
//                  <FiRotateCcw style={{color:" #ffffff",position:"relative",top:"1.2rem",left:"1.1rem",fontSize:"1.5em"}}/>
//                  </div>
//                 <h2 className="relative mb-2 text-xl font-bold text-center"style={{fontWeight:"500",bottom:"1.5rem"}}>Returns & Exchanges</h2>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="container mb-8" >
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-3"style={{position:'relative',bottom:"8.5rem"}}>
//               <div className="py-2 bg-white border border-gray-300 rounded-sm cursor-pointer ">
//                 <a href=''>
//                 <div style={{backgroundColor:'rgba(255,204,187,1)',width:"60px",height:"60px",display:"block",margin:"0 auto",borderRadius:"50%" ,position:"relative" , bottom:"2.8rem"}}>
//                  <FaGem style={{color:" #ffffff",position:"relative",top:"1.2rem",left:"1.1rem",fontSize:"1.5em"}}/>
//                 </div>
//                 <h2 className="relative mb-2 text-xl font-bold text-center"style={{fontWeight:"500",bottom:"1.5rem"}}>Piercing Studio</h2>
//                 </a>
//               </div>
//               <div className="py-2 bg-white border border-gray-300 rounded-sm cursor-pointer">
//               <a href=''>
//               <div style={{backgroundColor:'rgba(255,204,187,1)',width:"60px",height:"60px",display:"block",margin:"0 auto",borderRadius:"50%" ,position:"relative" , bottom:"2.8rem"}}>
//                  <FaWandSparkles style={{color:" #ffffff",position:"relative",top:"1.2rem",left:"1.1rem",fontSize:"1.5em"}}/>
//                 </div>
//                 <h2 className="relative mb-2 text-xl font-bold text-center"style={{fontWeight:"500",bottom:"1.5rem"}}>Care & Size Guides</h2>
//                 </a>
//               </div>
//               <div className="py-2 bg-white border border-gray-300 rounded-sm cursor-pointer">
//               <a href=''>
//               <div style={{backgroundColor:'rgba(255,204,187,1)',width:"60px",height:"60px",display:"block",margin:"0 auto",borderRadius:"50%" ,position:"relative" , bottom:"2.8rem"}}>
//                  <BsPersonFillGear style={{color:" #ffffff",position:"relative",top:"1.2rem",left:"1.1rem",fontSize:"1.5em"}}/>
//                 </div>
//                 <h2 className="relative mb-2 text-xl font-bold text-center "style={{fontWeight:"500",bottom:"1.5rem"}}>Account & Technical</h2>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="container ">
//             <div className="relative grid grid-cols-1 md:grid-cols-1" style={{fontWeight:"500",bottom:"7.5rem"}}>
//               <div className="py-2 bg-white border border-gray-300 rounded-sm cursor-pointer">
//               <a href=''>
//               <div style={{backgroundColor:'rgba(255,204,187,1)',width:"60px",height:"60px",display:"block",margin:"0 auto",borderRadius:"50%" ,position:"relative" , bottom:"2.8rem"}}>
//                  <FaBookReader style={{color:" #ffffff",position:"relative",top:"1.2rem",left:"1.1rem",fontSize:"1.5em"}}/>
//                 </div>
//                 <h2 className="relative text-xl font-bold text-center"style={{fontWeight:"500"}}>Contact Us</h2>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div style={{position:"relative",bottom:"11rem",}}>
//         <h2 className='text-center' style={{
//           fontSize:"18px", fontWeight:"600"
//         }}>Recent activity</h2>
//         <div style={{
//           marginTop:"2.5rem",
//           marginRight:"12rem",
//           marginLeft:"12rem"
//         }}>
//             <p style={{
//               fontWeight:"500",
//               marginBottom:"0.5rem",
//               fontSize:"16px"
//             }}><a href="#">Delivery FAQs</a></p>
//             <p
//             style={{
//               marginBottom:"1.2rem",
//               fontSize:"14px"
//             }}
//             ><a href="#">My order is being returned to the sender, what happens now?</a><span style={{
//               marginLeft:"30.5rem",
//               fontSize:"12px",
//               color:'gray'
//             }}>Article created 23 days ago<span style={{
//               display: "inline-block",
//               marginLeft: "0.5rem",
//               fontSize: "12px"
//             }}><FaRegMessage style={{color: "#e68ec1"}}/></span> 0</span></p>
//         </div>
//         <hr style={{
//           width: "calc(100% - 24rem)",
//           margin: "0 auto"
//         }}/>
//         <div style={{
//           marginTop:"2.5rem",
//           marginRight:"12rem",
//           marginLeft:"12rem"
//         }}>
//             <p style={{
//               fontWeight:"500",
//               marginBottom:"0.5rem",
//               fontSize:"16px"
//             }}><a href="#">Click and Collect</a></p>
//             <p
//             style={{
//               marginBottom:"1.2rem",
//               fontSize:"14px"
//             }}
//             ><a href="#">Where is my Click and Collect order? I haven't received a notification.</a><span style={{
//               marginLeft:"27rem",
//               fontSize:"12px",
//               color:'gray'
//             }}>Article created 23 days ago<span style={{
//               display: "inline-block",
//               marginLeft: "0.5rem",
//               fontSize: "12px"
//             }}><FaRegMessage style={{color: "#e68ec1"}}/></span> 0</span></p>
//         </div>
//         <hr style={{
//           width: "calc(100% - 24rem)",
//           margin: "0 auto"
//         }}/>
//         <div style={{
//           marginTop:"2.5rem",
//           marginRight:"12rem",
//           marginLeft:"12rem"
//         }}>
//             <p style={{
//               fontWeight:"500",
//               marginBottom:"0.5rem",
//               fontSize:"16px"
//             }}><a href="#">Click and Collect</a></p>
//             <p
//             style={{
//               marginBottom:"1.2rem",
//               fontSize:"14px"
//             }}
//             ><a href="#">What is the Click and Collect Process (AUS Only)?</a><span style={{
//               marginLeft:"36rem",
//               fontSize:"12px",
//               color:'gray'
//             }}>Article created 23 days ago<span style={{
//               display: "inline-block",
//               marginLeft: "0.5rem",
//               fontSize: "12px"
//             }}><FaRegMessage style={{color: "#e68ec1"}}/></span> 0</span></p>
//         </div>
//         <hr style={{
//           width: "calc(100% - 24rem)",
//           margin: "0 auto"
//         }}/>
//         <div style={{
//           marginTop:"2.5rem",
//           marginRight:"12rem",
//           marginLeft:"12rem"
//         }}>
//             <p style={{
//               fontWeight:"500",
//               marginBottom:"0.5rem",
//               fontSize:"16px"
//             }}><a href="#">Order Issue</a></p>
//             <p
//             style={{
//               marginBottom:"1.2rem",
//               fontSize:"14px"
//             }}
//             ><a href="#">I received the wrong item, what should I do?</a><span style={{
//               marginLeft:"38rem",
//               fontSize:"12px",
//               color:'gray'
//             }}>Article created 23 days ago<span style={{
//               display: "inline-block",
//               marginLeft: "0.5rem",
//               fontSize: "12px"
//             }}><FaRegMessage style={{color: "#e68ec1"}}/></span> 0</span></p>
//         </div>
//         <hr style={{
//           width: "calc(100% - 24rem)",
//           margin: "0 auto"
//         }}/>
//         <div style={{
//           marginTop:"2.5rem",
//           marginRight:"12rem",
//           marginLeft:"12rem"
//         }}>
//             <p style={{
//               fontWeight:"500",
//               marginBottom:"0.5rem",
//               fontSize:"16px"
//             }}><a href="#">Update Details</a></p>
//             <p
//             style={{
//               marginBottom:"1.2rem",
//               fontSize:"14px"
//             }}
//             ><a href="#">How do I unsubscribe from your mailing list?</a><span style={{
//               marginLeft:"38rem",
//               fontSize:"12px",
//               color:'gray'
//             }}>Article created 23 days ago<span style={{
//               display: "inline-block",
//               marginLeft: "0.5rem",
//               fontSize: "12px"
//             }}><FaRegMessage style={{color: "#e68ec1"}}/></span> 0</span></p>
//         </div>
//         <hr style={{
//           width: "calc(100% - 24rem)",
//           margin: "0 auto"
//         }}/>
//       </div>
//       <button style={{
//         marginLeft:"12rem",
//         padding:".3rem ",
//         color:"white",
//         backgroundColor:"#ffcccc",
//         border:"none",
//         borderRadius:"5px",
//         width:"6rem",
//         fontSize:"14px",
//         position:"relative",
//         bottom:'9rem'
//       }}>See more</button>
//     </div>
//   );
// };

// export default HelpCentre;



import React from 'react';
import { FaRegMessage } from "react-icons/fa6";
import SearchBar from './Search';
import { Link } from 'react-router-dom';
import { BsBox2Fill } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { FiRotateCcw } from "react-icons/fi";
import { FaGem } from "react-icons/fa6";
import { FaWandSparkles } from "react-icons/fa6";
import { BsPersonFillGear } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";

// Recent activity
const recentActivityData = [
  {
    title: "Delivery FAQs",
    content: "My order is being returned to the sender, what happens now?",
    timestamp: 23
  },
  {
    title: "Click and Collect",
    content: "Where is my Click and Collect order? I haven't received a notification.",
    timestamp: 23
  },
  {
    title: "Click and Collect",
    content: "What is the Click and Collect Process (AUS Only)?",
    timestamp: 23
  },
  {
    title: "Order Issue",
    content: "I received the wrong item, what should I do?",
    timestamp: 23
  },
  {
    title: "Update Details",
    content: "How do I unsubscribe from your mailing list?",
    timestamp: 23
  }
];

const RecentActivityItem = ({ title, content, timestamp }) => (
  <div className="mt-2.5rem mx-12rem">
    <div className='my-3'>
    <p className="font-500 text-16 mb-0.5 flex justify-start leading-6 font-semibold"><a href="#">{title}</a></p>
    <p className="mb-1.2 text-14 flex justify-between leading-10 items-center"><a href="#">{content}</a><span className="ml-30.5 text-12 text-gray-500">Article created {timestamp} days ago<span className="inline-block ml-0.5 text-12"><FaRegMessage style={{ color: "#e68ec1", paddingTop: "4px" }} /></span> 0</span></p>
  </div>
  </div>
);

const Carddata = [
  { icon: <BsBox2Fill style={{ color: "#ffffff", position: "relative", top: "1.1rem", left: "1.2rem", fontSize: "1.5em" }} />, title: "Contact Us" },
  { icon: <FaTruckFast style={{ color: "#ffffff", position: "relative", top: "1.1rem", left: "1.2rem", fontSize: "1.5em" }} />, title: "Contact Us" },
  { icon: <FaTruckFast style={{ color: "#ffffff", position: "relative", top: "1.1rem", left: "1.2rem", fontSize: "1.5em" }} />, title: "Contact Us" }, 
  { icon: <FaTruckFast style={{ color: "#ffffff", position: "relative", top: "1.1rem", left: "1.2rem", fontSize: "1.5em" }} />, title: "Contact Us" }, 
  { icon: <FaTruckFast style={{ color: "#ffffff", position: "relative", top: "1.1rem", left: "1.2rem", fontSize: "1.5em" }} />, title: "Contact Us" }, 
  { icon: <FaTruckFast style={{ color: "#ffffff", position: "relative", top: "1.1rem", left: "1.2rem", fontSize: "1.5em" }} />, title: "Contact Us" }
];

const HelpCentre = () => {
  return (
    <div className="relative container mx-[6rem] py-16 w-[85vw] text-center">
      {/* Background image */}
       <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('https://theme.zdassets.com/theme_assets/16582269/21665b4d0974ffe79a32471492f21e51f5d22c3b.jpg')", height: 'calc(50vh + 100px)' }}></div>

      <h1 className="text-center text-white font-semibold text-3xl mb-8">Welcome to Lovisa's Help Centre</h1>
      <div className="flex justify-center mb-8">
        <SearchBar />
      </div>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {Carddata.map((item, index) => (
      <div key={index} className="py-2 bg-white border border-gray-300 rounded-sm cursor-pointer">
        <a href=''>
          <div style={{ backgroundColor: 'rgba(255,204,187,1)', width: "60px", height: "60px", display: "block", margin:"0 auto", borderRadius:"50%", position: "relative", bottom: "2.6rem" }}>
            {item.icon}
          </div>
          <h2 className="relative text-xl font-bold flex items-center justify-center" style={{ fontWeight: "500" }}>{item.title}</h2>
        </a>
      </div>
    ))}

        <div className="container my-7">
          <div className="relative grid grid-cols-1 md:grid-cols-1 w-[85vw]" style={{ fontWeight: "500" }}>
            <div className="py-2 bg-white border border-gray-300 rounded-sm cursor-pointer">
              <a href=''>
                <div style={{ backgroundColor: 'rgba(255,204,187,1)', width: "60px", height: "60px", display: "block", margin: "0 auto", borderRadius: "50%", position: "relative", bottom: "2.6rem" }}>
                  <FaBookReader style={{ color: " #ffffff", position: "relative", top: "1.1rem", left: "1.2rem", fontSize: "1.5em" }} />
                </div>
                <h2 className="relative text-xl font-bold" style={{ fontWeight: "500" }}>Contact Us</h2>
              </a>
            </div>
          </div>
        </div>

      </div>


      {/* Recent activity */}
      <div className="relative">
        <h2 className="text-[22px] font-600 my-10 font-semibold">Recent activity</h2>
        {recentActivityData.map((item, index) => (
          <React.Fragment key={index}>
            <RecentActivityItem
              title={item.title}
              content={item.content}
              timestamp={item.timestamp}
            />
            {index !== recentActivityData.length - 1 && <hr className="w-[calc(100%)] " />}
          </React.Fragment>
        ))}
        <button className="ml-12rem px-3.5 py-2 text-white border-none rounded-md text-14 flex justify-start" style={{backgroundColor: "rgba(255, 182, 158, 1)"}}>See more</button>
      </div>

    </div>
  );
};

export default HelpCentre;
