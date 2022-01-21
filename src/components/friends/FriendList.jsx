import "./friendlist.css";
export const FriendList = ({title, image, mutual}) => {
    return (
        <div className="friendlist"   style={{
            backgroundImage:`url(${image})`
            }}>
       
        <h4 className="frienlist__title">{title}</h4>
        <h4 className="frienlist__mutual">{`${mutual} mutual friend`}</h4>
        <div className="frienlist__confirm">confirm</div>
        <div className="frienlist__delete">delete</div>

         
        </div>
    )
}
