


export function Input({refrence,placeholder,type}:{refrence?:any,placeholder:string,type:string}){
    return <div>
        <input type={type } placeholder={placeholder} ref={refrence} className="bg-slate-200 outline-none rounded-md px-6 py-1" />
    </div>
}