export default function SettingLetter({letterChar,isActive}){
    return <div className={`${isActive ? 'setting-letter-wrapper_active' : ''} mt-1 text-2xl  text-settingLetter w-10 h-10 setting-letter-wrapper  text-center`}> {letterChar} </div>
}