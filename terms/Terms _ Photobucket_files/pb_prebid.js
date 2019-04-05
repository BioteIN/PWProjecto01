
var PREBID_TIMEOUT = 3500;
            
var mobile_aboveimage_sizes = [
  [320, 50]
];
            
var mobile_belowimage_sizes = [
  [300, 250],
	[336, 280]
];

var desktop_aboveimage_sizes = [
  [728, 90]
];

var desktop_belowimage_sizes = [
  [728, 90],
  [300, 250],
	[336, 280]
];

var desktop_sidebar_sizes = [
  [300, 250],
  [336, 280]
];

var adUnits = [{
  code: '/46259071/sfw_pb_mobile_aboveimage',
		mediaTypes: {
		  banner: {
        sizes: mobile_aboveimage_sizes
			}
		},
		labelAny: ["phone"],
                bids: [{
                  bidder: 'appnexus',
                  params: {
                  placementId: '14288095'
                  }
                },{
                  bidder: 'rubicon',
                  params: {
                    accountId: '14896',
		                siteId: '222470',
		                zoneId: '1094236'
                  }
                },{
                  bidder: 'aol',
                  params: {
                    placement: '5003017',
		                network: '10931.1'
                  }
                },{
                  bidder: 'sonobi',
                  params: {
                    ad_unit: '/46259071/sfw_pb_mobile_aboveimage'
                  }
                }]
  },{
  code: '/46259071/sfw_pb_mobile_belowimage',
    mediaTypes: {
		  banner: {
        sizes: mobile_belowimage_sizes
			}
		},
		labelAny: ["phone"],
                bids: [{
                  bidder: 'appnexus',
                  params: {
                    placementId: '14288098'
                  }
                },{
                  bidder: 'rubicon',
                  params: {
                    accountId: '14896',
		                siteId: '222470',
		                zoneId: '1094236'
                  }
                },{
                  bidder: 'undertone',
                  params: {
                    publisherId: 3763
                  }
                },{
                  bidder: 'aol',
                  params: {
                    placement: '5003016',
		                network: '10931.1'
                  }
                },{
                  bidder: 'sonobi',
                  params: {
                    ad_unit: '/46259071/sfw_pb_mobile_belowimage'
                  }
                }]
  },{
  code: '/46259071/nsfw_pb_mobile_aboveimage',
    mediaTypes: {
		  banner: {
        sizes: mobile_aboveimage_sizes
			}
		},
		labelAny: ["phone"],
                bids: [{
                  bidder: 'appnexus',
                  params: {
                    placementId: '14288095'
                  }
                },{
                  bidder: 'rubicon',
                  params: {
                    accountId: '14896',
		                siteId: '222470',
		                zoneId: '1094236'
                  }
                },{
                  bidder: 'aol',
                  params: {
                    placement: '5003017',
		                network: '10931.1'
                  }
                },{
                  bidder: 'sonobi',
                  params: {
                    ad_unit: '/46259071/nsfw_pb_mobile_aboveimage'
                  }
                }]
  },{
  code: '/46259071/nsfw_pb_mobile_belowimage',
    mediaTypes: {
		  banner: {
        sizes: mobile_belowimage_sizes
			}
		},
		labelAny: ["phone"],
                bids: [{
                  bidder: 'appnexus',
                  params: {
                    placementId: '14288098'
                  }
                },{
                  bidder: 'rubicon',
                  params: {
                    accountId: '14896',
		                siteId: '222470',
		                zoneId: '1094236'
                  }
                },{
                  bidder: 'undertone',
                  params: {
                    publisherId: 3763
                  }
                },{
                  bidder: 'aol',
                  params: {
                    placement: '5003016',
		                network: '10931.1'
                  }
                },{
                  bidder: 'sonobi',
                  params: {
                    ad_unit: '/46259071/nsfw_pb_mobile_belowimage'
                  }
                }]
	},{
  code: '/46259071/sfw_pb_desktop_aboveimage',
    mediaTypes: {
		  banner: {
        sizes: desktop_aboveimage_sizes
			}
		},
		labelAny: ["desktop", "tablet"],
                bids: [{
                  bidder: 'appnexus',
                  params: {
                    placementId: '14288091'
                  }
                },{
                  bidder: 'rubicon',
                  params: {
                    accountId: '14896',
		                siteId: '222472',
		                zoneId: '1094234'
                  }
                },{
                  bidder: 'aol',
                  params: {
                    placement: '5003014',
		                network: '10931.1'
                  }
                },{
                  bidder: 'sonobi',
                  params: {
                    ad_unit: '/46259071/sfw_pb_desktop_aboveimage'
                  }
                }]
  },{
  code: '/46259071/sfw_pb_desktop_belowimage',
    mediaTypes: {
		  banner: {
        sizes: desktop_belowimage_sizes
			}
		},
		labelAny: ["desktop", "tablet"],
                bids: [{
                  bidder: 'appnexus',
                  params: {
                    placementId: '14288092'
                  }
                },{
                  bidder: 'rubicon',
                  params: {
                    accountId: '14896',
		                siteId: '222472',
		                zoneId: '1094234'                  
                  }
                },{
                  bidder: 'undertone',
                  params: {
                    publisherId: 3763
                  }
                },{
                  bidder: 'aol',
                  params: {
                    placement: '5003013',
		                network: '10931.1'
                  }
                },{
                  bidder: 'sonobi',
                  params: {
                    ad_unit: '/46259071/sfw_pb_desktop_belowimage'
                  }
                }]
  },{
  code: '/46259071/sfw_pb_desktop_sidebar',
    mediaTypes: {
		  banner: {
        sizes: desktop_sidebar_sizes
			}
		},
		labelAny: ["desktop", "tablet"],
                bids: [{
                  bidder: 'appnexus',
                  params: {
                    placementId: '14288093'
                  }
                },{
                  bidder: 'rubicon',
                  params: {
                    accountId: '14896',
		                siteId: '222472',
		                zoneId: '1094234'
                  }
                },{
                  bidder: 'undertone',
                  params: {
                    publisherId: 3763
                  }
                },{
                  bidder: 'aol',
                  params: {
                    placement: '5003015',
		                network: '10931.1'
                  }
                },{
                  bidder: 'sonobi',
                  params: {
                    ad_unit: '/46259071/sfw_pb_desktop_sidebar'
                  }
                }]
  },{
  code: '/46259071/nsfw_pb_desktop_aboveimage',
    mediaTypes: {
		  banner: {
        sizes: desktop_aboveimage_sizes
			}
		},
		labelAny: ["desktop", "tablet"],
                bids: [{
                  bidder: 'appnexus',
                  params: {
                    placementId: '14288091'
                  }
                },{
                  bidder: 'rubicon',
                  params: {
                    accountId: '14896',
		                siteId: '222472',
		                zoneId: '1094234'                  }
                },{
                  bidder: 'aol',
                  params: {
                    placement: '5003014',
		                network: '10931.1'
                  }
                },{
                  bidder: 'sonobi',
                  params: {
                    ad_unit: '/46259071/nsfw_pb_desktop_aboveimage'
                  }
                }]
  },{
  code: '/46259071/nsfw_pb_desktop_belowimage',
    mediaTypes: {
		  banner: {
        sizes: desktop_belowimage_sizes
			}
		},
		labelAny: ["desktop", "tablet"],
                bids: [{
                  bidder: 'appnexus',
                  params: {
                    placementId: '14288092'
                  }
                },{
                  bidder: 'rubicon',
                  params: {
                    accountId: '14896',
		                siteId: '222472',
		                zoneId: '1094234'
                  }
                },{
                  bidder: 'undertone',
                  params: {
                    publisherId: 3763
                  }
                },{
                  bidder: 'aol',
                  params: {
                    placement: '5003013',
		                network: '10931.1'
                  }
                },{
                  bidder: 'sonobi',
                  params: {
                    ad_unit: '/46259071/nsfw_pb_desktop_belowimage'
                  }
                }]
  },{
  code: '/46259071/nsfw_pb_desktop_sidebar',
    mediaTypes: {
		  banner: {
        sizes: desktop_sidebar_sizes
			}
		},
		labelAny: ["desktop", "tablet"],
                bids: [{
                  bidder: 'appnexus',
                  params: {
                    placementId: '14288093'
                  }
                },{
                  bidder: 'rubicon',
                  params: {
                    accountId: '14896',
		                siteId: '222472',
		                zoneId: '1094234'
                  }
                },{
                  bidder: 'undertone',
                  params: {
                    publisherId: 3763
                  }
                },{
                  bidder: 'aol',
                  params: {
                    placement: '5003015',
		                network: '10931.1'
                  }
                },{
                  bidder: 'sonobi',
                  params: {
                    ad_unit: '/46259071/nsfw_pb_desktop_sidebar'
                  }
                }]
  },{
  code: '/46259071/nsfw_pb_desktop_sidebar2',
    mediaTypes: {
		  banner: {
        sizes: desktop_sidebar_sizes
			}
		},
		labelAny: ["desktop", "tablet"],
                bids: [{
                  bidder: 'appnexus',
                  params: {
                    placementId: '14288093'
                  }
                },{
                  bidder: 'rubicon',
                  params: {
                    accountId: '14896',
		                siteId: '222472',
		                zoneId: '1094234'
                  }
                },{
                  bidder: 'undertone',
                  params: {
                    publisherId: 3763
                  }
                },{
                  bidder: 'aol',
                  params: {
                    placement: '5003015',
		                network: '10931.1'
                  }
                },{
                  bidder: 'sonobi',
                  params: {
                    ad_unit: '/46259071/nsfw_pb_desktop_sidebar2'
                  }
                }]
  }
];

      (function () {
        var gads = document.createElement('script');
        gads.async = true;
        gads.type = 'text/javascript';
        var useSSL = 'https:' == document.location.protocol;
        gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(gads, node);
      })();

      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
      googletag.cmd.push(function() {
        googletag.pubads().disableInitialLoad();
      });
	    
      googletag.cmd.push(function() {
        googletag.defineSlot('/46259071/sfw_pb_mobile_aboveimage', mobile_aboveimage_sizes, 'div-gpt-ad-1540792530050-0').addService(googletag.pubads());
        googletag.defineSlot('/46259071/sfw_pb_mobile_belowimage', mobile_belowimage_sizes, 'div-gpt-ad-1540792582217-0').addService(googletag.pubads());
        googletag.defineSlot('/46259071/nsfw_pb_mobile_aboveimage', mobile_aboveimage_sizes, 'div-gpt-ad-1540792629143-0').addService(googletag.pubads());
	      googletag.defineSlot('/46259071/nsfw_pb_mobile_belowimage', mobile_belowimage_sizes, 'div-gpt-ad-1540792683352-0').addService(googletag.pubads());
      	googletag.defineSlot('/46259071/sfw_pb_desktop_aboveimage', desktop_aboveimage_sizes, 'div-gpt-ad-1540792750034-0').addService(googletag.pubads());
      	googletag.defineSlot('/46259071/sfw_pb_desktop_belowimage', desktop_belowimage_sizes, 'div-gpt-ad-1540792791452-0').addService(googletag.pubads());
      	googletag.defineSlot('/46259071/sfw_pb_desktop_sidebar', desktop_sidebar_sizes, 'div-gpt-ad-1540792820501-0').addService(googletag.pubads());
      	googletag.defineSlot('/46259071/nsfw_pb_desktop_aboveimage', desktop_aboveimage_sizes, 'div-gpt-ad-1540792869359-0').addService(googletag.pubads());
      	googletag.defineSlot('/46259071/nsfw_pb_desktop_belowimage', desktop_belowimage_sizes, 'div-gpt-ad-1540792901454-0').addService(googletag.pubads());
      	googletag.defineSlot('/46259071/nsfw_pb_desktop_sidebar', desktop_sidebar_sizes, 'div-gpt-ad-1540792940456-0').addService(googletag.pubads());
      	googletag.defineSlot('/46259071/nsfw_pb_desktop_sidebar2', desktop_sidebar_sizes, 'div-gpt-ad-1543202522518-0').addService(googletag.pubads());
      	googletag.defineSlot('/46259071/page_grabber', [1, 1], 'div-gpt-ad-1549395752058-0').addService(googletag.pubads());
    	  googletag.pubads().enableSingleRequest();
    	  googletag.enableServices();
      });

      var sendAdserverRequest = function () {
        if (pbjs.adserverRequestSent) return;
        pbjs.adserverRequestSent = true;
        googletag.cmd.push(function() {
          pbjs.que.push(function() {
            pbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh();
          });
        });
      };

      setTimeout(function() {
        sendAdserverRequest();
      }, PREBID_TIMEOUT);

      var pbjs = pbjs || {};
      pbjs.que = pbjs.que || [];


      pbjs.que.push(function() {
        pbjs.addAdUnits(adUnits);
      	pbjs.setConfig({
	        priceGranularity: "dense",
	        rubicon: {singleRequest: true},
	        sizeConfig: [{
       	    mediaQuery: '(min-width: 1200px)',
       	    sizesSupported: [[728,90], [300,250], [336, 280]],
       	    labels: ["desktop"]
     	    }, {
       	    mediaQuery: '(min-width: 768px) and (max-width: 1199px)',
       	    sizesSupported: [[728,90], [300,250], [336, 280]],
       	    labels: ["tablet"]
     	    }, {
       	    mediaQuery: '(min-width: 0px) and (max-width: 767px)',
       	    sizesSupported: [[300,250], [320,50], [336,280]],
       	    labels: ["phone"]
  	  }]
	});
        pbjs.requestBids({
            bidsBackHandler: sendAdserverRequest
        });
      });