# Editing the 6th Ankara-Istanbul Workshop website

This folder is designed to be placed directly inside your existing GitHub Pages repository.

Your GitHub repository should look like this:

```text
YOUR-USERNAME.github.io/
├── index.html
├── ... your academic website files ...
└── workshop-2026/
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── workshop-poster.png
    └── EDIT-WORKSHOP.md
```

The public workshop address will then be:

```text
https://YOUR-USERNAME.github.io/workshop-2026/
```

## The workshop logo/banner

`workshop-poster.png` is the **exact workshop graphic extracted from the invitation letter**. It contains the workshop name, skyline motif, dates, and METU Institute of Applied Mathematics / Ankara line.

Do not rename this file unless you also change every `workshop-poster.png` reference in `index.html`.

## Editing text in GitHub

1. Open your GitHub repository.
2. Open `workshop-2026`.
3. Click `index.html`.
4. Click the pencil icon (**Edit this file**).
5. Search for `EDIT HERE`.
6. Change only the text you want.
7. Click **Commit changes**.

GitHub Pages will update the public site automatically after a short delay.

## Main editable sections

Search inside `index.html` for:

- `EDIT HERE: ABOUT`
- `EDIT HERE: FORMAT`
- `EDIT HERE: SPEAKERS`
- `EDIT HERE: PROGRAM`
- `EDIT HERE: VENUE`
- `EDIT HERE: ORGANIZERS`
- `EDIT HERE: INVITED SPEAKER SUPPORT`
- `EDIT HERE: CONTACT`

## Adding confirmed invited speakers

In the `SPEAKERS` section, replace a placeholder such as:

```html
<article class="speaker-placeholder">
  <span>Speaker</span>
  <strong>To be announced</strong>
  <small>Affiliation · Talk title</small>
</article>
```

with:

```html
<article class="speaker-placeholder">
  <span>Invited Speaker</span>
  <strong>Professor Name</strong>
  <small>University · Talk title</small>
</article>
```

Only add someone as a confirmed speaker after you have their confirmation.

## Updating the program

Under `EDIT HERE: PROGRAM`, replace the bullet points with exact times, names, and talk titles when the timetable is ready.

Example:

```html
<li><strong>09:30</strong> — Speaker Name: Talk title</li>
```

## Colors and design

The website follows the invitation-letter identity:

- dark navy for the workshop title and text,
- red for the `6th`, dates, and accents,
- blue as a secondary accent.

These colors are defined at the top of `styles.css`.

## Contact email

The current contact button uses:

```text
cvardar@metu.edu.tr
```

If you prefer a dedicated workshop email, search for `cvardar@metu.edu.tr` in `index.html` and replace it.

## Going back to your academic page

The link `../` returns visitors from the workshop sub-site to the main academic homepage.
