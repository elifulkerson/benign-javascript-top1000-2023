let menu = {
  text: [
    {
      title: 'Actu',
      url: 'https://actu.orange.fr',
      analytics: {
        category: "news_titre1",
        action: 'Actu',
        label: 'https://actu.orange.fr',
        other: '{"track_refZ":"acc-digital_prospect-nl_news_titre1"}',
      }
    },
    {
      title: 'Sports',
      url: 'https://sports.orange.fr',
      analytics: {
        category: "news_titre2",
        action: 'Sports',
        label: 'https://sports.orange.fr',
        other: '{"track_refZ":"acc-digital_prospect-nl_news_titre2"}',
      }
    },
    {
      title: 'Tendances',
      url: 'https://tendances.orange.fr',
      analytics: {
        category: "news_titre3",
        action: "Tendances",
        label: 'https://tendances.orange.fr',
        other: '{"track_refZ":"acc-digital_prospect-nl_news_titre3"}',
      }
    }
  ],
  events: []
}
                                                  
    menu.events.push({
      url: "https://actu.orange.fr/videos/",
      target: "_blank",
      title: "Vidéos",
      image: "",
      alt: "",
      cacheKey: "5c4f07c84aa4e52ee73a53d074f0da3483b9a6bfec632840f141644b2e488b7d",
      analytics: {
        pdbSc: "mpt",
        pdbZid: "acc-digital_prospect-nl_news_ope-event",
        pdbVi: "",
        pdbIdc: "000a8J7BK",
          category: "news_ope-event",
  action: "videos",
  label: "https://actu.orange.fr/videos/",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_ope-event"}' 
      }
    })

                                                    
    menu.events.push({
      url: "https://actu.orange.fr/monde/israel/",
      target: "_blank",
      title: "Guerre en Israël",
      image: "",
      alt: "",
      cacheKey: "5c4f07c84aa4e52ee73a53d074f0da3483b9a6bfec632840f141644b2e488b7d",
      analytics: {
        pdbSc: "mpt",
        pdbZid: "acc-digital_prospect-nl_news_ope-event",
        pdbVi: "",
        pdbIdc: "000e8J7BK",
          category: "news_ope-event",
  action: "guerre-en-israel",
  label: "https://actu.orange.fr/monde/israel/",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_ope-event"}' 
      }
    })

    

let meteo = {
  url: "https://meteo.orange.fr",
  text: 'Météo des villes',
  alt:"",
  image:"images/meteo-ville.svg",
  analytics: {
    category: "news_meteo",
    action: "meteo",
    label: "https://meteo.orange.fr",
    other: '{"track_refZ":"acc-digital_prospect-nl_news_meteo"}'
  },
}


          
let publicite = {
  nativeAds: {
    segmentation: "prospects"
  }
}


  publicite.adgateway = {
    segmentation: "prospects",
    id: "2",
    classes: "tag-rm",
    deviceType: ""
  }





let sliders = []


  
  
    sliders.push({
      cacheKey: "a91224ecb5632457c1cb44c4462156fac1361302ffd452dbd7822470bd007f62",
      name: "o-news-actu",
      refId: "actu",
      title: "L\u0027actualit\u00E9\u0020du\u0020jour",
      vignettes: []
    })

                                                  
                  
                                
      sliders[0].vignettes.push({
        categoryTitle: "Actualit\u00E9s",
        title: "Arras\u0020\u003A\u0020l\u2019enqu\u00EAte\u0020avance,\u0020nouvelle\u0020arrestation\u0020dans\u0020l\u2019entourage\u0020de\u0020l\u2019assaillant",
        target: "",
        url: "https://actu.orange.fr/france/attaque-a-arras-un-dixieme-individu-place-en-garde-a-vue-deux-bielorusses-remis-en-liberte-magic-CNT0000028bR9e.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2Fb9e%2Fb17%2Ff87f9f8cdc96a1f058b818270b%2Fb9eb17f87f9f8cdc96a1f058b818270b.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "Actualités",
        isNative: "",
        newsline: "1",
        analytics: {
            category: "news_actu_1",
  action: "actualites-arras-l-enquete-avance-nouvelle-arrestation-dans-l-entourage-de-l-assaillant",
  label: "https://actu.orange.fr/france/attaque-a-arras-un-dixieme-individu-place-en-garde-a-vue-deux-bielorusses-remis-en-liberte-magic-CNT0000028bR9e.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu"}',   pdbZid: "acc-digital_prospect-nl_news_actu",
  pdbSc: "mpt",
  pdbIdc: "000aijbDK",
  pdbVi: "media://one-i/ONE-I-ONews/b9e/b17/f87f9f8cdc96a1f058b818270b/b9eb17f87f9f8cdc96a1f058b818270b.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu_1",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu_1",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu"}' 
            }
          }
        }
      })

                                              
                  
                                
      sliders[0].vignettes.push({
        categoryTitle: "Actualit\u00E9s",
        title: "Le\u0020PCF\u0020de\u0020Fabien\u0020Roussel\u0020vient\u002Dil\u0020d\u2019acter\u0020sa\u0020sortie\u0020de\u0020la\u0020Nupes\u0020\u003F",
        target: "",
        url: "https://actu.orange.fr/politique/le-pcf-appelle-a-un-nouveau-rassemblement-a-gauche-sa-sortie-de-la-nupes-actee-magic-CNT0000028bIDI.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2F431%2F7bc%2F8a418042d2e2de9e250e2ab67e%2F4317bc8a418042d2e2de9e250e2ab67e.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "Actualités",
        isNative: "",
        newsline: "1",
        analytics: {
            category: "news_actu_2",
  action: "actualites-le-pcf-de-fabien-roussel-vient-il-d-acter-sa-sortie-de-la-nupes",
  label: "https://actu.orange.fr/politique/le-pcf-appelle-a-un-nouveau-rassemblement-a-gauche-sa-sortie-de-la-nupes-actee-magic-CNT0000028bIDI.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu"}',   pdbZid: "acc-digital_prospect-nl_news_actu",
  pdbSc: "mpt",
  pdbIdc: "000eijbDK",
  pdbVi: "media://one-i/ONE-I-ONews/431/7bc/8a418042d2e2de9e250e2ab67e/4317bc8a418042d2e2de9e250e2ab67e.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu_2",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu_2",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu"}' 
            }
          }
        }
      })

                                              
                  
                                
      sliders[0].vignettes.push({
        categoryTitle: "Actualit\u00E9s",
        title: "Attaque\u0020du\u0020Hamas\u0020en\u0020Isra\u00EBl\u0020\u003A\u002019\u0020Fran\u00E7ais\u0020tu\u00E9s,\u002013\u0020toujours\u0020port\u00E9s\u0020disparus",
        target: "",
        url: "https://actu.orange.fr/monde/attaque-du-hamas-contre-israel-le-bilan-passe-a-19-francais-tues-et-13-disparus-annonce-catherine-colonna-magic-CNT0000028bOeE.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2Fbd3%2F269%2Ffcefc6f0ab81cd4c7e816e539e%2Fbd3269fcefc6f0ab81cd4c7e816e539e.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "Actualités",
        isNative: "",
        newsline: "1",
        analytics: {
            category: "news_actu_3",
  action: "actualites-attaque-du-hamas-en-israel-19-francais-tues-13-toujours-portes-disparus",
  label: "https://actu.orange.fr/monde/attaque-du-hamas-contre-israel-le-bilan-passe-a-19-francais-tues-et-13-disparus-annonce-catherine-colonna-magic-CNT0000028bOeE.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu"}',   pdbZid: "acc-digital_prospect-nl_news_actu",
  pdbSc: "mpt",
  pdbIdc: "000iijbDK",
  pdbVi: "media://one-i/ONE-I-ONews/bd3/269/fcefc6f0ab81cd4c7e816e539e/bd3269fcefc6f0ab81cd4c7e816e539e.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu_3",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu_3",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu"}' 
            }
          }
        }
      })

                                              
                  
                                
      sliders[0].vignettes.push({
        categoryTitle: "Actualit\u00E9s",
        title: "Panique\u0020\u00E0\u0020bord\u0020\u0021\u0020Un\u0020objet\u2026\u0020insolite\u0020provoque\u0020une\u0020fausse\u0020alerte\u0020\u00E0\u0020la\u0020bombe",
        target: "",
        url: "https://actu.orange.fr/monde/fausse-alerte-a-la-bombe-un-avion-contraint-d-operer-un-demi-tour-apres-la-decouverte-d-une-couche-pour-adulte-magic-CNT0000028bEZp.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2F82e%2F4d6%2F4f130069754a63bf33d70abd96%2F82e4d64f130069754a63bf33d70abd96.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "Actualités",
        isNative: "",
        newsline: "1",
        analytics: {
            category: "news_actu_4",
  action: "actualites-panique-a-bord-un-objet-insolite-provoque-une-fausse-alerte-a-la-bombe",
  label: "https://actu.orange.fr/monde/fausse-alerte-a-la-bombe-un-avion-contraint-d-operer-un-demi-tour-apres-la-decouverte-d-une-couche-pour-adulte-magic-CNT0000028bEZp.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu"}',   pdbZid: "acc-digital_prospect-nl_news_actu",
  pdbSc: "mpt",
  pdbIdc: "000mijbDK",
  pdbVi: "media://one-i/ONE-I-ONews/82e/4d6/4f130069754a63bf33d70abd96/82e4d64f130069754a63bf33d70abd96.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu_4",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu_4",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu"}' 
            }
          }
        }
      })

    
  

  
  
    sliders.push({
      cacheKey: "0c6e1a2ef0428e1bed7e148d28eb5b36360ab79e5a3ceefc5e8fe988bd63ddfc",
      name: "o-news-focus",
      refId: "actu-focus",
      title: "Le\u0020reste\u0020de\u0020l\u0027actualit\u00E9",
      vignettes: []
    })

                                                  
                  
                                
      sliders[1].vignettes.push({
        categoryTitle: "People",
        title: "Thomas\u0020Pesquet\u0020\u003A\u0020r\u00E9v\u00E9lations\u0020\u00E9tonnantes\u0020sur\u0020les\u0020revenus\u0020de\u0020l\u2019astronaute\u0020fran\u00E7ais",
        target: "_self",
        url: "https://tendances.orange.fr/people/actu-people/article-thomas-pesquet-revelations-etonnantes-sur-ses-revenus-il-n-est-pas-riche-comme-on-pourrait-le-croire-CNT0000028bMf7.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2Fc4b%2Fb5d%2Fee339f5152bc06952f6cfffbb6%2Fc4bb5dee339f5152bc06952f6cfffbb6.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "",
        isNative: "",
        newsline: "1",
        analytics: {
            category: "news_actu-focus_1",
  action: "people-thomas-pesquet-revelations-etonnantes-sur-les-revenus-de-l-astronaute-francais",
  label: "https://tendances.orange.fr/people/actu-people/article-thomas-pesquet-revelations-etonnantes-sur-ses-revenus-il-n-est-pas-riche-comme-on-pourrait-le-croire-CNT0000028bMf7.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-focus"}',   pdbZid: "acc-digital_prospect-nl_news_actu-focus",
  pdbSc: "mpt",
  pdbIdc: "000aOzaDK",
  pdbVi: "media://one-i/ONE-I-ONews/c4b/b5d/ee339f5152bc06952f6cfffbb6/c4bb5dee339f5152bc06952f6cfffbb6.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu-focus_1",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-focus"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu-focus_1",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-focus"}' 
            }
          }
        }
      })

                                              
                                
                                
      sliders[1].vignettes.push({
        categoryTitle: "\u00C9vasion",
        title: "C\u0027est\u0020encore\u0020plus\u0020beau\u0020vu\u0020d\u0027en\u0020haut\u0020\u0021\u002010\u0020lieux\u0020magiques\u0020o\u00F9\u0020faire\u0020de\u0020la\u0020montgolfi\u00E8re",
        target: "_self",
        url: "https://tendances.orange.fr/art-de-vivre/evasion/diaporama-10-lieux-reves-a-travers-le-monde-pour-faire-de-la-montgolfiere-excluw-CNT0000027Gsqa.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2Fe01%2Faa9%2F99ee78628b07ca0d7a612b7231%2Fe01aa999ee78628b07ca0d7a612b7231.jpeg?saveas=webp&saveasquality=70&quality=85",
        alt: "Évasion",
        isNative: "1",
        newsline: "1",
        analytics: {
            category: "news_actu-focus_2",
  action: "evasion-c-est-encore-plus-beau-vu-d-en-haut-10-lieux-magiques-ou-faire-de-la-montgolfiere",
  label: "https://tendances.orange.fr/art-de-vivre/evasion/diaporama-10-lieux-reves-a-travers-le-monde-pour-faire-de-la-montgolfiere-excluw-CNT0000027Gsqa.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-focus"}',   pdbZid: "acc-digital_prospect-nl_news_actu-focus",
  pdbSc: "mpt",
  pdbIdc: "000eOzaDK",
  pdbVi: "media://one-i/ONE-I-ONews/e01/aa9/99ee78628b07ca0d7a612b7231/e01aa999ee78628b07ca0d7a612b7231.jpeg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu-focus_2",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-focus"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu-focus_2",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-focus"}' 
            }
          }
        }
      })

                                              
                  
                                
      sliders[1].vignettes.push({
        categoryTitle: "People",
        title: "Neymar\u0020\u00E0\u0020nouveau\u0020papa\u0020\u003A\u0020le\u0020pr\u00E9nom\u0020original\u0020de\u0020son\u0020enfant\u0020r\u00E9v\u00E9l\u00E9",
        target: "_self",
        url: "https://tendances.orange.fr/people/actu-people/article-neymar-papa-pour-la-2e-fois-sa-petite-fille-au-prenom-improbable-est-nee-premieres-photos-du-bebe-devoilees-CNT0000027Xr8p.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2F13e%2Ff89%2F527c2a8a41ab6eadee8b452a18%2F13ef89527c2a8a41ab6eadee8b452a18.png?saveas=webp&saveasquality=70&quality=85",
        alt: "People",
        isNative: "",
        newsline: "1",
        analytics: {
            category: "news_actu-focus_3",
  action: "people-neymar-a-nouveau-papa-le-prenom-original-de-son-enfant-revele",
  label: "https://tendances.orange.fr/people/actu-people/article-neymar-papa-pour-la-2e-fois-sa-petite-fille-au-prenom-improbable-est-nee-premieres-photos-du-bebe-devoilees-CNT0000027Xr8p.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-focus"}',   pdbZid: "acc-digital_prospect-nl_news_actu-focus",
  pdbSc: "mpt",
  pdbIdc: "000iOzaDK",
  pdbVi: "media://one-i/ONE-I-ONews/13e/f89/527c2a8a41ab6eadee8b452a18/13ef89527c2a8a41ab6eadee8b452a18.png"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu-focus_3",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-focus"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu-focus_3",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-focus"}' 
            }
          }
        }
      })

    
  

  
  
    sliders.push({
      cacheKey: "f2547ccb398823374ec1c1dbaab334c2c5a9a86d8f3e6e488ed63dd1908fb3ab",
      name: "o-news-sport",
      refId: "actu-sport",
      title: "L\u0027actualit\u00E9\u0020sportive\u0020du\u0020jour",
      vignettes: []
    })

                                                  
                  
                                
      sliders[2].vignettes.push({
        categoryTitle: "Coupe\u0020du\u0020monde\u0020de\u0020rugby\u00202023",
        title: "Cruelle\u0020d\u00E9sillusion\u0020pour\u0020les\u0020Bleus,\u0020\u00E9limin\u00E9s\u0020par\u0020l\u0027Afrique\u0020du\u0020Sud",
        target: "",
        url: "https://sports.orange.fr/rugby/coupe-du-monde/article/cm-2023-la-france-eliminee-d-un-point-par-l-afrique-du-sud-CNT0000028bWNE.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2F93c%2F930%2Ff1fde2d7795452d766e63508d7%2F93c930f1fde2d7795452d766e63508d7.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "",
        isNative: "",
        newsline: "2",
        analytics: {
            category: "news_actu-sport_1",
  action: "coupe-du-monde-de-rugby-2023-cruelle-desillusion-pour-les-bleus-elimines-par-l-afrique-du-sud",
  label: "https://sports.orange.fr/rugby/coupe-du-monde/article/cm-2023-la-france-eliminee-d-un-point-par-l-afrique-du-sud-CNT0000028bWNE.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-sport"}',   pdbZid: "acc-digital_prospect-nl_news_actu-sport",
  pdbSc: "mpt",
  pdbIdc: "000a0lcDK",
  pdbVi: "media://one-i/ONE-I-ONews/93c/930/f1fde2d7795452d766e63508d7/93c930f1fde2d7795452d766e63508d7.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu-sport_1",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-sport"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu-sport_1",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-sport"}' 
            }
          }
        }
      })

                                              
                  
                                
      sliders[2].vignettes.push({
        categoryTitle: "Football",
        title: "Le\u0020vainqueur\u0020du\u0020Ballon\u0020d\u0027Or\u0020d\u00E9j\u00E0\u0020connu\u0020\u003F",
        target: "",
        url: "https://sports.orange.fr/football/autres/article/ballon-d-or-le-nom-du-vainqueur-a-fuite-CNT0000028bJ6B.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2Fd97%2F857%2Fed7ce78c66eab6d8b5bb4e6225%2Fd97857ed7ce78c66eab6d8b5bb4e6225.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "",
        isNative: "",
        newsline: "2",
        analytics: {
            category: "news_actu-sport_2",
  action: "football-le-vainqueur-du-ballon-d-or-deja-connu",
  label: "https://sports.orange.fr/football/autres/article/ballon-d-or-le-nom-du-vainqueur-a-fuite-CNT0000028bJ6B.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-sport"}',   pdbZid: "acc-digital_prospect-nl_news_actu-sport",
  pdbSc: "mpt",
  pdbIdc: "000e0lcDK",
  pdbVi: "media://one-i/ONE-I-ONews/d97/857/ed7ce78c66eab6d8b5bb4e6225/d97857ed7ce78c66eab6d8b5bb4e6225.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu-sport_2",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-sport"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu-sport_2",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-sport"}' 
            }
          }
        }
      })

                                              
                  
                                
      sliders[2].vignettes.push({
        categoryTitle: "Football",
        title: "Le\u0020message\u0020de\u0020soutien\u0020de\u0020Karim\u0020Benzema\u0020aux\u0020victimes\u0020de\u0020Gaza",
        target: "",
        url: "https://sports.orange.fr/football/autres/article/benzema-pense-aux-victimes-de-gaza-CNT0000028bQsg.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2F59a%2F227%2Fc58e3597c8b4bb1bd923987e38%2F59a227c58e3597c8b4bb1bd923987e38.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "",
        isNative: "",
        newsline: "2",
        analytics: {
            category: "news_actu-sport_3",
  action: "football-le-message-de-soutien-de-karim-benzema-aux-victimes-de-gaza",
  label: "https://sports.orange.fr/football/autres/article/benzema-pense-aux-victimes-de-gaza-CNT0000028bQsg.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-sport"}',   pdbZid: "acc-digital_prospect-nl_news_actu-sport",
  pdbSc: "mpt",
  pdbIdc: "000i0lcDK",
  pdbVi: "media://one-i/ONE-I-ONews/59a/227/c58e3597c8b4bb1bd923987e38/59a227c58e3597c8b4bb1bd923987e38.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu-sport_3",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-sport"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu-sport_3",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-sport"}' 
            }
          }
        }
      })

                                              
                  
                                
      sliders[2].vignettes.push({
        categoryTitle: "Football",
        title: "L\u2019Espagne\u0020se\u0020qualifie\u0020pour\u0020l\u2019Euro\u0020gr\u00E2ce\u0020\u00E0\u0020son\u0020succ\u00E8s\u0020en\u0020Norv\u00E8ge",
        target: "",
        url: "https://sports.orange.fr/football/euro/match/norvege-espagne-apres-match-SPEF1G0eCa10mg.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2F9a0%2Ff38%2Fb64943c75b7aab6d7877b55912%2F9a0f38b64943c75b7aab6d7877b55912.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "",
        isNative: "",
        newsline: "2",
        analytics: {
            category: "news_actu-sport_4",
  action: "football-l-espagne-se-qualifie-pour-l-euro-grace-a-son-succes-en-norvege",
  label: "https://sports.orange.fr/football/euro/match/norvege-espagne-apres-match-SPEF1G0eCa10mg.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-sport"}',   pdbZid: "acc-digital_prospect-nl_news_actu-sport",
  pdbSc: "mpt",
  pdbIdc: "000m0lcDK",
  pdbVi: "media://one-i/ONE-I-ONews/9a0/f38/b64943c75b7aab6d7877b55912/9a0f38b64943c75b7aab6d7877b55912.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu-sport_4",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-sport"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu-sport_4",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-sport"}' 
            }
          }
        }
      })

    
  

  
  
    sliders.push({
      cacheKey: "e52da406d6346b6bcd3f2495468ad0509e25d26da6036385db6cd46d0a5ab925",
      name: "o-news-media1",
      refId: "actu-media1",
      title: "Magazine",
      vignettes: []
    })

                                                  
                  
                                
      sliders[3].vignettes.push({
        categoryTitle: "Partenaire",
        title: "Les\u0020Trolls\u00203\u0020\u003A\u0020Amel\u0020Bent\u0020est\u0020la\u0020voix\u0020de\u0020Viva\u0020\u0021\u0020D\u00E9couvrez\u0020l\u0027univers\u0020du\u0020film",
        target: "_self",
        url: "https://partenaire.cinema-series.orange.fr/les-trolls-3?utx_source=OPS_LesTrolls3_2023&amp;utx_medium=edito&amp;utx_campaign=remonte_edito",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2F32e%2Ffb6%2F2061f8e0015f4ee0e1d9fef349%2F32efb62061f8e0015f4ee0e1d9fef349.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "Partenaire",
        isNative: "",
        newsline: "2",
        analytics: {
            category: "news_actu-media1_1",
  action: "partenaire-les-trolls-3-amel-bent-est-la-voix-de-viva-decouvrez-l-univers-du-film",
  label: "https://partenaire.cinema-series.orange.fr/les-trolls-3?utx_source=OPS_LesTrolls3_2023&utx_medium=edito&utx_campaign=remonte_edito",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media1"}',   pdbZid: "acc-digital_prospect-nl_news_actu-media1",
  pdbSc: "mpt",
  pdbIdc: "000ayR0CK",
  pdbVi: "media://one-i/ONE-I-ONews/32e/fb6/2061f8e0015f4ee0e1d9fef349/32efb62061f8e0015f4ee0e1d9fef349.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu-media1_1",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media1"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu-media1_1",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media1"}' 
            }
          }
        }
      })

                                              
                  
                                
      sliders[3].vignettes.push({
        categoryTitle: "2\u0020roues",
        title: "Venu\u0020d\u0027Allemagne,\u0020ce\u0020dr\u00F4le\u0020d\u0027engin\u0020\u00E9lectrique\u0020devrait\u0020surprendre...\u0020Les\u0020d\u00E9tails",
        target: "_self",
        url: "https://auto.orange.fr/2-roues/news/novus-la-moto-electrique-du-futur-CNT0000027ZtVk.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2F3ac%2F50c%2F025148dda338578611a31d1ca4%2F3ac50c025148dda338578611a31d1ca4.jpeg?saveas=webp&saveasquality=70&quality=85",
        alt: "2 roues",
        isNative: "",
        newsline: "2",
        analytics: {
            category: "news_actu-media1_2",
  action: "2-roues-venu-d-allemagne-ce-drole-d-engin-electrique-devrait-surprendre-les-details",
  label: "https://auto.orange.fr/2-roues/news/novus-la-moto-electrique-du-futur-CNT0000027ZtVk.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media1"}',   pdbZid: "acc-digital_prospect-nl_news_actu-media1",
  pdbSc: "mpt",
  pdbIdc: "000eyR0CK",
  pdbVi: "media://one-i/ONE-I-ONews/3ac/50c/025148dda338578611a31d1ca4/3ac50c025148dda338578611a31d1ca4.jpeg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu-media1_2",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media1"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu-media1_2",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media1"}' 
            }
          }
        }
      })

                                              
                  
                                
      sliders[3].vignettes.push({
        categoryTitle: "Beaut\u00E9",
        title: "Quels\u0020sont\u0020les\u0020vrais\u0020bienfaits\u0020de\u0020ce\u0020produit\u0020naturel\u0020\u003F\u0020Focus...",
        target: "_self",
        url: "https://tendances.orange.fr/mode-beaute/conseils-beaute/article-5-bonnes-raisons-d-inclure-le-miel-a-sa-routine-beaute-excluw-CNT000001YZWub.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2F25f%2Ff39%2Fef2c095e57085deb60256d3e7e%2F25ff39ef2c095e57085deb60256d3e7e.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "Beauté",
        isNative: "",
        newsline: "2",
        analytics: {
            category: "news_actu-media1_3",
  action: "beaute-quels-sont-les-vrais-bienfaits-de-ce-produit-naturel-focus",
  label: "https://tendances.orange.fr/mode-beaute/conseils-beaute/article-5-bonnes-raisons-d-inclure-le-miel-a-sa-routine-beaute-excluw-CNT000001YZWub.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media1"}',   pdbZid: "acc-digital_prospect-nl_news_actu-media1",
  pdbSc: "mpt",
  pdbIdc: "000iyR0CK",
  pdbVi: "media://one-i/ONE-I-ONews/25f/f39/ef2c095e57085deb60256d3e7e/25ff39ef2c095e57085deb60256d3e7e.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu-media1_3",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media1"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu-media1_3",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media1"}' 
            }
          }
        }
      })

    
  

  
  
    sliders.push({
      cacheKey: "4f4c240fabface866cb00c7651e2d82f5cbe9f7e5fcf3568721af7a3df1f1f1f",
      name: "o-news-media2",
      refId: "actu-media2",
      title: "",
      vignettes: []
    })

                                                  
                  
                  
      sliders[4].vignettes.push({
        categoryTitle: "People",
        title: "Fr\u00E9d\u00E9ric\u0020Fran\u00E7ois\u0020attaqu\u00E9\u0020par\u0020un\u0020fan\u0020\u003A\u0020que\u0020s\u0027est\u002Dil\u0020pass\u00E9\u0020\u003F",
        target: "_self",
        url: "https://tendances.orange.fr/people/actu-people/article-frederic-francois-assigne-aux-prud-hommes-par-un-fan-le-chanteur-condamne-et-ce-n-est-pas-le-seul-coup-dur-CNT00000288k3k.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2F562%2Fb08%2Fda5067545bf43e2e8ef6b1ef5d%2F562b08da5067545bf43e2e8ef6b1ef5d.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "People",
        isNative: "",
        newsline: "0",
        analytics: {
            category: "news_actu-media2_1",
  action: "people-frederic-francois-attaque-par-un-fan-que-s-est-il-passe",
  label: "https://tendances.orange.fr/people/actu-people/article-frederic-francois-assigne-aux-prud-hommes-par-un-fan-le-chanteur-condamne-et-ce-n-est-pas-le-seul-coup-dur-CNT00000288k3k.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media2"}',   pdbZid: "acc-digital_prospect-nl_news_actu-media2",
  pdbSc: "mpt",
  pdbIdc: "000aOR0CK",
  pdbVi: "media://one-i/ONE-I-ONews/562/b08/da5067545bf43e2e8ef6b1ef5d/562b08da5067545bf43e2e8ef6b1ef5d.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu-media2_1",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media2"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu-media2_1",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media2"}' 
            }
          }
        }
      })

                                              
                  
                  
      sliders[4].vignettes.push({
        categoryTitle: "Sant\u00E9",
        title: "Si\u0020vous\u0020constatez\u0020ces\u0020sympt\u00F4mes,\u0020ce\u0020n\u0027est\u0020pas\u0020de\u0020la\u0020dyslexie,\u0020mais...",
        target: "_self",
        url: "https://tendances.orange.fr/sante-et-bien-etre/sante/article-dyspraxie-et-dyslexie-comment-les-differencier-excluw-CNT000001W9RkC.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2F138%2F171%2Fbd2d82d5bbf01aaaedf0106891%2F138171bd2d82d5bbf01aaaedf0106891.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "Santé",
        isNative: "",
        newsline: "0",
        analytics: {
            category: "news_actu-media2_2",
  action: "sante-si-vous-constatez-ces-symptomes-ce-n-est-pas-de-la-dyslexie-mais",
  label: "https://tendances.orange.fr/sante-et-bien-etre/sante/article-dyspraxie-et-dyslexie-comment-les-differencier-excluw-CNT000001W9RkC.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media2"}',   pdbZid: "acc-digital_prospect-nl_news_actu-media2",
  pdbSc: "mpt",
  pdbIdc: "000eOR0CK",
  pdbVi: "media://one-i/ONE-I-ONews/138/171/bd2d82d5bbf01aaaedf0106891/138171bd2d82d5bbf01aaaedf0106891.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu-media2_2",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media2"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu-media2_2",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media2"}' 
            }
          }
        }
      })

                                              
                  
                  
      sliders[4].vignettes.push({
        categoryTitle: "Cin\u00E9ma",
        title: "Ils\u0020reviennent\u0020\u0021\u0020La\u0020saga\u0020continue,\u0020on\u0020vous\u0020dit\u0020tout\u0020sur\u0020le\u00205e\u0020volet...",
        target: "_self",
        url: "https://cinema-series.orange.fr/cinema/toutes-les-actus/ca-va-peut-etre-etre-une-catastrophe-l-une-des-meilleures-comedies-francaises-de-retour-pour-un-5eme-film-CNT00000286AqH.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2F94d%2F166%2F9f0e588f70b7e61e019af6781f%2F94d1669f0e588f70b7e61e019af6781f.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "Cinéma",
        isNative: "",
        newsline: "0",
        analytics: {
            category: "news_actu-media2_3",
  action: "cinema-ils-reviennent-la-saga-continue-on-vous-dit-tout-sur-le-5e-volet",
  label: "https://cinema-series.orange.fr/cinema/toutes-les-actus/ca-va-peut-etre-etre-une-catastrophe-l-une-des-meilleures-comedies-francaises-de-retour-pour-un-5eme-film-CNT00000286AqH.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media2"}',   pdbZid: "acc-digital_prospect-nl_news_actu-media2",
  pdbSc: "mpt",
  pdbIdc: "000iOR0CK",
  pdbVi: "media://one-i/ONE-I-ONews/94d/166/9f0e588f70b7e61e019af6781f/94d1669f0e588f70b7e61e019af6781f.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu-media2_3",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media2"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu-media2_3",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media2"}' 
            }
          }
        }
      })

    
  

  
  
    sliders.push({
      cacheKey: "e9e3c0e65b3f3de7acaf522c8bf57bc34641141a50f26d17b533ee59d9219584",
      name: "o-news-media3",
      refId: "actu-media3",
      title: "",
      vignettes: []
    })

                                                  
                  
                  
      sliders[5].vignettes.push({
        categoryTitle: "M\u00E9dias",
        title: "BFMTV\u0020s\u0027excuse\u0020apr\u00E8s\u0020un\u0020moment\u0020embarrassant\u0020en\u0020plein\u0020direct...",
        target: "_self",
        url: "https://tendances.orange.fr/people/actu-people/article-vous-etes-des-bouffons-sequence-tres-embarrassante-en-direct-sur-bfmtv-la-chaine-presente-ses-excuses-CNT00000288aqI.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2Ffab%2F350%2F2c2b406d9f3f174b32e44caad9%2Ffab3502c2b406d9f3f174b32e44caad9.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "Médias",
        isNative: "",
        newsline: "0",
        analytics: {
            category: "news_actu-media3_1",
  action: "medias-bfmtv-s-excuse-apres-un-moment-embarrassant-en-plein-direct",
  label: "https://tendances.orange.fr/people/actu-people/article-vous-etes-des-bouffons-sequence-tres-embarrassante-en-direct-sur-bfmtv-la-chaine-presente-ses-excuses-CNT00000288aqI.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media3"}',   pdbZid: "acc-digital_prospect-nl_news_actu-media3",
  pdbSc: "mpt",
  pdbIdc: "000aCT0CK",
  pdbVi: "media://one-i/ONE-I-ONews/fab/350/2c2b406d9f3f174b32e44caad9/fab3502c2b406d9f3f174b32e44caad9.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu-media3_1",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media3"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu-media3_1",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media3"}' 
            }
          }
        }
      })

                                              
                  
                  
      sliders[5].vignettes.push({
        categoryTitle: "Auto",
        title: "1\u0020million\u0020d\u0027exemplaires\u0020\u0021\u0020Deviendra\u002Dt\u002Dil\u0020aussi\u0020mythique\u0020que\u0020l\u0027Estafette\u0020\u003F",
        target: "_self",
        url: "https://auto.orange.fr/news/le-renault-trafic-franchit-le-million-d-exemplaires-CNT0000024fVNk.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2F831%2Fbd4%2F6235808f60dd37a6244dad4eb9%2F831bd46235808f60dd37a6244dad4eb9.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "Auto",
        isNative: "",
        newsline: "0",
        analytics: {
            category: "news_actu-media3_2",
  action: "auto-1-million-d-exemplaires-deviendra-t-il-aussi-mythique-que-l-estafette",
  label: "https://auto.orange.fr/news/le-renault-trafic-franchit-le-million-d-exemplaires-CNT0000024fVNk.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media3"}',   pdbZid: "acc-digital_prospect-nl_news_actu-media3",
  pdbSc: "mpt",
  pdbIdc: "000eCT0CK",
  pdbVi: "media://one-i/ONE-I-ONews/831/bd4/6235808f60dd37a6244dad4eb9/831bd46235808f60dd37a6244dad4eb9.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu-media3_2",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media3"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu-media3_2",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media3"}' 
            }
          }
        }
      })

                                              
                  
                  
      sliders[5].vignettes.push({
        categoryTitle: "S\u00E9ries",
        title: "Quelque\u0020chose\u0020va\u0020changer\u0020\u00E0\u0020partir\u0020de\u0020demain\u0020dans\u0020votre\u0020fiction\u0020pr\u00E9f\u00E9r\u00E9e...",
        target: "_self",
        url: "https://cinema-series.orange.fr/series/toutes-les-actus/ici-tout-commence-decouvrez-le-nouveau-generique-avec-des-nouvelles-tetes-CNT00000286KuT.html",
        image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2F1ca%2F503%2F5f09fb64e7f618c486eb34f4db%2F1ca5035f09fb64e7f618c486eb34f4db.jpg?saveas=webp&saveasquality=70&quality=85",
        alt: "Séries",
        isNative: "",
        newsline: "0",
        analytics: {
            category: "news_actu-media3_3",
  action: "series-quelque-chose-va-changer-a-partir-de-demain-dans-votre-fiction-preferee",
  label: "https://cinema-series.orange.fr/series/toutes-les-actus/ici-tout-commence-decouvrez-le-nouveau-generique-avec-des-nouvelles-tetes-CNT00000286KuT.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media3"}',   pdbZid: "acc-digital_prospect-nl_news_actu-media3",
  pdbSc: "mpt",
  pdbIdc: "000iCT0CK",
  pdbVi: "media://one-i/ONE-I-ONews/1ca/503/5f09fb64e7f618c486eb34f4db/1ca5035f09fb64e7f618c486eb34f4db.jpg"

        },
        navigation: {
          previous: {
            title: "voir la news précédente",
            analytics: {
                category: "news_actu-media3_3",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media3"}' 
            }
          },
          next: {
            title: "voir la news suivante",
            analytics: {
                category: "news_actu-media3_3",
  action: "clic-chevrons",
  label: "defilement",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_actu-media3"}' 
            }
          }
        }
      })

    
  



let filInfo = {
  title: "Infos en direct",
  news: []
}

  
        
              
                                          
      filInfo.news.push({
        time: "07:00",
        url: "https://actu.orange.fr/question-du-jour-2023-10-16-CNT0000028bWtU.html",
        title: "Selon\u0020vous,\u0020les\u0020mesures\u0020de\u0020s\u00E9curit\u00E9\u0020apr\u00E8s\u0020l\u2019attaque\u0020au\u0020couteau\u0020d\u2019Arras\u0020sont\u002Delles\u0020suffisantes\u0020\u003F",
        category: "question\u002Ddu\u002Djour",
        analytics: {
            category: "news_flux-actu1",
  action: "selon-vous-les-mesures-de-securite-apres-l-attaque-au-couteau-d-arras-sont-elles-suffisantes",
  label: "https://actu.orange.fr/question-du-jour-2023-10-16-CNT0000028bWtU.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "07:00",
        url: "https://actu.orange.fr/monde/attaque-du-hamas-contre-israel-joe-biden-appelle-israel-a-respecter-les-regles-de-la-guerre-magic-CNT0000028c4RJ.html",
        title: "Attaque\u0020du\u0020Hamas\u0020contre\u0020Isra\u00EBl\u0020\u003A\u0020Joe\u0020Biden\u0020appelle\u0020Isra\u00EBl\u0020\u00E0\u0020respecter\u0020\u0022les\u0020r\u00E8gles\u0020de\u0020la\u0020guerre\u0022\n",
        category: "monde",
        analytics: {
            category: "news_flux-actu2",
  action: "attaque-du-hamas-contre-israel-joe-biden-appelle-israel-a-respecter-les-regles-de-la-guerre",
  label: "https://actu.orange.fr/monde/attaque-du-hamas-contre-israel-joe-biden-appelle-israel-a-respecter-les-regles-de-la-guerre-magic-CNT0000028c4RJ.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "06:33",
        url: "https://actu.orange.fr/societe/environnement/le-belize-etat-modele-pour-les-echanges-amp-quot-dette-nature-amp-quot-CNT0000028c4JB.html",
        title: "Le\u0020Belize,\u0020Etat\u0020mod\u00E8le\u0020pour\u0020les\u0020\u00E9changes\u0020\u0022dette\u002Dnature\u0022\u0020",
        category: "environnement",
        analytics: {
            category: "news_flux-actu3",
  action: "le-belize-etat-modele-pour-les-echanges-dette-nature",
  label: "https://actu.orange.fr/societe/environnement/le-belize-etat-modele-pour-les-echanges-amp-quot-dette-nature-amp-quot-CNT0000028c4JB.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "06:07",
        url: "https://actu.orange.fr/economie/salaires-et-carrieres-borne-reunit-syndicats-et-patronat-en-conference-sociale-CNT0000028c4wY.html",
        title: "Salaires\u0020et\u0020carri\u00E8res\u003A\u0020Borne\u0020r\u00E9unit\u0020syndicats\u0020et\u0020patronat\u0020en\u0020conf\u00E9rence\u0020sociale",
        category: "economie",
        analytics: {
            category: "news_flux-actu4",
  action: "salaires-et-carrieres-borne-reunit-syndicats-et-patronat-en-conference-sociale",
  label: "https://actu.orange.fr/economie/salaires-et-carrieres-borne-reunit-syndicats-et-patronat-en-conference-sociale-CNT0000028c4wY.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "05:57",
        url: "https://actu.orange.fr/france/assistants-d-eurodeputes-francois-bayrou-et-dix-autres-centristes-attendus-au-tribunal-CNT0000028c4lN.html",
        title: "Assistants\u0020d\u0027eurod\u00E9put\u00E9s\u003A\u0020Fran\u00E7ois\u0020Bayrou\u0020et\u0020dix\u0020autres\u0020centristes\u0020attendus\u0020au\u0020tribunal",
        category: "france",
        analytics: {
            category: "news_flux-actu5",
  action: "assistants-d-eurodeputes-francois-bayrou-et-dix-autres-centristes-attendus-au-tribunal",
  label: "https://actu.orange.fr/france/assistants-d-eurodeputes-francois-bayrou-et-dix-autres-centristes-attendus-au-tribunal-CNT0000028c4lN.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "05:19",
        url: "https://actu.orange.fr/france/apres-le-choc-les-ecoles-rendent-hommage-au-professeur-tue-a-arras-CNT0000028c4de.html",
        title: "Apr\u00E8s\u0020le\u0020choc,\u0020les\u0020\u00E9coles\u0020rendent\u0020hommage\u0020au\u0020professeur\u0020tu\u00E9\u0020\u00E0\u0020Arras",
        category: "france",
        analytics: {
            category: "news_flux-actu6",
  action: "apres-le-choc-les-ecoles-rendent-hommage-au-professeur-tue-a-arras",
  label: "https://actu.orange.fr/france/apres-le-choc-les-ecoles-rendent-hommage-au-professeur-tue-a-arras-CNT0000028c4de.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "05:11",
        url: "https://actu.orange.fr/monde/daniel-noboa-elu-plus-jeune-president-de-l-histoire-de-l-equateur-CNT0000028aLeP.html",
        title: "Daniel\u0020Noboa\u0020\u00E9lu\u0020plus\u0020jeune\u0020pr\u00E9sident\u0020de\u0020l\u0027histoire\u0020de\u0020l\u0027Equateur",
        category: "monde",
        analytics: {
            category: "news_flux-actu7",
  action: "daniel-noboa-elu-plus-jeune-president-de-l-histoire-de-l-equateur",
  label: "https://actu.orange.fr/monde/daniel-noboa-elu-plus-jeune-president-de-l-histoire-de-l-equateur-CNT0000028aLeP.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "05:02",
        url: "https://actu.orange.fr/monde/plus-d-un-million-d-habitants-de-gaza-deplaces-israel-se-prepare-a-l-offensive-CNT0000028aRrN.html",
        title: "Plus\u0020d\u0027un\u0020million\u0020d\u0027habitants\u0020de\u0020Gaza\u0020d\u00E9plac\u00E9s,\u0020Isra\u00EBl\u0020se\u0020pr\u00E9pare\u0020\u00E0\u0020l\u0027offensive",
        category: "monde",
        analytics: {
            category: "news_flux-actu8",
  action: "plus-d-un-million-d-habitants-de-gaza-deplaces-israel-se-prepare-a-l-offensive",
  label: "https://actu.orange.fr/monde/plus-d-un-million-d-habitants-de-gaza-deplaces-israel-se-prepare-a-l-offensive-CNT0000028aRrN.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "23:44",
        url: "https://actu.orange.fr/societe/culture/la-piece-amp-quot-lapin-amp-quot-suspendue-jusqu-au-8-novembre-apres-le-malaise-de-pierre-arditi-CNT0000028bXi8.html",
        title: "La\u0020pi\u00E8ce\u0020\u0022Lapin\u0022\u0020suspendue\u0020jusqu\u0027au\u00208\u0020novembre\u0020apr\u00E8s\u0020le\u0020malaise\u0020de\u0020Pierre\u0020Arditi",
        category: "culture",
        analytics: {
            category: "news_flux-actu9",
  action: "la-piece-lapin-suspendue-jusqu-au-8-novem-e-apres-le-malaise-de-pierre-arditi",
  label: "https://actu.orange.fr/societe/culture/la-piece-amp-quot-lapin-amp-quot-suspendue-jusqu-au-8-novembre-apres-le-malaise-de-pierre-arditi-CNT0000028bXi8.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "23:34",
        url: "https://actu.orange.fr/monde/haut-karabakh-aliev-pour-sa-premiere-visite-a-stepanakert-hisse-le-drapeau-azerbaidjanais-CNT0000028bXdc.html",
        title: "Haut\u002DKarabakh\u003A\u0020Aliev,\u0020pour\u0020sa\u0020premi\u00E8re\u0020visite\u0020\u00E0\u0020Stepanakert,\u0020hisse\u0020le\u0020drapeau\u0020azerba\u00EFdjanais",
        category: "monde",
        analytics: {
            category: "news_flux-actu10",
  action: "haut-karabakh-aliev-pour-sa-premiere-visite-a-stepanakert-hisse-le-drapeau-azerbaidjanais",
  label: "https://actu.orange.fr/monde/haut-karabakh-aliev-pour-sa-premiere-visite-a-stepanakert-hisse-le-drapeau-azerbaidjanais-CNT0000028bXdc.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "23:28",
        url: "https://actu.orange.fr/societe/culture/amp-quot-d-argent-et-de-sang-amp-quot-ambitieuse-reconstitution-en-serie-de-amp-quot-l-arnaque-du-siecle-amp-quot-CNT0000028bX9h.html",
        title: "\u0022D\u0027argent\u0020et\u0020de\u0020sang\u0022,\u0020ambitieuse\u0020reconstitution\u0020en\u0020s\u00E9rie\u0020de\u0020\u0022l\u0027arnaque\u0020du\u0020si\u00E8cle\u0022",
        category: "culture",
        analytics: {
            category: "news_flux-actu11",
  action: "d-argent-et-de-sang-ambitieuse-reconstitution-en-serie-de-l-arnaque-du-siecle",
  label: "https://actu.orange.fr/societe/culture/amp-quot-d-argent-et-de-sang-amp-quot-ambitieuse-reconstitution-en-serie-de-amp-quot-l-arnaque-du-siecle-amp-quot-CNT0000028bX9h.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "23:08",
        url: "https://actu.orange.fr/monde/dans-le-sud-de-gaza-faute-d-eau-amp-quot-soit-tu-prends-une-douche-soit-tu-bois-amp-quot-CNT0000028bWPf.html",
        title: "Dans\u0020le\u0020sud\u0020de\u0020Gaza,\u0020faute\u0020d\u0027eau,\u0020\u0022soit\u0020tu\u0020prends\u0020une\u0020douche\u0020soit\u0020tu\u0020bois\u0022",
        category: "monde",
        analytics: {
            category: "news_flux-actu12",
  action: "dans-le-sud-de-gaza-faute-d-eau-soit-tu-prends-une-douche-soit-tu-bois",
  label: "https://actu.orange.fr/monde/dans-le-sud-de-gaza-faute-d-eau-amp-quot-soit-tu-prends-une-douche-soit-tu-bois-amp-quot-CNT0000028bWPf.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "23:08",
        url: "https://actu.orange.fr/france/rennes-des-etudiants-alertent-sur-la-presence-de-cafards-dans-leur-cite-universitaire-magic-CNT0000028bWOe.html",
        title: "Rennes\u0020\u003A\u0020des\u0020\u00E9tudiants\u0020alertent\u0020sur\u0020la\u0020pr\u00E9sence\u0020de\u0020cafards\u0020dans\u0020leur\u0020cit\u00E9\u0020universitaire",
        category: "france",
        analytics: {
            category: "news_flux-actu13",
  action: "rennes-des-etudiants-alertent-sur-la-presence-de-cafards-dans-leur-cite-universitaire",
  label: "https://actu.orange.fr/france/rennes-des-etudiants-alertent-sur-la-presence-de-cafards-dans-leur-cite-universitaire-magic-CNT0000028bWOe.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "22:59",
        url: "https://actu.orange.fr/monde/legislatives-en-pologne-victoire-de-l-opposition-centriste-et-pro-europeenne-CNT0000028bWmm.html",
        title: "L\u00E9gislatives\u0020en\u0020Pologne\u003A\u0020victoire\u0020de\u0020l\u0027opposition\u0020centriste\u0020et\u0020pro\u002Deurop\u00E9enne",
        category: "monde",
        analytics: {
            category: "news_flux-actu14",
  action: "legislatives-en-pologne-victoire-de-l-opposition-centriste-et-pro-europeenne",
  label: "https://actu.orange.fr/monde/legislatives-en-pologne-victoire-de-l-opposition-centriste-et-pro-europeenne-CNT0000028bWmm.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "22:52",
        url: "https://actu.orange.fr/france/logement-le-monde-rural-en-perte-cruelle-d-habitants-magic-CNT0000028bWIq.html",
        title: "Logement\u0020\u003A\u0020le\u0020monde\u0020rural\u0020en\u0020perte\u0020cruelle\u0020d\u2019habitants",
        category: "france",
        analytics: {
            category: "news_flux-actu15",
  action: "logement-le-monde-rural-en-perte-cruelle-d-habitants",
  label: "https://actu.orange.fr/france/logement-le-monde-rural-en-perte-cruelle-d-habitants-magic-CNT0000028bWIq.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "22:38",
        url: "https://actu.orange.fr/france/a-metz-la-grande-misere-des-coproprietes-d-un-quartier-populaire-CNT0000028bWoP.html",
        title: "A\u0020Metz,\u0020la\u0020grande\u0020mis\u00E8re\u0020des\u0020copropri\u00E9t\u00E9s\u0020d\u0027un\u0020quartier\u0020populaire",
        category: "france",
        analytics: {
            category: "news_flux-actu16",
  action: "a-metz-la-grande-misere-des-coproprietes-d-un-quartier-populaire",
  label: "https://actu.orange.fr/france/a-metz-la-grande-misere-des-coproprietes-d-un-quartier-populaire-CNT0000028bWoP.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "22:32",
        url: "https://actu.orange.fr/monde/legislatives-en-pologne-victoire-de-l-opposition-centriste-et-pro-europeenne-CNT0000028bWdW.html",
        title: "L\u00E9gislatives\u0020en\u0020Pologne\u003A\u0020victoire\u0020de\u0020l\u0027opposition\u0020centriste\u0020et\u0020pro\u002Deurop\u00E9enne",
        category: "monde",
        analytics: {
            category: "news_flux-actu17",
  action: "legislatives-en-pologne-victoire-de-l-opposition-centriste-et-pro-europeenne",
  label: "https://actu.orange.fr/monde/legislatives-en-pologne-victoire-de-l-opposition-centriste-et-pro-europeenne-CNT0000028bWdW.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "22:17",
        url: "https://actu.orange.fr/societe/culture/taylor-swift-ne-se-fait-pas-de-mauvais-sang-et-conquiert-la-tete-du-box-office-nord-americain-CNT0000028bVRi.html",
        title: "Taylor\u0020Swift\u0020ne\u0020se\u0020fait\u0020pas\u0020de\u0020mauvais\u0020sang\u0020et\u0020conquiert\u0020la\u0020t\u00EAte\u0020du\u0020box\u002Doffice\u0020nord\u002Dam\u00E9ricain",
        category: "culture",
        analytics: {
            category: "news_flux-actu18",
  action: "taylor-swift-ne-se-fait-pas-de-mauvais-sang-et-conquiert-la-tete-du-box-office-nord-americain",
  label: "https://actu.orange.fr/societe/culture/taylor-swift-ne-se-fait-pas-de-mauvais-sang-et-conquiert-la-tete-du-box-office-nord-americain-CNT0000028bVRi.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "22:13",
        url: "https://actu.orange.fr/monde/a-la-frontiere-entre-gaza-et-l-egypte-meme-les-passeports-etrangers-ne-valent-amp-quot-rien-amp-quot-CNT0000028bVIi.html",
        title: "A\u0020la\u0020fronti\u00E8re\u0020entre\u0020Gaza\u0020et\u0020l\u0027Egypte,\u0020m\u00EAme\u0020les\u0020passeports\u0020\u00E9trangers\u0020ne\u0020valent\u0020\u0022rien\u0022\u0020",
        category: "monde",
        analytics: {
            category: "news_flux-actu19",
  action: "a-la-frontiere-entre-gaza-et-l-egypte-meme-les-passeports-etrangers-ne-valent-rien",
  label: "https://actu.orange.fr/monde/a-la-frontiere-entre-gaza-et-l-egypte-meme-les-passeports-etrangers-ne-valent-amp-quot-rien-amp-quot-CNT0000028bVIi.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
                                          
      filInfo.news.push({
        time: "22:02",
        url: "https://actu.orange.fr/societe/high-tech/des-scientifiques-en-apesanteur-pour-quelques-secondes-d-experiences-sans-gravite-CNT0000028afnk.html",
        title: "Des\u0020scientifiques\u0020en\u0020apesanteur,\u0020pour\u0020quelques\u0020secondes\u0020d\u0027exp\u00E9riences\u0020sans\u0020gravit\u00E9",
        category: "high\u002Dtech",
        analytics: {
            category: "news_flux-actu20",
  action: "des-scientifiques-en-apesanteur-pour-quelques-secondes-d-experiences-sans-gravite",
  label: "https://actu.orange.fr/societe/high-tech/des-scientifiques-en-apesanteur-pour-quelques-secondes-d-experiences-sans-gravite-CNT0000028afnk.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_flux-actu"}' 
        }
      })
      

var newsFeedNumberOfNews = 20


let pasDePorte = {
  ads: []
}


    pasDePorte.cacheKey = "46e684c5eb8e6caffb7f0eaaea610de95814014963a0a14f758935565aa781eb"

                                                
        pasDePorte.ads.push({
          title: "Comment\u0020t\u00E9l\u00E9charger\u0020une\u0020VOD",
          url: "https://lemagtv.orange.fr/astuces/regarder-une-vod-hors-connexion-CNT000001xayrF/video/voir-mes-vod-meme-hors-connexion-orange-CNT000001xckiv.html",
          target: "",
          image: "//proxymedia.woopic.com/api/v1/images/1127%2Fone-i%2FONE-I-ONews%2F8c0%2F6bb%2Fcc9a339d6232940e95be0c2362%2F8c06bbcc9a339d6232940e95be0c2362.png?quality=85",
          analytics: {
              category: "news_thematique",
  action: "comment-telecharger-une-vod",
  label: "https://lemagtv.orange.fr/astuces/regarder-une-vod-hors-connexion-CNT000001xayrF/video/voir-mes-vod-meme-hors-connexion-orange-CNT000001xckiv.html",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_thematique"}' 
          }
        })
   







  window.dataStoreHP.bandes.news = {
    classes: "mt-3",
    title: {
      label: "News",
      href: "https://news.orange.fr",
      large_title_spaces: false,
      analytics: {
          category: "news_titre0",
  action: "news",
  label: "https://news.orange.fr",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_titre0"}' 
      }
    },
    allNewsButton: {
      label: "Voir toutes les news",
      url: "https://news.orange.fr",
      analytics: {
          category: "news_toutes-les-news",
  action: "voir-toutes-les-news",
  label: "https://news.orange.fr",
  other: '{"track_refZ":"acc-digital_prospect-nl_news_toutes-les-news"}' 
      }
    },
    menu: menu,
    meteo: meteo,
    publicite: publicite,
    sliders: sliders,
    filInfo: filInfo,
    pasDePorte: pasDePorte,
  }