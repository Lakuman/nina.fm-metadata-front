//API requests functions
import * as Url from '../url.js';
import * as HttpRequests from './httpRequests.js';

export function get(callback, mixtape_id){
    HttpRequests.get(function(metadata){
        if(mixtape_id==undefined){
            callback(metadata);
        }
        else{
            for (var i = 0; i <= metadata.length; i++) {
                if(metadata[i].id==mixtape_id){
                    var mixtape = metadata[i];
                    mixtape.cover = Url.URL+ mixtape.cover;
                    mixtape.text_tracks = mixtape.text_tracks.split("\n");
                    callback(mixtape);
                }
            }
        }    
    });
}
	//Unconfigured methods
export function add(){}

export function modify(){}

export function remove(){}


