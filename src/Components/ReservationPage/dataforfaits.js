import React from 'react'

const dataforfaits=[
    {
      titre: 'Entreprise',
      prix: 'A partir de 1000',  
      prestation: [{
          sousPrestation:'Shooting journée', 
          prix: 1900,
          description: 'Env 100 images',
          categorie: 'Entreprise'
        }, 
        {
            sousPrestation:'Shooting demi journée', 
            prix: 1000,
            description: 'Env 50 images',
            categorie: 'Entreprise'

  
        }
    
    ]

    }, 

    {
        titre: 'Portrait',
        prix: 'A partir de 90',  
        prestation: [{
            sousPrestation:'Séance 15 minutes', 
            prix: 90,
            description: '1 portrait',
            categorie: 'Portrait'

          }, 

          {
            sousPrestation:'Séance 30 minutes', 
            prix: 150,
            description: '3 portraits',
            categorie: 'Portrait'

    
          },

          {
            sousPrestation:'Séance 45 minutes', 
            prix: 250,
            description: '5 portraits',
            categorie: 'Portrait'

    
          },
      
      ]
  
      }, 

      {
        titre: 'Book',
        prix: 450,  
        prestation: [{
            sousPrestation:'Séance 2 heures', 
            prix: 450,
            description: 'Vous sélectionnez vos images',
            categorie: 'Book'

          }, 

      
      ]
  
      }, 

      {
        titre: 'Trombinoscope',
        prix: 2250,  
        prestation: [{
            sousPrestation:'Shooting - Jusqu\'à 50 personnes / jour', 
            prix: 2250,
            description: 'Matériel studio inclus. Déplacement non inclus',
            categorie: 'Trombinoscope'

          }, 

      
      ]
  
      }, 



]

export default  dataforfaits 
