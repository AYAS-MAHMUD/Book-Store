import React, { Component } from 'react';

import { createBrowserRouter,RouterProvider } from "react-router";
import Root from '../Pages/Root';
import ErrorPages from '../Pages/Errorpage/ErrorPages';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/Details/BookDetails';
import ReadList from '../Pages/ReadList';
import Login from '../Pages/Login';

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
        },
        {
          path :'readlist',
          loader : ()=>fetch('/booksData.json'),
          Component : ReadList
        },
        {
          path : 'login',
        Component : Login
        }
    ]
  }
])
