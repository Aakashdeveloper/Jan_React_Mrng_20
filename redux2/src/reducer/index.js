import { combineReducer} from 'redux';
import articles from './articleReducer';
import gallery from './galleryReducer'

const rootReducer = combineReducer({
    articles,
    gallery
})

export default rootReducer;