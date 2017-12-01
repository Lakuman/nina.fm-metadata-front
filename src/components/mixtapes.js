//API requests functions
import * as url from '../url.js';
import * as httpRequests from './httpRequests.js';

export function get(callback, mixtapeId){
    httpRequests.get(function(metadata){
        if(mixtapeId==undefined){
            callback(metadata);
        }
        else{
            for (var i = 0; i <= metadata.length; i++) {
                if(metadata[i].id==mixtapeId){
                    var mixtape = metadata[i];
                    mixtape.cover = url.metadataUrl()+ mixtape.cover;
                    mixtape.text_tracks = mixtape.text_tracks.split("\n");
                    callback(mixtape);
                }
            console.log("mixtapeId:"+mixtapeId)
            }
        }    
    });
}
	//Unconfigured methods
export function add(){}

export function modify(){}

export function remove(){}


