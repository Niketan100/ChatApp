export default function Login(){

    return(

        <div className="flex flex-col items-center justify-center min-w-96 mx-auto bg-gray-900 rounded">

        <div className="w-full p-6 rounded-lg shadow-md  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center">
                Login <span>
                     
                </span>
                 <span className="text-yellow-500 bg-grey-300">
                 ClOSer
                </span>
            </h1>
            <hr />
            <hr /><br />

            <form action="">
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
                    <div className=" inline-flex text-white">
                        <a href="">
                            Don't have an account?
                        </a>
                    </div>
                    
                </div>
                
                <div>
                    <button className="btn w-full border-none text-black h-10 bg-yellow-400 btn-sm mt-6">Login</button>
                </div>
                <br />


            </form>

        </div>



    </div>
    );

}