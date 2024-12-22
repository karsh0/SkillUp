export function Input({reference, placeholder}: {reference : any, placeholder: string}){
    return <div>
        <input ref={reference} type="text" placeholder={placeholder}  className="p-2 border rounded w-full text-black"/>
    </div>
}