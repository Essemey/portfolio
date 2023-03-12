//import './App.css';
import Gods from '../components/smite/Gods';
import { useEffect, useState } from 'react';
import useGods from '../hooks/gods';
import Header from '../components/smite/Header';
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {

  const { gods, roles, origins, sortGods, isCurrentFilter, setGods, handleSearch } = useGods();

  console.log(data)

  useEffect(() => {
    fetch('gods.json')
      .then(res => res.json())
      .then(data => {
        data[0].new = true; //On indique que le premier dieu de la liste est le dernier sorti dans le jeu
        setGods(data)
      })
  }, [])

  if (!roles) {
    return
  }

  return <section id="gods_showcase">
    <Header roles={roles} origins={origins} sortGods={sortGods} isCurrentFilter={isCurrentFilter} handleSearch={handleSearch} />
    <h1 id="gods_title">Dieux</h1>
    {!gods ? <h2>Chargement...</h2> : <Gods gods={gods} />}
  </section>
}

export default IndexPage

export const query = graphql`
  query GodsQuery {
    allGods {
      nodes {
        name
        title
        banner
        specifications {
          name
          iconHtml
          iconUrl
        }
        abilities {
          video
          image
          key
          name
          description {
            text
            details
          }
        }
        history {
          video
          text
        }
        skins {
          image
          name
          type
        }
      }
    }
  }
`


export const Head = () => <title>Home Page</title>
