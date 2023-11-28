# Table of Contents

1. [HTML Parsing & Asynchronous JavaScript](#html-parsing--asynchronous-javascript)
2. [Lazy Loading Images in HTML](#lazy-loading-images-in-html)
3. [CSS](#css)
   - [Positioning Elements](#positioning-elements)
   - [Centering a Div](#centering-a-div)
   - [CSS Specificity and Selectors](#css-specificity-and-selectors)
   - [Pseudo-classes and Pseudo-elements](#pseudo-classes-and-pseudo-elements)
   - [Flexbox and Grid Layout](#flexbox-and-grid-layout)
   - [Borders, Outlines, and the Box Model](#borders-outlines-and-the-box-model)
   - [Responsive CSS Units](#responsive-css-units)
4. [Z-index and Opacity](#z-index-and-opacity)
5. [Timers in React.js](#timers-in-reactjs)
6. [useEffect vs useLayoutEffect](#useeffect-vs-uselayouteffect)
7. [Media Queries](#media-queries)
8. [Render Blocking Resources (HTML and CSS)](#render-blocking-resources-html-css)
9. [Data Structures and Algorithms (DSA)](#data-structures-and-algorithms-dsa)
10. [Web Performance Optimization](#web-performance-optimization)
    - [Preload, Prefetch, Preconnect](#preload-prefetch-preconnect)
    - [Fetch Priority and Core Web Vitals](#fetch-priority-and-core-web-vitals)
11. [Loading CSS Asynchronously](#loading-css-asynchronously)

## HTML Parsing & Asynchronous JavaScript

## Lazy Loading Images in HTML

## CSS

### Positioning Elements

### Centering a Div

### CSS Specificity and Selectors

### Pseudo-classes and Pseudo-elements

### Flexbox and Grid Layout

### Borders, Outlines, and the Box Model

### Responsive CSS Units

## Z-index and Opacity

## Timers in React.js

## useEffect vs useLayoutEffect

## Media Queries

## Render Blocking Resources (HTML and CSS)

## Data Structures and Algorithms (DSA)

- a: 2
- b: 2
- c: 2
- i: 2
- k: 2

## Web Performance Optimization

### Preload, Prefetch, Preconnect

### Fetch Priority and Core Web Vitals

## Loading CSS Asynchronously

```bash
let str = "inthenameoftheorganisation";
const newArr=new Array(26).fill(0);

for(let i=0;i<str.length;i++){
  if(str[i]>='a' && str[i]<='z'){
    newArr[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++;
  }
}

for(let i=0;i<26;i++){
  if(newArr[i]>0){
    console.log(String.fromCharCode(i+'a'.charCodeAt(0)) + ": " + newArr[i])
  }
}

```
