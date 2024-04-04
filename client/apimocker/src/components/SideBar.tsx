import './SideBar.scss'

interface PropType {
    sideBarState: boolean
    apiInfo: any,
    toggleSideBar:() => void
}
const SideBar = (props: PropType) => {

    let data: any = props.apiInfo;
    let catagories = Object.keys(props.apiInfo);

    const scrollToElement = (id) => {
        props.toggleSideBar();
        setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        },0)
    }


    let linksUI = (apiInfo: any) => (
        <li className="active" key={apiInfo.title}>
            <span className="text" onClick={() => scrollToElement(apiInfo.title)}>{apiInfo.title}</span>
        </li>
    )


    return (
        <section id="sidebar" className={props.sideBarState ? 'hide' : 'show'}>
            {catagories.map(category => (
                <div key={category}>
                    <i className='bx' ></i>
                    <h2 className='category-name'>{category}</h2>
                    {Object.keys(data[category]).map(name => (<div key={name}>
                        <h2 className='category-name subcategory'>{name}</h2>
                        <ul className="side-menu top">
                            {data[category][name].map(apiInfo => linksUI(apiInfo))}
                        </ul>
                    </div>))}
                </div>
            ))}
        </section>
    )
}

export default SideBar
