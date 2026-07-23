import { createContext, useState } from 'react';
export const ThemeProvider = ({ children }) => { const [theme] = useState(localStorage.getItem('theme') || 'light'); return children; };
