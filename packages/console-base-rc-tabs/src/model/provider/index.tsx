import React, {
  ReactNode,
  useRef,
  useReducer,
  useMemo
} from 'react';

import {
  IPropsTabs
} from '../../types';
import {
  IModelContext,
  IModelProps,
  IModelReducer
} from '../types';
import {
  DEFAULT_CONTEXT_STATE,
  DEFAULT_CONTEXT_PROPS
} from '../const';
import reducer from '../reducer';
import Lifecycle from '../lifecycle';

import Context from './_context';

interface IProps {
  props: IPropsTabs;
  children: ReactNode;
}

export default function Provider({
  children,
  props
}: IProps): JSX.Element {
  const refTabs = useRef<HTMLDivElement>(null);
  const refNav = useRef<HTMLDivElement>(null);
  const PROPS: IModelProps = useMemo((): IModelProps => ({
    ...DEFAULT_CONTEXT_PROPS,
    ...props
  } as IModelProps), [props]);
  const [STATE, dispatch] = useReducer<IModelReducer>(reducer, DEFAULT_CONTEXT_STATE);
  
  const contextValue: IModelContext = useMemo(() => ({
    PROPS,
    STATE,
    refTabs,
    refNav,
    dispatch
  }), [PROPS, STATE, refTabs, refNav, dispatch]);
  
  return <Context.Provider value={contextValue}>
    <Lifecycle />
    {children}
  </Context.Provider>;
}

export {
  Context
};
