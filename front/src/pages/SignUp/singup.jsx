import Gender from './gender.jsx';
export default function SignUp(){

    return(

        <>
           <div className="flex flex-col items-center justify-center min-w-96 mx-auto bg-slate-900 rounded">

<div className="w-full p-6 rounded-lg shadow-md  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
    <h1 className="text-3xl font-semibold text-center">
        SignUp <span>
             
        </span>
         <span className="text-yellow-500 bg-grey-300">
         ClOSer
        </span>
    </h1>
    <hr />
    <hr /><br />

    <form action="" className='text-white'>
        {/* fullName */}
        <div>
            <label htmlFor="" className="label p-2">
                <span className="text-base label-text text-white">Full Name </span>
            </label>
            <input type="text"  placeholder="Enter FullName" className="w-full input input-bordered h-10"/>
        </div>
        {/* username */}
        <div>
            <label htmlFor="" className="label p-2">
                <span className="text-base label-text text-white">Username </span>
            </label>
            <input type="text"  placeholder="Enter Username" className="w-full input input-bordered h-10"/>
        </div>

        <div>
            <label htmlFor="" className="label p-2">
                <span className="text-base label-text text-white">Password </span>
            </label>
            <input type="password"  placeholder="Enter Password" className="w-full input input-bordered h-10"/>
        </div>
        <div>
            <label htmlFor="" className="label p-2">
                <span className="text-base label-text text-white">Confirm Password </span>
            </label>
            <input type="password"  placeholder="Enter Password" className="w-full input input-bordered h-10"/>
        </div>
        <div>
            <label htmlFor="" className="label p-2">
                <span className="text-base label-text text-white">Gender </span>
            </label>
            <Gender/>
          
        </div>
        <div className="mt-5">
            <div className=" inline-flex text-white">
                <a href="">
                    Already have an account?
                </a>
            </div>
            
        </div>
        
        <div>
            <button className=" btn w-full h-10 btn-warning btn-sm mt-2">SignUp</button>
        </div>
        <br />


    </form>

</div>



</div>
        </>
    );

}