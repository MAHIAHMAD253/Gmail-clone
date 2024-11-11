// import { useEffect } from "react";
// import Message from "./Message";
// import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
// import { db } from "../firebase";
// import { useDispatch, useSelector } from "react-redux";
// import { setEmails } from "../redux/appSlice";

// const Messagess = () => {

// // firebase sy data fetch kr ry han !!

// const disPatch = useDispatch();
// const {emails} = useSelector((state)=>state.appSlice)

//   useEffect(()=>{
//     const q = query(collection(db,'mails'), orderBy('createdAt','desc'));
//     const unScribe = onSnapshot(q, (snapshot)=>{
//         const allEmails = snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}));
//         disPatch(setEmails(allEmails));
//     })
    
//     // cleanup message 
//     return ()=> unScribe();

//   },[])
//   return (
//     <div>
//     {emails && emails.map((email) => (
//       <Message key={email} email={email} />  // Ensure a key prop is passed
//     ))}
//   </div>
//   );
// };

// export default Messagess;


import { useEffect } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";

const Messagess = () => {
  const dispatch = useDispatch();
  const { emails } = useSelector((state) => state.appSlice);

  useEffect(() => {
    const q = query(collection(db, 'mails'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch(setEmails(allEmails));
    });

    // cleanup on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      {emails && emails.map((email) => (
        <Message key={email.id} email={email} /> 
      ))}
    </div>
  );
};

export default Messagess;
