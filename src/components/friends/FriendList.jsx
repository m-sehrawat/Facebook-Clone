import "./friendlist.css";
export const FriendList = ({title, image, mutual}) => {
    return (
        <div className="friendlist">
        <div className="frienlist__image">{title}</div>
        <div className="frienlist__title"></div>
        <div className="frienlist__mutual">{`${mutual} mutual friend`}</div>
        <div className="frienlist__confirm"></div>
        <div className="frienlist__delete"></div>

         
        </div>
    )
}
