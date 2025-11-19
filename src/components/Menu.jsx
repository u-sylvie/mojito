import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { allCocktails } from '../../constants'

import SliderLeft from '../../public/images/slider-left-leaf.png'
import SliderRight from '../../public/images/slider-right-leaf.png'
import ArrowLeft from '../../public/images/left-arrow.png'
import ArrowRight from '../../public/images/right-arrow.png'

function Menu() {
  const contentRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

  useGSAP(() => {
    gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 })
    gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100}, {
        xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
    })
    gsap.fromTo('.details h2', { yPercent: 100, opacity: 0}, {
        yPercent: 0, opacity: 100, ease: 'power1.inOut'
    })
    gsap.fromTo('.details p', { yPercent: 100, opacity: 0}, {
        yPercent: 0, opacity: 100, ease: 'power1.inOut'
    })
  }, [currentIndex])

  const totalCocktails = allCocktails.length

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex)
  }

  const getCocktailAt = (indexOffset) => {
    return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
  }

  const currentCocktail = getCocktailAt(0)
  const prevCocktail = getCocktailAt(-1)
  const nextCocktail = getCocktailAt(1)

  return (
    <section id="menu" aria-labelledby='menu-heading'>
        <img src={SliderLeft} alt="" id='m-left-leaf' />
        <img src={SliderRight} alt="" id='m-right-leaf' />

        <h2 id="menu-heading" className="sr-only">
            Cocktail Menu
        </h2>

        <nav className="cocktail-tabs" aria-label='Cocktail Navigation'>
            {allCocktails.map((cocktail, index) => {
                const isActive = index === currentIndex;

                return (
                    <button key={cocktail.id} className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`} onClick={() => goToSlide(index)}>{cocktail.name}</button>
                )
            })}
        </nav>

        <div className="content">
            <div className="arrows">
                <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
                    <span>{prevCocktail.name}</span>
                    <img src={ArrowRight} alt="" aria-hidden="true" />
                </button>
                <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
                    <span>{prevCocktail.name}</span>
                    <img src={ArrowLeft} alt="" aria-hidden="true" />
                </button>
            </div>

            <div className="cocktail">
                <img src={currentCocktail.image} alt="" className='object-contain' />
            </div>

            <div className="recipe">
                <div ref={contentRef} className='info'>
                    <p>Recipe for:</p>
                    <p id='title'>{currentCocktail.name}</p>
                </div>

                <div className="details">
                    <h2>{currentCocktail.title}</h2>
                    <p>{currentCocktail.description}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu