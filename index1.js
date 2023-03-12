//import './App.css';
import Gods from './src/components/smite/Gods';
import { useEffect, useState } from 'react';
import useGods from './src/hooks/gods';
import Header from './src/components/smite/Header';
import { graphql } from 'gatsby'
import GodsData from './src/data/gods.json'

const IndexPage = () => {

  const { gods, roles, origins, sortGods, isCurrentFilter, setGods, handleSearch } = useGods();

  useEffect(() => {
    GodsData[0].new = true;
    setGods(GodsData);
  }, [])

  if (!roles) {
    return null;
  }


  return <section id="gods_showcase">
    <Header roles={roles} origins={origins} sortGods={sortGods} isCurrentFilter={isCurrentFilter} handleSearch={handleSearch} />
    <h1 id="gods_title">Dieux</h1>
    <Gods gods={gods} />
  </section>
}

export default IndexPage



export const Head = () => <title>Home Page</title>
