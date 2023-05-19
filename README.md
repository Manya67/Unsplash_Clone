# Unsplash_Clone 

The Unsplash Clone project is a web application built using React.js, the Fetch API, and Tailwind CSS. The application aims to replicate the functionality and user experience of the popular image-sharing platform, Unsplash, by leveraging the Unsplash Live API.


## Prequisites
npm 

```bash
npm install npm@latest -g
```
## Installation


- Clone the repo 

```bash
  git clone https://github.com/Manya67/Unsplash_Clone
```
- Install NPM packages 
```bash
  npm install
```

## API Reference

#### Get all items

```bash
 GET /photos
```

| Parameter |Description                 |
| :-------- | :------------------------- |
| `count` | **The number of photos to return.**(Default: 1; max: 30)  |
| `per_page`|**Number of items per page.** (Optional; default: 10)
|`page`	|**Page number to retrieve.** (Optional; default: 1)|

#### Get item

```bash
  GET /photos/${id}
```

| Parameter | Description                       |
| :-------- | :-------------------------------- |
| `id`      | **Required**. Id of item to fetch |




## Tech Stack

**Client:** React, TailwindCSS




## Contact

**Manya Jain**
manyajain62002@gmail.com

**Project Link :** https://github.com/Manya67/Unsplash_Clone

**Live :** https://64678650a1ba741ff54ffbb6--unsplashbymanya.netlify.app/ 
