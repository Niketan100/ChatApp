import SideBar from '../Home/components/SideBar.jsx';
import MSGContainer from '../Home/components/messagecontainer.jsx';
export default function Home(){


    return(

    <div className="h-[100vh] w-full max-w-[60rem] p-4 shadow-xl shadow-blue-gray-900/5 flex overflow-auto">
        <h1 className="text-3xl font-semibold text-center">
             <span> </span>
           
        </h1>
        <SideBar/>        
        <MSGContainer/>

    </div>
    

    );

}