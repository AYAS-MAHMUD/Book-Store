import React from 'react';

import { createBrowserRouter,RouterProvider } from "react-router";
import Root from '../Pages/Root';
import ErrorPages from '../Pages/Errorpage/ErrorPages';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/Details/BookDetails';

export const router = createBrowserRouter([
  {
    path : '/',
    Component : Root,
    errorElement : <ErrorPages/>,
    children: [
        {
            index : true,
            path: '/',
            loader : ()=>fetch('/booksData.json'),
            Component : Home
        },
        {
          path : 'about',
          Component : About
        },
        {
          path : '/bookDetails/:id',
          loader : ()=>fetch('/booksData.json'),
          Component : BookDetails
        }
    ]
  }
])
