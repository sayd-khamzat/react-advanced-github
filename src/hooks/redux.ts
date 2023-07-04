import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '../store';

// типизированный useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector