import SearchBar from './SearchBar.jsx';
import Conversation from './Conversation.jsx';
import Logout from './Logout.jsx';

export default function SideBar() {
  return (
    <div className="h-[100vh-4rem] w-5/12 p-4 shadow-xl border-slate-800 shadow-blue-gray-900/5 flex flex-col justify-between bg-white">
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
