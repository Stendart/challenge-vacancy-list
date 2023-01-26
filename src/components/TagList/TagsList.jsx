import { useSelector, useDispatch } from 'react-redux';

import { deleteTag } from '../../store/tags-store/tags-actions';

import { Tag } from '../Tag/Tag'
import './TagsList.css'

export const TagsList = () => {

  const tags = useSelector(store => store.tags);
  const dispatch = useDispatch();

  const deleteTagHandler = (id) => {
    dispatch(deleteTag(id))
  }

  return (
    <div className="tags-list">
      <div className="tags-list__wrapper">
        {
          tags.map(tag => {
            return (
              <div key={tag.id} className="tags-list__tag"> 
                <Tag 
                  title={ tag.title } 
                  id={tag.id} 
                  isSetted={true} 
                  onDeleteTag={deleteTagHandler}
                /> 
              </div>
            )
          })
        }

        
      </div>
    </div>
  )
}