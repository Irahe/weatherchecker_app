import React, { useEffect, useState } from 'react';


import pages from './pages'

const App = () => {
  const [currentPage, setCurrentPage] = useState(pages['login']);
  const [pageKey, setPageKey] = useState('login');

  const goTo = (key) => setPageKey(key || 'login')

  useEffect(() => {
    setCurrentPage(pages[pageKey] || pages['login'])
  }, [pageKey])

  const render = () => {
    const { component: Component } = currentPage;
    return (
      <Component
        goTo={goTo}
      />
    )
  }

  return render();

};


export default App;


