
# Definition of the project.

This project is an administration client for the webradio nina.fm.
The administrator will be able to manage all the data in the webradio such as songs, albums, pictures and mixtapes by using an API.

## Build Setup

``` bash
# get the Github project 
git clone [this repository](https://github.com/Lakuman/nina.fm-metadata-front)

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# get your own url for the metadata
create a file in 'src' named url.js and put this function into the file :
	export function metadataUrl(){
			return "youUrl";
	}
This url go to your JSON API where you can get or send requests.
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
