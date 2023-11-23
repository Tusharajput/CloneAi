import addBtn from './assets/add-30.png'
import msgIcon from "./assets/message.svg"
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import psyduck from './assets/psyduck.png'
import icon from './assets/icon.png'
import sendBtn from './assets/send.svg'
import pokeball from './assets/pokeball.png'
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="fixed">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={icon} alt="Logo" className="Logo" />
            <span className="brand">ChatAI</span>
          </div>
          <div className='margin'>
          <button className="midBtn">
          <img src={addBtn} alt="new chat" className="addBtn" />
            <p className='nchat'>New Chat</p>
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="query" />
              What is Programming ?
            </button>
            <button className="query">
              <img src={msgIcon} alt="query" />
              What is API ?
            </button>
          </div>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="" className="listitemsImg" />Home</div>
           <div className="listItems"><img src={saved} alt="" className="listitemsImg" />Saved</div>
         {/* <div className="listItems"><img src={acuser} alt="" className="listitemsImg" />Account</div> */}
         </div>
       </div>
       </div>
       <div className="scroll">
       <div className='main'>
         <div className="chats">
             <div className="chat">
               <img className='chatImg' src={pokeball} alt="" /><p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo sequi mollitia repudiandae sed. Voluptatibus qui est dolore voluptates mollitia. Autem.</p>
            </div>
             <div className="chat bot">
               <img className='chatImg' src={psyduck} alt="" /><p className="text1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore facilis praesentium, consequuntur laudantium aperiam eaque molestiae. Culpa similique deserunt ducimus saepe minima temporibus eum quos porro placeat quasi mollitia molestiae voluptatum praesentium, molestias nam in quae eligendi rem asperiores exercitationem dolore voluptas perspiciatis voluptatibus? Consequuntur placeat repudiandae nobis, sunt unde, minima, pariatur assumenda a ut harum ab magni illum molestiae quaerat? Explicabo quis maiores quod accusantium atque provident quam non eum, harum a. Nemo fuga suscipit vero qui cum magnam praes provident pariatur at eius aperiam, assumenda nihil vitae!</p>
             </div>
             <div className="chat">
               <img className='chatImg' src={pokeball} alt="" /><p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. adipisicing elit. Modi consectetur eius accusantium possimus hic provident? Praesentium distinctio incidunt nulla. Temporibus dicta, beatae ratione, delectus illum nostrum laboriosam voluptas nemo suscipit voadipisicing elit. Modi consectetur eius accusantium possimus hic provident? Praesentium distinctio incidunt nulla. Temporibus dicta, beatae ratione, delectus illum nostrum laboriosam voluptas nemo suscipit voNemo sequi mollitia repudiandae sed. Voluptatibus qui est dolore voluptates mollitia. Autem.</p>
            </div>
             <div className="chat bot">
               <img className='chatImg' src={psyduck} alt="" /><p className="text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consectetur eius accusantium possimus hic provident? Praesentium distinctio incidunt nulla. Temporibus dicta, beatae ratione, delectus illum nostrum laboriosam voluptas nemo sadipisicing elit. Modi consectetur eius accusantium possimus hic provident? Praesentium distinctio incidunt nulla. Temporibus dicta, beatae ratione, delectus illum nostrum laboriosam voluptas nemo suscipit voadipisicing elit. Modi consectetur eius accusantium possimus hic provident? Praesentium distinctio incidunt nulla. Temporibus dicta, beatae ratione, delectus illum nostrum laboriosam voluptas nemo suscipit vouscipit voadipisicing elit. Modi consectetur eius accusantium possimus hic provident?adipisicing elit. Modi consectetur eius accusantium possimus hic provident? Praesentium distinctio incidunt nulla. Temporibus dicta, beatae ratione, delectus illum nostrum laboriosam voluptas nemo suscipit voadipisicing elit. Modi consectetur eius accusantium possimus hic provident? Praesentium distinctio incidunt nulla. Temporibus dicta, beatae ratione, delectus illum nostrum laboriosam voluptas nemo suscipit vo Praesentium distinctio incidunt nulla. Temporibus dicta, beatae ratione, delectus illum nostrum laboriosam voluptas nemo suscipit voadipisicing elit. Modi consectetur eius accusantium possimus hic provident? Praesentium distinctio incidunt nulla. Temporibus dicta, beatae ratione, delectus illum nostrum laboriosam voluptas nemo suscipit voluptatibus quos consequuntur nisi similique dignissimos ut eum nesciunt fuga obcaecati mollitia velit magnam quis aliquid sed doloribus.</p>
             </div>
         </div>
         <div className="chatFooter">
           <div className="inp">
             <input type="text"placeholder='type here...' /> <button  className="send" ><img src={sendBtn} alt="Send" /></button>
          </div>
           <p>AI can make mistakes. Consider checking important information.</p>
         </div>
      </div>
      </div>
    </div>
  );
};
export default App;

// import React, { useState } from "react";
// import gptLogo from "./assets/chatgpt.svg";
// import addBtn from "./assets/add-30.png";
// import msgIcon from "./assets/message.svg";
// import home from "./assets/home.svg";
// import saved from "./assets/bookmark.svg";
// import rocket from "./assets/rocket.svg";
// import userIcon from "./assets/user-icon.png";
// import gptImgLogo from "./assets/chatgptLogo.svg";
// import sendBtn from "./assets/send.svg";
// import "./App.css";

// function App() {
//   const [copied, setCopied] = useState(false);

//   const handleCopyClick = () => {
//     const copyText = document.getElementById("textToCopy");

//     if (copyText) {
//       copyText.select();
//       document.execCommand("copy");
//       setCopied(true);

//       // Reset the "Copied" state after a brief delay
//       setTimeout(() => {
//         setCopied(false);
//       }, 1500);
//     }
//   };

//   return (
//     <div className="App">
//       <div className="sideBar">
//         <div className="upperSide">
//           <div className="upperSideTop">
//             <img src={gptLogo} alt="Logo" className="Logo" />
//             <span className="brand">ChatAI</span>
//           </div>
//           <button className="midBtn">
//             <img src={addBtn} alt="new chat" className="addBtn" />
//             <p className="nchat">New Chat</p>
//           </button>
//           <div className="upperSideBottom">
//             <button className="query">
//               <img src={msgIcon} alt="query" />
//               What is Programming ?
//             </button>
//             <button className="query">
//               <img src={msgIcon} alt="query" />
//               What is API ?
//             </button>
//           </div>
//         </div>
//         <div className="lowerSide">
//           <div className="listItems">
//             <img src={home} alt="" className="listitemsImg" />
//             Home
//             <img src={saved} alt="" className="listitemsImg" />
//             Saved
//             <img src={rocket} alt="" className="listitemsImg" />
//             Upgrade to Pro
          
          
//         </div>
//         </div>
//       </div>
      
//       <div className="main">
       
//         <div className="chats ">
//           <div className="chat border">
//             <img className="chatImg" src={userIcon} alt="" />
//             <p className="text">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
//               sequi mollitia repudiandae sed. Voluptatibus qui est dolore
//               voluptates mollitia. Autem.
//             </p>
//           </div>
//           <div className="chat bot ">
//             <img className="chatImg" src={gptImgLogo} alt="" />
//             <p className="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
//               consectetur eius accusantium possimus hic provident? Praesentium
//               distinctio incidunt nulla. Temporibus dicta, beatae ratione,
//               delectus illum nostrum laboriosam voluptas nemo suscipit
//               voluptatibus quos consequuntur nisi simlor sit amet consectetur adipisicing elit. Modi
//               consectetur eius accusantium possimus hic provident? Praesentium
//               distinctio incidunt nulla. Temporibus dicta, beatae ratione,
//               delectus illum nostrum laboriosam voluptas nemo suscipit
//               voluptatibus quos consequuntur nisi similique dignissimos ut eum
//               nesciunt fuga obcaecati mollitia velit magnam quis aliquid sed
//               doloribus. Quas id aperiam omnis ut, fugilique dignissimos ut eum
//               nesciunt fuga obcaecati mollitia velit magnam quis aliquid sed
//               doloribus. Quas id aperiam omnis ut, fugit voluptatibus eos nobis
//               debitis reiciendis a eligendi pariatur dolor laudantium, veniam
//               ducimus, expedita dolorem. Molestiae iusto, alias cumque quia
//               fugiat aut, necessitatibus suscipit velit repellendus, aspernatur
//               soluta! Ipsam tempore suscipit id quos, cupiditate voluptatibus
//               aperiam consequuntur dolores, iusto ea porro at expedita sequi eum
//               minima quas.
//             </p>
//           </div>
//         </div>
//         <div className="chatFooter">
//           <div className="inp">
//             <input type="text" placeholder="message..." />{" "}
//             <button className="send">
//               <img src={sendBtn} alt="Send" />
//             </button>
//           </div>
//           <p>AI can make mistakes. Consider checking important information.</p>
//         </div>
//       </div>
     
//     </div>
//   );
// }

// export default App;
