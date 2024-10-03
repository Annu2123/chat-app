export default function GenderCheckbox({handelGender}){

    const handelChange=(e)=>{
     const gender=e.target.value
     handelGender(gender)

    }
    return (
        <div className=" flex">
            <div className="form-control ">
           <label className={`label gap-2 cursor-pointer`}> 
            <span className="label-text"> male</span>
            <input type="checkbox" className="checkbox border-slate-900" value="male" onClick={handelChange}/>

           </label>
            </div>
            <div className="form-control ">
           <label className={`label gap-2 cursor-pointer`}> 
            <span className="label-text"> femle</span>
            <input type="checkbox" className="checkbox border-slate-900" value="female" onClick={handelChange}/>

           </label>
            </div>

        </div>
    )
}