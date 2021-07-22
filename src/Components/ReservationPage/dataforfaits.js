import React from 'react'

const dataforfaits=[
    {
      titre: 'Entreprise',
      prix: 1000,  
      prestation: [{
          sousPrestation:'Shooting journée', 
          prix: 1900,
          description: 'Env 100 images'
        }, 
        {
            sousPrestation:'Shooting demi journée', 
            prix: 1000,
            description: 'Env 50 images'
  
        }
    
    ]

    }, 

    {
        titre: 'Portrait',
        prix: 90,  
        prestation: [{
            sousPrestation:'Séance 15 minutes', 
            prix: 90,
            description: '1 portrait'
          }, 

          {
            sousPrestation:'Séance 30 minutes', 
            prix: 150,
            description: '3 portraits'
    
          },

          {
            sousPrestation:'Séance 45 minutes', 
            prix: 250,
            description: '5 portraits'
    
          },
      
      ]
  
      }, 

      {
        titre: 'Book',
        prix: 450,  
        prestation: [{
            sousPrestation:'Séance 2 heures', 
            prix: undefined,
            description: 'Vous sélectionnez vos images'
          }, 

      
      ]
  
      }, 

      {
        titre: 'Trombinoscope',
        prix: 2250,  
        prestation: [{
            sousPrestation:'Jusqu\'à 50 personnes / jour', 
            prix: undefined,
            description: 'Matériel studio inclus. Déplacement non inclus'
          }, 

      
      ]
  
      }, 



]

export default  dataforfaits 
