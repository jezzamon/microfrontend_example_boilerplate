import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as TYPES from '../types';
import axios from 'axios';
import localConfig from '../config.json';

export default function useConfig() {
  const dispatch = useDispatch();
  const [ config, setConfig ] = useState({});
  const [ loading, setLoading ] = useState(false);
  const [ configLoaded, setIsLoaded ] = useState(false);

  const fetchConfig = async () => {
    const config = await axios.get('/config.json');
    return config;
  }
  useEffect(() => {
    setLoading(true);

    if (process.env.NODE_ENV === 'development') {
      
      setConfig(localConfig);
      dispatch({ type: TYPES.CONFIG_LOADED, config: localConfig })
      setLoading(false);
      setIsLoaded(true);
    } else {
      const configResults = fetchConfig();
      setConfig({...config, configResults});
      dispatch({ type: TYPES.CONFIG_LOADED, config: configResults })
      setLoading(false);
      setIsLoaded(true);
    }
  },[])
  
  return [configLoaded, config];
};