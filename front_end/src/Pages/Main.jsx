import React from 'react';
import { Hero } from '../Components/Hero/Hero';
import { NewsLetter } from '../Components/NewsLetter/NewsLetter';
import { Categories } from '../Components/Categories/Categories';
import './CSS Sheets/Main.css';

export const Main = () => {
  return (
    <>
      {/* Skip Navigation Link */}
      <a href="#categories" className="skip-link">Skip to Categories</a>

      <main>
        {/* Make Hero focusable for keyboard users */}
        <section id="hero" tabIndex="0">
          <Hero />
        </section>

        {/* Categories section */}
        <section id="categories" tabIndex="0">
          <Categories />
        </section>

        {/* Newsletter section */}
        <section id="newsletter" tabIndex="0">
          <NewsLetter />
        </section>
      </main>
    </>
  );
};
