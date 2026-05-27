# React Hooks Movie App

A small React + TypeScript movie app built with Vite and styled using Tailwind CSS loaded from the CDN.

## Features

- Add a new movie with title, description, poster URL, trailer embed URL, and rating
- Filter the list by title text and minimum rating
- Click any movie card to view a full description and embedded trailer
- Navigate back to the home page from the movie detail screen
- Responsive UI with Tailwind styling

## Run locally

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open `http://localhost:5173`
4. Build for production: `npm run build`

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS (CDN)

## App behavior

- The home page shows movie cards and a filter form.
- Clicking a movie card opens a detail page with the movie description, rating, poster, and trailer.
- The detail page includes a `Back to Home` button to return to the list.
- New movies can be added with an embedded YouTube trailer link.
