import './Tag.css'

export const Tag = ({ title, id, isSetted = false, onClick=()=>{}, onDeleteTag=()=>{} }) => {
  
  return (
    <div className="tag" onClick={onClick}>
      {
        isSetted 
        ? <>
            <div className="tag__text">{ title }</div> 
            <button className="tag__btn" onClick={() => onDeleteTag(id)}>X</button>
          </>
        : <>
            <div className="tag__text">{ title }</div> 
          </>
          
      }
    </div>
  )
}