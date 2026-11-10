# Dotify

A lightweight browser-based Gmail alias generator that creates every valid dot-address variation from a single Gmail username.

## Overview

Dotify helps you instantly generate Gmail aliases by inserting dots into a username, such as:

- `yourname@gmail.com`
- `y.ourname@gmail.com`
- `yo.urname@gmail.com`
- `your.name@gmail.com`

Google treats these as the same inbox, which makes them useful for creating unique aliases for different services or personal organization.

## Features

- Generate all valid Gmail dot-address combinations from a username
- Remove duplicate variations automatically
- Copy all generated aliases with one click
- Simple, fast UI with no backend required
- Responsive design for desktop and mobile

## How it works

The app sanitizes the input to keep only letters and numbers, then recursively generates every valid placement of dots inside the username. It removes duplicates and displays the final list in the browser.

## Run locally

Because this project is a static web app, you can run it in two simple ways:

### Option 1: Open directly

Open `index.html` in your browser.

### Option 2: Use a local server

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Project structure

```text
.
├── index.html
├── styles.css
├── script.js
└── README.md
```

- `index.html` — app layout and UI
- `styles.css` — design and responsive styling
- `script.js` — alias generation and clipboard logic

## Notes

- This tool works with Gmail usernames only.
- Generated aliases are created locally in the browser; no data is stored or sent anywhere.
- Use responsibly and in accordance with the terms of service of the email provider.

## Example

Enter:

```text
yourname
```

The app will generate variations such as:

```text
yourname@gmail.com
yo.urname@gmail.com
y.o.urname@gmail.com
...and more
```
