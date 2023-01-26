import { Tag } from '../Tag/Tag'
import './VacancyCard.css'

export const VacancyCard = (props) => {

  const { name, isNew, isFetaured, jobTitle, postedAt, contract, location, role, tools, logoUrl, addTag} = props

  const tagsParams = [role, ...tools]
  return (
    <div className="vacancy-card">
      <div className="vacancy-card__content">
        <img src={ logoUrl } alt="vacancy" className='vacancy-card__image' />
        <div className="vacancy-card__details">
          <div className="vacancy-card__company-name-wrapper">
            <div className="vacancy-card__company-name"> { name } </div>
            <div className="vacancy-card__mark-wrapper">
              { 
                isNew && <div className="vacancy-card__mark vacancy-card__mark--new">New</div> 
              }
              {
                isFetaured && <div className="vacancy-card__mark vacancy-card__mark--fetaured">FEATURED</div>
              }
            </div>
          </div>
          <div className="vacancy-card__job-title"> { jobTitle } </div>
          <div className="vacancy-card__vacancy-info-wrapper">
            <div className="vacancy-card__vacancy-info"> { postedAt } </div>
            <div className="vacancy-card__vacancy-info"> { contract } </div>
            <div className="vacancy-card__vacancy-info"> { location } </div>
          </div>
        </div>
      </div>
      <div className="vacancy-card__tags">
        {
          tagsParams.map((tag, index) => (
            <div key={index} className="vacancy-card__tag">
              <Tag title={ tag } onClick={() => addTag(tag)}/>
            </div>
          ))
        }
       
      </div>
    </div>
  )
}