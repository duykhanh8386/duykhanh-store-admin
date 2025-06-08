import "./CardItem.scss"
function CardItem(props){
    const { style, className, children} = props;
    return(
        <>
        <div className={`card-item ${className ||""}`} style={style}>
            
            {children}
        </div>
        </>
    )
}
export default CardItem;