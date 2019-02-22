/* (C) Ask Learn Share Ltd */
// version 20190222
//
// AngularJS module
var app = angular.module('app', ['ngMaterial', 'ngAnimate']);
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default').primaryPalette('orange').accentPalette('indigo').backgroundPalette('grey');
});
app.controller('appController', function() {
  var self = this;
  // compose the path to an images
  self.path = function(paths, type, id) {
    //var zpaths=self.config.paths;
    if (paths.exceptions['gif'].includes(id)) type = "gif";
    if (paths.exceptions['svg'].includes(id)) type = "svg";
    return paths.context[type].path + '/' + paths.context[type].resolution + '/' + id + '.' + paths.context[type].extension;
  }
  // to generate the md-color attribute
  // (the function outside "self" is not recgnised)
  self.mdColors = function(item) {
    var obj = self.config.colors.selected[item];
    var out = {};
    angular.forEach(obj, function(value, key) {
      var v = obj[key]['variant'];
      var p = obj[key]['palette'];
      if (p != "none") out[key] = p + "-" + Math.max(v, 50);
    });
    return out;
  };
  // configuration objects
  self.config = {
    "site": {
      "logo": "secuos",
      "owner": "SecuoS"
    },
    "copyright": {
      "name": "SecuoS BV",
      "period": "2010-2019"
    },
    "pullquotes": false,
    "paths": {
      "exceptions": {
        "svg": ['logo', 'secuos', 'woodside', 'artisv11'],
        "gif": ['map']
      },
      "context": {
        "banner": {
          "extension": "png",
          "resolution": "1080px",
          "path": "images/photos"
        },
        "bio": {
          "extension": "png",
          "resolution": "240px",
          "path": "images/photos"
        },
        "event": {
          "extension": "png",
          "resolution": "240px",
          "path": "images/photos"
        },
        "article": {
          "extension": "png",
          "resolution": "320px",
          "path": "images/photos"
        },
        "logo": {
          "extension": "png",
          "resolution": "120px",
          "path": "images/logos"
        },
        "thumb": {
          "extension": "png",
          "resolution": "120px",
          "path": "images/photos"
        },
        "gif": {
          "extension": "gif",
          "resolution": "gif",
          "path": "images/other"
        },
        "svg": {
          "extension": "svg",
          "resolution": "svg",
          "path": "images/other"
        }
      }
    },
    "fonts": {
      "selected": "noto",
      "options": {
        "noto": {
          "name": "Noto Sans",
          "class": "als-font-noto"
        },
        "roboto": {
          "name": "Roboto",
          "class": "als-font-roboto"
        }
      }
    },
    "tooltips": {
      "portrait": {
        "direction": "top",
        "text": ""
      },
      "photo": {
        "direction": "top",
        "text": "photo ©",
        "icon": "cloud_download"
      },
      "logo": {
        "direction": "top",
        "text": "logo of"
      },
      "download": {
        "direction": "top",
        "text": "download",
        "icon": "cloud_download"
      },
      "link": {
        "direction": "top",
        "text": "open link to",
        "icon": "open_in_new"
      }
    },
    "colors": {
      "selected": {
        "menu": {
          "background": {
            "palette": "primary",
            "variant": 300
          }
        },
        "display2": {
          "color": {
            "palette": "none",
            "variant": 0
          }
        },
        "display1": {
          "color": {
            "palette": "primary",
            "variant": 500
          }
        },
        "headline": {
          "color": {
            "palette": "none",
            "variant": ""
          }
        },
        "title": {
          "color": {
            "palette": "none",
            "variant": ""
          }
        },
        "subhead": {
          "color": {
            "palette": "accent",
            "variant": 500
          }
        },
        "lead": {
          "background": {
            "palette": "none",
            "variant": ""
          },
          "color": {
            "palette": "none",
            "variant": ""
          }
        },
        "card": {
          "background": {
            "palette": "none",
            "variant": ""
          }
        },
        "thead": {
          "background": {
            "palette": "primary",
            "variant": 400
          },
          "color": {
            "palette": "primary",
            "variant": 50
          }
        },
        "tbody": {
          "background": {
            "palette": "primary",
            "variant": 50
          }
        },
        "list": {
          "background": {
            "palette": "background",
            "variant": 200
          }
        },
        "quote": {
          "background": {
            "palette": "primary",
            "variant": 50
          },
          "color": {
            "palette": "primary",
            "variant": 800
          }
        },
        "dropcap": {
          "color": {
            "palette": "primary",
            "variant": 800
          }
        },
        "bullet": {
          "color": {
            "palette": "accent",
            "variant": 500
          }
        },
        "logo1": {
          "color": {
            "palette": "primary",
            "variant": 800
          }
        },
        "logo2": {
          "color": {
            "palette": "primary",
            "variant": 500
          }
        },
        "logo3": {
          "color": {
            "palette": "primary",
            "variant": 200
          }
        }
      },
      "options": {
        "palettes": ["primary", "accent", "warn", "background", "none"],
        "variants": [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    }
  };
  // web site tab structure
  self.tabSelected = "home";
  self.menus = {
    "main": ["home", "about", "services", "platform", "cases", "contact"],
    "developer": ["code", "palette"]
  };
  self.tabs = {
    "home": {
      "icon": "home",
      "logo": {
        "w1": ["Secu", "rity"],
        "w2": ["o", "f"],
        "w3": ["S", "upply"]
      },
      "short": "home",
      "long": "Security of Supply",
      "sections": ["raison"],
      "topics": ["integratedlng", "cluster", "greenh2", "transition", "h2supply", "grid", "oil", "complex", "utilities"],
      "events": "news"
    },
    "about": {
      "logo": {
        "w1": ["About"],
        "w2": ["Secuos"]
      },
      "short": "about",
      "long": "about SecuoS",
      "sections": ["history", "strengths"],
      "mosaics": ["core"]
    },
    "services": {
      "logo": {
        "w1": ["Our services"],
        "w2": ["and"],
        "w3": ["markets"]
      },
      "short": "services",
      "long": "our services and markets",
      "sections": ["services", "markets"]
    },
    "platform": {
      "logo": {
        "w1": ["Our platform"],
        "w2": ["and"],
        "w3": ["applications"]
      },
      "short": "platform",
      "long": "our platform and applications",
      "sections": ["platform", "applications"]
    },
    "cases": {
      "logo": {
        "w1": ["Cases"],
        "w2": ["and"],
        "w3": ["track record"]
      },
      "short": "cases",
      "long": "cases and track record",
      "cases": ["seawater", "santos", "pipeline", "adnoc"],
      "events": "track record"
    },
    "workshops": {
      "short": "workshops",
      "sections": ["training", "implementation"]
    },
    "contact": {
      "icon": "email",
      "logo": {
        "w1": ["Contact"],
        "w2": ["us"]
      },
      "short": "contact",
      "long": "Contact us",
      "sections": ["contact"],
      "devbar": true
    },
    "code": {
      "logo": {
        "w1": ["Our images"],
        "w2": ["and"],
        "w3": ["JSON data"]
      },
      "short": "code",
      "code": true
    },
    "team": {
      "logo": {
        "w1": ["Our team"],
        "w2": ["and"],
        "w3": ["advisors"]
      },
      "short": "our people",
      "long": "our team and advisors",
      "biocards": ["core"],
      "biolists": ["advisor"]
    },
    "terms": {
      "logo": {
        "w1": ["Terms"],
        "w2": ["of"],
        "w3": ["use"]
      },
      "short": "terms",
      "long": "terms of use",
      "sections": ["terms"]
    },
    "palette": {
      "logo": {
        "w1": ["Our styles"],
        "w2": ["and"],
        "w3": ["colours"]
      },
      "short": "palette",
      "long": "our colours",
      "sections": ["dummy"],
      "topics": ["dummy"],
      "cases": ["dummy"],
      "palette": true
    }
  };
  // web site content
  self.sections = {
    "dummy": {
      "headline": "section headline",
      "subhead": "section subhead",
      "lead": "section lead",
      "subsections": [{
        "subhead": "subsection subhead",
        "body": ["body paragraph", "body paragraph"],
        "lists": {
          "intro": "list introduction",
          "lists": [{
            "points": ["list point", "list point"]
            }, {
            "header": "list header",
            "points": ["list point", "list point"]
          }]
        },
        "tables": {
          "intro": "table introduction",
          "tables": [{
            "fields": ["field1", "field2"],
            "records": [{
              "field1": "table point",
              "field2": "table point"
            }, {
              "field1": "table point",
              "field2": "table point"
            }]
          }, {
            "header": "table header",
            "fields": ["field1", "field2"],
            "records": [{
              "field1": "table point",
              "field2": "table point"
            }, {
              "field1": "table point",
              "field2": "table point"
            }]
          }]
        },
        "addresses": [{
          "icons": true,
          "name": "address description:",
          "locations": [{
            "street": "street, city",
            "email": {
              "account": "account",
              "domain": "domain.com"
            }
            }]
          }]
      }]
    },
    "raison20190120": {
      "headline": "securing the energy transition",
      "subsections": [{
        "subhead": "the need to design right first time",
        "body": ["The pace at which the energy sector is innovating is unprecedented. The energy transition is involving a myriad of sometimes unproven technologies and the integrated systems are getting larger and more interdependent.", "More than ever, decision makers need simulation tools that can handle uncertainty and complexity at scale. Experts at SecuoS have developed the necessary algorithms to compute the production availability significantly more efficiently than most tools available in the market.", "Let's accelerate the energy transition together."]
        }]
    },
    "raison20190201": {
      "headline": "securing the energy transition",
      "subsections": [{
        "subhead": "efficient algorithms to respond to risk",
        "body": ["SecuoS is a leading provider of value chain optimisation studies to guide the energy transition. Security of supply of power and heat is essential through a range of applications from small-scale at home to large integrated industries. We have developed the necessary algorithms to compute the production availability significantly more efficiently than most tools in the market."]
        }, {
        "subhead": "optimal design, right first time",
        "body": ["SecuoS has considerable international experience with large integrated systems like 220-380 kV power grids, gas supply networks and the knowhemicals, as ell as stand-alone systems. As we are becoming more dependant on variable renewable energy sources and electric mobility, our tools incorporate stochastic factors like the weather and fluctuating demands."]
        }, {
        "subhead": "let's accelerate the energy transition together",
        "body": ["The pace at which the energy sector is innovating to reduce CO2 emissions is unprecedented. This includes energy efficiency optimisation and the intermediate use of natural gas instead of heavier hydrocarbons. The ultimate CO2-neutral solutions will involve renewable energy sources such as wind, solar and biofuels, as well as energy carriers such as hydrogen and ammonia. Our models are used to optimise designs and steer investment decisions."]
        }]
    },
    "contact": {
      "headline": "let's work together",
      "subsections": [{
        "body": ["SecuoS BV is incorporated in The Netherlands (reg no 67535453)."],
        "addresses": [{
          "icons": false,
          "name": "Our head office is in Hoofddorp.",
          "locations": [{
            "email": {
              "account": "info",
              "domain": "secuos.com"
            }
            }]
          }]
        }]
    },
    "raison": {
      "headline": "welcome",
      "lead": "SecuoS delivers value chain optimisation for continuous production systems. Our advanced studies model all relevant risks and help to develop the best designs and to decide on the investment alternatives.",
      "subsections": [{
        "subhead": "consulting in a world with uncertainties",
        "image": "uncertainties",
        "body": ["Our studies provide specific design recommendations to improve the availability, reliability and integrity. To maximise the value of operating assets, we cover all phases from strategic planning and project development to operations.", "Our structured approach deals with all relevant uncertainties to ensure lasting outcomes. With our extensive experience in operational management we help to implement the improvements in a practical and pragmatic way."]
        }, {
        "subhead": "let's accelerate the energy transition together",
        "image": "accelerate3",
        "body": ["The pace at which the energy sector is innovating to reduce CO2 emissions is unprecedented. This includes energy efficiency optimisation and the intermediate use of natural gas instead of heavier hydrocarbons.", "The ultimate CO2-neutral solutions will see conventional power plants being displaced by wind farms and solar parks. As the supply and demand profiles for electric power change profoundly and will become more dynamic, biofuels and energy carriers such as hydrogen and ammonia are expected to play a vital part.", "SecuoS is well placed to address these challenges. Our tools allow for inclusion of all aspects of stochastic nature, like the weather. This will help to develop the best designs and to decide on the investment alternatives as we are becoming more dependant on renewable energy sources."]
        }]
    },
    "history": {
      "headline": "our history",
      "subsections": [{
        "subhead": "from pioneer to security of supply",
        "image": "prelude",
        "body": ["All SecuoS consultants have worked most of their professional careers for a major oil & gas company. During the 80's and 90's, the risk and reliability management methodologies from the aviation industry were advanced but not adequate for application to large-scale and complex energy projects. SecuoS consultants were given the privilege and resources to pioneer and develop the most sophisticated optimisation models known to the industry.", "These models have been strategic to the success of the world's largest oil & gas projects. In 2010, the opportunity arose to spin the modelling technology out of Shell into an independent company. That is when 'Security of Supply' - or SecuoS - was born.", "Using our deep knowledge of the oil, gas and chemicals sectors, SecuoS has built up a worldwide track record in modelling supply and demand networks. We are ready to expand into other sectors such as power grids and the production of hydrogen."]
        }]
    },
    "strengths": {
      "headline": "our strength",
      "subsections": [{
        "subhead": "integrated, complex and 'live' reliability modelling",
        "image": "complexity",
        "body": ["Our core strength lies in large scale optimisation of production availability, integrated across the whole value chain and all disciplines. We build robust bridges between project development, engineering and operations.", "As a standard practice, we validate the outcome of the model against available historic data. We use various sources with reliability data and, for instance, statistical weather data to predict the adequacy of electricity produced by wind farms and solar parks."],
        "lists": {
          "intro": "Our tools operate on our advanced ARTIS platform. They are configured to perform complex simulations efficiently. Our two most important applications are:",
          "lists": [{
            "points": ["ARTIS Live evaluates, shortly after an event, the impact of planned and unplanned downtime", "ARTIS Renewables covers all possible influences on demand and supply, including weather influences"]
        }]
        }
        }]
    },
    "services": {
      "headline": "our services",
      "lead": "SecuoS performs security of supply and availability assurance studies. They range from single value supply chains to large integrated networks, as well as from long-term planning, project development to operations. The results are living documents that have been designed for the continued usage across all the phases in the life cycle of the assets.",
      "lists": {
        "lists": [{
          "header": "security of supply studies",
          "points": ["value chain optimisation",
          "integrated studies"]
          }, {
          "header": "availability assurance studies",
          "points": ["long-term planning",
          "project development",
          "operations"]
        }]
      },
      "expand": true,
      "subsections": [{
        "subhead": "value chain optimisation",
        "image": "crane1",
        "body": ["Value chains can be complex, especially if incremental production facilities have been added, and original design assumptions no longer apply. There may also be a growing demand, depletion of old reserves and new fields come into production.", "Traditional capacity planning methods assess the security of supply by making conservative planning assumptions, based on worst case scenarios or with limited production targets. This leads to overly conservative capacity margins and relatively poor utilization of expensive production facilities.", "Depending on the nature of the supply commitments and the degree of cooperation by the network producers, there may be room for optimising the network configuration and the network capacities, including the suppliers' capacity margin.", "SecuoS has extensive experience with the technical complexity and stochastic nature of these network optimisation studies and with reaching agreement (one of the challenging aspects) on the modelling assumptions with all stakeholders, and the resulting benefits are huge."]
        }, {
        "subhead": "integrated studies",
        "image": "handover",
        "body": ["The SecuoS consultants have been leading the delivery of integrated oil & gas development studies in many parts of the world. These studies have required the organisation and management of study teams from different companies and Joint Ventures. We have a unique experience in setting up, managing and delivering such joint studies. Our joint studies reach far beyond the traditional reliability modelling studies and help to bridge cultural, corporate and technical gaps.", "A key benefit of such joint studies is that they build a discussion platform between the parties, thereby facilitating the agreement of key project assumptions and providing a means to identify, agree and develop win-win development alternatives with significant improvements of capital expenditure and project economics. These studies foster agreement between the up-and downstream project teams, adding value through global optimisation of the integrated system and strengthening the credibility of the project's ability to deliver.", "The integrated studies capture value by design optimisation and they also provide an excellent starting point for the subsequent establishment, just prior to the start of operations, of the ARTIS Live application. The model, data and documentation should then be part of the project documentation and the hand-over from the project development to the operations. Starting the initial steps during the project development phase, or during project expansions, is most efficient because all the required engineering knowledge, from all disciplines, is readily accessible in the project development team."]
        }, {
        "subhead": "long-term planning",
        "image": "binocular",
        "body": ["A major part of the total project through-life cost is designed at an early stage. Detailed availability modelling can identify and quantify the long-term risks to a project, especially if it is supported by the extraction of relevant data and based on extensive experience of operational and maintenance support. It is often not the obvious risks that can derail projects.", "SecuoS takes an integrated, quantitative and model based approach, making a rigorous assessment of the maximum operating capacities and the risks to the available capacity and optimising the risk responses with the aims to maximise the delivery commitments and production targets. The model is used to optimise the value chain, on a time-dependent basis, taking full account of variable production capacities. The model links the planned and unplanned downtime of the facilities and the operating flexibility to the production availability of the integrated system. It is calibrated against the historical field performance at component level and validated against the historical production availability of the integrated system.", "This results in an integrated model that can be used to optimise the timing of the future development, the capacity margins and the project development plans and, for existing operations, to justify maximum utilization of the production facilities and identify opportunities for additional contractual commitments."]
        }, {
        "subhead": "project development",
        "image": "bottlenecks",
        "body": ["Enhancements in project development have squeezed capital investment within the project development and implementation phases to a level where it is now difficult to find areas where further improvements can be made. Attention therefore has shifted to include the operational phase of projects, to consider not just capital expenditure, but the life cycle project value, where there is more margin for improvement.", "Against this background, Availability Assurance provides a coherent framework for the prioritisation of bottlenecks and ranking of development options from the perspective of production availability and in the context of optimisation of the life cycle value of the integrated development.", "For assuring plant availability, it is crucial that requirements are specified in an early stage and used in the various engineering phases as the project progresses, till handover to Operations."]
        }, {
        "subhead": "operations",
        "image": "drone",
        "body": ["Operational risks are managed to keep assets reliable and safe. The time horizon typically stretches several planned turnaround cycles. SecuoS provides a continuum of in-depth studies that are designed to pro-actively identify tasks or opportunities to manage these risks.", "An important feature of our approach is that the results from each study seamlessly fit in the larger context of our other availability assurance services. This ensures that tasks and opportunities will not fall between the cracks.", "Our consultants are highly qualified trainers and can transfer the knowledge through formal courses."],
        "lists": {
          "intro": "Our operations studies include:",
          "lists": [{
            "header": "opportunity oriented studies",
            "points": ["availability requirements", "reliability modelling", "criticality assessment", "life cycle project valuation", "verification and review", "defect elimination mgt (DEM)", "root cause analysis (RCA)"]
            }, {
            "header": "task oriented studies",
            "points": ["threat mitigation", "maintainability assessment", "failure mode & effect analysis (FMEA)", "maintenance planning (RCM)", "inspection planning (RBI)"]
            }]
        }
        }]
    },
    "markets": {
      "headline": "our markets",
      "lead": "SecuoS has its roots in the oil & gas and its associated petrochemicals market sectors. The processes and tools that we have developed over the years are universally applicable to any sector.",
      "expand": true,
      "subsections": [{
        "subhead": "energy",
        "image": "balance",
        "body": ["SecuoS has deep knowledge of the traditional energy and petrochemical sectors. We are well-connected with several of the major oil & gas companies. Our track record includes studies for some of the largest projects in the industry.", "We are expanding our network into the various renewable energy sectors. Our ARTIS Renewables application has been developed to support them. We are excited about the opportunity to accelerate the energy transition."],
        "lists": {
          "intro": "We are active in the following market sectors:",
          "lists": [{
            "points": ["oil & gas", "integrated LNG", "petrochemicals", "gasification", "hydrogen", "solar parks", "wind farms", "power transmission", "utilities"]
            }]
        }
        }, {
        "subhead": "beyond energy",
        "image": "mission",
        "body": ["SecuoS is continuously exploring new market sectors. Our focus are those with critical continuous production systems or with large-scale and complex systems."],
        "lists": {
          "intro": "Some examples of the sectors that we are connecting with:",
          "lists": [{
            "points": ["space missions", "water-energy-food nexus", "satelite deployment", "simulation & virtual reality"]
            }]
        }
        }]
    },
    "platform": {
      "headline": "the ARTIS platform",
      "lead": "ARTIS is the Availability and Reliability Tracking Information System. It is our platform to configure models, reports and training for computing the available capacity of continuous production systems.",
      "subsections": [{
        "image": "map",
        "pubs": ["artis24"],
        "links": ["artis24demo", "artiswiki"],
        "body": ["The models simulate the impact of events like maintenance, inspection, testing, failures and repairs. ARTIS calculates the available capacity levels, their frequency and duration, as well as the availability of the integrated system.", "ARTIS uses algorithms to approximate availability functions which is extremely more efficient than using Monte Carlo simulations. This unique efficiency allows to evaluate large-scale and complex projects. ARTIS can be the backbone of a responsive availability assurance process to rapidly mitigate any unexpected operational risk."],
        "lists": {
          "lists": [{
            "header": "ARTIS features:",
            "points": ["efficient algorithms", "built-in fault tree analyses", "web-based user interface", "secure cloud storage", "documentation in wiki pages", "fast JSON data exchange", "Google Maps interface", "support of ISO standards", "regular release updates", "full ownership by SecuoS"]
          }]
        }
      }]
    },
    "applications": {
      "headline": "our applications",
      "lead": "The two most important applications that have been built on the ARTIS platform are ARTIS Live and ARTIS Renewables.",
      "subsections": [{
        "subhead": "ARTIS Live",
        "image": "live",
        "pubs": ["artislive"],
        "links": ["artislivedemo"],
        "body": ["ARTIS Live evaluates, shortly after an event, the impact of planned and unplanned downtime, capacity changes and all critical decisions on the production availability of the integrated system.", "Failures, maintenance, process upsets and other critical events are tracked as time develops and these events are loaded automatically into the availability model. The availability model is then run to produce an interactive results website, complete with hierarchical breakdowns and automatically generated charts.", "With its built-in learning cycle, ARTIS Live helps your organisation to meet the ISO 14224, 20815 and 55000 asset management standards."]
        }, {
        "subhead": "ARTIS Renewables",
        "pubs": ["artisren"],
        "links": ["artisrenewablesdemo"],
        "image": "weather",
        "body": ["ARTIS Renewables covers all possible influences on demand, local generation and distribution, including weather influences and other random factors and calculates the expected remaining need for centrally generated power.", "This contributes to the objective weighing of all risks, the joint decision-making process and thus the speeding up of the energy transition.", "The application provides managers and project developers with insight about possible renewable energy projects, from a system integration and security of supply point of view."]
        }]
    },
    "training": {
      "headline": "training",
      "subsections": [{
        "subhead": "tagline",
        "body": ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]
        }]
    },
    "implementation": {
      "headline": "implementation",
      "subsections": [{
        "subhead": "tagline",
        "body": ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]
        }]
    },
    "terms": {
      "headline": "When using this website",
      "subsections": [{
        "subhead": "privacy",
        "body": ["Our website is safe to visit and we do not collect any data."]
      }, {
        "subhead": "disclaimer",
        "links": ["gnu"],
        "body": ["We have taken every effort and care in preparing the material on this website, however we disclaim all warranties, express or implied, as to the accuracy thereof, and the website material shall at all times constitute work in progress which we may change without notice. Nothing on this website constitutes advice, nor does the downloading of any material create any contractual relationship. We shall not be liable for any loss or damage arising from your use of or reliance on the website material.",
"The ARTIS user interface is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY, without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE, as open source software under the GNU General Public License, Version 3, 29 June 2007.",
"Any use of the integrated ARTIS software, including the user interface and its software components that run on the cloud servers, comes with ABSOLUTELY NO WARRANTY, to the extent permitted by applicable law.",
"All links to other websites are provided for convenience only. We do not sponsor, nor necessarily endorse or otherwise approve of any information or statements appearing on those websites."]
      }, {
        "subhead": "copyright",
        "body": ["The content of this website is the copyright of Secuos BV (SecuoS). SecuoS's copyright must remain on all reproductions of the material acquired from this website. The layout and design are copyrighted by SecuoS and as such may not be duplicated.",
        "The templates, javascript and style sheets of this website are the copyright of Ask Learn Share Ltd. The Angular and Material Design frameworks used for this website are the copyright of Alphabet Inc",
"Every reasonable effort has been made to seek appropriate permission from people identifiable in photographs used throughout the website.",
"You may download, store and use the material for your own personal use only."]
        }]
    }
  };
  self.topics = {
    "dummy": {
      "headline": "topic title",
      "subhead": "topic tagline",
      "story": {
        "know": "A short description of the topic by giving the reader some new insights. A bit like an fascinating 'did you know that' fact. (KNOW)",
        "feel": "A short description how we suggest to tackle this topic. Emphasise the unicity and impact of our approach. (FEEL)",
        "do": "A short description of how we can work together with others. It is a 'call for action'. (DO)"
      },
      "image": "dummy"
    },
    "oil": {
      "headline": "oil refining",
      "subhead": "taking it to the limit",
      "story": {
        "know": "The margins in oil refining are slim and there is a constant pressure to cut costs and to operate the assets as efficiently as possible.",
        "feel": "Fluctuating market conditions require frequent adjustments to crude diets and plant changes. The different operating conditions put a strain on the equipment.",
        "do": "SecuoS provides an availability assurance process that continuously tracks and predicts the performance based on the actual process conditions, plant changes and maintenance schedules. This ensures that the assets are always configured and operated optimally."
      },
      "image": "oil"
    },
    "h2supply": {
      "headline": "hydrogen supply",
      "subhead": "H2 as feedstock and fuel",
      "story": {
        "know": "The path towards a low-carbon economy foresees a significant growth of the use of hydrogen in the industry. Be it green, blue or grey.",
        "feel": "The increased demand for hydrogen and the diversification of its sources put the security of supply higher than ever on the agenda.",
        "do": "SecuoS builds on its significant experience with natural gas supply for LNG production and offers its expertise to assure the hydrogen supply."
      },
      "image": "h2supply"
    },
    "complex": {
      "headline": "petrochemicals",
      "subhead": "avoid surprise downtimes",
      "story": {
        "know": "Petrochemicals plants often consist of multiple units with many lines, furnaces and reactors. Each of these require maintenance and shutdowns.",
        "feel": "Scheduling such outages, estimating the impact and assessing the risk of the various options proves to be a complex process, leaving the value chain exposed to surprise outcomes. ",
        "do": "SecuoS advanced models bring science into these discussions as opposed to deterministic spreadsheets, and help to identify the risks more confidently."
      },
      "image": "complex"
    },
    "utilities": {
      "headline": "utilities",
      "subhead": "is there still sufficient redundancy?",
      "story": {
        "know": "In the process industry, utilities are critical to balance the mass, heat and energy between the various units. Their availability is often taken for granted.",
        "feel": "Plant expansions and ageing equipment may erode spare capacity. Then, any failure in steam generation, hot oil, cooling water and other utilities can cause serious production losses.",
        "do": "SecuoS has the capability to include all critical utilities into one single model, and to take planned maintenance and unplanned failures into account. New insights will steer the options to restore the required redundancy."
      },
      "image": "turbine",
      "case": "seawater"
    },
    "grid": {
      "headline": "power grids",
      "subhead": "critical infrastructure",
      "story": {
        "know": "Conventional thermal power plants are being replaced by Variable Renewable Energy (VRE) sources, such as wind farms and solar parks.",
        "feel": "The intermittent and uncontrollable nature of the VRE sources, the shifting load profiles and finite transmission capacity will affect systems integration and the security of supply to consumers.",
        "do": "SecuoS has developed a novel, efficient and holistic platform for making the probabilistic assessment of the available capacity of power generation and transmission, balanced against the net regional and local load."
      },
      "image": "grid"
    },
    "transition": {
      "headline": "regional energy transition",
      "subhead": "putting Paris into practice",
      "story": {
        "know": "For a successful energy transition, regional and local authorities and stakeholders will need to rank and select the opportunities for green energy projects.",
        "feel": "With the increasing and random influences on load and local green generation, including weather, there will inevitably remain a variable need for centrally generated power.",
        "do": "SecuoS can assist with an objective weighing of all risks, enabling transparent and joint decision making, thus firming up the assumptions and speeding up the energy transition."
      },
      "image": "transition"
    },
    "cluster": {
      "headline": "clustered facilities",
      "subhead": "a networked value chain",
      "story": {
        "know": "Petrochemical companies operate in clusters that are highly interdependent. They are partners, customers and competitors at the same time.",
        "feel": "Production data is often commercially sensitive. On the other hand, to ensure investments with long-term payback, transparency will be required.",
        "do": "SecuoS works as an independent advisor with each of the individual companies to model the integrated network. This creates shared insights that are focussed on improving the overall cluster robustness."
      },
      "image": "cluster",
      "case": "pipeline"
    },
    "greenh2": {
      "headline": "Green hydrogen",
      "subhead": "enabling a robust energy transition",
      "image": "fcev",
      "story": {
        "know": "High expectations have risen on new electrolysis technologies to produce hydrogen from water using renewable electricity.",
        "feel": "These new technologies require development, investment optimisation and setting up maintenance programmes, taking weather conditions into account.",
        "do": "SecuoS is eager to share their experience in setting up asset management systems for such new technologies and the related storage in this green context."
      }
    },
    "integratedlng": {
      "headline": "integrated LNG",
      "subhead": "never a missed cargo",
      "image": "integratedlng",
      "story": {
        "know": "In LNG production, the challenge is to plan the integrated operations, from well to ship, to ensure that agreed delivery schedules are always met.",
        "feel": "The complex interaction between all process stages and the many possible causes of downtime can lead to extended unplanned slow downs or even production stops.",
        "do": "With deep knowledge of production availability in liquefaction, SecuoS brings extensive experience in the integrated optimisation and planning of the entire value chain."
      }
    }
  };
  self.images = {
    "dummy": {
      "url": "https://thewallpaper.co/wp-content/uploads/2016/02/sunset-at-rocky-beach-hd-sea-wallpapers-ocean-sun-amazing-beach-holiday-happiness-widescreen-free-1805x1015-768x432.jpg",
      "url2": "http://pixselo.com/wp-content/uploads/2018/03/dummy-placeholder-image-400x400-300x300.jpg",
      "source": "unknown",
      "caption": "short caption"
    },
    "pluto": {
      "url": "https://images.thewest.com.au/publication/B88985511Z/1539054750936_GIA1SAL7V.2-2.jpg?imwidth=800&impolicy=.auto",
      "source": "Woodside Energy",
      "caption": "the Pluto LNG plant of Woodside Energy"
    },
    "olokola": {
      "url": "http://www.coastalreview.org/wp-content/uploads/2015/01/lng-featured.jpg",
      "source": "Nigerian National Petroleum Corporation",
      "caption": "Olokola LNG of the Nigerian National Petroleum Corporation"
    },
    "sakhalin": {
      "url": "http://www.gazprom.com/preview/f/posts/82/518607/w1100_15-11-2016_sakhalin-2_5.jpg",
      "source": "Gazprom",
      "caption": "the LNG plant at Prigorodnoye"
    },
    "nam": {
      "url": "https://securityofsupply.com/images/nam.png",
      "source": "Royal Dutch Shell",
      "caption": "the Nederlandse Aardolie Maatschappij gas developments"
    },
    "dubaico2": {
      "url": "https://securityofsupply.com/images/dubai.jpg",
      "source": "Royal Dutch Shell",
      "caption": "Shell CO2 enhanced oil recovery in Dubai"
    },
    "me": {
      "url": "https://securityofsupply.com/images/me.jpg",
      "source": "(undisclosed)",
      "caption": "an operation in the Middle East"
    },
    "ssb": {
      "url": "https://securityofsupply.com/images/sarawak.png",
      "source": "Royal Dutch Shell",
      "caption": "oil & gas operations along the Sarawak coast line"
    },
    "oil": {
      "url": "https://www.schneider-electric.co.uk/en/Images/138766096-708x218.jpg",
      "source": "Schneider",
      "caption": "daily decision in an oil refinery"
    },
    "project": {
      "url": "http://archive.fabacademy.org/archives/2017/fablabkuwait/students/444/img/portfolio/week19.jpg",
      "source": "Fab Academy",
      "caption": "project development"
    },
    "bottlenecks": {
      "url": "https://www.marketlogicsoftware.com/wp-content/uploads/2018/03/Heineken.jpg",
      "source": "Sjoerd Koornstra",
      "caption": "prioritise bottlenecks and rank options"
    },
    "binocular": {
      "url": "https://images.robertharding.com/preview/RF/TI/HORIZONTAL/1178-22158.jpg",
      "source": "Robert Harding",
      "caption": "long-term planning begins early"
    },
    "handover": {
      "url": "http://www.rtvzwollefm.nl/cwm/fm/userfiles/content/eyecatcher/normal/327175_regio_zwolle_estafette.jpg",
      "source": "City of Zwolle",
      "caption": "handover from the project to operations"
    },
    "chain": {
      "url": "http://www.thepartneringgroup.com/wp-content/uploads/2012/05/Optimized-Value-Chain-Assessment.jpg",
      "source": "The Partnering Group",
      "caption": "value chains continuously change"
    },
    "crane1": {
      "url": "https://www.rhtechnical.com/assets/components/phpthumbof/cache/Sices_erectionday_pressurevessel.22de03b678b7de4812784ddfd3a5ae61.jpg",
      "source": "Mamoet",
      "caption": "the value chain continuously changes"
    },
    "crane2": {
      "url": "https://cranenetworknews.com/wp-content/uploads/2017/11/dji_0194_resized-300x162.jpg",
      "source": "Mamoet",
      "caption": "the value chain continuously changes"
    },
    "drone": {
      "caption": "preventive maintenance and inspection tasks",
      "url": "http://dronebuffs.com/wp-content/uploads/2015/09/z_z_drone.jpg",
      "source": "Siemens (Drone Buffs)"
    },
    "secuos01": {
      "caption": "tag chart",
      "url": "https://securityofsupply.com/images/Fotolia_20293904_XS.jpg",
      "source": "SecuoS (licensed)"
    },
    "secuos02": {
      "caption": "project managers",
      "url": "https://securityofsupply.com/images/Fotolia_4205758_XS.jpg",
      "source": "SecuoS (licensed)"
    },
    "secuos03": {
      "caption": "off-shore platforms at sunset",
      "url": "https://securityofsupply.com/images/Fotolia_4955324_XS.jpg",
      "source": "SecuoS (licensed)"
    },
    "secuos04": {
      "caption": "meeting",
      "url": "https://securityofsupply.com/images/Fotolia_5555674_XS.jpg",
      "source": "SecuoS (licensed)"
    },
    "secuos04": {
      "caption": "target",
      "url": "https://securityofsupply.com/images/Fotolia_7656250_XS.jpg",
      "source": "SecuoS (licensed)"
    },
    "secuos05": {
      "caption": "electricity masts",
      "url": "https://securityofsupply.com/images/Fotolia_8208289_XS.jpg",
      "source": "SecuoS (licensed)"
    },
    "secuos06": {
      "caption": "electricity masts at sunset",
      "url": "https://securityofsupply.com/images/Fotolia_9699481_XS.jpg",
      "source": "SecuoS (licensed)"
    },
    "secuos07": {
      "caption": "LNG cargo",
      "url": "https://securityofsupply.com/images/Fotolia_14754863_XS.jpg",
      "source": "SecuoS (licensed)"
    },
    "secuos08": {
      "caption": "off-shore platform",
      "url": "https://securityofsupply.com/images/Fotolia_13661538_XS.jpg",
      "source": "SecuoS (licensed)"
    },
    "balance": {
      "url": "https://www.iea.org/media/news/2017/170901CommentaryEnergyBalances.jpg",
      "source": "International Energy Agency",
      "caption": "the global energy balance"
    },
    "rocket": {
      "url": "https://blogs.flinders.edu.au/fit/wp-content/uploads/sites/19/2017/11/rocket-blueprint-children-plain-820x532.jpg",
      "source": "Flinders",
      "caption": "ensuring the mission reliability"
    },
    "mission": {
      "url": "https://cdn.mos.cms.futurecdn.net/MDXMmMv5rwqtRgxpSCXpfG-650-80.jpg",
      "source": "NASA",
      "caption": "ensuring the mission reliability"
    },
    "uncertainties": {
      "url": "https://i1.wp.com/www.cbcsolutions.biz/wp-content/uploads/2015/07/cloud-question-mark-710x345.jpg?resize=570%2C345",
      "source": "CBC Cloud Solutions",
      "caption": "dealing with all relevant uncertainties"
    },
    "secuos": {
      "url": "https://securityofsupply.com/images/logo.svg",
      "source": "SecuoS",
      "caption": "Security of Supply"
    },
    "adnoconshore": {
      "url": "https://securityofsupply.com/images/adnoc.jpeg",
      "source": "ADNOC",
      "caption": "the ADNOC on-shore field developments in Abu Dhabi"
    },
    "transition": {
      "url": "https://www.ucsusa.org/sites/default/files/styles/large/public/images/2014/08/energy-renewable-workers-installing-solar-rooftop-panels.jpg?itok=1fDayxfy",
      "source": "Concerned Scientists",
      "caption": "energy transition"
    },
    "h2supply": {
      "url": "https://www.airliquide.com/sites/airliquide.com/files/styles/905x345/public/2017/01/03/hydrogen-storage-banner.jpg?itok=NNlBkzq2",
      "source": "Air Liquide",
      "caption": "hydrogen storage and supply"
    },
    "turbine": {
      "url": "http://events.imeche.org/EventMedia/Images/ProductTitles/f8a1199f3cf24309b0a667fb4e1302d2.jpg",
      "source": "Imeche",
      "caption": "a gas turbine overhaul"
    },
    "space": {
      "url": "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2016/11/future_launchers_preparatory_programme/16545899-1-eng-GB/Future_Launchers_Preparatory_Programme_large.png",
      "source": "European Space Agency",
      "caption": "the next generation launchers"
    },
    "complex": {
      "url": "https://www.shell.com/about-us/major-projects/shell-eastern-petrochemicals-complex/shell-eastern-petrochemicals-complex-overview/_jcr_content/pagePromo/image.img.320.jpeg/1449074353205/shell-eastern-petrochemicals-complex-at-night.jpeg",
      "source": "Royal Dutch Shell",
      "caption": "a complex petrochemical plant"
    },
    "cluster": {
      "url": "https://nrgedge.s3.amazonaws.com/nrgedgeuserprofile/1475142336.png",
      "source": "NrgEdge",
      "caption": "a cluster of petrochemical plants"
    },
    "climate": {
      "url": "https://www.newshub.co.nz/dam/form-uploaded-images/climate-Change-Institute-Uni-of-Maine-WORLD-MAP-TEMPERATURE-1120.jpg",
      "source": "newshub.co.nz",
      "caption": "climate change"
    },
    "fcev": {
      "url": "https://media.toyota.co.uk/wp-content/uploads/2018/06/LUC_4063-1000x667.jpg",
      "source": "Toyota",
      "caption": "green hydrogen production for mobility"
    },
    "fcev2": {
      "url": "http://www.drivenews.co.za/wp-content/uploads/2013/06/2013-Hyundai-Sonata-01-700x393.jpg",
      "source": "Hyundai",
      "caption": "green hydrogen production for mobility"
    },
    "fcev3": {
      "url": "https://www.rolandberger.com/content_assets/content_images/captions/Roland_Berger_450_fuel_cells_and_hydro_power_IT_image_caption_w768.jpg",
      "source": "Audi",
      "caption": "green hydrogen production for mobility"
    },
    "complexity": {
      "url": "https://eldra.nl/sites/default/files/styles/gallery_thumb/public/reference_images/Shell%20I.jpg",
      "source": "Royal Dutch Shell",
      "caption": "modelling large, complex and integrated systems is our bread an butter"
    },
    "grid": {
      "url": "https://external-preview.redd.it/7GuD2YSD7sVDdTaXhhfsrRBvND3I_2t35kAkM0HIAa0.jpg?auto=webp&s=278687c66c2023c8f5109134713436f65dcf6e98",
      "source": "Carbon Brief",
      "caption": "electricity grids"
    },
    "klimaat": {
      "url": "https://overmorgen.nl/wp-content/uploads/2018/10/Schermafbeelding-2018-07-25-om-15.55.20-1-2142x1071.png",
      "source": "overmorgen.nl",
      "caption": "the climate accord from a Dutch perspective"
    },
    "integratedlng": {
      "url": "https://www.shell.com/promos/prelude-flng-aus/_jcr_content/pagePromo/image.img.640.jpeg/1492686751314/overhead-view-of-prelude-flng.jpeg?imformat=chrome&imwidth=640",
      "source": "Royal Dutch Shell",
      "caption": "a floating integrated LNG facility"
    },
    "integratedlng2": {
      "url": "http://www.sakhalinenergy.ru/upload/iblock/cae/cae1df0ecbb2ec8a17bc38115ef4375c.jpg",
      "source": "Sakhalin Energy",
      "caption": "an integrated LNG facility"
    },
    "seawater": {
      "url": "http://h2.eu/s/img/seawater.jpg",
      "source": "Joke Driessen",
      "caption": "sea water coolers are notorious for reliability issues"
    },
    "seawater2": {
      "url": "https://www.samcotech.com/app/uploads/2016/10/Cooling-tower-on-roof-of-building-1024x683.jpg",
      "source": "unknown",
      "caption": "sea water coolers are notorious for reliability issues"
    },
    "moomba": {
      "url": "https://www.abc.net.au/news/image/922900-3x2-940x627.jpg",
      "source": "Santos",
      "caption": "the Santos gas separation plant in Moomba"
    },
    "map": {
      "url": "http://h2.eu/s/img/artisgridsq.gif",
      "source": "SecuoS / Alphabet Inc",
      "caption": "the visual mapping of a network"
    },
    "rotterdam": {
      "url": "http://defotograaf.eu/blog/wp-content/uploads/2015/07/Botlek.jpg",
      "source": "Joop van Houdt",
      "caption": "the industrial complex near Rotterdam"
    },
    "singapore": {
      "url": "https://www.fuelsandlubes.com/wp-content/uploads/2017/07/Shell-Pulau-Bukom-Manufacturing-Site-Singapore.jpg",
      "source": "fuelsandlubes.com",
      "caption": "a refinery complex in Singapore"
    },
    "directed": {
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Topological_Ordering.svg/800px-Topological_Ordering.svg.png",
      "source": "Wikipedia",
      "caption": "directed graphs"
    },
    "gippsland": {
      "url": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/18/15/wind-turbines-sea.jpg",
      "source": "The Age newspaper",
      "caption": "the Star of the South wind farm of the coast in Victoria"
    },
    "qg4": {
      "url": "https://www.shell.com/energy-and-innovation/natural-gas/gas-to-liquids/_jcr_content/pagePromo/image.img.960.jpeg/1533305707587/shell-gtl-plant-qatar.jpeg?imwidth=960",
      "source": "Qatargas",
      "caption": "the Qatargas LNG facilities in Ras Laffan"
    },
    "nlng": {
      "url": "http://www.nlng.com/SiteAssets/NLNGImages/HomeBanner/img5big.jpg",
      "source": "Nigeria Liquid Natural Gas",
      "caption": "the Nigeria Liquid Natural Gas plant at Port Harcourt"
    },
    "wind2": {
      "url": "https://s1.cdn.autoevolution.com/images/news/wind-energy-summit-kicks-off-in-cali-35636_1.jpg",
      "source": "unknown",
      "caption": "wind energy"
    },
    "fault": {
      "url": "https://img.bhs4.com/55/8/558BC470FA47255E61AD261157AAE90FC8606455_large.jpg",
      "source": "wikipedia",
      "caption": "fault tree analysis"
    },
    "live": {
      "url": "https://securityofsupply.com/images/results.png",
      "url2": "http://t2.gstatic.com/images?q=tbn:ANd9GcS8RuXuE8hSflGR3Ub1OC1vIb1RC1FrOMzlFCp1NnoT7O8mOotKHN6Ig7E",
      "source": "SecuoS",
      "caption": "real-time models to mitigate risks rapidly"
    },
    "workshop": {
      "url": "https://securityofsupply.com/images/workshop.jpg",
      "source": "Mercure Hotels",
      "caption": "hands-on workshops in the Ardoe House in Aberdeen"
    },
    "weather": {
      "url": "https://www.civicsolar.com/sites/default/files/styles/scale_crop_612_400/public/support_article/images/snow4.jpg?itok=K3WWblOk",
      "source": "Civic Solar",
      "caption": "stochastic weather influences"
    },
    "prelude": {
      "url": "https://3kbo302xo3lg2i1rj8450xje-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/19264713_1468008699909397_4066923731481131129_o_LUCiD-800x533.jpg",
      "source": "Royal Dutch Shell",
      "caption": "our track record includes the world's largest projects"
    },
    "prelude2": {
      "url": "https://www.shell.com/inside-energy/prelude-sail-away/_jcr_content/par/textimage_1359059058/image.img.384.jpeg/1498727046552/prelude-towed.jpeg?imformat=chrome&imwidth=384",
      "source": "Royal Dutch Shell",
      "caption": "Prelude Floating LNG facility"
    },
    "accelerate1": {
      "url": "http://interfaxenergy.com/gasdaily/uploads/articles/15047008976887.jpg",
      "source": "DNV / Interfax",
      "caption": "the projected energy transition 1980-2050"
    },
    "accelerate2": {
      "url": "https://meijielectric.ph/wp-content/uploads/2012/08/solar-powered-plane.jpg",
      "source": "Solar Impulse",
      "caption": "accelerating the energy transition"
    },
    "accelerate3": {
      "url": "http://cranemag.com/wp-content/uploads/2017/10/liebherr-used-lr-1600-2w-iv-1-300dpi.jpg",
      "source": "Crane Mag / Liebherr",
      "caption": "the rapid energy transition"
    },
    "workshopad": {
      "url": "https://securityofsupply.com/images/photos/ADCO%20AAW2-6%20Sep%202007.jpg",
      "source": "SecuoS",
      "caption": "participants in Abu Dhabi"
    },
    "lngusa": {
      "url": "https://securityofsupply.com/images/usa.jpg",
      "source": "(undisclosed)",
      "caption": "LNG exports fron the USA"
    },
    "artisv11": {
      "url": "https://securityofsupply.com/images/group.svg",
      "source": "SecuoS",
      "caption": "ARTIS first public release"
    },
    "ormen": {
      "url": "https://images.oedigital.com/images/maritime/w600/image-norwegian-petroleum-directorate-95657.jpg",
      "source": "Norwegian Petroleum Directorate",
      "caption": "the Ormen Lange subsea gas production facility, Norway"
    }
  };
  self.logos = {
    "iso": {
      "url": "https://www.iso.org/modules/isoorg-template/img/iso/iso-logo-print.gif",
      "name": "the International Organization for Standardization"
    },
    "winddays": {
      "url": "https://www.winddays.nl/wp-content/uploads/2017/11/WindDays-logo-klein.jpg",
      "name": "WindDays Conference"
    },
    "etrm": {
      "url": "https://energiekaart.net/wp-content/uploads/2016/07/Energietransitierekenmodellen-300x79.png",
      "name": "Energy Transition Computer Modelling tools"
    },
    "oeec": {
      "url": "https://pbs.twimg.com/profile_images/956869221484462080/g3yAOhol_400x400.jpg",
      "name": "Offshore Energy Exhibition & Conference"
    },
    "entsoe": {
      "url": "https://media.glassdoor.com/sql/776606/european-network-of-transmission-system-operators-for-electricity-squarelogo-1436174428392.png",
      "name": "European Network of Transmission System Operators"
    },
    "country-au": {
      "url": "https://cdn.countryflags.com/thumbs/australia/flag-round-250.png",
      "name": "undisclosed customer"
    },
    "country-us": {
      "url": "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png",
      "name": "undisclosed customer"
    },
    "country-sg": {
      "url": "https://cdn.countryflags.com/thumbs/singapore/flag-round-250.png",
      "name": "undisclosed customer"
    },
    "country-nl": {
      "url": "https://cdn.countryflags.com/thumbs/netherlands/flag-round-250.png",
      "name": "undisclosed customer"
    },
    "woodside": {
      "url": "https://www.woodside.com.au/assets/static/images/svg/logo-woodside.svg",
      "name": "Woodside Energy"
    },
    "santos": {
      "url": "https://pbs.twimg.com/profile_images/818960031106404352/oVL-8Y5d_400x400.jpg",
      "name": "Santos natural gas"
    },
    "seic": {
      "url": "https://media.glassdoor.com/sql/42108/sakhalin-energy-squarelogo.png",
      "name": "Sakhalin Energy Investment Company"
    },
    "qg": {
      "url": "https://pbs.twimg.com/profile_images/943082081227243522/8xsFafiF_400x400.jpg",
      "name": "QatarGas"
    },
    "nnpc": {
      "url": "http://nationaljournal.ng/wp-content/uploads/2016/08/NNPC_Logo.jpg",
      "name": "Nigerian National Petroleum Corporation"
    },
    "nlng": {
      "url": "http://www.projectstrategy.com/wp-content/uploads/2016/01/clients-nigeria-lng.png",
      "name": "Nigeria Liquid Natural Gas"
    },
    "nam": {
      "url": "https://pbs.twimg.com/profile_images/572839802460082176/93teM4-7_400x400.jpeg",
      "name": "Nederlandse Aardolie Maatschappij"
    },
    "petronas": {
      "url": "https://s3-ap-southeast-1.amazonaws.com/s3.loopme.my/img/newos/brands/2x/tf9DfF8OVu9qIV1M.png",
      "name": "Petronas"
    },
    "bcg": {
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/BCG_Corporate_Logo.jpg/220px-BCG_Corporate_Logo.jpg",
      "name": "Boston Consulting Group"
    },
    "gasco": {
      "url": "http://www.avi-sa.com/panel/client_images/image--6.jpg",
      "name": "Abu Dhabi Gas Industries (GASCO)"
    },
    "adnoc": {
      "url": "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/022017/untitled-1_115.jpg?itok=-Bv80tNU",
      "name": "Abu Dhabi National Oil Company"
    },
    "shell": {
      "url": "https://ocs-pl.oktawave.com/v1/AUTH_4e9ef52d-3acd-4c38-88cc-b3f63fd7884b/GP-pracodawcy/cache/profile_logo/c43/64a/6e6db1493dedb2d0b3f330e7f105e5b3ba368d67b431be6687e3b555c6.png",
      "name": "Royal Dutch Shell"
    },
    "bp": {
      "url": "https://pbs.twimg.com/profile_images/879387800931643392/jBGUEHKu_400x400.jpg",
      "name": "bp plc"
    }
  };
  self.cases = {
    "dummy": {
      "headline": "case title",
      "subhead": "case tagline",
      "story": {
        "problem": "A short description of the problem or challenge that the customer was facing. Include the importance of solving it.",
        "solution": "A short description of the solution or approach. Explain what difference it made to the customer.",
        "next": "A short description of the next steps. If possible, mention some use-cases where a similar solutions can be beneficial."
      },
      "image": "dummy"
    },
    "santos": {
      "headline": "implementing availability modelling at Santos",
      "subhead": "quantify the past to better predict the future",
      "story": {
        "problem": "The Moomba gas processing facility was being maintained in reactive and partly off-focus mode.",
        "solution": "Availability modelling of the Moomba plant has quantified the risks to the effectiveness of gas production and the benefits of past projects. The modelling process has improved the corporate understanding of the impact of availability on the effectiveness of gas production.",
        "next": "The business is now focused on availability over reliability as a true measure of plant performance."
      },
      "image": "moomba",
      "pub": "moomba"
    },
    "adnoc": {
      "headline": "integrated availability model for ADNOC",
      "subhead": "continued modelling to sustain margins",
      "story": {
        "problem": "ADNOC (formerly known as ADCO) was looking for a transparent way to keep control of their oil field developments to increase capacity to almost 2% of world oil production.",
        "solution": "The ADNOC Availability Assurance team was set up and an ARTIS Live availability model had been developed for assessing the future effective capacity, tracking the actually achieved effective capacity and planning the maintenance and inspection.",
        "next": "The model supports further analysis and stimulation to improve the system availability, particularly when the spare capacity starts to decrease."
      },
      "image": "adnoconshore",
      "pub": "adnoc"
    },
    "pipeline": {
      "headline": "petrochemicals network",
      "subhead": "underutilised shared pipeline",
      "story": {
        "problem": "Four companies are connected to each other via a pipeline network as supplier and consumer of raw material. The network is underutilised. While looking for improvements, the companies were unsure about the return on their investment and they could not share commercially sensitive information between them.",
        "solution": "Secuos worked closely with each company and used their individual data to build an integrated reliability model. It made transparent the true losses over time and which plants had underutilised capacity.",
        "next": "Their common understanding allowed them to suggest improvements, which SecuoS evaluated in terms of value creation for each individual company and robustness of the overall network. Data-driven business decisions are now underpinning the board proposals."
      },
      "image": "cluster",
      "pub": "pipeline"
    },
    "seawater": {
      "headline": "sea water cooling facilities",
      "subhead": "downtime reduced by a factor six",
      "story": {
        "problem": "To distill crude oil, cooling facilities are essential to refineries. Sea water coolers are commonly used and, unfortunately, involve fouling, corrosion and the dependance on imported electrical power or steam.",
        "solution": "SecuoS demonstrated that a combination of several modest technical modifications would increase the cooling availability from 82% to 97%. This included a partial switch from from steam to electrical power, improved preventive maintenance, and upgrading of the packing and valve types.",
        "next": "Significant unplanned production losses are now being prevented. The client will performing similar availability assurance studies of other parts of their operations aiming to improve the refinery performance even more."
      },
      "image": "seawater",
      "pub": "seawater"
    }
  };
  self.events = {
    "sets": {
      "track record": {
        "indexMax": 19,
        "filter": ["study", "support"],
        "headline": "our track record",
        "subhead": "a selection of our global portfolio"
      },
      "news": {
        "indexMax": 5,
        "filter": ["network", "application", "visit", "other", "workshop", "agreement"
        ],
        "headline": "latest news"
      }
    },
    "phrases": {
      "network": "SecuoS joins",
      "application": "release of",
      "visit": "Secuos at",
      "study": "study for",
      "other": null,
      "workshop": "workshop for",
      "support": "support for",
      "agreement": "agreement with"
    },
    "events": [{
        "start": null,
        "end": "Dec 2018",
        "service": "",
        "deliverable": "",
        "type": "member",
        "name": "ETRM Expert Group",
        "sector": "modelling",
        "location": "Netherlands",
        "lead": "SecuoS has joined the Dutch Expert Group on Energy Transition Computer Modelling tools (ETRM). It is organised by Netbeheer Nederland and aims to facilitate the green energy transition in The Netherlands. The ARTIS tool by SecuoS will be part of the recommended toolkit.",
        "image": "",
        "logo": "etrm"
    },
      {
        "start": null,
        "end": "Dec 2018",
        "service": "",
        "deliverable": "",
        "type": "application",
        "name": "ARTIS V2.4",
        "sector": "modelling",
        "location": "Hoofddorp",
        "lead": "ARTIS V2.4 has been released to interface with Google maps. This facilitates the complex modelling of variable renewable energy and integrated electric power systems. The new release also benefits from general efficiency improvements.",
        "image": "map",
        "logo": ""
    },
      {
        "start": null,
        "end": "Nov 2018",
        "service": "",
        "deliverable": "",
        "type": "visit",
        "name": "ENTSO-E Connecting Europe",
        "sector": "power",
        "location": "Brussels",
        "lead": "The meeting revolved around the Electricity Futures 2020-2040 Mid-term Adequacy Forecast (MAF) and the Ten Year Network Development Plan (TYNDP) for 2018.",
        "image": "",
        "logo": "entsoe"
    },
      {
        "start": null,
        "end": "Oct 2018",
        "service": "",
        "deliverable": "",
        "type": "visit",
        "name": "Offshore Energy Exhibition & Conference",
        "sector": "oil & gas",
        "location": "Amsterdam",
        "lead": "The yearly conference provided a deeper understanding of the challenges facing the transitioning from the traditional offshore oil & gas is towards offshore wind farms.",
        "image": "",
        "logo": "oeec"
    },
      {
        "start": null,
        "end": "Oct 2018",
        "service": "",
        "deliverable": "",
        "type": "visit",
        "name": "ENTSO-E Power Coordination Europe",
        "sector": "power",
        "location": "Brussels",
        "lead": "Insights were gained on the challenges to tie all European countries together to sec secure the power supply.",
        "image": "",
        "logo": "entsoe"
    },
      {
        "start": null,
        "end": "Sep 2018",
        "service": "",
        "deliverable": "",
        "type": "visit",
        "name": "ESA industry space days",
        "sector": "space",
        "location": "Noordwijk",
        "lead": "Aiming to further cross-fertilise our efficient modelling algorithms from the energy sector, connections were made with various organisations.",
        "image": "space",
        "logo": ""
    },
      {
        "start": 2017,
        "end": "Nov 2018",
        "service": "security of supply",
        "deliverable": "value chain optimisation",
        "type": "study",
        "name": "the Rotterdam industrial area",
        "sector": "petrochemicals",
        "location": "Rotterdam",
        "lead": "ARTIS has been successfully used to advise on a range of projects in the Rotterdam industrial area.",
        "image": "rotterdam",
        "logo": "country-nl"
    },
      {
        "start": null,
        "end": "Jun 2018",
        "service": "",
        "deliverable": "",
        "type": "visit",
        "name": "WindDays 2018",
        "sector": "wind",
        "location": "Rotterdam",
        "lead": "Experiences were shared to better understand the specific challenges of the industry, one of which being to model the stochastic nature of wind.",
        "image": "",
        "logo": "winddays"
    },
      {
        "start": null,
        "end": "Jan 2018",
        "service": "availability assurance",
        "deliverable": "operations",
        "type": "study",
        "name": "a large refinery complex in Singapore",
        "sector": "oil refining",
        "location": "Singapore",
        "lead": "ARTIS has been successfully used for an electric power and steam reliability study at a large refinery complex in Singapore.",
        "image": "singapore",
        "logo": "shell"
    },
      {
        "start": null,
        "end": "Dec 2017",
        "service": "",
        "deliverable": "",
        "type": "application",
        "name": "ARTIS V2.3",
        "sector": "modelling",
        "location": "Hoofddorp",
        "lead": "ARTIS V2.3 supports arbitrary directed graphs to compile the reliability block diagrams. All models and results are stored in a consistent and concise JSON format for faster communication.",
        "image": "directed",
        "logo": ""
    },
      {
        "start": null,
        "end": "Sep 2017",
        "service": "availability assurance",
        "deliverable": "operations",
        "type": "study",
        "name": "offshore wind energy",
        "sector": "wind",
        "location": "Australia",
        "lead": "For the first time, ARTIS has been used in the offshore wind industry. The electric power generation and transmission facilities of a new project in Australia have been modelled and optimised.",
        "image": "gippsland",
        "logo": "country-au"
    },
      {
        "start": null,
        "end": "Dec 2016",
        "service": "",
        "deliverable": "",
        "type": "other",
        "name": "SecuoS moved to The Netherlands",
        "sector": "modelling",
        "location": "Hoofddorp",
        "lead": "SecuoS BV has been incorporated in The Netherlands. The new limited company has taken over the activities of SecuoS LLC in Dubai. SecuoS aims to grow beyond oil and gas for its mission reliability and criticality studies.",
        "image": "secuos",
        "logo": ""
    },
      {
        "start": null,
        "end": "Nov 2016",
        "service": "",
        "deliverable": "",
        "type": "application",
        "name": "ARTIS V2.2",
        "sector": "modelling",
        "location": "Dubai",
        "lead": "ARTIS V2.2 connects fault tree analyses and production availability models. With a single set of definitions, both can now be performed at once. The criticalities and minimum cut sets are tabulated for each downtime scenario in one single model. The new user interface offers full touch device support.",
        "image": "fault",
        "logo": ""
    },
      {
        "start": null,
        "end": "Jan 2016",
        "service": "",
        "deliverable": "",
        "type": "application",
        "name": "the ARTIS Live guide",
        "sector": "modelling",
        "location": "Dubai",
        "lead": "The ISO 55000 Asset Management System standards are now supported by the new guide for the ARTIS Live application. The ARTIS platform manages the risks to production availability, implements the line of sight and closes the learning cycle. It can be universally applied in all industries with continuous production systems.",
        "image": "",
        "logo": "iso"
    },
      {
        "start": 2013,
        "end": "2015",
        "service": "availability assurance",
        "deliverable": "",
        "type": "workshop",
        "name": "BP and the Boston Consulting Group",
        "sector": "oil & gas",
        "location": "Europe, Asia, Middle East",
        "lead": "A series of 2-day availability assurance workshops were held. A comprehensive overview was provided of the availability and reliability subjects for a wide audience.",
        "image": "workshop",
        "logo": "bp"
    },
      {
        "start": null,
        "end": "Dec 2014",
        "service": "",
        "deliverable": "",
        "type": "application",
        "name": "ARTIS V2.1",
        "sector": "modelling",
        "location": "Dubai",
        "lead": "ARTIS V2.1 includes the ARTIS Live application. Drastic efficiency improvements have made it possible to compute the impact of any event much quicker. This allows to model large-scale and complex projects or to rapidly mitigate any unexpected operational risk. Reporting is now all web-based and easily accessible for decision makers.",
        "image": "live",
        "logo": ""
    },
      {
        "start": null,
        "end": "Dec 2014",
        "service": "availability assurance",
        "deliverable": "",
        "type": "workshop",
        "name": "ADNOC",
        "sector": "oil & gas",
        "location": "Abu Dhabi",
        "lead": "Participants from the ADNOC Group and the Basrah Gas Company attended a 2-day workshop in Abu Dhabi. The first day covered a high-level overview of the availability assurance process. The second day was dedicated to exercises and the use of ARTIS V2.1 for Live applications.",
        "image": "workshopad",
        "logo": ""
    },
      {
        "start": null,
        "end": "Jun 2014",
        "service": "availability assurance",
        "deliverable": "project development",
        "type": "study",
        "name": "a LNG export project in the USA",
        "sector": "LNG",
        "location": "USA",
        "lead": "SecuoS and an Asian client have signed a consulting agreement for a review of the design of one of the new large LNG export projects in the USA.",
        "image": "lngusa",
        "logo": "country-us"
    },
      {
        "start": null,
        "end": "Jul 2013",
        "service": "",
        "deliverable": "",
        "type": "application",
        "name": "ARTIS V1.1",
        "sector": "modelling",
        "location": "Dubai",
        "lead": "ARTIS V1.1 is the first public version. Previous versions were often tailored selected clients and were only available to them. The new release replaces all previous ones.",
        "image": "artisv11",
        "logo": ""
    },
      {
        "start": 2007,
        "end": "Jun 2012",
        "service": "availability assurance",
        "deliverable": "",
        "type": "support",
        "name": "Norske Shell",
        "sector": "gas",
        "location": "Norway",
        "lead": "SecuoS completed a status review of the implementation of the availability assurance process for the Ormen Lange project in Norway. The project development, including the subsea gas production was the focus of the review.",
        "image": "ormen",
        "logo": "shell"
    },
      {
        "start": 2002,
        "end": "2010",
        "service": "security of supply",
        "deliverable": "integrated",
        "type": "study",
        "name": "ADNOC and GASCO",
        "sector": "oil & gas",
        "location": "Abu Dhabi",
        "lead": "The oil production capacity expansion to 1.8 Mbbl/day was the focus of the study.",
        "image": "adnoconshore",
        "logo": "adnoc"
    },
      {
        "start": 2001,
        "end": "2010",
        "service": "availability assurance",
        "deliverable": "long-term planning",
        "type": "study",
        "name": "Nederlandse Aardolie Maatschappij",
        "sector": "gas",
        "location": "Netherlands",
        "lead": "The Groningen planning optimisation of the supply to West Europe was the focus of the study.",
        "image": "nam",
        "logo": "nam"
    },
      {
        "start": 2009,
        "end": "2010",
        "service": "availability assurance",
        "deliverable": "operations",
        "type": "study",
        "name": "Santos",
        "sector": "gas",
        "location": "Australia",
        "lead": "Asset management and availability modelling was successfully introduced at Santos.",
        "image": "moomba",
        "logo": "santos"
    },
      {
        "start": 2006,
        "end": "2009",
        "service": "availability assurance",
        "deliverable": "project development",
        "type": "study",
        "name": "Sakhalin II",
        "sector": "gas",
        "location": "Russia",
        "lead": "The Sakhalin II project and possible future expansions were the focus of the study.",
        "image": "sakhalin",
        "logo": "seic"
    },
      {
        "start": 2008,
        "end": "2009",
        "service": "availability assurance",
        "deliverable": "project development",
        "type": "study",
        "name": "Shell Development Australia",
        "sector": "lng and condensate",
        "location": "Australia",
        "lead": "The Prelude Floating LNG project development, incl the subsea gas production, was the focus of the study.",
        "image": "prelude2",
        "logo": "shell"
    },
      {
        "start": null,
        "end": "2009",
        "service": "security of supply",
        "deliverable": "integrated",
        "type": "study",
        "name": "Shell E&P",
        "sector": "oil & gas",
        "location": "Dubai",
        "lead": "The Dubai CO2 enhanced oil recovery project, incl CO2 capturing alternatives, was the focus of the study.",
        "image": "dubaico2",
        "logo": "shell"
    },
      {
        "start": 2008,
        "end": "2009",
        "service": "availability assurance",
        "deliverable": "project development",
        "type": "study",
        "name": "Shell Gas & Power",
        "sector": "LNG",
        "location": "Middle East",
        "lead": "The Middle East LNG project development, incl the offshore gas production, was the focus of the study.",
        "image": "me",
        "logo": "shell"
    },
      {
        "start": 2008,
        "end": "2009",
        "service": "availability assurance",
        "deliverable": "project development",
        "type": "study",
        "name": "Woodside LNG",
        "sector": "LNG",
        "location": "Australia",
        "lead": "The Sunrise Floating LNG project development, incl the subsea gas production, was the focus of the study.",
        "image": "pluto",
        "logo": "woodside"
    },
      {
        "start": 2007,
        "end": "2008",
        "service": "availability assurance",
        "deliverable": "project development",
        "type": "study",
        "name": "Olokola LNG",
        "sector": "LNG",
        "location": "Nigeria",
        "lead": "The Olokola LNG project, incl the JVs, and a support for the tender competition were the focus of the study.",
        "image": "olokola",
        "logo": "nnpc"
    },
      {
        "start": 2004,
        "end": "2007",
        "service": "security of supply",
        "deliverable": "value chain optimisation",
        "type": "study",
        "name": "Sarawak Shell Bhd and Malaysia LNG",
        "sector": "gas",
        "location": "Miri and Bintulu",
        "lead": "The gas production network optimisation was the focus of the study.",
        "image": "ssb",
        "logo": "shell"
    },
      {
        "start": 2004,
        "end": "2007",
        "service": "security of supply",
        "deliverable": "value chain optimisation",
        "type": "study",
        "name": "Nigeria LNG and JVs",
        "sector": "gas",
        "location": "Nigeria",
        "lead": "The gas production network optimisation was the focus of the study.",
        "image": "nlng",
        "logo": "nlng"
    },
      {
        "start": 2005,
        "end": "2006",
        "service": "security of supply",
        "deliverable": "integrated",
        "type": "study",
        "name": "Qatargas",
        "sector": "gas",
        "location": "Qatar",
        "lead": "The QG3 & QG4 project development, incl the offshore gas production, was the focus of the study.",
        "image": "qg4",
        "logo": "qg"
    }]
  };
  self.links = {
    "gnu": {
      "short": "GNU license",
      "title": "the GNU license V3.0",
      "url": "http://www.gnu.org/licenses/gpl-3.0-standalone.html"
    },
    "artis24demo": {
      "short": "demo",
      "title": "an ARTIS V2.4 demo",
      "url": "https://www.artis.la/V24/models/artis.html"
    },
    "artislivedemo": {
      "short": "demo",
      "title": "an ARTIS Live demo",
      "url": "https://www.artis.la/V24/models/results.html"
    },
    "artisrenewablesdemo": {
      "short": "demo",
      "title": "an ARTIS Renewables demo (Dutch)",
      "url": "https://www.artis.la/V24/models/renewable.html"
    },
    "artiswiki": {
      "short": "wiki",
      "title": "the ARTIS wiki pages",
      "url": "https://wiki.artis.la/doku.php"
    }
  };
  self.pubs = {
    "dummy": {
      "long": "dummy pdf long title",
      "title": "the dummy pdf",
      "short": "dummy",
      "authors": ["w3.org"],
      "date": "Jan 2018",
      "summary": "no summary available",
      "image": "pdf",
      "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    "artis24": {
      "title": "the ARTIS V2.4 brochure",
      "short": "brochure",
      "authors": ["SecuoS"],
      "date": "Jan 2018",
      "summary": "",
      "image": "pdf",
      "url": "http://www.securityofsupply.com/publications/SecuoS%20-%20brochure%20ARTIS%20V2.4.pdf"
    },
    "artislive": {
      "title": "the ARTIS Live brochure",
      "short": "brochure",
      "authors": ["SecuoS"],
      "date": "Jan 2018",
      "summary": "",
      "image": "pdf",
      "url": "http://www.securityofsupply.com/publications/SecuoS%20-%20brochure%20ARTIS%20Live.pdf"
    },
    "artisren": {
      "title": "the ARTIS Renewables brochure",
      "short": "brochure",
      "authors": ["SecuoS"],
      "date": "Jan 2018",
      "summary": "",
      "image": "pdf",
      "url": "http://www.securityofsupply.com/publications/SecuoS%20-%20brochure%20ARTIS%20Renewables.pdf"
    },
    "seawater": {
      "title": "Production Availability of Sea Water Cooling Facilities",
      "short": "article",
      "authors": ["SecuoS"],
      "date": "mmm yyyyy",
      "summary": "Whilst sea water cooling systems are critical for refineries, they have experienced many failures over the years. The paper explains how an ARTIS production availability model has been used to identify how best to increase the system performance of the sea water cooling system in a refinery. A reliable power supply system was created by adding additional on-site generating capacity.",
      "image": "seawater",
      "url": "https://securityofsupply.com/publications/Sea%20water%20cooling%20facilities%2020180130.pdf"
    },
    "adnoc": {
      "title": "An Integrated Availability Model for ADCO’s Availability Assurance",
      "short": "article",
      "authors": ["SecuoS"],
      "date": "mmm yyyyy",
      "summary": "Summary ...",
      "image": "adnoc",
      "url": "https://securityofsupply.com/publications/ADCO%2020180130.pdf"
    },
    "pipeline": {
      "title": "An Underutilised Pipeline in a Petrochemicals Complex",
      "short": "article",
      "authors": ["SecuoS"],
      "date": "mmm yyyyy",
      "summary": "Four companies are connected to each other via a pipeline network as supplier and consumer of raw material. The network is underutilised. While looking for improvements, the companies were unsure about the return on their investment and they could not share commercially sensitive information between them. This paper explains the approach to solve this and the next steps.",
      "image": "cluster",
      "url": "https://securityofsupply.com/publications/Petrochemicals%2020180131.pdf"
    },
    "shell": {
      "title": "Availability Assurance",
      "short": "article",
      "subtitle": "Shell’s experience in identifying elements critical to long-term gas supply",
      "authors": ["Hans van de Vorst", "Rik Prager", "Diederick Bax"],
      "date": "mmm yyyy",
      "summary": "The paper describes the philosophy, approach and tools that Shell adopts for maintaining a thorough understanding of the production availability of integrated supply systems, the ability to assess the extent to which delivery commitments can be made during all future stages of the development and the ability to optimise future development plans. The tool used is SPARC (System for Production Availability and Resource Consumption), which is the predescessor of ARTIS.",
      "image": "shell"
    },
    "moomba": {
      "title": "Asset Management and Availability Modelling",
      "short": "article",
      "authors": ["Mark Chadderton", "Khalee Field"],
      "date": "mmm yyyy",
      "summary": "The paper explains how Santos, with the assistance of Shell Global Solutions, has undertaken an overhaul of its Reliability and Maintenance Management System to improve equipment performance and reduce costs. This initiative includes modelling equipment availability and capacity through the usage of availability assurance and reliability modelling software for its Cooper Basin assets.",
      "image": "moomba",
      "url": "https://securityofsupply.com/publications/Santos%2020180130.pdf"
    }
  };
  self.partners = [{
    "name": "Ortec",
    "image": "https://ortec.com/~/media/images/logo-ortec/en/logo.png?h=36&la=en&w=162",
    "url": "https://ortec.com/"
    }, {
    "name": "Primalux",
    "image": "http://www.primalux.com.sg/logo-plx-S.png",
    "url": "http://www.primalux.com.sg"
    }];
  self.locations = {
    "ams": {
      "city": "Amsterdam",
      "country": "nl"
    },
    "lon": {
      "city": "London",
      "country": "uk"
    },
    "hoo": {
      "city": "Hoofddorp",
      "country": "nl"
    },
    "hil": {
      "city": "Hilversum",
      "country": "nl"
    },
    "lun": {
      "city": "Lund",
      "country": "se"
    },
    "per": {
      "city": "Perth",
      "country": "au"
    },
    "oos": {
      "city": "Oosterbeek",
      "country": "nl"
    },
    "abu": {
      "city": "Abu Dhabi",
      "country": "ua"
    },
    "hag": {
      "city": "The Hague",
      "country": "nl"
    },
    "for": {
      "city": "Fort McMurray",
      "country": "ca"
    },
    "bev": {
      "city": "Beverwijk",
      "country": "nl"
    },
    "sin": {
      "city": "Singapore",
      "country": "sg"
    }
  };
  self.people = {
    "headline": "our people",
    "subhead": "accomplished and well-connected",
    "groups": {
      "core": {
        "long": "core team member",
        "headline": "our core team",
        "subhead": "a global and seasoned workforce"
      },
      "advisor": {
        "long": "advisor",
        "headline": "our advisors",
        "subhead": "a community of experts with skin in the game"
      }
    }
  };
  self.bios = [{
    "team": "core",
    "teamJobtitle": "Owner and Director",
    "teamRole": "has directed",
    "teamYear": "since 2010",
    "teamLocation": "hoo",
    "nameFirst": "Hans",
    "nameLast": "van de Vorst",
    "nameGender": "he",
    "profile": "Hans has held team leader positions in areas that involve a high degree of uncertainty and risk, with the aims to develop staff, processes and quantitative tools for improved decision making. His former Availability Assurance Team has become a key resource for all major projects of Shell and its joint ventures.",
    "achievement1": "He set up the Parallel Computing Team at Koninklijke/Shell Laboratorium, Amsterdam. This led in the mid 80's to breakthroughs in 3D fluid flow simulation and large-scale optimisation.",
    "achievement2": "For Shell Gas & Power, Hans identified new business opportunities in Eastern Europe and the former USSR and incubated and coordinated the initial oil & gas developments in Sakhalin.",
    "education": "an MSc degree in Mathematics and Physics from Eindhoven University of Technology.",
    "linkedin": "https://www.linkedin.com/in/jggvandevorst/",
    "photo": "https://media.licdn.com/dms/image/C4D03AQHlHCME5T91xg/profile-displayphoto-shrink_800_800/0?e=1552521600&v=beta&t=tm-3EmM4SDOdUkPAMLWIDiqnFY-fSai5OoJIJ9MRHA0"
    }, {
    "team": "core",
    "teamJobtitle": "Principal Consultant",
    "teamRole": "joined",
    "teamYear": "in 2018",
    "teamLocation": "hag",
    "nameFirst": "Joke",
    "nameLast": "Driessen",
    "nameGender": "she",
    "profile": "Joke brings 30+ year experience in the Petrochemical Industry. She managed complex manufacturing organisations at Shell Chemicals. Technology, business development, investment projects, day-to-day manufacturing, supply operations and incident investigation describe her experience best.",
    "achievement1": "From 2009-2013 she was General Manager at Shell Moerdijk, managing complex steam cracker operations plus downstream consumers. An extensive CO2 abatement curve was developed for the site including potential application of new technologies.",
    "achievement2": "Recently Joke worked with MOL Group to set up a EUR 1 billion investment project to enable the company to move deeper into the petrochemical value chain and reduce its dependency on fossil fuels.",
    "education": "an MSc degree in Applied Mathematics from Delft University and completed an MBA",
    "linkedin": "https://www.linkedin.com/in/joke-driessen-08165b6/",
    "photo": "https://media.licdn.com/dms/image/C4E03AQENdxUusc8ayQ/profile-displayphoto-shrink_800_800/0?e=1552521600&v=beta&t=pB33Z3Y8t89fqj3Ip24LhiyuLWDbuJg3zVd9AoK7BGI"
    }, {
    "team": "core",
    "teamJobtitle": "Principal Consultant",
    "teamRole": "joined",
    "teamYear": "in 2015",
    "teamLocation": "lon",
    "nameFirst": "Chaco",
    "nameLast": "van der Sijp",
    "nameGender": "he",
    "profile": "Chaco is a metallurgist by trade with a 30-year track record in the metals and oil & gas industry. Qualified management consultant and innovator in the fields of risk, reliability, inspection and change management. Specialised in root cause analysis and challenge-driven innovation management.",
    "achievement1": "Since the early 90's he has constantly pioneered new best practices at Shell for corrosion control, risk-based inspection, reliability-centred maintenance and defect elimination. He integrated pro-active and reactive methods into a single equipment reliability framework and implemented this in more than 20 countries.",
    "achievement2": "As Principal GameChanger at Shell, Chaco nurtured a steady flux of disruptive innovation with a combined potential value of around 2 billion USD. He was pivotal in articulating the company's open innovation narrative.",
    "education": "an MSc degree in Metallurgy from the University of Delft",
    "linkedin": "https://www.linkedin.com/in/vandersijp/",
    "photo": "https://media.licdn.com/dms/image/C5603AQHtg0GH5fHZtw/profile-displayphoto-shrink_200_200/0?e=1552521600&v=beta&t=c733L5jr0uyI_T4umK5P6igAWt2yVi9IEJBNlMQUTyU"
    }, {
    "team": "core",
    "teamJobtitle": "Principal Consultant",
    "teamRole": "joined",
    "teamYear": "in 2016",
    "teamLocation": "hil",
    "nameFirst": "Wiebe",
    "nameLast": "Heitman",
    "nameGender": "he",
    "profile": "Wiebe has been one of longest serving availability and reliability specialists in Shell. Exposed to the business sectors E&P, LNG, Downstream, CtL and GtL, involving both green-field projects and brown-field expansions. He has been instrumental in bringing step-changes in the LNG design capability of Shell.",
    "achievement1": "Based on his knowledge of LNG processes and reliability data, he established the concept of “Live Reliability”, where availability and reliability modelling results are reconciled with the insights from real life operating data.",
    "achievement2": "Wiebe combines his communication and modelling skills to facilitate the articulation of the 'Production Promise' of projects.",
    "education": "",
    "linkedin": "https://www.linkedin.com/in/wiebe-g-heitman-31681224/",
    "photo": "https://media.licdn.com/dms/image/C4E03AQG9Qczz5XO44w/profile-displayphoto-shrink_800_800/0?e=1556150400&v=beta&t=gLtWl3S5rpb9EJiz1Ghlf93gcjxKyAPodYnzjERz1Vk"
    }, {
    "team": "core",
    "teamJobtitle": "Principal Consultant",
    "teamRole": "joined",
    "teamYear": "in 2018",
    "teamLocation": "for",
    "nameFirst": "Ico",
    "nameLast": "van den Born",
    "nameGender": "he",
    "profile": "Ico is a design integrator with comprehensive experience in increasing reliability and removing capacity constraints for integrated facilities with new technology. Plant performance verification, process monitoring, mitigating threats to availability, preventive maintenance, debottlenecking.",
    "achievement1": "He designed several plants, all of which are operating successfully. Ico is an expert within the gasification community and is seasoned throughout the engineering life cycle from conceptual design to optimizing commercial operation.",
    "achievement2": "At Shell, Ico led the global sales team of licensed CO2 and sulphur technologies, growing its portfolio and value through strategic co-operations and acquisitions. At Nexen, he was a technical advisor for the Long Lake Upgrader at Fort McMurray in Canada.",
    "education": "a PhD in Physics from the University of Groningen",
    "linkedin": "https://www.linkedin.com/in/icovandenborn/",
    "photo": "https://media.licdn.com/dms/image/C5603AQEDzrOfl_q6rQ/profile-displayphoto-shrink_800_800/0?e=1552521600&v=beta&t=ZVysKH1JZMwqLg8tTDWyqHnTtja6_szhUyjHQb3MPYI"
    }, {
    "team": "advisor",
    "teamJobtitle": "Assistant Professor Quantitative Finance",
    "teamRole": "has been an advisor to",
    "teamYear": "since 2010",
    "teamLocation": "ams",
    "nameFirst": "Svetlana",
    "nameLast": "Borovkova",
    "nameGender": "she",
    "profile": "Svetlana is a specialist in the analysis of nonlinear and chaotic time series and has applied this to risk, reliability, energy trading and market modelling. She is an associate professor of Quantitative Finance at the Vrije Universiteit Amsterdam and is frequently consulted by major banks and energy firms.",
    "achievement1": "",
    "achievement2": "",
    "education": "a PhD in Computer Science and Mathematics from the University of Groningen and from the Oregon State University, as well as MSc degrees from Moscow and Utrecht",
    "linkedin": "https://www.linkedin.com/in/svetlana-borovkova-73a12b59/",
    "photo": "https://media.licdn.com/dms/image/C5103AQG01PYzqCbZMw/profile-displayphoto-shrink_800_800/0?e=1552521600&v=beta&t=iUXGRrx90HAbMtLBlKkls86ZDRFl7enT_PHydl7SlU8"
    }, {
    "team": "advisor",
    "teamJobtitle": "Principal Consultant Reliability and Maintenance",
    "teamRole": "has been an advisor to",
    "teamYear": "since 2010",
    "teamLocation": "per",
    "nameFirst": "Ernst",
    "nameLast": "Krauss",
    "nameGender": "he",
    "profile": "Ernst has a background in instrumentation and electrical engineering with a 35 years experience in the petrochemical and mining industries. He authored numerous industry studies and conference papers. He received the Australian Maintenance Engineering Excellence Award for his all round perspective on the security of supply.",
    "achievement1": "",
    "achievement2": "",
    "education": "an MSc degree from Deakin University in Reliability and Maintenance",
    "linkedin": "https://www.linkedin.com/in/ernst-krauss-cfam-0726056/",
    "photo": "https://media.licdn.com/dms/image/C4E03AQFn_SAaVmwpqQ/profile-displayphoto-shrink_800_800/0?e=1552521600&v=beta&t=ZjGOxIg9wsQeNoEFaaspDak4iHYjOq2KfU2tl5tg2O0"
    }, {
    "team": "advisor",
    "teamJobtitle": "Director Primalux",
    "teamRole": "has been an advisor to",
    "teamYear": "since 2010",
    "teamLocation": "sin",
    "nameFirst": "David",
    "nameLast": "Lim",
    "nameGender": "he",
    "profile": "David Lim developed in the 80's maintenance and inspection management systems for ARCO, Chevron and Continental Airlines. He owns Primalux which has developed the graphical suite i.ENGINEER to integrate RBI, RCM and IPF. This is used by many Shell facilities as well as steel mills and container terminals throughout South East Asia.",
    "achievement1": "",
    "achievement2": "",
    "education": "",
    "linkedin": "https://www.linkedin.com/in/david-lim-738a07a7/",
    "photo": "https://securityofsupply.com/photos/David%20Lim.jpg"
    }, {
    "team": "advisor",
    "teamJobtitle": "Materials, Corrosion and Inspection Expert",
    "teamRole": "has been an advisor to",
    "teamYear": "since 2015",
    "teamLocation": "oos",
    "nameFirst": "Bert",
    "nameLast": "Pots",
    "nameGender": "he",
    "profile": "Bert joined Shell Research in Amsterdam in 1979 and held technical and managerial postings worldwide. He is an internationally recognised expert on materials and the effects of multi-phase flow on corrosion and the asset integrity. He developed the corrosion prediction models and the pipeline risk-based assessment tools used by Shell.",
    "achievement1": "",
    "achievement2": "",
    "education": "a PhD in Plasma Physics from Eindhoven University of Technology",
    "linkedin": "https://www.linkedin.com/in/bert-pots-835b0a16/",
    "photo": "https://media.licdn.com/dms/image/C4D03AQEdu0utCnTdAQ/profile-displayphoto-shrink_800_800/0?e=1552521600&v=beta&t=HJYHDosrAnR8vr2oshnBjOpODsSNzpBnwxFI-NAkYpQ"
    }, {
    "team": "advisor",
    "teamJobtitle": "Principle Consultant Pipelines and Asset Integrity",
    "teamRole": "has been an advisor to",
    "teamYear": "since 2015",
    "teamLocation": "abu",
    "nameFirst": "Rik",
    "nameLast": "Prager",
    "nameGender": "he",
    "profile": "Rik has worked in Shell International for 34 years most of which in pipeline engineering, including new concepts, projects and operations, integrity management, HSE and oil spill response. He was an asset manager in the North Sea and a business opportunity manager in Nigeria. Until recently, Rik was the GM of Triple EEE Management Service for the Middle East.",
    "achievement1": "",
    "achievement2": "",
    "education": "an MSc Civil Engineering from Delft University of Technology",
    "linkedin": "https://www.linkedin.com/in/rik-prager-b1255611/",
    "photo": "https://media.licdn.com/dms/image/C5603AQEFfQ5aS6Gsvw/profile-displayphoto-shrink_800_800/0?e=1552521600&v=beta&t=H64Wg2iLOz1xWWiVAE8zDdzEZkG6mMB1vf2QDPIgSiY"
    }, {
    "team": "advisor",
    "teamRole": "has been an advisor to",
    "teamJobtitle": "Lecturer Reliability and Maintenance Optimisation",
    "teamYear": "since 2010",
    "teamLocation": "bev",
    "nameFirst": "Cyp",
    "nameLast": "van Rijn",
    "nameGender": "he",
    "profile": "Cyp has been the R&D manager on process optimisation and control for Shell world-wide and developed new decision support tools for oil production, refineries, chemical plants and logistics. He is a lecturer on reliability assessment and maintenance optimisation and is a research evaluator for the European Commission.",
    "achievement1": "",
    "achievement2": "",
    "education": "a BSc degree from the University of Applied Sciences Utrecht",
    "linkedin": "https://www.linkedin.com/in/cyp-van-rijn-7b882a12/",
    "photo": "https://media.licdn.com/dms/image/C4D03AQEJnu4EmTKMww/profile-displayphoto-shrink_800_800/0?e=1552521600&v=beta&t=erWZmJ-jlgHK6uB45DvO67Ot1YCPA9hfHF9sEFL5crE"
    }, {
    "team": "advisor",
    "teamJobtitle": "Senior Consultant Maintenance Optimisation",
    "teamRole": "has been an advisor to",
    "teamYear": "since 2010",
    "teamLocation": "lun",
    "nameFirst": "Joan Willem",
    "nameLast": "Dorrepaal",
    "nameGender": "he",
    "profile": "Joan Willem is specialised in maintenance optimisation, reliability analysis and safety statistics. He joined the Nordic Nuclear Safety research and developed software for the Swedish nuclear power industry. His company BICycle in The Netherlands now has large customers in Europe, North America and the Middle-East.",
    "achievement1": "",
    "achievement2": "",
    "education": "an MSc degrees in Applied Mathematics from the Technical University Delft and from the Technical University Denmark",
    "linkedin": "https://www.linkedin.com/in/joan-dorrepaal-989b89110/",
    "photo": "https://securityofsupply.com/photos/Joan.jpg"
    }];
  // end of data
  //
  // populate empty objects with attributes from its "dummy"
  angular.forEach(["topics", "cases"], function(element) {
    angular.forEach(self[element], function(v, k) {
      angular.forEach(self[element]['dummy'], function(value, key) {
        self[element][k][key] = (v[key] || value);
      });
    });
  });
})
