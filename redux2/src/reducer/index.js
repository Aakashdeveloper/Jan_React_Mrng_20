import { combineReducers} from 'redux';
import articles from './articleReducer';
import gallery from './galleryReducer'

const rootReducer = combineReducers({
    articles,
    gallery
})

export default rootReducer;