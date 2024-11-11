// import { RxCross2 } from "react-icons/rx";
// import { useDispatch, useSelector } from "react-redux";
// import { setOpen } from "../redux/appSlice";
// import { useState } from "react";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import {db} from '../firebase';

// const SendMail = () => {
//   const [formData,setFormData] = useState({
//       to:"",
//       subject:"",
//       message:"",
//     });

//   const open = useSelector((state) => state.appSlice.open);
//   const dispatch = useDispatch();
  

//   const changeHandle = (e)=>{
//     setFormData({...formData, [e.target.name]: e.target.value})
//   }

//   const submitHandle = async (e) =>{
//     e.preventDefault();
//     await addDoc(collection(db, 'mails'),{
//       to:formData.to,
//       subject:formData.subject,
//       message:formData.message,
//       createdAt:serverTimestamp(),
//     })
//     dispatch(setOpen(false))
//     setFormData({
//       to: "",
//       subject: "",
//       message: "",
//     });
//   }
 




//   return (
//     <div
//       className={`${
//         open ? "block" : "hidden"
//       } bg-white max-w-6xl shadow-slate-600 rounded-t-md`}
//     >
//       <div className="flex px-3 py-2 bg-[#F2F6Fc] justify-between rounded-t-md">
//         <h1>New Message</h1>
//         <div
//           onClick={() => dispatch(setOpen(false))}
//           className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
//         >
//           <RxCross2 size={"20px"} /> {/* Adjusted size for better visibility */}
//         </div>
//       </div>

//       <form  onSubmit={submitHandle}   className="flex flex-col p-3 gap-2">
//         <input  onChange={changeHandle} value={formData.to} type="text" placeholder="To" className="outline-none py-1"  />
//         <input
//           type="text"
//           placeholder="Subject"
//           className="outline-none py-1"
//           value={formData.subject}
//           onChange={changeHandle}
//         />
//         <textarea
//           className="outline-none py-1"
//           name="message"
//           cols={"30"}
//           rows={"10"}
//           value={formData.message}
//           onChange={changeHandle}
//         ></textarea>
//         <button
//           type="submit"
//           className="bg-[#0B57D0] rounded-full w-fit px-4 py-2 text-white font-medium"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SendMail;


import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; // Assuming `db` is initialized properly
import {db} from '../firebase';



const SendMail = () => {


  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const open = useSelector((state) => state.appSlice.open);
  const dispatch = useDispatch();

  // Corrected the event handler to ensure correct field updates
  const changeHandle = (e) => {
    const { name, value } = e.target; // Destructure name and value
    setFormData({ ...formData, [name]: value }); // Update formData correctly
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    
    // Ensure no undefined values
    if (!formData.to || !formData.subject || !formData.message) {
      alert("All fields are required!");
      return;
    }

    try {
      // Adding the email data to Firestore
      await addDoc(collection(db, "mails"), {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        createdAt: serverTimestamp(),
      });

      // Close the modal and reset the form after successful submission
      dispatch(setOpen(false));
      setFormData({
        to: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending mail: ", error);
    }
  };

  return (
    <div className={`${open ? "block" : "hidden"} bg-white max-w-6xl shadow-slate-600 rounded-t-md`}>
      <div className="flex px-3 py-2 bg-[#F2F6Fc] justify-between rounded-t-md">
        <h1>New Message</h1>
        <div
          onClick={() => dispatch(setOpen(false))}
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <RxCross2 size={"20px"} />
        </div>
      </div>

      <form onSubmit={submitHandle} className="flex flex-col p-3 gap-2">
        <input
          name="to" // Make sure name is set correctly
          onChange={changeHandle}
          value={formData.to}
          type="text"
          placeholder="To"
          className="outline-none py-1"
        />
        <input
          name="subject" // Make sure name is set correctly
          onChange={changeHandle}
          value={formData.subject}
          type="text"
          placeholder="Subject"
          className="outline-none py-1"
        />
        <textarea
          name="message" // Make sure name is set correctly
          onChange={changeHandle}
          value={formData.message}
          className="outline-none py-1"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="bg-[#0B57D0] rounded-full w-fit px-4 py-2 text-white font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMail;
