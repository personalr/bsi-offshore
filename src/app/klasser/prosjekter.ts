

import { Prosjekt } from "app/klasser/prosjekt.model";

export class Prosjekter {



   public static prosjekter: Prosjekt[] = [   
  new Prosjekt(
    1,
    'Petrojarl I', 
    '',
    [
        'Pipe insulation, pipe capsuling, Interior upgrades and changes, structural insulation'
    ],
   'Ifa Tech AS/ Teekay', 
   '2017, September – November',
   'Petrojarl I',
   'Aibel, Haugesund',

   [
        
        'assets/img/Projects/Petrojarl_I/Petrojarl-I.jpg',
   ],
   'assets/img/Projects/Petrojarl_I/Petrojarl-I.jpg'
   
   )
   ,
   new Prosjekt(
    2,
    'COSL Innovator', 
    '',
    [
        'Major upgrades of inter outfitting. ',
        'Replaced numerous of watertight sliding doors.',
        'Interior work related to reinforcement of bulk head, regarding new air gap regulations.'
    ],
   'Coast Center Base/ COSL Drilling Europe', 
   '2016 and 2017',
   'Cosl Innovator',
   'Coast Center Base',
   [
        'assets/img/Projects/COSL_Innovator/COSL_Innovator.jpg',

   ]
   
   ,
   'assets/img/Projects/COSL_Innovator/COSL_Innovator.jpg'
   )

   ,


   new Prosjekt(
    3,
    'COSL Promoter', 
    '',
    [
        'Major upgrades of inter outfitting.',  
        'Replaced numerous of watertight sliding doors.',  
        'Interior work related to reinforcement of bulk head, regarding new air gap regulations.',
        
    ],
   'Coast Center Base/ COSL Drilling Europe', 
   '2016 and 2017',
   'Cosl Promoter',
   'Coast Center Base',
   [
        'assets/img/Projects/COSL_Promoter/COSLPromoter.jpg',
        
   ]
   
   ,
   'assets/img/Projects/COSL_Promoter/COSLPromoter.jpg'
   )
   
   ,

   new Prosjekt(
    4,
    'COSL Pioneer', 
    '',
    [
        'Major upgrades of inter outfitting.',  
        'Replaced numerous of watertight sliding doors.',  
        'Interior work related to reinforcement of bulk head, regarding new air gap regulations.',
        
    ],
   'Coast Center Base/ COSL Drilling Europe', 
   '2016 and 2017',
   'Cosl Pioneer',
   'Coast Center Base',
   [
        'assets/img/Projects/COSL_Pioneer/COSLPioneer.jpg',
        
   ]
   
   ,
   'assets/img/Projects/COSL_Pioneer/COSLPioneer.jpg'
   )
   
   ,


new Prosjekt(
    5,
    'Island Innovator', 
    '',
    [
        'Acoustic insulation of cabins and offices.',
        'Fire and comfort insulation.',
        'General upgrade of accomodation.'
    ],
   'Bergen Group Hanøytangen/Odfjell Drilling/Maracc', 
   '2013, April – July',
   'Island Innovator',
   'Bergen Group Hanøytangen',
   [
        'assets/img/Projects/island_innovator/image004.jpg',
        'assets/img/Projects/island_innovator/IMG_0331.JPG',
        'assets/img/Projects/island_innovator/IMG_0332.JPG',
        'assets/img/Projects/island_innovator/IMG_0334.JPG',
        'assets/img/Projects/island_innovator/IMG_0335.JPG',
   ]
   
   ,
   'assets/img/island_innovator.jpg'
   ),


   new Prosjekt(
    6,
    'Deepsea Atlantic', 
    '',
    [
        'Acoustic insulation of cabins and offices for reducing the sound level between  the rooms.',
        'Changing of numerous interior doors for reducing the sound level between cabins and corridors.',
    
    ],
   'CCB/ Odfjell Drilling', 
   '2012 - 2013',
   'Deepsea Atlantic',
   'Coast Center Base & Offshore',
   [
        'assets/img/Projects/Deepsea_atlantic/image005.jpg',
   ]
   ,
   'assets/img/depsea_atlantic.jpg'
   ),



new Prosjekt(
    7,
    'Deepsea Stavanger', 
    '',
    [
        'Acoustic insulation of cabins and offices for reducing the sound level between  the rooms.',
        'Changing of numerous interior doors for reducing the sound level between cabins and corridors.',
    
    ],
   'Odfjell Drilling', 
   '2012',
   'Deepsea Stavanger',
   'Port Elisabeth, South Africa & Offshore Tanzania',
   [
        'assets/img/Projects/Deepsea_stavanger/image007.jpg',
   ]
   ,
   'assets/img/deepsea_stavanger.jpg'
   ),


new Prosjekt(
    8,
    'Deepsea Bergen', 
    '',
    [
        'Various upgrade of cabins, offices and galley',
    
    ],
   'CCB/ Odfjell Drilling', 
   '2011',
   'Deepsea Bergen',
   'Coast Center Base',
   [
        'assets/img/Projects/Deepsea_Bergen/image009.jpg',
   ]
   ,
   'assets/img/deepsea_bergen.jpg'
   ),

new Prosjekt(
    9,
    'West HerKules', 
    '',
    [
        'Various upgrade of cabins, offices and galley',
        'Changing a substantial part of the doors inside and outside the platform.',


    ],
   'Seadrill', 
   '2013',
   'West Herkules',
   'Westcon Shipyard',
   [
        'assets/img/Projects/West_Hercules/image011.jpg',
   ]
   ,
   'assets/img/west_herules.jpg'
   ),



  ];
    
    static getProsjektene() {
        return this.prosjekter.slice();
    }
    
   static getProsjekt(index: number) {
    
        return this.prosjekter[index];
    }  


    static getProsjektById(idin: number) {
        let retur: Prosjekt;
        for (let entry of this.prosjekter) {
            if(entry.id==idin){
                retur=entry; 
                break;
            }
        }

        return retur;
    }  

}
