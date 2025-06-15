---
shopify_embed: >-
  <div id='product-component-1750021126984'></div>

  <script type="text/javascript">

  /*<![CDATA[*/

  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'nd93bu-ic.myshopify.com',
        storefrontAccessToken: '5dc2de314bec444de2c178302a635872',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '9860582834515',
          node: document.getElementById('product-component-1750021126984'),
          moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "title": {
          "font-family": "Times New Roman, serif",
          "font-weight": "normal",
          "color": "#00c389"
        },
        "button": {
          "font-family": "Times New Roman, serif",
          "color": "#000000",
          ":hover": {
            "color": "#000000",
            "background-color": "#00b07b"
          },
          "background-color": "#00c389",
          ":focus": {
            "background-color": "#00b07b"
          },
          "border-radius": "0px",
          "padding-left": "14px",
          "padding-right": "14px"
        },
        "price": {
          "font-family": "Times New Roman, serif",
          "color": "#00c389"
        },
        "compareAt": {
          "font-family": "Times New Roman, serif",
          "color": "#00c389"
        },
        "unitPrice": {
          "font-family": "Times New Roman, serif",
          "color": "#00c389"
        },
        "description": {
          "font-family": "Times New Roman, serif",
          "color": "#00c389"
        }
      },
      "contents": {
        "img": false,
        "title": false,
        "price": false
      },
      "text": {
        "button": "Add to cart"
      }
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-family": "Times New Roman, serif",
          "color": "#000000",
          ":hover": {
            "color": "#000000",
            "background-color": "#00b07b"
          },
          "background-color": "#00c389",
          ":focus": {
            "background-color": "#00b07b"
          },
          "border-radius": "0px",
          "padding-left": "14px",
          "padding-right": "14px"
        },
        "title": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "bold",
          "font-size": "26px",
          "color": "#4c4c4c"
        },
        "price": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "18px",
          "color": "#4c4c4c"
        },
        "compareAt": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "15.299999999999999px",
          "color": "#4c4c4c"
        },
        "unitPrice": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "15.299999999999999px",
          "color": "#4c4c4c"
        },
        "description": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "14px",
          "color": "#4c4c4c"
        }
      },
      "text": {
        "button": "Add to cart"
      }
    },
    "option": {
      "styles": {
        "label": {
          "font-family": "Times New Roman, serif"
        },
        "select": {
          "font-family": "Times New Roman, serif"
        }
      }
    },
    "cart": {
      "styles": {
        "button": {
          "font-family": "Times New Roman, serif",
          "color": "#000000",
          ":hover": {
            "color": "#000000",
            "background-color": "#00b07b"
          },
          "background-color": "#00c389",
          ":focus": {
            "background-color": "#00b07b"
          },
          "border-radius": "0px"
        },
        "title": {
          "color": "#00c389"
        },
        "header": {
          "color": "#00c389"
        },
        "lineItems": {
          "color": "#00c389"
        },
        "subtotalText": {
          "color": "#00c389"
        },
        "subtotal": {
          "color": "#00c389"
        },
        "notice": {
          "color": "#00c389"
        },
        "currency": {
          "color": "#00c389"
        },
        "close": {
          "color": "#00c389",
          ":hover": {
            "color": "#00c389"
          }
        },
        "empty": {
          "color": "#00c389"
        },
        "noteDescription": {
          "color": "#00c389"
        },
        "discountText": {
          "color": "#00c389"
        },
        "discountIcon": {
          "fill": "#00c389"
        },
        "discountAmount": {
          "color": "#00c389"
        },
        "cart": {
          "background-color": "#000000"
        },
        "footer": {
          "background-color": "#000000"
        }
      },
      "text": {
        "title": "Your Goodies",
        "total": "Subtotal",
        "button": "Checkout"
      },
      "contents": {
        "note": true
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "font-family": "Times New Roman, serif",
          "background-color": "#00c389",
          ":hover": {
            "background-color": "#00b07b"
          },
          ":focus": {
            "background-color": "#00b07b"
          }
        },
        "count": {
          "color": "#000000",
          ":hover": {
            "color": "#000000"
          }
        },
        "iconPath": {
          "fill": "#000000"
        }
      }
    },
    "lineItem": {
      "styles": {
        "variantTitle": {
          "color": "#00c389"
        },
        "title": {
          "color": "#00c389"
        },
        "price": {
          "color": "#00c389"
        },
        "fullPrice": {
          "color": "#00c389"
        },
        "discount": {
          "color": "#00c389"
        },
        "discountIcon": {
          "fill": "#00c389"
        },
        "quantity": {
          "color": "#00c389"
        },
        "quantityIncrement": {
          "color": "#00c389",
          "border-color": "#00c389"
        },
        "quantityDecrement": {
          "color": "#00c389",
          "border-color": "#00c389"
        },
        "quantityInput": {
          "color": "#00c389",
          "border-color": "#00c389"
        }
      }
    }
  },
        });
      });
    }
  })();

  /*]]>*/

  </script>
alt: That beautiful tee my guy
buy_button: >-
  <div id='product-component-1749948120574'></div>

  <script type="text/javascript">

  /*<![CDATA[*/

  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'nd93bu-ic.myshopify.com',
        storefrontAccessToken: '5dc2de314bec444de2c178302a635872',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '9958871957843',
          node: document.getElementById('product-component-1749948120574'),
          moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "title": {
          "font-family": "Times New Roman, serif",
          "font-weight": "normal",
          "color": "#00c389"
        },
        "button": {
          "font-family": "Times New Roman, serif",
          "color": "#000000",
          ":hover": {
            "color": "#000000",
            "background-color": "#00b07b"
          },
          "background-color": "#00c389",
          ":focus": {
            "background-color": "#00b07b"
          },
          "border-radius": "0px",
          "padding-left": "14px",
          "padding-right": "14px"
        },
        "price": {
          "font-family": "Times New Roman, serif",
          "color": "#00c389"
        },
        "compareAt": {
          "font-family": "Times New Roman, serif",
          "color": "#00c389"
        },
        "unitPrice": {
          "font-family": "Times New Roman, serif",
          "color": "#00c389"
        },
        "description": {
          "font-family": "Times New Roman, serif",
          "color": "#00c389"
        }
      },
      "contents": {
        "img": false,
        "title": false,
        "price": false
      },
      "text": {
        "button": "Add to cart"
      }
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-family": "Times New Roman, serif",
          "color": "#000000",
          ":hover": {
            "color": "#000000",
            "background-color": "#00b07b"
          },
          "background-color": "#00c389",
          ":focus": {
            "background-color": "#00b07b"
          },
          "border-radius": "0px",
          "padding-left": "14px",
          "padding-right": "14px"
        },
        "title": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "bold",
          "font-size": "26px",
          "color": "#4c4c4c"
        },
        "price": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "18px",
          "color": "#4c4c4c"
        },
        "compareAt": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "15.299999999999999px",
          "color": "#4c4c4c"
        },
        "unitPrice": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "15.299999999999999px",
          "color": "#4c4c4c"
        },
        "description": {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "14px",
          "color": "#4c4c4c"
        }
      },
      "text": {
        "button": "Add to cart"
      }
    },
    "option": {
      "styles": {
        "label": {
          "font-family": "Times New Roman, serif"
        },
        "select": {
          "font-family": "Times New Roman, serif"
        }
      }
    },
    "cart": {
      "styles": {
        "button": {
          "font-family": "Times New Roman, serif",
          "color": "#000000",
          ":hover": {
            "color": "#000000",
            "background-color": "#00b07b"
          },
          "background-color": "#00c389",
          ":focus": {
            "background-color": "#00b07b"
          },
          "border-radius": "0px"
        },
        "title": {
          "color": "#00c389"
        },
        "header": {
          "color": "#00c389"
        },
        "lineItems": {
          "color": "#00c389"
        },
        "subtotalText": {
          "color": "#00c389"
        },
        "subtotal": {
          "color": "#00c389"
        },
        "notice": {
          "color": "#00c389"
        },
        "currency": {
          "color": "#00c389"
        },
        "close": {
          "color": "#00c389",
          ":hover": {
            "color": "#00c389"
          }
        },
        "empty": {
          "color": "#00c389"
        },
        "noteDescription": {
          "color": "#00c389"
        },
        "discountText": {
          "color": "#00c389"
        },
        "discountIcon": {
          "fill": "#00c389"
        },
        "discountAmount": {
          "color": "#00c389"
        },
        "cart": {
          "background-color": "#000000"
        },
        "footer": {
          "background-color": "#000000"
        }
      },
      "text": {
        "title": "Your Goodies",
        "total": "Subtotal",
        "button": "Checkout"
      },
      "contents": {
        "note": true
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "font-family": "Times New Roman, serif",
          "background-color": "#00c389",
          ":hover": {
            "background-color": "#00b07b"
          },
          ":focus": {
            "background-color": "#00b07b"
          }
        },
        "count": {
          "color": "#000000",
          ":hover": {
            "color": "#000000"
          }
        },
        "iconPath": {
          "fill": "#000000"
        }
      }
    },
    "lineItem": {
      "styles": {
        "variantTitle": {
          "color": "#00c389"
        },
        "title": {
          "color": "#00c389"
        },
        "price": {
          "color": "#00c389"
        },
        "fullPrice": {
          "color": "#00c389"
        },
        "discount": {
          "color": "#00c389"
        },
        "discountIcon": {
          "fill": "#00c389"
        },
        "quantity": {
          "color": "#00c389"
        },
        "quantityIncrement": {
          "color": "#00c389",
          "border-color": "#00c389"
        },
        "quantityDecrement": {
          "color": "#00c389",
          "border-color": "#00c389"
        },
        "quantityInput": {
          "color": "#00c389",
          "border-color": "#00c389"
        }
      }
    }
  },
        });
      });
    }
  })();

  /*]]>*/

  </script>
image_1:
  - /img/wygs_tee_back.png
image_2:
  - /img/wygs_tee_front.png
image_3:
  - /img/andre_profile_pic.jpeg
image_4:
  - /img/scans_air_freshener.webp
title: Your Mom Tee
image: /img/normalize_tee_back.png
description: Yes mannnnn
size_guide: https://github.com/buzco/gr8success
---
