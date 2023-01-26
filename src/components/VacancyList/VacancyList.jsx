import { useSelector, useDispatch } from 'react-redux';

import { addTag } from '../../store/tags-store/tags-actions';

import { VacancyCard } from '../VacancyCard/VacancyCard'
import './VacancyList.css'

export const VacancyList = () => {
  const allVacancies = useSelector(store => store.vacancy);
  const selectedTags = useSelector(store => store.tags);

  const filteredVacancies = useSelector(store => {
    return store.vacancy.default.filter(vac => {
      const filteredParams = [vac.role, ...vac.tools];
      const parceSelectedTags = selectedTags.map(tag => tag.title)
  
      return parceSelectedTags.every(tag => filteredParams.includes(tag))
  })});
  
  const dispatch = useDispatch();


  // Можно оставить так, а можно фильтрация сделать в useSelector или вынести в селектор-функцию
  
  // const filteredVacancies = allVacancies.default.filter(vac => {
  //   const filteredParams = [vac.role, ...vac.tools];
  //   const parceSelectedTags = selectedTags.map(tag => tag.title)

  //   return parceSelectedTags.every(tag => filteredParams.includes(tag))
  // });

  const addSelectTag = (tag) => {
    dispatch(addTag(tag));
  }
  
  return (
    <div className="vacancy-list">
      {
        filteredVacancies.map(vacancy => {
          return <div key={vacancy.id} className="vacancy-list__item">
            <VacancyCard 
              name={vacancy.company} 
              isNew={vacancy.new} 
              isFetaured={vacancy.featured} 
              jobTitle={vacancy.position} 
              postedAt={vacancy.postedAt} 
              contract={vacancy.contract} 
              location={vacancy.location} 
              tools={vacancy.tools}
              role={vacancy.role}  
              logoUrl={vacancy.logo}
              addTag={addSelectTag}/>
          </div>
        })
      }
    </div>
  )
}