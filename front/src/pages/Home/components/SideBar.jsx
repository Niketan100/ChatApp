import SearchBar from './SearchBar.jsx';
import Conversation from './Conversation.jsx';
import Logout from './Logout.jsx';
import fetchConversations from '../../../hooks/getconversations.js';

export default function SideBar() {
  const { loading, conversations } = fetchConversations();
  console.log(conversations);
  return (
    <div className="h-[100vh-4rem] w-5/12 p-4 shadow-xl border-slate-800 shadow-blue-gray-900/5 flex flex-col justify-between bg-white">
       <h1 className="text-3xl font-semibold text-center">
                 <span>
                     
                </span>
                 <span className="text-yellow-500 bg-grey-300">
                 ClOSer
                </span>
            </h1>

      <div>
        <SearchBar />
      </div>
      <hr className="mt-10" />
      <div className="mt-2 flex-1 overflow-y-auto">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
      <div className="mt-auto">
        <Logout />
      </div>
    </div>
  );
}
