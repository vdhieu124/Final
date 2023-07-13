import { Avatar, Dropdown } from "antd";
// eslint-disable-next-line react/prop-types
function Language({lang, languages, onClick}){
    function getFlag(lang){
        return(
            // <><Avatar className="anticon" shape="square" src={`/src/components/Language/flag/${lang}.png`}/></>
            <><Avatar className="anticon" shape="square" src={`./image/flag/${lang}.png`}/></>
        )
    }
    // eslint-disable-next-line react/prop-types
    const menuItems = languages.map(item => ({
        key: item.lang,
        label: item.label,
        icon: getFlag(item.lang)
    }));
    // eslint-disable-next-line react/prop-types
    // const selectedLang = languages.find(item => item.lang === lang);
    return(
        <div className="language-switcher">
            <Dropdown menu={{
                    items: menuItems,
                    onClick: ({key})=>onClick(key)
                }}>
                <div style={{cursor: 'pointer'}}>
                    <Avatar style={{marginBottom:8}} size={35} shape="square" src={`./image/flag/${lang}.png`}/>
                </div>
            </Dropdown>
        </div>
    )
}
export default Language;