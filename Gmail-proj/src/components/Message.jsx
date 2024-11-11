import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch} from 'react-redux';
import {setSelectedMail} from '../redux/appSlice'
const Message = ({ email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openMail = () => {
    dispatch(setSelectedMail(email));
    navigate(`/mail/${email.id}`);
  }

  return (
    <div
      onClick={openMail}
      className="flex items-start border-b border-gray-200 px-4 py-4 text-sm hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <MdCropSquare size={"20px"} />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine size={"20px"} />
        </div>
      </div>

      <div className="flex-1 ml-4">
        <p className="text-gray-600 truncate inline-block max-w-full">
          {email.message}
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm">
        <p> {new Date(email.createdAt.seconds * 1000).toUTCString()}</p>
      </div>
    </div>
  );
};

export default Message;















// import { MdCropSquare } from "react-icons/md";
// import { RiStarLine } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";

// const Message = ({ email }) => {
//   const navigate = useNavigate();

//   const openMail = () => {
//     navigate(`/mail/${email.id}`);
//   };

//   return (
//     <div
//       onClick={openMail}
//       className="flex items-start border-b border-gray-200 px-4 py-4 text-sm hover:cursor-pointer hover:shadow-md"
//     >
//       <div className="flex items-center gap-3">
//         <div className="flex-none text-gray-300">
//           <MdCropSquare size={"20px"} />
//         </div>
//         <div className="flex-none text-gray-300">
//           <RiStarLine size={"20px"} />
//         </div>
//       </div>

//       <div className="flex-1 ml-4">
//         <p className="text-gray-600 truncate inline-block max-w-full">
//           {email?.message}
//         </p>
//       </div>

//       <div className="flex-none text-gray-400 text-sm">
//         <p>
//           {email?.createdAt?.seconds
//             ? new Date(email.createdAt.seconds * 1000).toUTCString()
//             : "Unknown Date"}
//         </p>
//       </div>
//     </div>
//   );
// };

// PropTypes validation
// Message.propTypes = {
//   email: PropTypes.shape({
//     id: PropTypes.string.isRequired,  // Assuming email.id is a string
//     message: PropTypes.string,        // Assuming message is a string
//     createdAt: PropTypes.shape({
//       seconds: PropTypes.number,      // Assuming createdAt.seconds is a number
//     }),
//   }).isRequired,
// };

// export default Message;
