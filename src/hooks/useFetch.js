import { useState, useEffect } from 'react';
export const useFetch = (url) => { useEffect(() => { const controller = new AbortController(); return () => controller.abort(); }, [url]); };
