import { useState, useEffect } from "react";

const defaultAnimationState = (animationObject) => {
    const animationState = {};
    const othersKeys = [];
    for (const key in animationObject) {
        animationState[`${key}Animation`] = null;
        for (const _key in animationState[key]) {
            if (_key !== 'self' && !othersKeys.includes(`${_key}Animation`)) {
                othersKeys.push(`${_key}Animation`)
            }
        }
    }
    for (const key of othersKeys) {
        animationState[key] = null
    }
    //console.log(animationState)
    return animationState;
}

const updatedAnimationState = (target, animationObs, state) => {

    const dependencies = [];
    const dependenciesObj = {};
    let targetValue = null;

    for (const key in animationObs) {
        if (target === key) {
            targetValue = animationObs[key]["self"];
            for (const _key in animationObs[key]) {
                if (_key !== 'self') {
                    dependencies.push([`${_key}Animation`, animationObs[key][_key]]) //Key, Value
                }
            }
        }
    }

    for (const [key, value] of dependencies) {
        //console.log(key, value)
        dependenciesObj[key] = value
    }

    //console.log('in update')

    //console.log({ ...state.animationObs, [`${target}Animation`]: targetValue, ...dependenciesObj })

    return { ...state.animationObs, [`${target}Animation`]: targetValue, ...dependenciesObj }
}

export const useObserver = (refs, animationObs, url, fullScreen) => {

    const [state, setState] = useState({ targetsObs: [], animationObs: defaultAnimationState(animationObs), targetUrl: url.current })

    useEffect(() => {
        if (!fullScreen) {
            const observer = new IntersectionObserver(entries => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        //console.log(entry)
                        setState(s => {
                            if (s.targetsObs.find(target => target === entry.target.id)) {
                                return { ...s, animationObs: updatedAnimationState(entry.target.id, animationObs, s) }
                            }
                            return {
                                ...s, targetsObs: [...s.targetsObs, entry.target.id],
                                animationObs: updatedAnimationState(entry.target.id, animationObs, s)
                            }
                        })
                    }
                }
            }, { threshold: 0.7 })

            for (const ref of refs) { setTimeout(() => observer.observe(ref.current), 0) }

            /*Sur chrome j'ai eu des soucis avec l'intersectionObserver, il détectait des élément non visible depuis le viewport
            pour remdier à ca j'ai mis un setTimeout avant d'observer les éléments afin qu'ils aient le temps de se placer correctement*/
        } else {
            setState(s => ({ ...s, targetsObs: [], animationObs: defaultAnimationState(animationObs) }))
        }
    }, [fullScreen])

    useEffect(() => {
        if (fullScreen) {
            if (url.current) {
                setState(s => ({
                    ...s, targetUrl: url.prev,
                    animationObs: { ...updatedAnimationState(url.prev, animationObs, s), [`${url.prev}Animation`]: 'hidden' }
                }))
                setTimeout(() => setState(s => ({
                    ...s,
                    targetUrl: url.current,
                    animationObs: updatedAnimationState(url.current, animationObs, s)
                })), 800)
            }
        }
    }, [url, fullScreen])

    return { targetUrl: state.targetUrl, animations: state.animationObs };
}