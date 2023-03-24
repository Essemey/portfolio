import { useState } from "react";

const ORIGINS_NUMBER = 16;
const ROLES_NUMBER = 5;
let GODS = null;


//Récupère les différents filtres disponibles (e.g roles, origins)
const getInfos = (gods, type, limit) => {
    const types = new Set();

    const info = god => type === 'ROLES' ? god.specifications[0] : god.specifications[1];

    for (const god of gods) {
        if (types.size === limit) break;
        types.add(JSON.stringify(info(god)));
    }
    return [...types].map(info => JSON.parse(info));
}

//Trie la liste compléte des dieux en fonction des filtres et de la recherche appliquée
const filterGods = current => {
    let filteredGods = GODS;
    for (const key in current) {
        let typeIndex = 1;
        if (key.toUpperCase() === 'ROLES') typeIndex = 0;
        if (current[key]) {
            if (key === 'search') {
                filteredGods = filteredGods.filter(god => god.name.toLowerCase().indexOf(current[key]) !== -1);
            } else {
                filteredGods = filteredGods.filter(god => god.specifications[typeIndex].name === current[key]);
            }
        }
    }
    return filteredGods;
}

export default function useGods() {

    const [state, setState] = useState({ gods: null, roles: null, origins: null, current: null });

    //Initialise l'état
    const setGods = data => {
        setState(s => ({ ...s, gods: data, roles: getInfos(data, 'ROLES', ROLES_NUMBER), origins: getInfos(data, 'ORIGINS', ORIGINS_NUMBER) }));
        GODS = data;
    }

    //Active ou désactive un filtre
    const toggleFilter = (type, name) => setState(s => s.current?.[type.toLowerCase()] === name
        //Si l'item était deja actif, on le désactive
        ? { ...s, current: { ...s.current, [type.toLowerCase()]: null } }
        //Sinon on l'active
        : { ...s, current: { ...s.current, [type.toLowerCase()]: name } });

    //Trie la liste des dieux selon les filtres
    const sortGods = (type, name) => {
        if (type !== 'SEARCH') toggleFilter(type, name);
        setState(s => ({ ...s, gods: filterGods(s.current) }));
    }

    //Permet de savoir si un filtre est actif
    const isCurrentFilter = (type, name) => state.current?.[type] === name ? true : false;

    //Enregistre dans l'état la recherche de l'utilisateur
    const handleSearch = search => setState(s => ({ ...s, current: { ...s.current, search } }));

    return {
        gods: state.gods,
        roles: state.roles,
        origins: state.origins,
        current: state.current,
        setGods,
        sortGods,
        isCurrentFilter,
        handleSearch
    };
}

