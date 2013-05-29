﻿var content = $.views.documentation.content;
var useStorage = content.allowEdit;
content.topics = useStorage && $.parseJSON(localStorage.getItem("JsViewsDocTopics")) ||
{
  "tmplrender": {
    "title": "Render a template against data objects or arrays",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "The template.render() method",
        "text": "The <em>render()</em> method of a template takes a <em>data</em> object or array (as well as an optional <em>helpersOrContext</em> object), and returns the rendered template as a string. "
      },
      {
        "_type": "para",
        "title": "",
        "text": "To get a template object from a template string, or a template declared in a script block, see <a href=\"#tmplcompile\">Compile/register/get a template</a>."
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "template.render(data)",
        "name": "render",
        "object": "template",
        "method": true,
        "tag": false,
        "returns": "string",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "data",
                "type": "object or array",
                "optional": true,
                "description": "The data to render. This can be any JavaScript type, including Array or Object."
              }
            ],
            "sections": [],
            "example": "var html = myTmpl.render(myData);",
            "description": "Render template against data"
          }
        ],
        "description": "Render a template against data, and return a string.",
        "sectionTypes": {
          "para": "para",
          "api": "api",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "",
        "text": "Passing an object to the <em>.render()</em> method."
      },
      {
        "_type": "para",
        "title": "",
        "text": "<em>&mdash; The template is rendered once, with the object as data context:</em>"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "var html = myTmpl.render(person);"
          }
        ],
        "html": "<table><tbody id=\"person\"></tbody></table>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <tr>\n    <td>\n      {{:name}}\n    </td>\n  </tr>\n</script>",
        "code": "var myTmpl = $.templates(\"#personTmpl\");\n\nvar person = {\n    name: \"Adriana\"\n  };\n\nvar html = myTmpl.render(person);\n\n$(\"#person\").html(html);",
        "title": "template.render(object):",
        "onlyJsRender": true,
        "height": "60"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Passing an array to the <em>.render()</em> method."
      },
      {
        "_type": "para",
        "title": "",
        "text": "<em>&mdash; The template is rendered once for each item in the array:</em>"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "var html = myTmpl.render(people);"
          }
        ],
        "html": "<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <tr>\n    <td>\n      {{:name}}\n    </td>\n  </tr>\n</script>",
        "code": "var myTmpl = $.templates(\"#personTmpl\");\n\nvar people = [\n  {\n    name: \"Adriana\"\n  },\n  {\n    name: \"Robert\"\n  }\n];\n\nvar html = myTmpl.render(people);\n\n$(\"#peopleList\").html(html);",
        "title": "template.render(array):",
        "onlyJsRender": true,
        "height": "80"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Passing helpers to the <em>render()</em> method."
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "template.render(data, helpersOrContext)",
        "name": "render",
        "object": "template",
        "method": true,
        "tag": false,
        "returns": "string",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "data",
                "type": "object or array",
                "optional": true,
                "description": "The data to render. This can be any JavaScript type, including Array or Object."
              },
              {
                "_type": "param",
                "name": "helpersOrContext",
                "type": "object",
                "optional": true,
                "description": "Contextual helper methods or properties - available to template as <em>~keyName</em>"
              }
            ],
            "sections": [],
            "example": "var html = myTmpl.render(myData, myHelpers);",
            "description": "Render template against data, and pass in helpers"
          }
        ],
        "description": "Render a template against data, along with helper objects or context, and return a string",
        "sectionTypes": {
          "para": "para",
          "api": "api",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "",
        "text": "You can pass in any JavaScript type (<em>object, string, number, function...</em>) as helpers on the <em>helpersOrContext</em> object, and use them as metadata, or as helper functions for formatting etc."
      },
      {
        "_type": "para",
        "title": "",
        "text": "Just add \"~\" to access them as <a href=\"#expressions/helperpath\">helper paths</a>."
      },
      {
        "_type": "para",
        "title": "",
        "text": "See <a href=\"#helpers\">Providing helpers</a> for the relationship to globally registered helpers <em>- $.views.helpers(...)</em>."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "var html = myTmpl.render(person, {color: \"red\", format: toUpper});"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<td style=\"color:{{:~color}};\">\n  {{:~format(name)}}\n</td>"
          },
          {
            "_type": "para",
            "title": "",
            "text": "Click <em>Try it</em> and change the color to \"green\"..."
          }
        ],
        "html": "<table><tbody id=\"person\"></tbody></table>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <tr>\n    <td style=\"color:{{:~color}};\">\n      {{:~format(name)}}\n    </td>\n  </tr>\n</script>",
        "code": "function toUpper(val) { return val.toUpperCase(); }\n\nvar myTmpl = $.templates(\"#personTmpl\");\n\nvar person = {\n    name: \"Adriana\"\n  };\n\nvar html = myTmpl.render(person, {color: \"red\", format: toUpper});\n\n$(\"#person\").html(html);",
        "title": "template.render(object, myHelpers):",
        "height": "60"
      },
      {
        "_type": "links",
        "title": "See also:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "rendertmpl",
            "label": "Render a template"
          }
        ]
      }
    ]
  },
  "documentation": {
    "title": "JsViews Documentation",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "api",
            "label": "API"
          },
          {
            "hash": "tags",
            "label": "Tags"
          }
        ]
      }
    ]
  },
  "api": {
    "title": "API",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "jsrapi",
            "label": "JsRender"
          },
          {
            "hash": "jsvapi",
            "label": "JsViews"
          },
          {
            "hash": "jsoapi",
            "label": "JsObservable"
          }
        ]
      }
    ]
  },
  "tags": {
    "title": "Tags",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "assigntag",
            "label": "{{: ...}}"
          },
          {
            "hash": "htmltag",
            "label": "{{> ...}}"
          },
          {
            "hash": "includetag",
            "label": "{{include ...}}"
          },
          {
            "hash": "fortag",
            "label": "{{for ...}}"
          },
          {
            "hash": "iftag",
            "label": "{{if ...}}"
          },
          {
            "hash": "elsetag",
            "label": "{{else ...}}"
          },
          {
            "hash": "commenttag",
            "label": "{{!-- ... --}}"
          },
          {
            "hash": "customtags",
            "label": "Custom Tags"
          }
        ]
      }
    ]
  },
  "jsvapi": {
    "title": "JsViews",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "jsvtags",
            "label": "Template tags"
          },
          {
            "hash": "jsvtmplrender",
            "label": "Render a template"
          },
          {
            "hash": "jsvlinktmpl",
            "label": "Render and link a template"
          },
          {
            "hash": "jsvunlink",
            "label": "Unlink a template"
          },
          {
            "hash": "$view",
            "label": "Access views"
          },
          {
            "hash": "jsvtmplcompile",
            "label": "Compile/register/get a template"
          },
          {
            "hash": "jsvregister",
            "label": "Register helpers, converters, tags..."
          },
          {
            "hash": "jsvtagcontrols",
            "label": "Custom Tags - Tag Controls"
          },
          {
            "hash": "jsrobjects",
            "label": "JsViews objects"
          }
        ]
      }
    ]
  },
  "jsrapi": {
    "title": "JsRender",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "jsrtags",
            "label": "Template tags"
          },
          {
            "hash": "rendertmpl",
            "label": "Render a template"
          },
          {
            "hash": "compiletmpl",
            "label": "Compile/register/get a template"
          },
          {
            "hash": "jsrregister",
            "label": "Register helpers, converters, tags..."
          },
          {
            "hash": "jsrobjects",
            "label": "JsRender objects"
          }
        ]
      }
    ]
  },
  "tmplcompile": {
    "title": "templates(): Compile/get a template",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "$templates",
            "label": "$.templates()"
          }
        ]
      }
    ]
  },
  "assigntag": {
    "title": "{{: ...}}",
    "path": "",
    "sections": [
      {
        "_type": "tag",
        "typeLabel": "Tag:",
        "title": "{{: ...}}",
        "name": "for NAME",
        "signatures": [
          {
            "_type": "signature",
            "title": "Insert data value or calculated value",
            "params": [],
            "args": [
              {
                "_type": "param",
                "name": "pathOrExpr",
                "type": "string",
                "optional": false,
                "description": "Data-path or expression, to be evaluated and inserted as a string in the rendered output"
              }
            ],
            "sections": [],
            "example": "{{:address.street}}",
            "description": "Evaluate the data-path or expression",
            "variant": "{{:pathOrExpr}}"
          }
        ],
        "description": "<em>Get the value of the data path or expression</em>, and insert it into the rendered output as a string",
        "sectionTypes": {}
      },
      {
        "_type": "para",
        "title": "Here are some examples:",
        "text": "(Note the use of different kinds of data-path and expression in the different examples)"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "Data:",
            "code": "{name: \"Pete\"}"
          },
          {
            "_type": "template",
            "title": "Template:",
            "markup": "{{:name}}"
          }
        ],
        "data": {
          "name": "Pete"
        },
        "markup": "{{:name}}",
        "height": "40",
        "onlyJsRender": true,
        "title": "{{:dataproperty}}"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "{\n  name: \"Pete\",\n  address: {\n    city: \"Seattle\"\n  }\n}"
          },
          {
            "_type": "para",
            "title": "",
            "text": "<em>~root</em> is the top-level data, and <em>#data</em> is the current data item"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{:name}} ... {{:address.city}}\n\n... {{:~root.address.city}}\n\n... {{:#data.address.city}}"
          }
        ],
        "data": {
          "name": "Pete",
          "address": {
            "city": "Seattle"
          }
        },
        "markup": "{{:name}}: lives in <b>{{:address.city}}</b>.<br />\n\nHere is <em>~root.address.city</em>: <b>{{:~root.address.city}}</b><br />\n\nHere is <em>~#data.address.city</em>: <b>{{:#data.address.city}}</b>",
        "height": "80",
        "onlyJsRender": true,
        "title": "{{:data.paths}}"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "[\n  {name: \"Pete\", ...},\n  {name: \"Heidi\", ...}\n]"
          },
          {
            "_type": "para",
            "title": "",
            "text": "<em>#xxx</em> is the \"xxx\" property of the current view - so <em>#index</em> is the <em>view.index</em> "
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{:#index+1}}"
          }
        ],
        "markup": "<b>{{:#index+1}}:</b>\n{{:name}}: lives in <b>{{:address.city}}</b>.<br />",
        "data": [
          {
            "name": "Pete",
            "address": {
              "city": "Seattle"
            }
          },
          {
            "name": "Heidi",
            "address": {
              "city": "Sidney"
            }
          }
        ],
        "height": "60",
        "onlyJsRender": true,
        "title": "{{:#index ...}}"
      },
      {
        "_type": "links",
        "title": "See also:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "samples/jsr/converters",
            "label": "Sample: Converters and encoding"
          }
        ]
      }
    ]
  },
  "htmltag": {
    "title": "{{> ...}}",
    "path": "",
    "sections": [
      {
        "_type": "tag",
        "typeLabel": "Tag:",
        "title": "{{>...}}",
        "name": "for NAME",
        "signatures": [
          {
            "_type": "signature",
            "title": "Insert HTML-encoded data value or calculated value",
            "params": [],
            "args": [
              {
                "_type": "param",
                "name": "pathOrExpr",
                "type": "string",
                "optional": false,
                "description": "Data-path or expression, to be evaluated and inserted as an HTML-encoded string in the rendered output"
              }
            ],
            "sections": [],
            "example": "{{>address.street}}",
            "description": "Evaluate the data-path or expression, and HTML encode the result",
            "variant": "{{>pathOrExpr}}"
          }
        ],
        "description": "<em>Get the HTML-encoded value of the data path or expression</em>, and insert it into the rendered output",
        "sectionTypes": {}
      },
      {
        "_type": "para",
        "title": "",
        "text": "Here is an example:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "{description: \"A <b>very nice</b> appartment\"}"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{:description}}\n...\n{{>description}}"
          }
        ],
        "data": {
          "description": "A <b>very nice</b> appartment"
        },
        "markup": "{{:description}}<br/>\n{{>description}}",
        "onlyJsRender": true,
        "height": "60",
        "title": ""
      },
      {
        "_type": "links",
        "title": "See also:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "samples/jsr/converters",
            "label": "Sample: Converters and encoding"
          }
        ]
      }
    ]
  },
  "includetag": {
    "title": "{{include tmpl=... /}}",
    "path": "",
    "sections": [
      {
        "_type": "tag",
        "typeLabel": "Tag:",
        "title": "{{include tmpl=... /}}",
        "name": "for NAME",
        "signatures": [
          {
            "_type": "signature",
            "title": "Include an external template",
            "params": [
              {
                "_type": "param",
                "name": "nameOrExpr",
                "type": "object or string",
                "optional": true,
                "description": "The name of a template, or a template object, to be rendered",
                "propName": "tmpl"
              }
            ],
            "args": [],
            "sections": [],
            "example": "{{include tmpl=\"insertedPersonTemplate\" /}}",
            "description": "Include the specified template",
            "variant": "{{include tmpl=nameOrExpr /}}"
          }
        ],
        "description": "<em>Template composition</em>: &mdash; Include the referenced template: <em>tmpl</em>, rendered using the current data context.",
        "sectionTypes": {}
      },
      {
        "_type": "para",
        "title": "",
        "text": "Here is an example:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "template",
            "title": "",
            "markup": "{{:name}} lives in {{include tmpl=\"#addressTemplate\"/}}\n"
          }
        ],
        "onlyJsRender": true,
        "height": "60",
        "code": "var people = [\n  {\n    \"name\": \"Pete\",\n    \"address\": {\n      \"city\": \"Seattle\"\n    }\n  },\n  {\n    \"name\": \"Heidi\",\n    \"address\": {\n      \"city\": \"Sidney\"\n    }\n  }\n];\n\nvar html = $(\"#peopleTemplate\").render(people);\n\n$(\"#peopleList\").html(html);",
        "html": "<script id=\"peopleTemplate\" type=\"text/x-jsrender\">\n  <div>\n    {{:name}} lives in {{include tmpl=\"#addressTemplate\"/}}\n  </div>\n</script>\n\n<script id=\"addressTemplate\" type=\"text/x-jsrender\">\n    <b>{{>address.city}}</b>\n</script>\n\n<div id=\"peopleList\"></div>",
        "title": ""
      },
      {
        "_type": "links",
        "title": "See also:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "samples/jsr/composition",
            "label": "Samples: Template composition"
          }
        ]
      }
    ]
  },
  "fortag": {
    "title": "{{for ...}}",
    "path": "",
    "sections": [
      {
        "_type": "tag",
        "typeLabel": "Tag:",
        "title": "{{for ...}}",
        "signatures": [
          {
            "_type": "signature",
            "title": "{{for}} using an inline block",
            "params": [],
            "args": [
              {
                "_type": "param",
                "name": "pathOrExpr",
                "type": "object or array",
                "optional": true,
                "description": "A data path, or an object or array"
              }
            ],
            "sections": [
              {
                "_type": "para",
                "title": "",
                "text": "<b>Note:</b> The data context inside the <em>{{for}}</em> block is the object returned by the path or expression."
              },
              {
                "_type": "para",
                "title": "",
                "text": "If the object returned is an array, then the block is rendered once for each item, and the data context for each rendered block is the data item from the array."
              }
            ],
            "example": "{{for billing.address}}\n {{:city}}\n{{/for}}",
            "description": "Render the block content of the tag for the given object, or iterate over the given array",
            "variant": "{{for pathOrExpr}}...{{/for}}"
          },
          {
            "_type": "signature",
            "title": "{{for}} using an external template",
            "params": [
              {
                "_type": "param",
                "name": "nameOrExpr",
                "type": "object or string",
                "optional": true,
                "description": "The name of a template, or a template object, to be rendered instead of block content",
                "propName": "tmpl"
              }
            ],
            "args": [],
            "sections": [],
            "example": "{{for billing.address tmpl=\"addressTmpl\" /}}",
            "description": "Render the specified template for the given object, or iterate over the given array",
            "variant": "{{for pathOrExpr tmpl=nameOrExpr /}}"
          }
        ],
        "description": "<em>Template composition</em>: &mdash; Render the block content of the {{for}} tag (or the referenced external template), using the object or array specified by the path or expression as data context. If it is an array, iterate over the array, rendering once for each item.",
        "sectionTypes": {}
      },
      {
        "_type": "para",
        "title": "",
        "text": "Here are some examples:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "template",
            "title": "",
            "markup": "{{:name}} lives in \n{{for address}}\n  <b>{{>city}}</b>\n{{/for}}\n"
          }
        ],
        "code": "",
        "onlyJsRender": true,
        "height": "60",
        "html": "",
        "data": [
          {
            "name": "Pete",
            "address": {
              "city": "Seattle"
            }
          },
          {
            "name": "Heidi",
            "address": {
              "city": "Sidney"
            }
          }
        ],
        "markup": "<div>\n  {{:name}} lives in\n  {{for address}}\n    <b>{{>city}}</b>\n  {{/for}}\n</div>",
        "title": "{{for object}}"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "template",
            "title": "",
            "markup": "{{:name}} lives in {{for address tmpl=\"#addressTemplate\" /}}"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<script id=\"addressTemplate\" type=\"text/x-jsrender\">\n    <b>{{>city}}</b>\n</script>\n"
          }
        ],
        "html": "<script id=\"peopleTemplate\" type=\"text/x-jsrender\">\n  <div>\n    {{:name}} lives in {{for address tmpl=\"#addressTemplate\" /}}\n  </div>\n</script>\n\n<script id=\"addressTemplate\" type=\"text/x-jsrender\">\n    <b>{{>city}}</b>\n</script>\n\n<div id=\"peopleList\"></div>",
        "code": "var people = [\n  {\n    \"name\": \"Pete\",\n    \"address\": {\n      \"city\": \"Seattle\"\n    }\n  },\n  {\n    \"name\": \"Heidi\",\n    \"address\": {\n      \"city\": \"Sidney\"\n    }\n  }\n];\n\nvar html = $(\"#peopleTemplate\").render(people);\n\n$(\"#peopleList\").html(html);",
        "onlyJsRender": true,
        "height": "60",
        "title": "{{for object tmpl=... /}}"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "template",
            "title": "",
            "markup": "<b>{{:title}}</b>\n<ul>\n  {{for members}}\n      <li>{{:name}} ...</li>\n  {{/for}}\n</ul>"
          }
        ],
        "html": "",
        "code": "",
        "data": {
          "title": "The A team",
          "members": [
            {
              "name": "Pete",
              "address": {
                "city": "Seattle"
              }
            },
            {
              "name": "Heidi",
              "address": {
                "city": "Sidney"
              }
            }
          ]
        },
        "markup": "<b>{{:title}}</b>\n<ul>\n  {{for members}}\n      <li>{{:name}} lives in <b>{{:address.city}}</b></li>\n  {{/for}}\n</ul>",
        "onlyJsRender": true,
        "height": "100",
        "title": "{{for array}}"
      },
      {
        "_type": "para",
        "title": "Using the {{else}} tag with {{for}}",
        "text": "Using the {{else}} tag between <em>{{for}}</em> and <em>{{/for}}</em>, allows alternate rendering based on the object or array returned from the path or expression <em>{{for pathOrExpr}}</em>"
      },
      {
        "_type": "tag",
        "typeLabel": "Tag:",
        "title": "{{for ...}}...{{else}}...{{/for}}",
        "name": "name",
        "signatures": [
          {
            "_type": "signature",
            "title": "Render alternate blocks depending on whether an array is empty or not",
            "params": [],
            "args": [
              {
                "_type": "param",
                "name": "pathOrExpr",
                "type": "object or array",
                "optional": true,
                "description": "A data path, or an object or array"
              }
            ],
            "sections": [],
            "example": "{{for members}}\n    Name: {{:name}}\n{{else}}\n    No members...\n{{/for}}",
            "description": "Render first block if array is not empty, otherwise render second block",
            "variant": "{{for pathOrExpr}...{{else}}...{{/for}}"
          }
        ],
        "description": "<em>Conditional blocks</em>: &mdash; Render the block content of the {{for}} tag (or referenced template) if the object is defined and is not an empty array, otherwise render the {{else}} block (or template)",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "template",
            "title": "",
            "markup": "{{for members}}\n  <div>{{:name}}</div>\n{{else}}\n  <div>No members!</div>\n{{/for}}\n"
          }
        ],
        "markup": "<b>{{:title}}</b>\n{{for members}}\n  <div>{{:name}}</div>\n{{else}}\n  <div>No members!</div>\n{{/for}}\n",
        "data": {
          "title": "The A team",
          "members": []
        },
        "height": "80",
        "onlyJsRender": true
      },
      {
        "_type": "links",
        "title": "See also:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "samples/jsr/paths",
            "label": "Sample: Paths"
          }
        ]
      }
    ]
  },
  "elsetag": {
    "title": "{{else ...}}",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "{{else}} can be used with {{if}}, {{for}} or any custom tag!",
        "text": "The <em>{{else}}</em> tag acts as a separator, to divide the content of a tag into two or more different content blocks.\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "So it allows another tag to provide specific behavior involving more than one content block."
      },
      {
        "_type": "para",
        "title": "&nbsp;",
        "text": "For example, you can use the <em>{{else}}</em> tag with <em><a href=\"#iftag\">{{if}}</a></em>:"
      },
      {
        "_type": "template",
        "title": "",
        "markup": "{{if expression}}\n    render this if the expression is true\n{{else}}\n    render this if the expression is false\n{{/if}}"
      },
      {
        "_type": "para",
        "title": "",
        "text": "to get 'if / else' behavior."
      },
      {
        "_type": "para",
        "title": "&nbsp;",
        "text": "Or you can use the <em>{{else}}</em> tag with <em><a href=\"#fortag\">{{for}}</a></em>:"
      },
      {
        "_type": "template",
        "title": "",
        "markup": "{{for members}}\n    Member Name: {{:name}}\n{{else}}\n    There are currently no members...\n{{/for}}"
      },
      {
        "_type": "para",
        "title": "",
        "text": "to render what you want to show if an array is empty, or if an array or object is null or undefined."
      },
      {
        "_type": "para",
        "title": "&nbsp;",
        "text": "Similarly you can use <em>{{else}}</em> with a custom tag, such as:"
      },
      {
        "_type": "template",
        "title": "",
        "markup": "{{tabs tabCaption=\"First Tab\"}}\n    first tab content\n{{else tabCaption=\"Second Tab\"}}\n    second tab content\n{{/tabs}}"
      },
      {
        "_type": "para",
        "title": "",
        "text": "as shown in <a href=\"#samples/tagcontrols/tabs\">this sample</a>."
      },
      {
        "_type": "links",
        "title": "See also",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "iftag",
            "label": "API: {{if}}"
          },
          {
            "_type": "topic",
            "hash": "fortag",
            "label": "API: {{for}}"
          },
          {
            "_type": "topic",
            "hash": "samples/tagcontrols/tabs",
            "label": "Sample: tabs control"
          }
        ]
      }
    ]
  },
  "commenttag": {
    "title": "Comment tag: {{!-- ... --}}",
    "path": "",
    "sections": [
      {
        "_type": "tag",
        "typeLabel": "Tag:",
        "title": "{{!-- a comment --}}",
        "name": "for NAME",
        "signatures": [
          {
            "_type": "signature",
            "title": "Adding comments",
            "params": [],
            "args": [],
            "sections": [],
            "example": "{{!-- this is a comment --}}",
            "description": "The comment will be ignored during template rendering - and will produce no output",
            "variant": ""
          },
          {
            "_type": "signature",
            "title": "Commenting out sections of a template",
            "params": [],
            "args": [],
            "sections": [],
            "example": "{{!-- this section will be omitted \n\n<em>Do I really want this?{{:password}}</em>\n\n--}}",
            "description": "The comment can be multiline. All content will be ignored during template rendering - and will produce no output",
            "variant": ""
          }
        ],
        "description": "Adding comments to templates, or commenting out sections of a template",
        "sectionTypes": {}
      },
      {
        "_type": "para",
        "title": "JsRender comment tags versus HTML comments",
        "text": "You can include "
      },
      {
        "_type": "template",
        "title": "",
        "markup": "<!-- This is an HTML comment -->"
      },
      {
        "_type": "para",
        "title": "",
        "text": "&mdash; but unlike the JsRender comment tag, the HTML comment will not be ignored by JsRender or JsViews. It will be included in the rendered output, and will get inserted into the DOM along with other rendered markup."
      }
    ]
  },
  "iftag": {
    "title": "{{if ...}}",
    "path": "",
    "sections": [
      {
        "_type": "tag",
        "typeLabel": "Tag:",
        "title": "{{if ...}}",
        "name": "for NAME",
        "signatures": [
          {
            "_type": "signature",
            "title": "Conditional block",
            "params": [],
            "args": [
              {
                "_type": "param",
                "name": "pathOrExpr",
                "type": "object or string",
                "optional": false,
                "description": "The data-path or expression to be tested"
              }
            ],
            "sections": [
              {
                "_type": "para",
                "title": "",
                "text": "<b>Note:</b> The data context inside the <em>{{if}}</em> block is the same as the outer context"
              }
            ],
            "example": "{{if nickname}}\n    Nickname: {{:nickname}}\n{{/if}}",
            "description": "Render the block only if the expression is true",
            "variant": "{{if pathOrExpr}}...{{/if}}"
          },
          {
            "_type": "signature",
            "title": "Conditional inclusion of external template",
            "params": [
              {
                "_type": "param",
                "name": "nameOrExpr",
                "type": "object or string",
                "optional": true,
                "description": "The name of a template, or a template object, to be rendered",
                "propName": "tmpl"
              }
            ],
            "args": [
              {
                "_type": "param",
                "name": "pathOrExpr",
                "type": "object or string",
                "optional": false,
                "description": "The data-path or expression to be tested"
              }
            ],
            "sections": [],
            "example": "{{if nickname tmpl=\"nicknameTemplate\" /}}",
            "description": "Render the specified template only if the expression is true",
            "variant": "{{if pathOrExpr tmpl=nameOrExpr /}}"
          }
        ],
        "description": "<em>Conditional inclusion</em>: &mdash; Render the block content of the {{if}} tag (or the referenced external template) only if the data-path or expression evaluates to true ('or truey')",
        "sectionTypes": {}
      },
      {
        "_type": "para",
        "title": "Using the {{else}} tag with {{if}}",
        "text": "Using the {{else}} tag between <em>{{if}}</em> and <em>{{/if}}</em>, allows alternate rendering based on '<em>if ... else ...</em>' logic:"
      },
      {
        "_type": "tag",
        "typeLabel": "Tag:",
        "title": "{{if ...}}...{{else}}...{{/if}}",
        "name": "name",
        "signatures": [
          {
            "_type": "signature",
            "title": "Render alternate blocks depending on an expression",
            "params": [],
            "args": [
              {
                "_type": "param",
                "name": "pathOrExpr",
                "type": "object or string",
                "optional": false,
                "description": "The data-path or expression to be tested"
              }
            ],
            "sections": [
              {
                "_type": "para",
                "title": "",
                "text": "<b>Note:</b> The data context inside the {{if}} and {{else}} blocks is the same as the outer context"
              }
            ],
            "example": "{{if nickname}}\n    Nickname: {{:nickname}}\n{{else}}\n    No nickname...\n{{/if}}",
            "description": "Render first block if condition is true, otherwise render second block",
            "variant": "{{if pathOrExpr}...{{else}}...{{/if}}"
          },
          {
            "_type": "signature",
            "title": "Render different templates depending on one or more expressions",
            "params": [
              {
                "_type": "param",
                "name": "nameOrExpr",
                "type": "object or string",
                "optional": true,
                "description": "The name of a template, or a template object, to be rendered",
                "propName": "tmpl"
              }
            ],
            "args": [
              {
                "_type": "param",
                "name": "pathOrExpr",
                "type": "object or string",
                "optional": false,
                "description": "The data-path or expression to be tested"
              }
            ],
            "sections": [],
            "example": "{{if nickname tmpl=\"nicknameTemplate\"}}\n{{else tmpl=\"noNicknameTemplate\"}}\n{{/if}}",
            "description": "Render first template if condition is true, otherwise render second template",
            "variant": "{{if pathOrExpr1 tmpl=nameOrExpr1 }}{{else tmpl=nameOrExpr2 }}{{/if}}"
          }
        ],
        "description": "<em>Alternative conditional blocks</em>: &mdash; Render the block content of the {{if}} tag (or referenced template) if the expression is true, otherwise render the {{else}} block (or template)",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "else and elseif",
        "text": "You can add more than one <em>{{else}}</em> tag between <em>{{if}}</em> and <em>{{/if}}</em>, to get alternate rendering based on '<em>if ... elseif ... else ...</em>' logic. For <em>elseif</em>, just include an expression...:\n"
      },
      {
        "_type": "tag",
        "typeLabel": "Tag:",
        "title": "{{if ....}}...{{else ...}}...{{else}}...{{/if}}",
        "name": "name",
        "signatures": [
          {
            "_type": "signature",
            "title": "Render alternate blocks depending on one or more expressions",
            "params": [],
            "args": [],
            "sections": [
              {
                "_type": "para",
                "title": "",
                "text": "<b>Note: </b>Any of the {{if}} or {{else}} tags can have a <em>tmpl=nameOrExpr</em> parameter. The external template will be used instead of block content for that tag."
              }
            ],
            "example": "{{if nickname}}\n    Nickname: {{:nickname}}\n{{else altnickname}}\n    Alternate nickname: {{:altnickname}}\n{{else}}\n    No nickname...\n{{/if}}",
            "description": "Render first block for which condition is true, otherwise last block",
            "variant": "{{if pathOrExpr1}}...{{else pathOrExpr2}}...{{else}}...{{/if}"
          }
        ],
        "description": "<em>Multiple alternative conditional blocks</em>: &mdash; Render the first {{if}} or {{else}} block for which the expression is true. If none are true, and there is an {{else}} without an expression, render that block",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "[\n  {title: \"The A team\", members: [...], standby: [...]},\n  {title: \"The B team\", members: [], standby: [...]},\n  {title: \"The C team\", standby: []}\n]"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{if members && members.length}}\n  ...\n{{else standby && standby.length}}\n  Standby only:\n  ...\n{{else}}\n  No members!\n{{/if}}"
          }
        ],
        "markup": "<h4>{{:title}}</h4>\n{{if members && members.length}}\n  <ul>\n    {{for members}}\n      <li>{{:name}}</li>\n    {{/for}}\n  </ul>\n{{else standby && standby.length}}\n  Standby only:\n  <ul>\n    {{for standby}}\n      <li>{{:name}}</li>\n    {{/for}}\n  </ul>\n{{else}}\n  No members!\n{{/if}}",
        "data": [
          {
            "title": "The A team",
            "members": [
              {
                "name": "Pete"
              },
              {
                "name": "Heidi"
              }
            ],
            "standby": [
              {
                "name": "Xavier"
              }
            ]
          },
          {
            "title": "The B team",
            "members": [],
            "standby": [
              {
                "name": "Robert"
              },
              {
                "name": "Adriana"
              }
            ]
          },
          {
            "title": "The C team",
            "standby": []
          }
        ],
        "onlyJsRender": true,
        "height": "300",
        "title": "{{if}}...{{else}}...{{/if}}"
      }
    ]
  },
  "customtags": {
    "title": "Custom Tags",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "jsrcustomtags",
            "label": "JsRender custom tags"
          },
          {
            "hash": "tagsascontrols",
            "label": "Custom tags as controls"
          }
        ]
      }
    ]
  },
  "jsoapi": {
    "title": "JsObservable",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "propchange",
            "label": "Modify an object observably"
          },
          {
            "hash": "collchange",
            "label": "Modify an array observably"
          },
          {
            "hash": "observeobjectsarrays",
            "label": "Observe objects and arrays"
          }
        ]
      }
    ]
  },
  "gettingstarted": {
    "title": "Getting started",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "jsrplaying",
            "label": "Playing with JsRender"
          },
          {
            "hash": "jsvplaying",
            "label": "Playing with JsViews"
          },
          {
            "hash": "concepts",
            "label": "Concepts"
          },
          {
            "_type": "topic",
            "hash": "jsrapi",
            "label": "JsRender API - Templated UI"
          },
          {
            "_type": "topic",
            "hash": "jsvapi",
            "label": "JsViews API - Data-driven UI"
          },
          {
            "_type": "topic",
            "hash": "jsoapi",
            "label": "JsObservable API - Observing data"
          },
          {
            "_type": "topic",
            "hash": "samples",
            "label": "Samples"
          }
        ]
      }
    ]
  },
  "jsrplaying": {
    "title": "Playing with JsRender",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "JsRender templates",
        "text": "JsRender templates are probably the most powerful and at the same time the most intuitive of template engines out there."
      },
      {
        "_type": "para",
        "title": "",
        "text": " To get started, let's just create a template, and run it against some data. The way you do that in code is like this:"
      },
      {
        "_type": "template",
        "title": "Here's a template:",
        "markup": "<label>Name:</label> {{:name}}"
      },
      {
        "_type": "code",
        "title": "Here's some code:",
        "code": "var person = {\n    name: \"Adriana\"\n};\n\nvar html = myTemplate.render(person);"
      },
      {
        "_type": "para",
        "title": "And here it is as a working sample:",
        "text": "Let's go straight to a sample showing how that template renders against the data. Like all the samples in this documentation, it is a working sample that you can experiment with. \n"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "You can hit <em>Try it</em>, modify the template or the data, then hit <em>Run Code</em> to see the effect immediately, in the running sample above."
          },
          {
            "_type": "para",
            "title": "",
            "text": "For example, replace the data with the following:"
          },
          {
            "_type": "data",
            "title": "",
            "data": [
              {
                "name": "Adriana"
              },
              {
                "name": "Robert"
              }
            ]
          },
          {
            "_type": "para",
            "title": "",
            "text": "Or try replacing the template with the following:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<table><tbody><tr>\n    <td>Name:</label> {{:name}}</td>\n</tr></tbody><table>"
          }
        ],
        "title": "A first template:",
        "markup": "<label>Name:</label> {{:name}}<br/>",
        "data": {
          "name": "Adriana"
        },
        "height": "90",
        "onlyJsRender": true
      },
      {
        "_type": "para",
        "title": "",
        "text": "OK - a few interesting things there. For example, if you tried changing the data, and providing an array instead of an object, you will have seen that the template rendered once for each item in the array. <br/><br/>But before we look at more details on the template rendering, let's look at how you get a compiled template object for you markup, (<em>myTemplate</em> in the code example above) so you can call the render method. <br/><br/>The next working example shows you that."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "In the html you see that we put our markup in a script block with <em>type=\"text/x-jsrender\"</em>..."
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <label>Name:</label> {{:name}}\n</script>"
          },
          {
            "_type": "para",
            "title": "",
            "text": "... and then in the code we call the <a href=\"#$templates\"><em>$.templates</em></a> method with a jQuery selector for that script block, to get the compiled template."
          },
          {
            "_type": "code",
            "title": "",
            "code": "var myTemplate = $.templates(\"#personTmpl\");\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "After that we run the code we have already seen to render the template against our data, and get the HTML output as a string. (We pass the data - this time we used an array - to the <a href=\"#rendertmpl\"><em>render()</em></a> method of our compiled template.)"
          },
          {
            "_type": "code",
            "title": "",
            "code": "var html = myTemplate.render(people);"
          },
          {
            "_type": "para",
            "title": "",
            "text": "Finally we simply insert that output into the HTML DOM using the jQuery html() method."
          },
          {
            "_type": "para",
            "title": "",
            "text": "Again, you can play with the sample, by changing the data, or the markup, or the code."
          },
          {
            "_type": "para",
            "title": "",
            "text": "For example if you change the template to produce a <em>&lt;tr></em>, you will want to insert the output into the tbody of a table, by adding a <em>&lt;table>&lt;tbody></em> target container - as in the following:"
          }
        ],
        "html": "<div id=\"peopleList\"></div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <label>Name:</label> {{:name}}\n</script>",
        "code": "var myTemplate = $.templates(\"#personTmpl\");\n\nvar people = [\n  {\n    name: \"Adriana\"\n  },\n  {\n    name: \"Robert\"\n  }\n];\n\nvar html = myTemplate.render(people);\n\n$(\"#peopleList\").html(html);",
        "title": "Complete code for template rendering:",
        "onlyJsRender": true,
        "height": "110"
      },
      {
        "_type": "para",
        "title": "What else is in templates?",
        "text": "JsRender template have a very rich feature set, yet a small number of predefined tags. The links at the moment of this topic give details on some of the features."
      },
      {
        "_type": "para",
        "title": "",
        "text": " But let's try one more sample, where this time, instead of passing our people array to the template.render() method, we will pass an object (our <em>app</em> object) which will have a <em>people</em> property. Now in the template we will use a <em>{{for}}</em> tag to iterate over the <em>people</em>. "
      },
      {
        "_type": "para",
        "title": "",
        "text": "Also we'll use an <em>{{if}}</em> tag to test whether the person has a <em>nickname</em> field, and if so we will render out the nickname too..."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "The <em>{{for people}}...{{/for}}</em> block tag, in the template, looks at the current data item (the <em>app</em> that we passed in) and navigates a data-path that you provide as parameter - in this case <em>people</em>."
          },
          {
            "_type": "para",
            "title": "",
            "text": "JsRender supports different kinds of paths, as well as expressions of various kinds. The data-path can be something like <em>address.street</em>, with 'dot' separators, but in this case it is simply the <em>people</em> property of the app object."
          },
          {
            "_type": "para",
            "title": "",
            "text": "Now, because <em>people</em> is an array, JsRender will render the content of the <em>{{for}}...{{/for}}</em> block <b><em>once for each item in the array</em></b>.  "
          },
          {
            "_type": "para",
            "title": "",
            "text": "Within the block the current item is now the person (item in the array), and there we have an <em>{{if people}}...{{/if}}</em> block tag, which takes an expression as parameter."
          },
          {
            "_type": "para",
            "title": "",
            "text": " In this case the expression is another data-path, <em>nickname</em>. So it renders the content of the <em>{{if}}...{{/if}}</em> block if the nickname is not undefined (or is not null, or the empty string)."
          },
          {
            "_type": "para",
            "title": "",
            "text": "You can experiment by replacing the <em>{{if nickname}}</em> expression. For example, try giving <em>Adriana</em> the nickname <em>Adriana</em>! Then try replacing <em>{{if nickname}}</em> with:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{if nickname && nickname !== name}} "
          }
        ],
        "html": "<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"peopleTmpl\" type=\"text/x-jsrender\">\n  <tr><td>\n    <ul>\n      {{for people}}\n        <li>\n          {{:name}}\n          {{if nickname}}\n            ( {{:nickname}} )\n          {{/if}}\n        </li>\n      {{/for}}\n    </ul>\n  </td></tr>\n</script>",
        "code": "var myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\",\n      nickname: \"Bob\"\n    }\n  ];\n\n  app = {\n    people: people\n  };\n\nvar html = myTemplate.render(app);\n\n$(\"#peopleList\").html(html);\n",
        "onlyJsRender": true,
        "title": "Some template tags...",
        "height": "110"
      },
      {
        "_type": "links",
        "title": "Links",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "jsrtags",
            "label": "Built-in template tags"
          },
          {
            "_type": "topic",
            "hash": "data",
            "label": "Data"
          },
          {
            "_type": "topic",
            "hash": "templates",
            "label": "Templates"
          },
          {
            "_type": "topic",
            "hash": "views",
            "label": "Views"
          },
          {
            "_type": "topic",
            "hash": "tagexpressions",
            "label": "Tag expressions"
          },
          {
            "_type": "topic",
            "hash": "customtags",
            "label": "Custom tags"
          },
          {
            "_type": "topic",
            "hash": "jsrapi",
            "label": "JsRender API"
          }
        ]
      }
    ]
  },
  "jsvplaying": {
    "title": "Playing with JsViews",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "JsViews: A platform for data-bound single-page apps",
        "text": "JsViews provides dynamic data-bound views, built on top of JsRender templates. It \"brings JsRender templates to life\". So let's start with the JsRender template we ended up with in the <a href=\"#jsrplaying\">Playing with JsRender</a> topic:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "If you look at the code you will see it is almost identical to the previous JsRender sample. One difference though: The two lines for rendering the template as a string and then inserting it into the DOM:"
          },
          {
            "_type": "code",
            "title": "",
            "code": "var html = myTemplate.render(app);\n\n$(\"#peopleList\").html(html);\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "...have been replaced by a single line:"
          },
          {
            "_type": "code",
            "title": "",
            "code": "myTemplate.link(\"#peopleList\", app);"
          },
          {
            "_type": "para",
            "title": "",
            "text": "That line of code renders the template against the data (second parameter) and then inserts that data under the container element (first parameter), <em>and data-binds the HTML</em>. "
          }
        ],
        "sampleName": "",
        "url": "",
        "html": "<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"peopleTmpl\" type=\"text/x-jsrender\">\n  <tr><td>\n    <ul>\n      {{for people}}\n        <li>\n          {{:name}}\n        </li>\n      {{/for}}\n    </ul>\n  </td></tr>\n</script>\n",
        "code": "var myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\"\n    }\n  ];\n\nvar app = {\n    people: people\n  };\n\nmyTemplate.link(\"#peopleList\", app);",
        "height": "120",
        "title": "Using the template.link() method"
      },
      {
        "_type": "para",
        "title": "Data-linking",
        "text": "In JsViews we refer to <em>data-linking</em>. It means data-binding, but refers to the particular approach used in JsViews, which is based on <em>observable arrays and objects</em>."
      },
      {
        "_type": "para",
        "title": "",
        "text": "If you take an object and assign a new value to one of its properties (fields), there is no corresponding event that can allow other code to know you modified the object. Similarly, mutating an array will not provide any events or notifications to other code.\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "\nThat's where <em>JsObservable</em> comes in. It provides ways of changing objects and arrays, <em>observably</em>.\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "The next sample shows what happens when the template renders against an array, and then that array is modified 'observably' (<em>observable collection change</em>).\n"
      },
      {
        "_type": "code",
        "title": "",
        "code": "$(\"#addBtn\").on(\"click\", function(){\n  $.observable(people).insert(people.length, {name: \"name\"});\n})\n"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "Click on the Add button, and a new row gets added to the array. The template rendering automatically updates to show the new row."
          },
          {
            "_type": "para",
            "title": "",
            "text": "It uses the code:"
          },
          {
            "_type": "code",
            "title": "",
            "code": "$.observable(people).insert(people.length, {name: \"name\"});"
          },
          {
            "_type": "para",
            "title": "",
            "text": "But notice that the template is different from previously. It has that extra carat sign: <em style=\"white-space:nowrap\">{<b>^</b>{for ...}}</em>. Try removing the <b>^</b> and then clicking the <em>Add</em> button. - Nothing happens."
          },
          {
            "_type": "para",
            "title": "",
            "text": "Any regular JsRender tag <em>{{someTag ...}}</em> - whether built-in or custom - can be data-linked by adding the <b>^</b>: <em style=\"white-space:nowrap\">{<b>^</b>{someTag ...}}</em>. That tag has become 'dynamic' and will re-render itself whenever it needs to, if the underlying data changes ('observably')."
          },
          {
            "_type": "para",
            "title": "",
            "text": "Remove the <b>^</b>, and the tag is 'dead'..."
          }
        ],
        "html": "<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"peopleTmpl\" type=\"text/x-jsrender\">\n  <tr><td>\n    <button id=\"addBtn\">Add</button>\n  </td></tr>\n  {^{for people}}\n    <tr><td>\n      {{:name}}\n    </td></tr>\n  {{/for}}\n</script>",
        "code": "var myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\"\n    }\n  ];\n\nvar app = {\n    people: people\n  };\n\nvar html = myTemplate.link(\"#peopleList\", app);\n\n$(\"#addBtn\").on(\"click\", function(){\n  $.observable(people).insert(people.length, {name: \"name\"});\n})",
        "height": "200",
        "title": "Data-linked tags and observable arrays and objects "
      },
      {
        "_type": "para",
        "title": "",
        "text": "What about changing an object? Let's modify the <em>name</em> on a <em>person</em> object (<em>observable property change</em>):"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "Here is the code when you click <em>Change</em>:"
          },
          {
            "_type": "code",
            "title": "",
            "code": "function(){\n  var dataItem = $.view(this).data;\n\n  $.observable(dataItem).setProperty(\"name\", dataItem.name + counter++);\n}"
          },
          {
            "_type": "para",
            "title": "",
            "text": "The code for \"setProperty\" makes sense, given what we have already seen. You call <em style=\"white-space:nowrap\">$.observable(myObject)</em> to get an 'observable form of your object' which will provide you appropriate methods you can call: <em style=\"white-space:nowrap\">setProperty(...)</em> if it was an object, and <em>insert, remove, refresh</em> and <em>move</em>, if it was an array. "
          },
          {
            "_type": "para",
            "title": "",
            "text": "But in our case, the first problem is to know <em>which</em> person object should be modified by this particular button. The <em>this</em> pointer in the click-handler is the element, and our code: "
          },
          {
            "_type": "code",
            "title": "",
            "code": "var dataItem = $.view(this).data;"
          },
          {
            "_type": "para",
            "title": "",
            "text": "let's us get the <em>view</em> (an 'instance' of a rendered template, or template tag block) and hence to the data item (in this case the <em>person</em>) we want to modify."
          },
          {
            "_type": "para",
            "title": "",
            "text": "As in the previous sample, we have 'brought a tag to life' by writing:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<td>{^{:name}}</td>\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "Change it back to:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<td>{^{:name}}</td>"
          },
          {
            "_type": "para",
            "title": "",
            "text": "and you will see that the name no longer updates when you click on the <em>Change</em> button."
          }
        ],
        "html": "<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"peopleTmpl\" type=\"text/x-jsrender\">\n  <tr><td colspan=\"2\">\n    <button id=\"addBtn\">Add</button>\n  </td></tr>\n  {^{for people}}\n    <tr>\n      <td>{^{:name}}</td>\n      <td>\n        <button class=\"changeBtn\">Change</button>\n      </td>\n    </tr>\n  {{/for}}\n</script>",
        "height": "200",
        "code": "var myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\"\n    }\n  ];\n\nvar app = {\n    people: people\n  };\n\nvar counter = 1;\n\nmyTemplate.link(\"#peopleList\", app);\n\n$(\"#addBtn\").on(\"click\", function(){\n  $.observable(people).insert(people.length, {name: \"name\"});\n})\n\n$(\"#peopleList\").on(\"click\", \".changeBtn\", function(){\n  var dataItem = $.view(this).data;\n  $.observable(dataItem).setProperty(\"name\", dataItem.name + counter++);\n})\n",
        "title": "Observable change: propertyChange"
      },
      {
        "_type": "para",
        "title": "Data-linked tags...",
        "text": "So far have used data-linked template tags for data-linking, as in:"
      },
      {
        "_type": "template",
        "title": "",
        "markup": "<td>{^{:name}}</td>"
      },
      {
        "_type": "para",
        "title": "",
        "text": "But the fact that the data-linked tag is wrapped by an HTML element means that if we want we can replace it by an 'element-base' syntax:"
      },
      {
        "_type": "template",
        "title": "...or element-based data-linking",
        "markup": "<td data-link=\"name\"></td>"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "So this version of the sample uses:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<td data-link=\"name\"></td>"
          },
          {
            "_type": "para",
            "title": "",
            "text": "Try changing it back to the data-linked tag syntax. You will see that the sample works just the same..."
          }
        ],
        "html": "<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"peopleTmpl\" type=\"text/x-jsrender\">\n  <tr><td colspan=\"2\">\n    <button id=\"addBtn\">Add</button>\n  </td></tr>\n  {^{for people}}\n    <tr>\n      <td data-link=\"name\"></td>\n      <td>\n        <button class=\"changeBtn\">Change</button>\n      </td>\n    </tr>\n  {{/for}}\n</script>",
        "code": "var myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\"\n    }\n  ];\n\nvar app = {\n    people: people\n  };\n\nvar counter = 1;\n\nmyTemplate.link(\"#peopleList\", app);\n\n$(\"#addBtn\").on(\"click\", function(){\n  $.observable(people).insert(people.length, {name: \"name\"});\n})\n\n$(\"#peopleList\").on(\"click\", \".changeBtn\", function(){\n  var dataItem = $.view(this).data;\n  $.observable(dataItem).setProperty(\"name\", dataItem.name + counter++);\n})\n",
        "height": "200",
        "title": "Element-based linking: \"data-link\""
      },
      {
        "_type": "para",
        "title": "",
        "text": "But what about <em>two-way</em> data-binding?"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "This is where the element-based data-linking comes into its own. The textbox uses declarative binding:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<td data-link=\"name\"></td>\n<td>\n  <input data-link=\"name\"/>\n</td>\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "The <em>&lt;input></em> and the <em>&lt;td></em> are both data-linked. The underlying data gets modified when you change the name in the textbox - and updates the <em>&lt;td></em>, without you needing to write any <em>propertyChange</em> code at all."
          }
        ],
        "title": "Two-way data-binding",
        "html": "<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"peopleTmpl\" type=\"text/x-jsrender\">\n  <tr><td colspan=\"2\">\n    <button id=\"addBtn\">Add</button>\n  </td></tr>\n  {^{for people}}\n    <tr>\n      <td data-link=\"name\"></td>\n      <td>\n        <input data-link=\"name\"/>\n      </td>\n    </tr>\n  {{/for}}\n</script>",
        "code": "var myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\"\n    }\n  ];\n\nvar app = {\n    people: people\n  };\n\nvar counter = 1;\n\nmyTemplate.link(\"#peopleList\", app);\n\n$(\"#addBtn\").on(\"click\", function(){\n  $.observable(people).insert(people.length, {name: \"name\"});\n})\n",
        "height": "200"
      },
      {
        "_type": "para",
        "title": "A more complete sample:",
        "text": "This was just a glimpse of some of the richness of JsViews data-linking. The next sample let's you see a more fully-fledged example, which you can experiment with."
      },
      {
        "_type": "para",
        "title": "",
        "text": "See the links section below, for more details on features and APIs."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "This sample includes binding to <em>&ltselect></em>..."
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<select data-link=\"selectedID\" size=\"5\">"
          },
          {
            "_type": "para",
            "title": "",
            "text": "And also to the <em>&ltoption></em>s within the <em>&lt;select></em>...."
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{^{for people}}\n  <option data-link=\"{:name} value{:ID} selected{:ID === ~root.selectedID}\"></option>\n{{/for}}\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "It also shows observably removing items from an array..."
          },
          {
            "_type": "code",
            "title": "",
            "code": "$.observable(people).remove($.inArray(app.selected(), people));"
          },
          {
            "_type": "para",
            "title": "",
            "text": "It shows data-linking to the <em>disabled</em> property of an element..."
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<button data-link=\"disabled{:selectedID === '0'}\">Remove</button>\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "And it shows the use of a <em>computed observable</em> in JsViews"
          },
          {
            "_type": "code",
            "title": "",
            "code": "var app = {\n    ...\n    selected: function() {\n      ...\n    }\n  };\n\napp.selected.depends = \"selectedID\";"
          }
        ],
        "code": "var myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n  {\n    ID: \"Ad0\",\n    name: \"Adriana\"\n  },\n  {\n    ID: \"Ro0\",\n    name: \"Robert\",\n    nickname: \"Bob\"\n  }\n];\n\nvar counter = 1;\n\nvar app = {\n    people: people,\n    selectedID: people[1].ID,\n    selected: function() {\n      for (var i=0; i<people.length; i++) {\n        if (people[i].ID === this.selectedID) {\n          return people[i];\n        }\n      }\n      return {};\n    }\n  };\n\napp.selected.depends = \"selectedID\";\n\n// Data-link details container to people, using the peopleTmpl template\nmyTemplate.link(\"#peopleList\", app);\n\n$(\"#addBtn\").on(\"click\", function(){\nvar newID = \"new\" + counter++;\n  $.observable(people).insert(people.length, {ID: newID, name: \"name\"});\n  $.observable(app).setProperty(\"selectedID\", newID);\n\n})\n\n$(\"#removeBtn\").on(\"click\", function(){\n  $.observable(people).remove($.inArray(app.selected(), people));\n  $.observable(app).setProperty(\"selectedID\", \"0\");\n})\n",
        "html": "<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"peopleTmpl\" type=\"text/x-jsrender\">\n  <tr><td>\n    <button id=\"addBtn\">Add</button>\n    <button id=\"removeBtn\" data-link=\"disabled{:selectedID === '0'}\">Remove</button>\n  </td></tr>\n  <tr><td>\n    <select data-link=\"selectedID\" size=\"5\">\n      <option value=\"0\">Choose a person to edit</option>\n      {^{for people}}\n        <option data-link=\"{:name} value{:ID} selected{:ID === ~root.selectedID}\"></option>\n      {{/for}}\n    </select>\n  </td></tr>\n  <tr><td>\n    <label>Name:<input data-link=\"{:selected().name:} disabled{:selectedID === '0'}\" /></label>\n    <label>Nickname:<input data-link=\"{:selected().nickname:} disabled{:selectedID === '0'}\" /></label>\n  </td></tr>\n  <tr><td class=\"center\">\n    {^{for selected()}}\n      {^{:name}}\t\n      {^{if nickname}}\n        ( {^{:nickname}} )\n      {{/if}}\n    {{/for}}\n  </td></tr>\n</script>",
        "height": "220",
        "title": "data-linking to &lt;select>... and much more..."
      },
      {
        "_type": "links",
        "title": "Links",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "renderorlink",
            "label": "Rendering versus linking"
          },
          {
            "_type": "topic",
            "hash": "data",
            "label": "Data"
          },
          {
            "_type": "topic",
            "hash": "views",
            "label": "Views"
          },
          {
            "_type": "topic",
            "hash": "linkobservedispose",
            "label": "Linking, observing, disposing"
          },
          {
            "_type": "topic",
            "hash": "computed",
            "label": "Computed observables"
          },
          {
            "_type": "topic",
            "hash": "dependencies",
            "label": "Declaring dependencies"
          },
          {
            "_type": "topic",
            "hash": "tagcontrols",
            "label": "Tag Controls"
          },
          {
            "_type": "topic",
            "hash": "mvvm-mvp",
            "label": "MVVM and MVP"
          },
          {
            "_type": "topic",
            "hash": "jsvapi",
            "label": "JsViews API"
          },
          {
            "_type": "topic",
            "hash": "jsoapi",
            "label": "JsObservable API"
          }
        ]
      }
    ]
  },
  "concepts": {
    "title": "Concepts",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "data",
            "label": "Data"
          },
          {
            "hash": "templates",
            "label": "Templates"
          },
          {
            "hash": "views",
            "label": "Views"
          },
          {
            "hash": "renderorlink",
            "label": "Rendering versus linking"
          },
          {
            "hash": "helpers",
            "label": "Providing helpers"
          },
          {
            "hash": "converters",
            "label": "Converters"
          },
          {
            "hash": "customtags",
            "label": "Custom tags"
          },
          {
            "hash": "tagexpressions",
            "label": "Tag expressions"
          },
          {
            "hash": "linkobservedispose",
            "label": "Linking, observing, disposing"
          },
          {
            "hash": "tagcontrols",
            "label": "Tag Controls"
          },
          {
            "hash": "mvvm-mvp",
            "label": "MVVM and MVP"
          }
        ]
      }
    ]
  },
  "data": {
    "title": "Data",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "objectsorvm",
            "label": "Plain objects or View Model"
          },
          {
            "hash": "ajax",
            "label": "Ajax requests"
          },
          {
            "hash": "observabledata",
            "label": "Observable data"
          },
          {
            "hash": "computed",
            "label": "Computed observables"
          },
          {
            "hash": "dependencies",
            "label": "Declaring dependencies"
          }
        ]
      }
    ]
  },
  "objectsorvm": {
    "title": "Plain objects or View Model",
    "path": "",
    "sections": []
  },
  "ajax": {
    "title": "Ajax requests",
    "path": "",
    "sections": []
  },
  "observabledata": {
    "title": "Observable data",
    "path": "",
    "sections": []
  },
  "computed": {
    "title": "Computed observables",
    "path": "",
    "sections": []
  },
  "dependencies": {
    "title": "Declaring dependencies",
    "path": "",
    "sections": []
  },
  "templates": {
    "title": "Templates",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "composition",
            "label": "Composition"
          }
        ]
      }
    ]
  },
  "composition": {
    "title": "Composition",
    "path": "",
    "sections": []
  },
  "views": {
    "title": "Views",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "viewhierarchy",
            "label": "View hierarchy"
          }
        ]
      }
    ]
  },
  "viewhierarchy": {
    "title": "View hierarchy",
    "path": "",
    "sections": []
  },
  "renderorlink": {
    "title": "Rendering versus linking",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "renderasstring",
            "label": "String-based rendering"
          },
          {
            "hash": "linkingtohtml",
            "label": "Data-binding to HTML"
          },
          {
            "hash": "data-link",
            "label": "Element-based: data-link"
          },
          {
            "hash": "inlinebinding",
            "label": "Inline tag binding"
          }
        ]
      }
    ]
  },
  "renderasstring": {
    "title": "String-based rendering",
    "path": "",
    "sections": []
  },
  "linkingtohtml": {
    "title": "Data-binding to HTML",
    "path": "",
    "sections": []
  },
  "data-link": {
    "title": "Element-based: data-link",
    "path": "",
    "sections": []
  },
  "inlinebinding": {
    "title": "Inline tag binding",
    "path": "",
    "sections": []
  },
  "jsrcustomtags": {
    "title": "JsRender custom tags",
    "path": "",
    "sections": []
  },
  "tagsascontrols": {
    "title": "Custom tags as controls",
    "path": "",
    "sections": []
  },
  "expressions": {
    "title": "Tag expressions",
    "path": "",
    "sections": []
  },
  "allowcode": {
    "title": "Allow code?",
    "path": "",
    "sections": []
  },
  "tagexpressions": {
    "title": "Tag expressions",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "allowcode",
            "label": "Allow code?"
          },
          {
            "hash": "expressions",
            "label": "Expressions"
          },
          {
            "hash": "expressions/datapath",
            "label": "Data paths"
          },
          {
            "hash": "expressions/helperpath",
            "label": "Helper paths"
          },
          {
            "hash": "expressions/viewpath",
            "label": "View paths"
          }
        ]
      }
    ]
  },
  "expressions/datapath": {
    "title": "Data paths",
    "path": "",
    "sections": []
  },
  "expressions/helperpath": {
    "title": "Helper paths",
    "path": "",
    "sections": []
  },
  "expressions/viewpath": {
    "title": "View paths",
    "path": "",
    "sections": []
  },
  "linkobservedispose": {
    "title": "Linking, observing, disposing",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": []
      }
    ]
  },
  "tagcontrols": {
    "title": "Tag Controls",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "taghierarchy",
            "label": "Tag hierarchy"
          },
          {
            "hash": "taglifecycle",
            "label": "Tag lifecycle"
          },
          {
            "hash": "tagmethods",
            "label": "Tag methods and properties"
          }
        ]
      }
    ]
  },
  "taghierarchy": {
    "title": "Tag hierarchy",
    "path": "",
    "sections": []
  },
  "taglifecycle": {
    "title": "Tag lifecycle",
    "path": "",
    "sections": []
  },
  "tagmethods": {
    "title": "Tag methods and properties",
    "path": "",
    "sections": []
  },
  "jsrtags": {
    "title": "Built-in template tags",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "assigntag",
            "label": "{{: ...}}"
          },
          {
            "hash": "htmltag",
            "label": "{{> ...}}"
          },
          {
            "hash": "includetag",
            "label": "{{include ...}}"
          },
          {
            "hash": "fortag",
            "label": "{{for ...}}"
          },
          {
            "hash": "iftag",
            "label": "{{if ...}}"
          },
          {
            "hash": "elsetag",
            "label": "{{else ...}}"
          },
          {
            "hash": "commenttag",
            "label": "{{!-- ... --}}"
          },
          {
            "hash": "customtags",
            "label": "Custom tags"
          }
        ]
      }
    ]
  },
  "tmplink": {
    "title": "Linking data to HTML",
    "path": "",
    "sections": []
  },
  "observe": {
    "title": "Observing data",
    "path": "",
    "sections": []
  },
  "mvvm-mvp": {
    "title": "MVVM and MVP",
    "path": "",
    "sections": []
  },
  "jsv-converter1way": {
    "title": "one-way binding converter",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "paragraph"
      }
    ]
  },
  "jsv-converterback": {
    "title": "2-way binding - convert back",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "paragraph"
      }
    ]
  },
  "jsv-converter": {
    "title": "converters in JsViews",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "jsv-converter1way",
            "label": "one-way binding converter"
          },
          {
            "hash": "jsv-converterback",
            "label": "2-way binding - convert back"
          }
        ]
      }
    ]
  },
  "jsr-converter": {
    "title": "converters in JsRender",
    "path": "",
    "sections": []
  },
  "converters": {
    "title": "Converters",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "jsr-converter",
            "label": "converters in JsRender"
          },
          {
            "hash": "jsv-converter",
            "label": "converters in JsViews"
          }
        ]
      }
    ]
  },
  "helperpaths": {
    "title": "Helper paths",
    "path": "",
    "sections": []
  },
  "pass helper": {
    "title": "Passing in helpers",
    "path": "",
    "sections": []
  },
  "registerhelper": {
    "title": "Registering helpers",
    "path": "",
    "sections": []
  },
  "helpers": {
    "title": "Providing helpers",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "registerhelper",
            "label": "Registering helpers"
          },
          {
            "hash": "pass helper",
            "label": "Passing in helpers"
          },
          {
            "hash": "helperpaths",
            "label": "Helper paths"
          }
        ]
      }
    ]
  },
  "samples/tagcontrols/tabs": {
    "title": "Sample: A JsViews \"tabs\" tag control",
    "path": "",
    "sections": [
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "Nested tags:",
            "text": "The sample shows two instances of a custom <e>{{tabs}}</em> tag control - an outer one, and a second inner one in one of the tabs of the outer one..."
          },
          {
            "_type": "template",
            "title": "Here is markup for the inner one:",
            "markup": "{^{tabs tabCaption=\"Inner One\"}}\n  ONE inner\n{{else tabCaption=\"Inner Two\"}}\n  TWO  {{>label2}}\n{{else tabCaption=\"Inner Three\"}}\n  THREE inner\n{{/tabs}}\n"
          }
        ],
        "url": "samples/tagcontrols/tabs/sample",
        "sampleName": "tagcontrols/tabs",
        "height": "290",
        "title": "Tabs control"
      }
    ]
  },
  "samples": {
    "title": "Samples",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "samples/jsr",
            "label": "JsRender"
          },
          {
            "hash": "samples/jso",
            "label": "JsObservable"
          },
          {
            "hash": "samples/jsv",
            "label": "JsViews"
          }
        ]
      }
    ]
  },
  "samples/tagcontrols": {
    "title": "Samples: Tag controls",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "samples/tagcontrols/tabs",
            "label": "tabs control"
          }
        ]
      }
    ]
  },
  "unobserve": {
    "title": "unobserve()",
    "path": "",
    "sections": []
  },
  "onarrchange": {
    "title": "onArrayChange",
    "path": "",
    "sections": []
  },
  "propchangeevargs": {
    "title": "PropertyChangeEventArguments",
    "path": "",
    "sections": []
  },
  "propchangehandler": {
    "title": "PropertyChangeEventHandler",
    "path": "",
    "sections": []
  },
  "onpropchange": {
    "title": "onPropertyChange",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "propchangehandler",
            "label": "PropertyChangeEventHandler"
          },
          {
            "hash": "propchangeevargs",
            "label": "PropertyChangeEventArguments"
          }
        ]
      }
    ]
  },
  "observeobjectsarrays": {
    "title": "Observe objects and arrays",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "onpropchange",
            "label": "onPropertyChange"
          },
          {
            "hash": "onarrchange",
            "label": "onArrayChange"
          },
          {
            "hash": "observe",
            "label": "$.observable.observe()"
          },
          {
            "hash": "unobserve",
            "label": "unobserve()"
          }
        ]
      }
    ]
  },
  "move": {
    "title": "$.observable(array).move()",
    "path": "",
    "sections": []
  },
  "refresh": {
    "title": "$.observable(array).refresh()",
    "path": "",
    "sections": []
  },
  "remove": {
    "title": "$.observable(array).remove()",
    "path": "",
    "sections": []
  },
  "insert": {
    "title": "$.observable(array).insert()",
    "path": "",
    "sections": []
  },
  "collchange": {
    "title": "Modify an array observably",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "insert",
            "label": "$.observable(array).insert()"
          },
          {
            "hash": "remove",
            "label": "$.observable(array).remove()"
          },
          {
            "hash": "refresh",
            "label": "$.observable(array).refresh()"
          },
          {
            "hash": "move",
            "label": "$.observable(array).move()"
          }
        ]
      }
    ]
  },
  "setprop": {
    "title": "$.observable(object).setProperty()",
    "path": "",
    "sections": []
  },
  "propchange": {
    "title": "Modify an object observably",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "setprop",
            "label": "$.observable(object).setProperty()"
          }
        ]
      }
    ]
  },
  "jsvlinkcontextobject": {
    "title": "Link context object",
    "path": "",
    "sections": []
  },
  "jsvtagcontextobject": {
    "title": "Tag context object",
    "path": "",
    "sections": []
  },
  "jsvviewcontextobject": {
    "title": "View context object",
    "path": "",
    "sections": []
  },
  "jsvtagobject": {
    "title": "tag object",
    "path": "",
    "sections": []
  },
  "jsvviewobject": {
    "title": "view object",
    "path": "",
    "sections": []
  },
  "jsvtemplateobject": {
    "title": "template object",
    "path": "",
    "sections": []
  },
  "jsvviewsobject": {
    "title": "$.views object",
    "path": "",
    "sections": []
  },
  "jsrobjects": {
    "title": "JsViews objects",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "viewsobject",
            "label": "$.views object"
          },
          {
            "hash": "templateobject",
            "label": "template object"
          },
          {
            "hash": "viewobject",
            "label": "view object"
          },
          {
            "hash": "tagobject",
            "label": "tag object"
          },
          {
            "hash": "viewcontextobject",
            "label": "view context object"
          },
          {
            "hash": "tagcontextobject",
            "label": "tag context object"
          }
        ]
      }
    ]
  },
  "jsvtagcontrols": {
    "title": "Custom Tags - Tag Controls",
    "path": "",
    "sections": []
  },
  "jsvhelpers()": {
    "title": "$.views.helpers()",
    "path": "",
    "sections": []
  },
  "jsvtags()": {
    "title": "$.views.tags()",
    "path": "",
    "sections": []
  },
  "jsvconverters()": {
    "title": "$.views.converters()",
    "path": "",
    "sections": []
  },
  "jsvregister": {
    "title": "Register helpers, converters, tags...",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "jsvconverters()",
            "label": "$.views.converters()"
          },
          {
            "hash": "jsvtags()",
            "label": "$.views.tags()"
          },
          {
            "hash": "jsvhelpers()",
            "label": "$.views.helpers()"
          }
        ]
      }
    ]
  },
  "jsvtmplcompile": {
    "title": "Compile/register/get a template",
    "path": "",
    "sections": []
  },
  "jsv$()view()": {
    "title": "$(...).view()",
    "path": "",
    "sections": []
  },
  "jsv$view": {
    "title": "$.view()",
    "path": "",
    "sections": []
  },
  "$view": {
    "title": "Access views",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "jsv$view",
            "label": "$.view()"
          },
          {
            "hash": "jsv$()view()",
            "label": "$(...).view()"
          }
        ]
      }
    ]
  },
  "jsv$()unlink": {
    "title": "$(...).unlink()",
    "path": "",
    "sections": []
  },
  "jsv$unlink": {
    "title": "$.unlink()",
    "path": "",
    "sections": []
  },
  "jsvtmplunlink": {
    "title": "template.unlink()",
    "path": "",
    "sections": []
  },
  "jsvunlink": {
    "title": "Unlink a template",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "jsvtmplunlink",
            "label": "template.unlink()"
          },
          {
            "hash": "jsv$unlink",
            "label": "$.unlink()"
          },
          {
            "hash": "jsv$()unlink",
            "label": "$(...).unlink()"
          }
        ]
      }
    ]
  },
  "jsv$()link": {
    "title": "$(...).link()",
    "path": "",
    "sections": []
  },
  "jsv$link": {
    "title": "$.link()",
    "path": "",
    "sections": []
  },
  "jsvtmpllink": {
    "title": "template.link()",
    "path": "",
    "sections": []
  },
  "jsvlinktmpl": {
    "title": "Render and link a template",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "jsvtmpllink",
            "label": "template.link()"
          },
          {
            "hash": "jsv$link",
            "label": "$.link()"
          },
          {
            "hash": "jsv$()link",
            "label": "$(...).link()"
          }
        ]
      }
    ]
  },
  "jsvtmplrender": {
    "title": "Render a template",
    "path": "",
    "sections": []
  },
  "jsvtags": {
    "title": "Template tags",
    "path": "",
    "sections": []
  },
  "subobject": {
    "title": "$.views.sub object",
    "path": "",
    "sections": []
  },
  "settingsobject": {
    "title": "$.views.settings object",
    "path": "",
    "sections": []
  },
  "viewsobject": {
    "title": "$.views object",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "settingsobject",
            "label": "$.views.settings object"
          },
          {
            "hash": "subobject",
            "label": "$.views.sub object"
          }
        ]
      }
    ]
  },
  "tagcontextobject": {
    "title": "tag context object",
    "path": "",
    "sections": []
  },
  "viewcontextobject": {
    "title": "view context object",
    "path": "",
    "sections": []
  },
  "tagobject": {
    "title": "tag object",
    "path": "",
    "sections": []
  },
  "viewobject": {
    "title": "view object",
    "path": "",
    "sections": []
  },
  "templateobject": {
    "title": "template object",
    "path": "",
    "sections": []
  },
  "helpers()": {
    "title": "Registering helpers: $.views.helpers()",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "What are helpers?",
        "text": "JsRender templates are made up of HTML markup, text, and <em>template tags</em>. <em>Template tags</em> are used to evaluate data-paths or computed expressions, and insert those values into the rendered output."
      },
      {
        "_type": "para",
        "title": "",
        "text": "But often the values you will want to insert are not actually take from the data, but rather from other parameters or <em>metadata</em> which you want to use. And often you will want to process the values, using helper functions or other code, e.g. for converting values to other formats, or for computed values."
      },
      {
        "_type": "para",
        "title": "",
        "text": "<em>Helpers</em>, in JsRender, refers to any functions, parameters or metadata which you want to provide, in addition to the actual data you passed to the <em>render</em> method (or <em>link</em> method if you are using JsViews)."
      },
      {
        "_type": "para",
        "title": "",
        "text": "Helpers can also be objects, arrays, etc."
      },
      {
        "_type": "para",
        "title": "",
        "text": "You access helpers by prepending the \"~\" character. Here are some examples:"
      },
      {
        "_type": "template",
        "title": "",
        "markup": "{{:~myHelperValue}}\n{{:~myHelperFunction(name, title)}}\n{{for ~myHelperObject.mySortFunction(people, \"increasing\")}} ... {{/for}}"
      },
      {
        "_type": "para",
        "title": "Passing in helpers",
        "text": "There are three ways to provide helpers:\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "<ul>\n<li>Global helpers - registered using <em>$.views.helpers({myHelper1: ..., myHelper2: ...});</em></li>\n<li>Helpers registered for a specific template - <a href=\"#tmplrender\"><em>$.templates(\"mytmpl\", {markup: ..., helpers: {myHelper1: ...}});</em></a></li>\n<li>Helpers passed in on a specific render or link call - <a href=\"#tmplrender\"><em>tmpl.render(data, {myHelper1: ...});</em></a></li>\n</ul>"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "$.views.helpers({format: myFormatFunction});\n"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{:~format(name, true)}}"
          }
        ],
        "title": "Global helper: $.views.helpers(...)",
        "code": "function myFormatFunction(value, upper) {\n  return upper ? value.toUpperCase() : value.toLowerCase();\n}\n$.views.helpers({format: myFormatFunction});\n\nvar html = $(\"#personTemplate\").render({name: \"Robert\"});\n\n$(\"#person\").html(html);",
        "html": "<div id=\"person\"></div>\n\n<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  {{:~format(name, true)}}\n</script>",
        "onlyJsRender": true,
        "height": "40"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "$.templates({\n  mytmpl: {\n    markup: \"#personTemplate\",\n    helpers: {\n      format: myFormatFunction\n    }\n  }\n});"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{:~format(name)}}\n{{:~format(name, true)}}"
          }
        ],
        "title": "helper resource for a specific template",
        "code": "function myFormatFunction(value, upper) {\n  return upper ? value.toUpperCase() : value.toLowerCase();\n}\n\n$.templates({\n  mytmpl: {\n    markup: \"#personTemplate\",\n    helpers: {\n      format: myFormatFunction\n    }\n  }\n});\n\nvar html = $.render.mytmpl({name: \"Robert\"});\n\n$(\"#person\").html(html);",
        "html": "<div id=\"person\"></div>\n\n<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  {{:~format(name)}}\n  {{:~format(name, true)}}\n</script>",
        "onlyJsRender": true,
        "height": "40"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "var html = $(\"#personTemplate\").render(\n  {name: \"Robert\"}, \n  {format: myFormatFunction}\n);"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{:~format(name, true)}}\n{{:~format(name)}}\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "See <a href=\"#tmplrender\"><em>template.render(...)</em></a>"
          }
        ],
        "title": "Passing helpers with  a render() call",
        "code": "function myFormatFunction(value, upper) {\n  return upper ? value.toUpperCase() : value.toLowerCase();\n}\n\nvar html = $(\"#personTemplate\").render(\n  {name: \"Robert\"}, \n  {format: myFormatFunction}\n);\n\n$(\"#person\").html(html);",
        "html": "<div id=\"person\"></div>\n\n<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  {{:~format(name, true)}}\n  {{:~format(name)}}\n</script>",
        "onlyJsRender": true,
        "height": "40"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.views.helpers(name, helper)",
        "name": "helpers",
        "object": "$.views",
        "method": true,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "name",
                "type": "string",
                "optional": false,
                "description": "name of helper - to be used in template path expressions as ~name..."
              },
              {
                "_type": "param",
                "name": "helper",
                "type": "any type",
                "optional": false,
                "description": "the helper - a function, object, or value"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.views.helpers(\"format\", myFormatFunction);",
            "description": "Register a helper, to be used in templates with the syntax:<br/>~name"
          },
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "namedHelpers",
                "type": "object",
                "optional": false,
                "description": "Object (hash) of keys (name of helper) and values (function, object, or value)"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.views.helpers({\n  format: myFormatFunction,\n  utilities: {},\n  mode: \"filtered\"\n});",
            "description": "Register multiple helpers"
          },
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "namedHelpers",
                "type": "object",
                "optional": false,
                "description": "Object (hash) of keys (name of helper) and values (function, object, or value)"
              },
              {
                "_type": "param",
                "name": "parentTemplate",
                "type": "object or string",
                "optional": true,
                "description": "Owner template - to which this/these helper(s) are being added as private resources"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.views.helpers({\n  format: myFormatFunction,\n  ...\n}, parentTemplate);",
            "description": "Add multiple helpers as resources, to a parent template"
          }
        ],
        "description": "",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "",
        "text": "Here is an example using a 'hierarchy' of helpers..."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "Here is an example using a 'hierarchy' of helpers..."
          },
          {
            "_type": "code",
            "title": "",
            "code": "$.views.helpers({\n  ...\n  utilities: {\n    maxCount: 23,\n    subtractMax: function(val) {\n      return val - this.maxCount;\n    },\n    errorMessages: {\n      msg1: \"not available\"\n    }\n  },\n  ...\n});"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{:~utilities.subtractMax(sold) > 0\n    ? ~utilities.errorMessages.msg1\n    : \"immediate\"\n}}\n"
          }
        ],
        "code": "function myFormatFunction(value, upper) {\n  return upper ? value.toUpperCase() : value.toLowerCase();\n}\n\n$.views.helpers({\n  format: myFormatFunction,\n  utilities: {\n    maxCount: 23,\n    subtractMax: function(val) {\n      return val - this.maxCount;\n    },\n    errorMessages: {\n      msg1: \"not available\"\n    }\n  },\n  mode: \"filtered\"\n});\n\nvar html = $(\"#myTemplate\").render({title: \"gizmo\", sold: 27});\n\n$(\"#result\").html(html);",
        "html": "<div id=\"result\"></div>\n\n<script id=\"myTemplate\" type=\"text/x-jsrender\">\n  {{:~format(title, true)}}\n\n  - availability:\n  {{if ~mode===\"filtered\"}}\n    <em>\n      {{:~utilities.subtractMax(sold) > 0\n          ? ~utilities.errorMessages.msg1\n          : \"immediate\"\n      }}\n    </em>\n  {{/if}}\n</script>",
        "title": "Register multiple helpers, including objects, etc.",
        "height": "40"
      },
      {
        "_type": "para",
        "title": "Adding helpers as private resources for a parent template",
        "text": "You can pass in an existing template as an additional <em>parentTemplate</em> parameter, on  <em>any</em> call to  <em>$.views.helpers(...)</em>."
      },
      {
        "_type": "para",
        "title": "",
        "text": "In that way the helper you are registering becomes a 'private helper resource' for the <em>parentTemplate</em>, rather than being registered globally:"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "",
        "name": "helpers",
        "object": "$.views",
        "method": true,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "Add one or more helpers as private resources for a parent template",
            "params": [
              {
                "_type": "param",
                "name": "namedHelpers",
                "type": "object",
                "optional": false,
                "description": "Object (hash) of keys (name of helper) and values (function, object, or value)"
              },
              {
                "_type": "param",
                "name": "parentTemplate",
                "type": "object or string",
                "optional": true,
                "description": "Owner template - to which this/these helper(s) are being added as private resources"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.views.helpers({\n  format: myFormatFunction,\n  ...\n}, parentTemplate);",
            "description": "Add multiple helpers as resources, to a parent template"
          }
        ],
        "description": "",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "links",
        "title": "See also:",
        "links": [],
        "topics": [
          {
            "hash": "tmplrender",
            "label": "template.render(...)"
          },
          {
            "_type": "topic",
            "hash": "samples/jsr/helpers",
            "label": "Sample: Passing helpers to template.render()"
          }
        ]
      }
    ]
  },
  "tags()": {
    "title": "Registering custom tags: $.views.tags()",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "What is a custom tag?",
        "text": "JsRender custom tags are named tags <em>{{myTag ...}}</em>, which you can register, and then use in your templates."
      },
      {
        "_type": "para",
        "title": "",
        "text": "A tag renders itself as part of the template output. You determine how it renders, generally by providing either a <em>render</em> function or a template, when you declare your custom tag."
      },
      {
        "_type": "para",
        "title": "",
        "text": "The render function, or the template, can access both named parameters (<em>props</em>) and unnamed parameters (<em>args</em>), as in:"
      },
      {
        "_type": "template",
        "title": "",
        "markup": "{myTag arg0 arg1 namedProp1=xxx namedProp2=yyy}} ... {{/myTag}}"
      },
      {
        "_type": "para",
        "title": "",
        "text": "In fact it can also access the current data item - or even the whole hierarchy of views and data..."
      },
      {
        "_type": "para",
        "title": "",
        "text": "When you also use JsViews, custom tag acquire a whole new dimension. &mdash; They become <em>tag controls</em>, and you can build rich and complex single page apps cleanly and simply using custom tag controls - following an MVP or MVVM coding pattern. "
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.views.tags(name, tagFn)",
        "name": "tags",
        "object": "$.views",
        "method": true,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "name",
                "type": "string",
                "optional": false,
                "description": "name of tag - to be used in template markup: {{<b>name</b> ...}}"
              },
              {
                "_type": "param",
                "name": "tagFn",
                "type": "function",
                "optional": false,
                "description": "Tag function. returns the rendered tag"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.views.tags(\"mytag\", function(...){\n  ...return rendered content\n});\n\n{{mytag ...}} ... {{/mytag}}",
            "description": "Register a simple 'render' function as a custom tag,"
          },
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "name",
                "type": "string",
                "optional": false,
                "description": "name of tag - to be used in template markup: {{<b>name</b> ...}}"
              },
              {
                "_type": "param",
                "name": "tagOptions",
                "type": "object",
                "optional": false,
                "description": "An tagOptions object with a render method and/or a template property, and optionally other properties or methods"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.views.tags(\"mytag\", {\n  render: function(...){...},\n  template: ...\n});\n\n{{mytag ...}} ... {{/mytag}}",
            "description": "Register a custom tag using a tagOptions object"
          },
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "namedTags",
                "type": "object",
                "optional": false,
                "description": "Object (hash) of keys (name of tag) and values (render function or tagOptions object)"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.views.tags({\n  myTag1: function(val) {...},\n  myTag2: {render: function(val) {...}, ...}\n});",
            "description": "Register multiple custom tags"
          }
        ],
        "description": "",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "The function is the <em>render</em> method for the tag"
          },
          {
            "_type": "code",
            "title": "Declaring the custom tag",
            "code": "function renderBoldP(value) {\n  return \"<p><strong>\" + value + \"</strong></p>\";\n}\n\n$.views.tags(\"boldp\", renderBoldP);"
          },
          {
            "_type": "template",
            "title": "Using the tag",
            "markup": "This is the title:{{boldp title /}}"
          }
        ],
        "title": "Simple custom tag using just a function",
        "html": "<div id=\"team\"></div>\n\n<script id=\"teamTemplate\" type=\"text/x-jsrender\">\n  This is the title:{{boldp title /}}\n</script>",
        "code": "function renderBoldP(value) {\n   return \"<p><strong>\" + value + \"</strong></p>\";\n}\n\n$.views.tags(\"boldp\", renderBoldP);\n\nvar team = {\n  title: \"The A Team\"\n};\n\nvar html = $(\"#teamTemplate\").render(team);\n\n$(\"#team\").html(html);",
        "height": "80",
        "onlyJsRender": true
      },
      {
        "_type": "para",
        "title": "",
        "text": "<em>Note:</em> the <em>this</em> pointer within the tag render function is the instance of the tag, and can be used in more advanced usage, as in the next two examples:"
      },
      {
        "_type": "para",
        "title": "Wrapping block content using a template-based custom tag",
        "text": "First of all - what if we want our tag to be used as a block tag, and to render itself by wrapping the rendered block content with the <em>bold p</em> html as in:"
      },
      {
        "_type": "template",
        "title": "",
        "markup": "{{boldp}}\n  This is inside our block content:<br/>\n  <em>{{:title}}</em>\n{{/boldp}}"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "To render the block content, we call <em>this.tagCtx.render()</em>:"
          },
          {
            "_type": "code",
            "title": "",
            "code": "return \"<p><strong>\" + this.tagCtx.render() + \"</strong></p>\";\n"
          }
        ],
        "title": "Rendering block content from a custom tag function",
        "html": "<div id=\"team\"></div>\n\n<script id=\"teamTemplate\" type=\"text/x-jsrender\">\n  {{boldp}}\n    This is inside our block content:<br/>\n    <em>{{:title}}</em>\n  {{/boldp}}\n</script>",
        "code": "function renderBoldP() {\n   return \"<p><strong>\" + this.tagCtx.render() + \"</strong></p>\";\n}\n\n$.views.tags(\"boldp\", renderBoldP);\n\nvar team = {\n  title: \"The A Team\"\n};\n\nvar html = $(\"#teamTemplate\").render(team);\n\n$(\"#team\").html(html);",
        "height": "80"
      },
      {
        "_type": "para",
        "title": "",
        "text": "As well as calling the <em>render()</em> method of <em>this.tagCtx</em>, you can access <em>this.tagCtx.args</em>, <em>this.tagCtx.props</em>, <em>this.tagCtx.view.data</em> and more..."
      },
      {
        "_type": "para",
        "title": "",
        "text": "The <em>tagCtx.args</em> are the unnamed parameters. So in this example, there are two of them:"
      },
      {
        "_type": "template",
        "title": "",
        "markup": "{{someTag title name}}"
      },
      {
        "_type": "para",
        "title": "",
        "text": "In addition to being accessible as <em>tagCtx.args</em>, unnamed parameters are also passed directly as parameters to the render method (if your tag is using one):"
      },
      {
        "_type": "code",
        "title": "",
        "code": "function someTagRenderMethod(title, name) {\n  // Here, this.tagCtx.args[1] and the name parameter are the same thing\n}"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Now here is an example which has one unnamed parameter and two named parameters. You can access named parameters from <em>tagCtx.props</em>:"
      },
      {
        "_type": "template",
        "title": "",
        "markup": "{{range members start=2 end=4}}"
      },
      {
        "_type": "para",
        "title": "",
        "text": "We'll use that in our third sample, to show accessing properties from the render function of the tag:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "This sample defines a <em>{{range}}</em> tag which iterates over an array which you pass as (unnamed) parameter. It also allows you to set named parameters <em>start</em> and <em>end</em>, to determine the range of iteration. (See also the <a href=\"#samples/jsr/tags/range\">for_range</a> sample, for a more advanced implementation of a similar custom tag.)"
          },
          {
            "_type": "para",
            "title": "",
            "text": "You call it like this:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{range members start=1 end=2}}\n ...\n{{/range}}"
          },
          {
            "_type": "para",
            "title": "",
            "text": "And the render function code accesses context to get at those named and unnamed parameters... :"
          },
          {
            "_type": "code",
            "title": "",
            "code": "$.views.tags(\"range\", function(array){\n  ...\n  var start = this.tagCtx.props.start,\n  ...\n  // Render tag content, for this data item\n  ret += this.tagCtx.render(array[i]);\n  ..."
          }
        ],
        "code": "$.views.tags(\"range\", function(array){\n  var ret = \"\",\n    start = this.tagCtx.props.start,\n    end = this.tagCtx.props.end;\n  for (var i = start; i <= end; i++) {\n    // Render tag content, for this data item\n    ret += this.tagCtx.render(array[i]);\n  }\n  return ret;\n});\n\nvar team = {\n  title: \"The A Team\",\n  members: [\n    {name: \"Robert\"},\n    {name: \"Sarah\"},\n    {name: \"Xavier\"},\n    {name: \"Adriana\"}\n  ]\n};\n\nvar html = $(\"#teamTemplate\").render(team);\n\n$(\"#team\").html(html);",
        "html": "<div id=\"team\"></div>\n\n<script id=\"teamTemplate\" type=\"text/x-jsrender\">\n  <p><strong>{{:title}}</strong></p>\n  <ul>\n    {{range members start=1 end=2}} \n      <li>\n        {{:name}}\n      </li>\n    {{/range}}\n  </ul> \n</script>",
        "height": "120",
        "title": "Accessing tagCtx properties from the tag render function",
        "onlyJsRender": true
      },
      {
        "_type": "para",
        "title": "Using a tag template instead of a render function",
        "text": "If the tag definition includes a template, but no render method, then the template will be used to render the tag. Let's re-implement all three examples above using custom tags which use templates instead of render functions."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "Declaring the custom tag",
            "code": "$.views.tags(\"boldp\", {\n  template: \"<p><strong>{{:~tag.tagCtx.args[0]}}</strong></p>\"\n});"
          },
          {
            "_type": "para",
            "title": "",
            "text": "As you see, the template is accessing the unnamed parameter tagCtx.args[0]."
          },
          {
            "_type": "para",
            "title": "",
            "text": "The result is identical to the other implementation using a function. You call it just the same:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{boldp title /}}"
          }
        ],
        "code": "$.views.tags(\"boldp\", {\n  template: \"<p><strong>{{:~tag.tagCtx.args[0]}}</strong></p>\"\n});\n\nvar team = {\n  title: \"The A Team\"\n};\n\nvar html = $(\"#teamTemplate\").render(team);\n\n$(\"#team\").html(html);",
        "html": "<div id=\"team\"></div>\n\n<script id=\"teamTemplate\" type=\"text/x-jsrender\">\n  {{boldp title /}}\n</script>",
        "title": "Simple custom tag using just a template",
        "height": "60"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "To render block content, we use <em>{{include tmpl=~tag.tagCtx.content/}}</em>"
          },
          {
            "_type": "code",
            "title": "",
            "code": "template: \"<p><strong>{{include tmpl=#~tag.tagCtx.content/}}</strong></p>\""
          },
          {
            "_type": "para",
            "title": "",
            "text": "Here we are accessing the <em>content</em> property on the <em>tagCtx</em>, which provides a compiled template for the block content."
          },
          {
            "_type": "para",
            "title": "",
            "text": "(It is also made available as a <em>content</em> property on the <em>view</em> object - and can be accessed from within a template using <em>#content</em> - which is an example of a <em>view path</em> - equivalent to <em>#view.content</em>.)"
          }
        ],
        "html": "<div id=\"team\"></div>\n\n<script id=\"teamTemplate\" type=\"text/x-jsrender\">\n  {{boldp}}\n    This is the title:<br/>\n    <em>{{:title}}</em>\n  {{/boldp}}\n</script>",
        "code": "$.views.tags(\"boldp\", {\n  template: \"<p><strong>{{include tmpl=~tag.tagCtx.content/}}</strong></p>\"\n});\n\nvar team = {\n  title: \"The A Team\"\n};\n\nvar html = $(\"#teamTemplate\").render(team);\n\n$(\"#team\").html(html);",
        "height": "80",
        "title": "Rendering block content from a custom tag template"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Finally let's re-implement the third example using just a template. \n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Even this example can be implemented as a custom tag which has no code at all. - Just a template, which is also able to access all the context that we were able to access from code in our <em>render()</em> function above."
      },
      {
        "_type": "para",
        "title": "",
        "text": "This illustrates the power of declarative templates..."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "The template accesses the same context as the function code above, to get at those named and unnamed parameters... :"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{for ~tag.tagCtx.args[0]}}\n  {{if #index >= ~tag.tagCtx.props.start && #index <= ~tag.tagCtx.props.end}}\n    {{include tmpl=~tag.tagCtx.content/}}\n  {{/if}}\n{{/for}}"
          },
          {
            "_type": "para",
            "title": "",
            "text": "Then after filtering for the items within the chosen range, using nested <em>{{for}}{{if}</em> tags, it renders the original block content for those items using <em>{{include tmpl=~tag.tagCtx.content/}}</em>."
          }
        ],
        "html": "<div id=\"team\"></div>\n\n<script id=\"teamTemplate\" type=\"text/x-jsrender\">\n  <p><strong>{{:title}}</strong></p>\n  <ul>\n    {{range members start=1 end=2}} \n      <li>\n        {{:name}}\n      </li>\n    {{/range}}\n  </ul> \n</script>",
        "code": "$.views.tags(\"range\", {\n  template: \n    \"{{for ~tag.tagCtx.args[0]}}\" +\n      \"{{if #index >= ~tag.tagCtx.props.start && #index <= ~tag.tagCtx.props.end}}\" +\n        \"{{include tmpl=~tag.tagCtx.content/}}\" +\n      \"{{/if}}\" +\n    \"{{/for}}\"\n});\n\nvar team = {\n  title: \"The A Team\",\n  members: [\n    {name: \"Robert\"},\n    {name: \"Sarah\"},\n    {name: \"Xavier\"},\n    {name: \"Adriana\"}\n  ]\n};\n\nvar html = $(\"#teamTemplate\").render(team);\n\n$(\"#team\").html(html);",
        "height": "120",
        "title": " Accessing more context from the tag template"
      },
      {
        "_type": "para",
        "title": "Custom tags using both a render function <strong>and</strong> a template",
        "text": "If there is both a template and a render method, then the template will only be used if the render method returns <em>undefined</em>"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Let's take our <em>{{range}}</em> example using a render function, but provide a template which will be used for as \"fallback\" rendering for the tag in the case when there are no items to render in the chosen range:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "First we will change the original code to test whether the item exists in the array, before rendering the block content."
          },
          {
            "_type": "para",
            "title": "",
            "text": "And secondly, we will make sure that when there is an item we do render the block content and not the template. So we call <em>this.tagCtx.content.render(array[i])</em>, rather than <em>this.tagCtx.render(array[i])</em>."
          },
          {
            "_type": "para",
            "title": "",
            "text": "That's because  <em>this.tagCtx.render(...)</em> will actually look to see if there is template associated with the tag, (either a template on the tag definition, or a tmpl property on the tag) - in which case it will render that template and not the block content... "
          },
          {
            "_type": "code",
            "title": "",
            "code": "for (var i = start; i <= end; i++) {\n  if (array[i]) {\n    // Render tag block content, for this data item\n    ret += this.tagCtx.content.render(array[i]);\n  }\n}\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "Finally, if there are no items to render, we will return undefined, so the tag will fall back on the template rendering."
          },
          {
            "_type": "code",
            "title": "",
            "code": "return ret || undefined;\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "And here is the \"fallback\" template:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "template: \"<li>Nothing to render</li>\""
          }
        ],
        "code": "$.views.tags({\n  range: {\n    render: function(array){\n      var ret = \"\",\n        start = this.tagCtx.props.start,\n        end = this.tagCtx.props.end;\n      for (var i = start; i <= end; i++) {\n        if (array[i]) {\n          // Render tag block content, for this data item\n          ret += this.tagCtx.content.render(array[i]);\n        }\n      }\n      return ret || undefined;\n    },\n    template: \"<li>Nothing to render</li>\"\n  }\n});\n\nvar team = {\n  title: \"The A Team\",\n  members: [\n    {name: \"Robert\"},\n    {name: \"Sarah\"},\n    {name: \"Xavier\"},\n    {name: \"Adriana\"}\n  ]\n};\n\nvar html = $(\"#teamTemplate\").render(team);\n\n$(\"#team\").html(html);\n",
        "html": "<div id=\"team\"></div>\n\n<script id=\"teamTemplate\" type=\"text/x-jsrender\">\n  <h3>Members 2 to 4</h3>\n  <ul>\n    {{range members start=1 end=3}} \n      <li>\n        {{:name}}\n      </li>\n    {{/range}}\n  </ul> \n\n  <h3>Members 5 to 8</h3>\n  <ul>\n    {{range members start=4 end=7}} \n      <li>\n        {{:name}}\n      </li>\n    {{/range}}\n  </ul> \n</script>",
        "height": "200",
        "onlyJsRender": true,
        "title": "A render() function and a template as \"fallback\""
      },
      {
        "_type": "para",
        "title": "Adding tags as private resources for a parent template",
        "text": "You can pass in an existing template as an additional <em>parentTemplate</em> parameter, on  <em>any</em> call to  <em>$.views.tags(...)</em>."
      },
      {
        "_type": "para",
        "title": "",
        "text": "In that way the tag you are registering becomes a 'private tag resource' for the <em>parentTemplate</em>, rather than being registered globally:"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "",
        "name": "converters",
        "object": "$.views",
        "method": true,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "Add one or more tags as private resources for a parent template",
            "params": [
              {
                "_type": "param",
                "name": "namedTags",
                "type": "object",
                "optional": false,
                "description": "Object (hash) of keys (name of tag) and values (render function or tagOptions)"
              },
              {
                "_type": "param",
                "name": "parentTemplate",
                "type": "object or string",
                "optional": true,
                "description": "Owner template - to which this/these tag(s) are being added as private resources"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.views.tags({\n  myTag1: ...,\n  myTag2: ...\n}, parentTemplate);",
            "description": "Add multiple tags as resources, to a parent template"
          }
        ],
        "description": "",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "Custom tags and 'tag controls'",
        "text": "If you use JsViews, your custom tag can be developed into a fully functional <em>tag control</em>, with its own life-cycle, properties and methods, etc. It can be used as a <em>presenter</em> according to the MVP pattern."
      },
      {
        "_type": "links",
        "title": "See also:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "customtags",
            "label": "Concepts: custom tags"
          },
          {
            "_type": "topic",
            "hash": "samples/jsr/tags",
            "label": "Samples: JsRender custom tags"
          },
          {
            "_type": "topic",
            "hash": "samples/tagcontrols",
            "label": "Sample: JsViews tag controls"
          }
        ]
      }
    ]
  },
  "url()": {
    "title": "$.views.converters.url()",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "Built-in URL encoder",
        "text": "JsRender includes a URL encoder, which you can use programmatically as follows:"
      },
      {
        "_type": "code",
        "title": "",
        "code": "var myUrlEncodedString = $.views.converters.url(myString);"
      },
      {
        "_type": "para",
        "title": "",
        "text": "The same encoder is accessed by declaratively as a converter:"
      },
      {
        "_type": "template",
        "title": "",
        "markup": "{{url:myExpression}}"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "var result = $.views.converters.url(value);\n\nalert(result);"
          }
        ],
        "code": "var value = \"<_>_\\\"_ \";\nvar result = $.views.converters.url(value);\n\n$(\"#show\").on(\"click\", function() {\n  alert(result);\n});",
        "html": "<button id=\"show\">Show result</button>\n",
        "height": "40"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "URL encoder",
        "name": "url",
        "object": "$.views.converters",
        "method": true,
        "returns": "URL-encoded string",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "valueToEncode",
                "type": "string",
                "optional": false,
                "description": "input string to be URL-encoded"
              }
            ],
            "args": [],
            "sections": [
              {
                "_type": "para",
                "title": "",
                "text": "Internally encodes by calling the JavaScript function <em>encodeURI</em>."
              }
            ],
            "example": "var encoder = $.views.converters.url;\nvar encodedString = encoder(myString);",
            "description": "Returns the URL-encoded string"
          }
        ],
        "description": "",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "links",
        "title": "See the following sample:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "samples/jsr/converters",
            "label": "Converters and encoding"
          }
        ]
      }
    ]
  },
  "attr()": {
    "title": "$.views.converters.attr()",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "Built-in attribute encoder",
        "text": "JsRender includes an encoder intended for use when attribute encoding is needed. You can use it programmatically as follows:"
      },
      {
        "_type": "code",
        "title": "",
        "code": "var myAttributeEncodedString = $.views.converters.attr(myString);"
      },
      {
        "_type": "para",
        "title": "",
        "text": "The same encoder is accessed by declaratively as a converter:"
      },
      {
        "_type": "template",
        "title": "",
        "markup": "{{attr:myExpression}}\n"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "var result = $.views.converters.attr(value);\n\nalert(result);"
          }
        ],
        "code": "var value = \"< > ' \\\" &\";\nvar result = $.views.converters.attr(value);\n\n$(\"#show\").on(\"click\", function() {\n  alert(result);\n});",
        "html": "<button id=\"show\">Show result</button>\n\n",
        "height": "40"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "Attribute encoder",
        "name": "attr",
        "object": "$.views.converters",
        "method": true,
        "returns": "Attribute-encoded string",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "valueToEncode",
                "type": "string",
                "optional": false,
                "description": "input string to be attribute-encoded"
              }
            ],
            "args": [],
            "sections": [
              {
                "_type": "para",
                "title": "",
                "text": "Encodes according to the following scheme:\n<br/><br/>\n&amp; &rarr; &amp;amp;<br/>\n&lt; &rarr; &amp;lt;<br/>\n&gt; &rarr; &amp;gt;<br/>\n\\x00 &rarr; &amp;#0;<br/>\n' &rarr; &amp;#39;<br/>\n\" &rarr; &amp;#34;<br/>\n` &rarr; &amp;#96;"
              },
              {
                "_type": "para",
                "title": "",
                "text": "Note that this scheme encodes more characters than is sometimes the case for attribute encoding. In fact currently <em>{{attr: ...}}</em> and <em>{{html: ...}}</em> are equivalent. This ensures that using attribute encoding when HTML encoding should have been used will not expose an injection attack risk from untrusted data."
              }
            ],
            "example": "var encoder = $.views.converters.attr;\nvar encodedString = encoder(myString);",
            "description": "Returns the attribute-encoded string"
          }
        ],
        "description": "",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "links",
        "title": "See also the following sample:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "samples/jsr/converters",
            "label": "Converters and encoding"
          }
        ]
      }
    ]
  },
  "html()": {
    "title": "$.views.converters.html()",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "Built-in HTML encoder",
        "text": "JsRender includes an HTML encoder, which you can use programmatically as follows:"
      },
      {
        "_type": "code",
        "title": "",
        "code": "var myHtmlEncodedString = $.views.converters.html(myString);"
      },
      {
        "_type": "para",
        "title": "",
        "text": "The same encoder is accessed declaratively as a converter, as in the following two examples:"
      },
      {
        "_type": "template",
        "title": "",
        "markup": "{{html:myExpression}}\n\n{{>myExpression}}"
      },
      {
        "_type": "para",
        "title": "",
        "text": "In fact <em>{{>...}}</em> is exactly equivalent to <em>{{html:...}}</em> and is provided as a simpler syntax for HTML encoding values taken from data or from expressions and rendered within HTML content."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "var result = $.views.converters.html(value);\n\nalert(result);"
          }
        ],
        "code": "var value = \"< > ' \\\" &\";\nvar result = $.views.converters.html(value);\n\n$(\"#show\").on(\"click\", function() {\n  alert(result);\n});",
        "html": "<button id=\"show\">Show result</button>\n\n",
        "height": "40"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "HTML encoder",
        "name": "html",
        "object": "$.views.converters",
        "method": true,
        "returns": "HTML-encoded string",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "valueToEncode",
                "type": "string",
                "optional": false,
                "description": "input string to be HTML-encoded"
              }
            ],
            "args": [],
            "sections": [
              {
                "_type": "para",
                "title": "",
                "text": "Encodes according to the following scheme:\n<br/><br/>\n&amp; &rarr; &amp;amp;<br/>\n&lt; &rarr; &amp;lt;<br/>\n&gt; &rarr; &amp;gt;<br/>\n\\x00 &rarr; &amp;#0;<br/>\n' &rarr; &amp;#39;<br/>\n\" &rarr; &amp;#34;<br/>\n` &rarr; &amp;#96;"
              }
            ],
            "example": "var encoder = $.views.converters.html;\nvar encodedString = encoder(myString);",
            "description": "Returns the HTML-encoded string"
          }
        ],
        "description": "",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "links",
        "title": "See the following topic and sample:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "htmltag",
            "label": "The {{>...}} template tag"
          },
          {
            "_type": "topic",
            "hash": "samples/jsr/converters",
            "label": "Converters and encoding"
          }
        ]
      }
    ]
  },
  "converters()": {
    "title": "Registering converters: $.views.converters()",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "What are converters?",
        "text": "In JsRender, a converter is a convenient way of processing or formatting data-value, or the result of expression evaluation - as in:"
      },
      {
        "_type": "template",
        "title": "",
        "markup": "{{html:movie.description}} - this data is HTML encoded\n{{url:getTheFilePath()}} - this expression will be URL-encode\n{{daymonth:invoice.date}} - this date uses my formatter "
      },
      {
        "_type": "para",
        "title": "",
        "text": "You use built-in converters to HTML-encode, attribute-encod, or URL-encode. And you can register custom converters."
      },
      {
        "_type": "para",
        "title": "",
        "text": "With JsViews, you can use converters with two-way data-binding, and you will have a <em>convert</em> and a <em>convertBack</em> converter - one for each direction."
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.views.converters(name, converterFn)",
        "name": "converters",
        "object": "$.views",
        "method": true,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "Register a converter",
            "params": [
              {
                "_type": "param",
                "name": "name",
                "type": "string",
                "optional": false,
                "description": "name of converter - to be used in template markup: {{<b>name:</b> ...}}"
              },
              {
                "_type": "param",
                "name": "converterFn",
                "type": "function",
                "optional": false,
                "description": "Converter function. Takes <b>val</b> parameter and returns converted value"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.views.converters(\"upper\", function(val) {\n  return val.toUpperCase();\n});\n\n{{upper: \"upper case: \" + nickname}}",
            "description": "Register a converter, to be used in templates with the syntax:<br/>{{converterName: someExpression}}"
          }
        ],
        "description": "",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "$.views.converters(\"upper\", function(val) {\n  return val.toUpperCase();\n});"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{upper:nickname}}\n{{upper: \"this will be upper case too\"}}"
          }
        ],
        "code": "$.views.converters(\"upper\", function(val) {\n  return val.toUpperCase();\n});\n\nvar person = {name: \"Robert\", nickname: \"Bob\"};\n\nvar html = $(\"#personTemplate\").render(person);\n\n$(\"#person\").html(html);",
        "html": "<div id=\"person\"></div>\n\n<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  {{:name}}<br/>\n  Upper case nickname: {{upper:nickname}}<br/>\n  {{upper: \"this will be upper case too\"}} \n</script>",
        "height": "90",
        "title": "Using a custom converter",
        "onlyJsRender": true
      },
      {
        "_type": "para",
        "title": "",
        "text": "<em>Note:</em> the <em>this</em> pointer within the converter function is the instance of the tag, and can be used in more advanced usage of converters as in the following example:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "You can access multiple parameters and properties from the converter function."
          },
          {
            "_type": "code",
            "title": "",
            "code": "$.views.converters(\"full\", function(first, last) {\n  var format = this.tagCtx.props.format;  \n  return ...;\n});"
          },
          {
            "_type": "para",
            "title": "",
            "text": "(You can also access the full data object: <em>this.tagCtx.view.data</em>)"
          }
        ],
        "html": "<div id=\"person\"></div>\n\n<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  <label>Normal:</label> {{full:first last}}<br/>\n  <label>Reverse:</label> {{full:first last format=\"reverse\"}}<br/> \n</script>",
        "code": "$.views.converters(\"full\", function(first, last) {\n  var format = this.tagCtx.props.format;  \n  return format === \"reverse\" ? last.toUpperCase() + \" \" + first : first + \" \" + last;\n});\n\nvar person = {first: \"Xavier\", last: \"Prieto\"};\n\nvar html = $(\"#personTemplate\").render(person);\n\n$(\"#person\").html(html);",
        "height": "70",
        "title": "Accessing more context from the converter",
        "onlyJsRender": true
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.views.converters(namedConverters)",
        "name": "converters",
        "object": "$.views",
        "method": true,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "namedConverters",
                "type": "object",
                "optional": false,
                "description": "Object (hash) of keys (name of converter) and values (converter function)"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.views.converters({\n  upper: function(val) {...},\n  lower: function(val) {...}\n});",
            "description": "Register multiple converters"
          }
        ],
        "description": "",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "Adding converters as private resources for a parent template",
        "text": "You can pass in an existing template as an additional <em>parentTemplate</em> parameter, on  <em>any</em> call to  <em>$.views.converters(...)</em>."
      },
      {
        "_type": "para",
        "title": "",
        "text": "In that way the converter you are registering becomes a 'private converter resource' for the <em>parentTemplate</em>, rather than being registered globally:"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "",
        "name": "converters",
        "object": "$.views",
        "method": true,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "Add one or more converters as private resources for a parent template",
            "params": [
              {
                "_type": "param",
                "name": "namedConverters",
                "type": "object",
                "optional": false,
                "description": "Object (hash) of keys (name of converter) and values (converter function)"
              },
              {
                "_type": "param",
                "name": "parentTemplate",
                "type": "object or string",
                "optional": true,
                "description": "Owner template - to which this/these converter(s) are being added as private resources"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.views.converters({\n  upper: function(val) {...},\n  lower: function(val) {...}\n}, parentTemplate);",
            "description": "Add multiple converters as resources, to a parent template"
          }
        ],
        "description": "",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "See also the following samples:",
        "text": "<a href=\"#samples/jsr/converters\"><em>Converters and encoding</em></a><br/>\n<a href=\"#samples/converters/twoway\"><em>Two-way binding and converters</em></a><br/>\n<a href=\"#samples/converters/formels\"><em>Form elements and converters</em></a><br/>"
      },
      {
        "_type": "links",
        "title": "Built-in converters:",
        "links": [],
        "topics": [
          {
            "hash": "html()",
            "label": "$.views.converters.html()"
          },
          {
            "hash": "attr()",
            "label": "$.views.converters.attr()"
          },
          {
            "hash": "url()",
            "label": "$.views.converters.url()"
          }
        ]
      }
    ]
  },
  "jsrregister": {
    "title": "Register helpers, converters, tags...",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "converters()",
            "label": "$.views.converters()"
          },
          {
            "hash": "tags()",
            "label": "$.views.tags()"
          },
          {
            "hash": "helpers()",
            "label": "$.views.helpers()"
          }
        ]
      }
    ]
  },
  "$templates": {
    "title": "Registering templates: $.templates()",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "Simple scenarios",
        "text": "<em>$.templates()</em> is powerful and flexible. You can use it for many scenarios, including the following:\n<ul>\n<li>Compile a template from a string</li>\n<li>Get a template object for a template declared in a script block</li>\n<li>Register a template (from either a string or a script block declaration) as a <em>named template</em></li>\n</ul>\n"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.templates(...)",
        "name": "templates",
        "object": "$",
        "method": true,
        "tag": false,
        "returns": "Compiled template object",
        "signatures": [
          {
            "_type": "signature",
            "title": "Get a compiled template from a string or selector",
            "params": [
              {
                "_type": "param",
                "name": "markupOrSelector",
                "type": "string",
                "optional": false,
                "description": "A markup string or a selector for a template declaration script block"
              }
            ],
            "sections": [],
            "example": "var myTemplate = $.templates(myMarkupString);",
            "description": "Compile a template and return the template object"
          },
          {
            "_type": "signature",
            "title": "Register a named template from a string or selector",
            "params": [
              {
                "_type": "param",
                "name": "name",
                "type": "string",
                "optional": true,
                "description": "Name for the registered template"
              },
              {
                "_type": "param",
                "name": "markupOrSelector",
                "type": "string",
                "optional": false,
                "description": "A markup string or a selector for a template declaration script block"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.templates(\"myTemplateName\", myMarkupString);",
            "description": "Register a named template"
          }
        ],
        "description": "Create one or more compiled templates - optionally registered as named templates",
        "sectionTypes": {
          "para": "para",
          "api": "api",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "var myTmpl = $.templates(\"<label>Name:</label> {{:name}}\");\n\nvar html = myTmpl.render(person);\n"
          }
        ],
        "html": "<div id=\"peopleList\"></div>\n",
        "code": "var myTmpl = $.templates(\"<label>Name:</label> {{:name}}\");\n\nvar person = {name: \"Robert\"};\n\nvar html = myTmpl.render(person);\n\n$(\"#peopleList\").html(html);",
        "title": "Compile a template from a string",
        "onlyJsRender": true,
        "height": "70"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "template",
            "title": "",
            "markup": "<script id=\"personTemplate\" type=\"text/x-jsrender\">\n ...\n</script>"
          },
          {
            "_type": "code",
            "title": "",
            "code": "var myTmpl = $.templates(\"#personTemplate\");\n\nvar html = myTmpl.render(person);\n"
          }
        ],
        "title": "Get template object for script block template",
        "html": "<div id=\"peopleList\"></div>\n\n<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  <label>Name:</label> {{:name}}\n</script>",
        "code": "var myTmpl = $.templates(\"#personTemplate\");\n\nvar person = {name: \"Robert\"};\n\nvar html = myTmpl.render(person);\n\n$(\"#peopleList\").html(html);",
        "height": "70"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "$.templates(\"personTmpl\", \"<label>Name:</label> {{:name}}\");\n\nvar html = $.render.personTmpl(person);\n"
          }
        ],
        "code": "$.templates(\"personTmpl\", \"<label>Name:</label> {{:name}}\");\n\nvar person = {name: \"Robert\"};\n\nvar html = $.render.personTmpl(person);\n\n$(\"#peopleList\").html(html);",
        "html": "<div id=\"peopleList\"></div>",
        "height": "70",
        "title": "Register named template from a string"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "$.templates(\"personTmpl\", \"#personTemplate\");\n\nvar html = $.render.personTmpl(person);\n"
          }
        ],
        "code": "$.templates(\"personTmpl\", \"#personTemplate\");\n\nvar person = {name: \"Robert\"};\n\nvar html = $.render.personTmpl(person);\n\n$(\"#peopleList\").html(html);",
        "html": "<div id=\"peopleList\"></div>\n\n<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  <label>Name:</label> {{:name}}\n</script>",
        "title": "Register named template from script block",
        "height": "70"
      },
      {
        "_type": "para",
        "title": "Registering multiple templates in one call",
        "text": "You can register multiple <em>named templates</em> in one call to <em>$.templates()</em> as follows:"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.templates(namedTemplates)",
        "name": "templates",
        "object": "$",
        "method": true,
        "tag": false,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "namedTemplates",
                "type": "object",
                "optional": false,
                "description": "Object (hash) of keys (name of template) and values (markup string, selector, or templateOptions object)"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.templates({\n  personTmpl: \"#personTemplate\",\n  labelTmpl: \"<label>Name:</label>\"\n});",
            "description": "Register multiple named templates"
          }
        ],
        "description": "",
        "sectionTypes": {
          "para": "para",
          "api": "api",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "template",
            "title": "",
            "markup": "<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  {{include tmpl=\"labelTmpl\"/}} {{:name}}\n</script>"
          },
          {
            "_type": "code",
            "title": "",
            "code": "$.templates({\n  personTmpl: \"#personTemplate\",\n  labelTmpl: \"<label>Name:</label>\"\n});\n\nvar html = $.render.personTmpl(person);\n"
          }
        ],
        "html": "<div id=\"peopleList\"></div>\n\n<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  {{include tmpl=\"labelTmpl\"/}} {{:name}}\n</script>",
        "code": "$.templates({\n  personTmpl: \"#personTemplate\",\n  labelTmpl: \"<label>Name:</label>\"\n});\n\nvar person = {name: \"Robert\"};\n\nvar html = $.render.personTmpl(person);\n\n$(\"#peopleList\").html(html);",
        "title": "Registering multiple templates",
        "height": "70"
      },
      {
        "_type": "para",
        "title": "Getting template objects for named templates",
        "text": "Once you have registered one or more <em>named templates</em> you can get the template object for a named template as follows:"
      },
      {
        "_type": "code",
        "title": "",
        "code": "var myTemplate = $.templates.myTemplateName;"
      },
      {
        "_type": "para",
        "title": "Advanced scenarios: Associating private resources with templates",
        "text": "<em>$.templates()</em> can also be used for the following more advanced scenarios:\n<ul>\n<li>Compile a template, (or multiple templates) along with specified resources to be available only within that template</li>\n<li>Compile one or more templates to be added to the set of private resources of another (already compiled) template</li>\n</ul>\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "You can use <em>$.templates()</em> to compile or register not only a template, but in addition some <em>helpers</em>, <em>converters</em>, <em>custom tags</em> or nested <em>sub-templates</em>, to be made available to the new template as private resources."
      },
      {
        "_type": "para",
        "title": "",
        "text": "Note that as an alternative you can register resources (<em>helpers</em>, <em>converters</em>, <em>custom tags</em> or <em>templates</em>) globally, using <a href=\"#helpers()\"><em>$.views.helpers()</em></a>, <a href=\"#converters()\"><em>$.views.converters()</em></a>, <a href=\"#tags()\"><em>$.views.tags()</em></a>, or <a href=\"#$templates\"><em>$.templates()</em></a> - rather than making them private to the template that needs to reference them."
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "",
        "name": "templates",
        "object": "$",
        "method": true,
        "tag": false,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "Compile a template along with specified resources",
            "params": [
              {
                "_type": "param",
                "name": "templateOptions",
                "type": "object",
                "optional": false,
                "description": "An options object with a markup property, and optionally other declared resources (converters, helpers, etc.)"
              }
            ],
            "args": [],
            "sections": [],
            "example": "var myTmpl = $.templates({\n  markup: \"...\",\n  helpers: {...},\n  tags: {...}\n  ...\n});",
            "description": "Compile a template, along with specified resources to be available only within this template"
          },
          {
            "_type": "signature",
            "title": "Register a named template, along with specified resources",
            "params": [
              {
                "_type": "param",
                "name": "name",
                "type": "string",
                "optional": true,
                "description": "Name for the registered template"
              },
              {
                "_type": "param",
                "name": "templateOptions",
                "type": "object",
                "optional": false,
                "description": "An options object with a markup property, and optionally other declared resources (converters, helpers, etc.)"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.templates(\"myTmpl\", {\n  markup: \"...\",\n  helpers: {...},\n  tags: {...}\n  ...\n});",
            "description": "Register a named template, along with specified resources available only within that template"
          },
          {
            "_type": "signature",
            "title": "Add additional templates as 'sub templates' - resources to another template",
            "params": [
              {
                "_type": "param",
                "name": "namedTemplates",
                "type": "object",
                "optional": false,
                "description": "Object (hash) of keys (name of template) and values (markup string, selector, or templateOptions object)"
              },
              {
                "_type": "param",
                "name": "parentTemplate",
                "type": "object or string",
                "optional": true,
                "description": "Owner template - to which this/these template(s) are being added as private resources"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.templates(namedTemplates, parentTemplate);",
            "description": "Register named templates as private resources for a 'parent template'"
          }
        ],
        "description": "",
        "sectionTypes": {
          "para": "para",
          "api": "api",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "A converter and a helper are registered as private resources for the \"personTmpl\" named template."
          },
          {
            "_type": "code",
            "title": "",
            "code": "$.templates(\"personTmpl\", {\n  markup: \"#personTemplate\",\n  converters: {\n    upper: function(val) {return val.toUpperCase();}\n  },\n  helpers: {\n    append: function(a, b) {return a + b;}\n  }\n});\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "They are accessed with the \"personTmpl\""
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  {{upper:~append(\"Mr \", name)}}\n</script>"
          }
        ],
        "html": "<div id=\"peopleList\"></div>\n\n<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  {{upper:~append(\"Mr \", name)}}\n</script>",
        "code": "// Register a template along with a converter and a helper that it will use.\n// These resources are private to the template, rather than being registered\n// globally using $.views.converters or $.views.helpers\n$.templates(\"personTmpl\", {\n  markup: \"#personTemplate\",\n  converters: {\n    upper: function(val) {return val.toUpperCase();}\n  },\n  helpers: {\n    append: function(a, b) {return a + b;}\n  }\n});\n\nvar person = {name: \"Robert\"};\n\nvar html = $.render.personTmpl(person);\n\n$(\"#peopleList\").html(html);",
        "title": "Register a named template along with specified resources",
        "height": "70"
      },
      {
        "_type": "para",
        "title": "Adding templates as private resources for a parent template",
        "text": "You can pass in an existing template as an additional <em>parentTemplate</em> parameter, on  <em>any</em> call to  <em>$.templates(...)</em>. In that way the template you are registering becomes a 'private template resource' for the <em>parentTemplate</em>."
      },
      {
        "_type": "para",
        "title": "",
        "text": "Here is an example:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "$.templates(\"labelTmpl\", \"<label>Name: </label>\", personTmpl);\n"
          }
        ],
        "code": "var personTmpl = $.templates(\"#personTemplate\");\n\n$.templates(\"labelTmpl\", \"<label>Name: </label>\", personTmpl);\n\nvar person = {name: \"Robert\"};\n\nvar html = personTmpl.render(person);\n\n$(\"#peopleList\").html(html);",
        "html": "<div id=\"peopleList\"></div>\n\n<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  {{include tmpl=\"labelTmpl\"/}} {{:name}}\n</script>",
        "title": "Add a \"labelTmpl\" template resource as a 'sub template' - a private resource for an existing \"personTemplate\"",
        "height": "70"
      },
      {
        "_type": "links",
        "title": "See also:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "rendertmpl",
            "label": "Render a template"
          },
          {
            "_type": "topic",
            "hash": "compiletmpl",
            "label": "Compile/register/get a template"
          },
          {
            "_type": "topic",
            "hash": "samples/jsr/composition/subtemplates",
            "label": "Sample: sub-templates"
          }
        ]
      }
    ]
  },
  "$()render": {
    "title": "jQuery instance method to render a template declared in a script block",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "$(\"#myTmpl\").render()",
        "text": "If a template has been registered using a script block:"
      },
      {
        "_type": "template",
        "title": "",
        "markup": "<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  ...\n</script>"
      },
      {
        "_type": "para",
        "title": "",
        "text": "...then you can call the <a href=\"#tmplrender\"><em>render()</em></a> method of the template without needing to hold on to the compiled template object returned from <a href=\"#$templates\"><em>$.templates(...)</em></a>."
      },
      {
        "_type": "para",
        "title": "",
        "text": "Just call <em>$(\"#myTmpl\").render(...)</em>"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$(tmplSelector).render(data, helpersOrContext)",
        "name": "render",
        "object": "$(tmplSelector)",
        "method": true,
        "tag": false,
        "returns": "string",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "data",
                "type": "object or array",
                "optional": true,
                "description": "The data to render. This can be any JavaScript type, including Array or Object."
              },
              {
                "_type": "param",
                "name": "helpersOrContext",
                "type": "object",
                "optional": true,
                "description": "Contextual helper methods or properties - available to template as <em>~keyName</em>"
              }
            ],
            "sections": [],
            "example": "var html = $(\"#myTmpl\").render(myData, myHelpers);",
            "description": "Render template against data, and pass in helpers"
          }
        ],
        "description": "Render a named template against data, along with helper objects or context, and return a string",
        "sectionTypes": {
          "para": "para",
          "api": "api",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "",
        "text": "Here is an example:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "template",
            "title": "",
            "markup": "<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  ...\n</script>"
          },
          {
            "_type": "code",
            "title": "",
            "code": "var html = $(\"#personTemplates\").render(person);"
          }
        ],
        "html": "<table><tbody id=\"person\"></tbody></table>\n\n<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  <tr>\n    <td>\n      {{:name}}\n    </td>\n  </tr>\n</script>",
        "code": "var person = {\n    name: \"Adriana\"\n  };\n\nvar html = $(\"#personTemplate\").render(person);\n\n$(\"#person\").html(html);",
        "title": "$.render.personTmpl(...):",
        "height": "60"
      },
      {
        "_type": "links",
        "title": "See also:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "rendertmpl",
            "label": "Render a template"
          }
        ]
      }
    ]
  },
  "$render": {
    "title": "Rendering a named template without needing the template object",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "$.render.myTmpl()",
        "text": "If a template has been registered as a named template:"
      },
      {
        "_type": "code",
        "title": "",
        "code": "$.templates(\"myTmpl\", \"#personTmpl\");"
      },
      {
        "_type": "para",
        "title": "",
        "text": "...then you can call the <a href=\"#tmplrender\"><em>render()</em></a> method of the template without needing to hold on to the compiled template object returned from <a href=\"#$templates\"><em>$.templates(...)</em></a>."
      },
      {
        "_type": "para",
        "title": "",
        "text": "Just call <em>$.render.myTmpl(...)</em>, or <em>$.render[\"myTmpl\"](...)</em>"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.render.myTmpl(data, helpersOrContext)",
        "name": "myTmpl",
        "object": "$.render",
        "method": true,
        "tag": false,
        "returns": "string",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "data",
                "type": "object or array",
                "optional": true,
                "description": "The data to render. This can be any JavaScript type, including Array or Object."
              },
              {
                "_type": "param",
                "name": "helpersOrContext",
                "type": "object",
                "optional": true,
                "description": "Contextual helper methods or properties - available to template as <em>~keyName</em>"
              }
            ],
            "sections": [],
            "example": "var html = $.render.myTmpl(myData, myHelpers);",
            "description": "Render template against data, and pass in helpers"
          }
        ],
        "description": "Render a named template against data, along with helper objects or context, and return a string",
        "sectionTypes": {
          "para": "para",
          "api": "api",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "",
        "text": "Here is an example:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "$.templates(\"personTmpl\", \"#personTemplate\");\n\nvar html = $.render.personTmpl(person);"
          }
        ],
        "html": "<table><tbody id=\"person\"></tbody></table>\n\n<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  <tr>\n    <td>\n      {{:name}}\n    </td>\n  </tr>\n</script>",
        "code": "$.templates(\"personTmpl\", \"#personTemplate\");\n\nvar person = {\n    name: \"Adriana\"\n  };\n\nvar html = $.render.personTmpl(person);\n\n$(\"#person\").html(html);",
        "title": "$.render.personTmpl(...):",
        "height": "60"
      },
      {
        "_type": "links",
        "title": "See also:",
        "links": [
          {
            "_type": "link",
            "hash": "hash",
            "label": ""
          }
        ],
        "topics": [
          {
            "_type": "topic",
            "hash": "rendertmpl",
            "label": "Render a template"
          }
        ]
      }
    ]
  },
  "rendertmpl": {
    "title": "Render a template",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "A template is rendered by calling the <em>render()</em> method."
      },
      {
        "_type": "para",
        "title": "",
        "text": "The <em>render(data, helpersOrContext)</em> method takes as parameters the data (used as the <em>' data context'</em> during the rendering), and optionally additional metadata or contextual helpers. It returns a string - which is the rendered template - typically HTML markup with data values or computed values inserted at appropriated points in the string."
      },
      {
        "_type": "para",
        "title": "",
        "text": "There are three ways of calling the <em>render()</em> method:\n<ul><li>If you have a reference to the <em>template object</em>, call <a href=\"#tmplrender\"><em>template.render(...)</em></a></li>\n<li>If you have a registered the template by name (<em>\"myTmpl\"</em>), call <a href=\"#$render\"><em>$.render.myTmpl(...)</em></a></li>\n<li>If the template is declared in a script block, with selector <em>\"#myTmpl\"</em>, you can also call <a href=\"#$()render\"><em>$(\"#myTmpl\").render(...)</em></a></li></ul>"
      },
      {
        "_type": "links",
        "title": "Links",
        "links": [],
        "topics": [
          {
            "hash": "tmplrender",
            "label": "template.render()"
          },
          {
            "hash": "$render",
            "label": "$.render.myTmpl()"
          },
          {
            "hash": "$()render",
            "label": "$(\"#myTmpl\").render()"
          }
        ]
      }
    ]
  },
  "compiletmpl": {
    "title": "Compile/register/get a template",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "To create a template you need to provide the markup for the template. JsRender will convert (compile) the markup into a javascript function &mdash; the 'render' function for your template. In fact for convenience, JsRender creates a <em>template object</em> which has a <a href=\"#rendertmpl\"><em>template.render()</em></a> method which is the compiled function.\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "There are two ways to create a template:\n<ul><li>Pass the markup string to the <a href=\"#$templates\"><em>$.templates()</em></a> method, which will compile it as a template object, and optionally register it by name</li>\n<li>Declare the template in a script block with <em>type=\"text/x-jsrender\"</em> (or at least a type other than the default <em>text/javascript</em>). In that case JsRender will automatically call <em>$.templates()</em>. You will only need to call it yourself if you want to access the <em>template object</em></li></ul>"
      },
      {
        "_type": "para",
        "title": "",
        "text": "The first approach has the advantage of keeping your template declaration independent of you HTML markup that you are loading into the browser. Indeed you may want to provide the template markup strings for your templates in different application-specific ways, such as loading string from the server, creating 'computed' template markup strings on the fly, etc. "
      },
      {
        "_type": "para",
        "title": "",
        "text": "Here is an example:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "The markup string is fetched in an AJAX request, and used to register a named template..."
          },
          {
            "_type": "code",
            "title": "",
            "code": "$.get(\"templates/person.txt\", function(value) {\n  $.templates(\"personTmpl\", value);\n});"
          },
          {
            "_type": "para",
            "title": "",
            "text": "... and then in the code we call the <a href=\"#rendertmpl\"><em>render</em></a> method for the named template:"
          },
          {
            "_type": "code",
            "title": "",
            "code": "var html = $.render.personTmpl(people);\n"
          }
        ],
        "html": "<button id=\"show\">Show People</button>\n\n<div id=\"peopleList\"></div>\n",
        "code": "$.get(\"templates/person.txt\", function(value) {\n  $.templates(\"personTmpl\", value);\n});\n\nvar people = [\n  {\n    name: \"Adriana\"\n  },\n  {\n    name: \"Robert\"\n  }\n];\n\n$(\"#show\").on(\"click\", function(){\n  var html = $.render.personTmpl(people);\n  $(\"#peopleList\").html(html);\n});",
        "title": "Registering a template from a markup string (in this case, fetched  from the server):",
        "onlyJsRender": true,
        "height": "70"
      },
      {
        "_type": "para",
        "title": "",
        "text": "And here is the second approach:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "This time we put our markup in a script block with <em>type=\"text/x-jsrender\"</em>..."
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  <label>Name:</label> {{:name}}\n</script>"
          },
          {
            "_type": "para",
            "title": "",
            "text": "Then in the code we call the <a href=\"#$templates\"><em>$.templates</em></a> method with a jQuery selector for that script block, to register our template as a named template. (We could also hold on to the template object, which is the returned value...)  "
          },
          {
            "_type": "code",
            "title": "",
            "code": "$.templates(\"personTmpl\", \"#personTemplate\");"
          },
          {
            "_type": "para",
            "title": "",
            "text": "Then as before we call the <a href=\"#rendertmpl\"><em>render</em></a> method for the named template:"
          },
          {
            "_type": "code",
            "title": "",
            "code": "var html = $.render.personTmpl(people);"
          }
        ],
        "html": "<div id=\"peopleList\"></div>\n\n<script id=\"personTemplate\" type=\"text/x-jsrender\">\n  <label>Name:</label> {{:name}}\n</script>",
        "code": "$.templates(\"personTmpl\", \"#personTemplate\");\n\nvar people = [\n  {\n    name: \"Adriana\"\n  },\n  {\n    name: \"Robert\"\n  }\n];\n\nvar html = $.render.personTmpl(people);\n\n$(\"#peopleList\").html(html);",
        "title": "Registering a template declared in script block:",
        "onlyJsRender": true,
        "height": "70"
      },
      {
        "_type": "links",
        "title": "For additional details and scenarios see:",
        "links": [],
        "topics": [
          {
            "hash": "$templates",
            "label": "$.templates()"
          }
        ]
      }
    ]
  },
  "samples/jsr/converters": {
    "title": "Sample: Converters and encoding",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "Using built-in HTML and URL and attribute encoders",
        "text": "JsRender includes built-in converters, for HTML encoding, attribute encoding and URL encoding. A common use for these converters is to protect against injection attacks from untrusted data.\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "It is generally best to use <b>{{> }}</b> when rendering data within element content, if the data is not intended to provide markup for insertion in the DOM.\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "In the context of HTML attributes, use <b>{{attr: }}</b>, or it the case of attributes corresponding to URLs,  <b>{{url: }}</b>"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "Specifying converters:",
            "text": "<ul>\n<li><em>{{:value}}</em> &mdash; does not convert. Used to render values that include html markup.</li>\n<li><em>{{loc:value lang=\"...\"}}</em> &mdash; Uses custom converter, below.</li>\n<li><em>{{html:value}}</em> &mdash; Converts using built-in HTML encoder. (Better security within element content, but slight perf cost).</li>\n<li><em>{{>value}}</em> &mdash; Alternative syntax for built-in HTML encoder.</li>\n<li><em>{{attr:availability}}</em> &mdash; Converts using built-in attribute encoder. (Better security within attributes).</li>\n<li><em>{{url:value}}</em> &mdash; Converts using built-in URL encoder.</li>\n</ul>\n"
          },
          {
            "_type": "code",
            "title": "Declaring custom converters",
            "code": "$.views.converters({\n  loc: function (value) {\n    var language = this.tagCtx.props.lang;\n    ... (return localized value based on language)\n  }\n});\n"
          }
        ],
        "sampleName": "jsrender/converters",
        "url": "samples/jsrender/converters/sample",
        "height": "410",
        "title": "Using {{: }} or {{> }} to render data values with optional conversion or encoding",
        "onlyJsRender": true
      }
    ]
  },
  "samples/jsrandjsvconverters": {
    "title": "Converters in JsRender and JsViews",
    "path": "",
    "sections": [
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": []
      }
    ]
  },
  "samples/converters/formels": {
    "title": "Sample: Binding to form elements, with converters",
    "path": "",
    "sections": [
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "Different <em>convert</em> and <em>convertBack</em> converters are registered, and then used in the form element data-binding as follows:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<input data-link=\"{intToStr:amount:strToInt}\">\n\n<input type=\"radio\" name=\"intVal\" value=\"0\" data-link=\"{intToStr:amount:strToInt}\">\n\n<select data-link=\"{intToStr:amount:strToInt}\">\n  <option>0</option>\n  ...\n</select>\n\n<input type=\"checkbox\" data-link=\"{getBit:amount bit=1 :setBit}\"> bit 1<br>"
          }
        ],
        "sampleName": "converters/formels",
        "url": "samples/converters/formels/sample",
        "height": "680",
        "title": "Two-way binding and converters"
      }
    ]
  },
  "samples/converters/twoway": {
    "title": "Sample: Two-way binding and converters",
    "path": "",
    "sections": [
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "Using converters for tag rendering",
            "text": "HTML encoding, no custom converter:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<td>{{>dayOff}}</td>"
          },
          {
            "_type": "para",
            "title": "",
            "text": "Render from data, convert to display name:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<td>{{intToDay:dayOff}}</td>"
          },
          {
            "_type": "para",
            "title": "Using convert and convertBack with data-linking",
            "text": "Link from data value, no converter:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<td data-link=\"dayOff\"></td>"
          },
          {
            "_type": "para",
            "title": "",
            "text": "Link from data, converted to display name:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<td data-link=\"{intToDay:dayOff}\"></td>"
          },
          {
            "_type": "para",
            "title": "",
            "text": "Two-way data linking with convert and convertBack between data format (integer) and display name (text).<br/>Also show data value as tooltip:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<td><input data-link=\"{intToDay:dayOff:dayToInt} title{:dayOff}\" /></td>"
          }
        ],
        "sampleName": "converters/twoway",
        "url": "samples/converters/twoway/sample"
      }
    ]
  },
  "samples/jsv/converters": {
    "title": "Samples: Converters",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "samples/converters/twoway",
            "label": "Two-way binding and converters"
          },
          {
            "hash": "samples/converters/formels",
            "label": "Form elements and converters"
          }
        ]
      }
    ]
  },
  "samples/jsv": {
    "title": "JsViews",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "samples/jsv/converters",
            "label": "Converters"
          },
          {
            "hash": "samples/tagcontrols",
            "label": "Tag controls"
          }
        ]
      }
    ]
  },
  "samples/jso": {
    "title": "Samples: JsObservable",
    "path": "",
    "sections": []
  },
  "samples/jsr": {
    "title": "Samples: JsRender",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "samples/jsr/converters",
            "label": "Converters and encoding"
          },
          {
            "hash": "samples/jsr/composition",
            "label": "Template composition"
          },
          {
            "hash": "samples/jsr/tags",
            "label": "Custom tags"
          },
          {
            "hash": "samples/jsr/helpers",
            "label": "Helpers"
          },
          {
            "hash": "samples/jsr/paths",
            "label": "Paths"
          }
        ]
      }
    ]
  },
  "samples/jsr/composition/tmpl": {
    "title": "Sample: Template composition using external templates",
    "path": "",
    "sections": [
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "Composition by providing <em>tmpl</em> parameters referencing external templates, rather than inline block content, as in:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{for languages tmpl=\"#columnTemplate\"/}}"
          },
          {
            "_type": "para",
            "title": "",
            "text": "or:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{if name.charAt(0)==='E' tmpl='#rowTemplate'}}\n{{else tmpl='#columnTemplate'}}\n{{/if}}\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "Also shows <em>wrapping</em>, where an external template is used which then <em>wraps</em> the rendered block content, as in:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{include tmpl=\"#sectionWrapperTemplate\"}}\n  {{>title}}\n{{/include}}\n"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<script id=\"sectionWrapperTemplate\" type=\"text/x-jsrender\">\n  <td>Section: <em>{{include tmpl=#content/}}</em></td>\n</script>"
          },
          {
            "_type": "para",
            "title": "",
            "text": "or as in:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{for languages tmpl='#indexWrapperTemplate'}}\n  <b>{{>name}}</b>\n{{/for}}"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<script id=\"indexWrapperTemplate\" type=\"text/x-jsrender\">\n  <div>\n    {{:#index}}:\n    {{include tmpl=#content/}}\n  </div>\n</script>"
          }
        ],
        "sampleName": "jsrender/composition/tmpl",
        "url": "samples/jsrender/composition/tmpl/sample",
        "onlyJsRender": true,
        "height": "235",
        "title": ""
      }
    ]
  },
  "samples/jsr/composition/subtemplates": {
    "title": "Sample: Template composition, using sub-templates",
    "path": "",
    "sections": [
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "Using sub-templates",
            "code": "$.templates( \"movieTemplate\", {\n  markup: \"#movieTemplate\",\n  templates: {\n    columnTemplate: \"#columnTemplate\",\n    ...\n  }\n});\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "Now <em>\"columnTemplate\"</em> is a named template available only to the <em>\"movieTemplate\"</em>. (See <a href=\"#$templates\">$.templates()</a>)."
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<script id=\"movieTemplate\" type=\"text/x-jsrender\">\n  ...\n  {{for languages tmpl=\"columnTemplate\"/}}\n  ...\n</script>"
          }
        ],
        "sampleName": "jsrender/composition/subtmpl",
        "url": "samples/jsrender/composition/subtmpl/sample",
        "height": "200"
      }
    ]
  },
  "samples/jsr/composition/tmplobjects": {
    "title": "Sample: Composition, using contextual template objects",
    "path": "",
    "sections": [
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "var subTemplates = {\n  columnTemplate: $.templates(\"#columnTemplate\"),\n  ...\n};\n\nvar html = movieTemplate.render(movies, subTemplates);"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "<script id=\"movieTemplate\" type=\"text/x-jsrender\">\n  ...\n  {{for languages tmpl=~columnTemplate/}}\n  ...\n</script>"
          }
        ],
        "sampleName": "jsrender/composition/tmplobjects",
        "onlyJsRender": true,
        "url": "samples/jsrender/composition/tmplobjects/sample",
        "height": "200"
      }
    ]
  },
  "samples/jsr/tags": {
    "title": "Custom tags",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "samples/jsr/tags/wrap-content",
            "label": "Wrapping content"
          },
          {
            "hash": "samples/jsr/tags/extend-for",
            "label": "Extending for"
          }
        ]
      }
    ]
  },
  "samples/jsr/helpers": {
    "title": "Helpers, and layout templates",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "This sample shows both <em>passing helpers to template.render()</em> and <em>rendering an array as a non-repeating layout</em>"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "For more information about helpers, see the <a href=\"#helpers()\">$.views.helpers()</a> API topic."
          },
          {
            "_type": "para",
            "title": "",
            "text": "This sample shows passing in helpers to the <em>render()</em> method:"
          },
          {
            "_type": "code",
            "title": "",
            "code": "var html = $(\"#movieTemplate\").render(\n  // Pass in data\n  [movies],\n  // Pass in helpers\n  {\n    reverseSort: reverse,\n    ...\n  }\n);\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "In this case our template renders an array (with sort-order based on the <em>~reverseSort</em> boolean value we pass in as a helper)."
          },
          {
            "_type": "para",
            "title": "",
            "text": "To make our template render just once, rather than iterating over the <em>movies</em> array, we wrap the array - as <em>render([myArray])</em> - and then <em>within the template</em> we do the iteration, using <em>{{for #data}}</em>."
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{for #data}}\n  <tr>\n    <td>{{>~format(title)}}</td>\n    <td>\n      {{sort languages reverse=~reverseSort}}\n        <div><b>{{>name}}</b></div>\n      {{/sort}}\n    </td>\n  </tr>\n{{/for}}\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": ""
          }
        ],
        "sampleName": "jsrender/helpers",
        "url": "samples/jsrender/helpers/sample",
        "height": "165"
      }
    ]
  },
  "samples/jsr/paths": {
    "title": "Paths",
    "path": "",
    "sections": [
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "Data paths, helper paths and view paths",
            "text": "This sample shows the use of different kinds of <em>path</em>, in JsRender tag expressions."
          },
          {
            "_type": "para",
            "title": "Data paths:",
            "text": "The following example shows a data path, <em>address.street</em> for 'drilling down' into data from the current data item."
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{>address.street}}"
          },
          {
            "_type": "para",
            "title": "",
            "text": "And here is an example of a slightly more complex expression, with a null check for <em>address</em>:"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{if address && address.street}}"
          },
          {
            "_type": "para",
            "title": "Helper paths",
            "text": "Helper paths start with \"~\". Here is a helper path (in this case, to a helper method):"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{for ~combine(phones, cells)}}"
          },
          {
            "_type": "para",
            "title": "",
            "text": "The following shows helper paths referencing a 'helper properties' (objects, or values):"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{:~lateMessages.noAddress || ~messages.noAddress}}"
          },
          {
            "_type": "para",
            "title": "",
            "text": "And here is an example of a helper path, <em>frstNm</em>, which is actually an 'alias' for the <em>firstName</em>, taken from an outer data-context, and is passed in through the nesting data contexts of the 'views':"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{for ... ~frstNm=firstName}}\n  ... {{>~frstNm}} ...\n{{else}}\n  ... {{>~frstNm}} ...\n{{/for}}"
          },
          {
            "_type": "para",
            "title": "View paths",
            "text": "View paths start with \"#\":"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{>#data}}\n\n{{>#parent.parent.data.firstName}}"
          },
          {
            "_type": "para",
            "title": "",
            "text": "A view path is a way to access the current 'view' object (instance of a rendered template or of the block content of a tag), and drill into its properties. The examples above access <em>view.data</em> and <em>view.parent.parent.data.firstName</em>  "
          }
        ],
        "sampleName": "jsrender/paths",
        "height": "320",
        "onlyJsRender": true,
        "url": "samples/jsrender/paths/sample"
      }
    ]
  },
  "samples/jsr/composition": {
    "title": "Template composition",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "samples/jsr/composition/tmpl",
            "label": "tmpl parameter"
          },
          {
            "hash": "samples/jsr/composition/subtemplates",
            "label": "Using sub-templates"
          },
          {
            "hash": "samples/jsr/composition/tmplobjects",
            "label": "Contextual template objects"
          }
        ]
      }
    ]
  },
  "customtagsapi": {
    "title": "Custom tags",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "Defining custom tags",
        "text": "JsRender deliberately has only a small number of built-in tags - each of which is very flexible and useful. This is intended to reduce the 'learning curve'. And at the same time JsRender makes it very easy to create your own custom tags:"
      },
      {
        "_type": "links",
        "title": "See:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "tags()",
            "label": "API: $.views.tags()"
          },
          {
            "_type": "topic",
            "hash": "customtags",
            "label": "Concepts: custom tags"
          },
          {
            "_type": "topic",
            "hash": "samples/jsr/tags",
            "label": "Sample: JsRender custom tags"
          },
          {
            "_type": "topic",
            "hash": "samples/tagcontrols",
            "label": "Sample: JsViews tag controls"
          }
        ]
      }
    ]
  },
  "jsvobjects": {
    "title": "JsViews objects",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "jsvviewsobject",
            "label": "$.views object"
          },
          {
            "hash": "jsvtemplateobject",
            "label": "template object"
          },
          {
            "hash": "jsvviewobject",
            "label": "view object"
          },
          {
            "hash": "jsvtagobject",
            "label": "tag object"
          },
          {
            "hash": "jsvviewcontextobject",
            "label": "View context object"
          },
          {
            "hash": "jsvtagcontextobject",
            "label": "Tag context object"
          },
          {
            "hash": "jsvlinkcontextobject",
            "label": "Link context object"
          }
        ]
      }
    ]
  },
  "samples/jsr/tags/wrap-content": {
    "title": "Custom tags: wrapping content",
    "path": "",
    "sections": [
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "Composition with custom tags",
            "text": "This sample shows some basic custom tags implemented as simple render functions, or templates, and in each case shows how the tag can incorporate block content..."
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{mytag}}\n  {{>title}}\n{{/fntag}}\n"
          },
          {
            "_type": "para",
            "title": "",
            "text": "...into its rendering."
          },
          {
            "_type": "para",
            "title": "",
            "text": "A variant, is to incorporate external content (through a tag parameter such as <em>tmpl</em>, referencing an external template) into the rendered output..."
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{{mytag tmpl=\"#externalcontent\"/}}\n"
          }
        ],
        "sampleName": "jsrender/tags/wrap-content",
        "url": "samples/jsrender/tags/wrap-content/sample",
        "height": "220"
      }
    ]
  },
  "samples/jsr/tags/extend-for": {
    "title": "Custom tags: extending the {{for}} tag",
    "path": "",
    "sections": [
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "An extended <strong>({for}}</strong> tag",
            "text": "<em>{{for_range}}</em> inherits from <em>{{for}}</em>, and adds\nsupport for iterating over a range (<em>start</em> to <em>end</em>) of items within an array,\nor for iterating directly over integers from <em>start</em> integer to <em>end</em> integer."
          },
          {
            "_type": "template",
            "title": "Range of items from array",
            "markup": "{{for_range members start=1 end=3}}\n  ...\n{{else}}\n  ...\n{{/for_range}}"
          },
          {
            "_type": "template",
            "title": "Range of integers",
            "markup": "{{for_range start=10 end=40}}\n  ...\n{{else}}\n  ...\n{{/for_range}}"
          },
          {
            "_type": "code",
            "title": "Derive from <strong>{{for}}</strong> tag",
            "code": "$.views.tags({\n  for_range: $.extend(true, {}, $.views.tags.for, {\n    render: function(val) {\n      ...\n      return $.views.tags.for.render.apply(this, val ? [val] : arguments);\n    }\n  })\n});\n"
          }
        ],
        "sampleName": "jsrender/tags/extend-for",
        "url": "samples/jsrender/tags/extend-for/sample",
        "height": "520"
      }
    ]
  }
};
content.categories = useStorage && $.parseJSON(localStorage.getItem("JsViewsDocCategories")) ||
[
  {
    "name": "gettingstarted",
    "label": "Getting started",
    "categories": [
      {
        "name": "jsrplaying",
        "label": "Playing with JsRender"
      },
      {
        "name": "jsvplaying",
        "label": "Playing with JsViews",
        "hidden": true
      }
    ],
    "expanded": true
  },
  {
    "name": "concepts",
    "label": "Concepts",
    "categories": [
      {
        "name": "data",
        "label": "Data",
        "categories": [
          {
            "name": "objectsorvm",
            "label": "Plain objects or View Model"
          },
          {
            "name": "ajax",
            "label": "Ajax requests"
          },
          {
            "name": "observabledata",
            "label": "Observable data"
          },
          {
            "name": "computed",
            "label": "Computed observables"
          },
          {
            "name": "dependencies",
            "label": "Declaring dependencies"
          }
        ],
        "expanded": true
      },
      {
        "name": "templates",
        "label": "Templates",
        "categories": [
          {
            "name": "composition",
            "label": "Composition"
          }
        ],
        "expanded": true
      },
      {
        "name": "views",
        "label": "Views",
        "categories": [
          {
            "name": "viewhierarchy",
            "label": "View hierarchy"
          }
        ],
        "expanded": false
      },
      {
        "name": "renderorlink",
        "label": "Rendering versus linking",
        "categories": [
          {
            "name": "renderasstring",
            "label": "String-based rendering"
          },
          {
            "name": "linkingtohtml",
            "label": "Data-binding to HTML"
          },
          {
            "name": "data-link",
            "label": "Element-based: data-link"
          },
          {
            "name": "inlinebinding",
            "label": "Inline tag binding"
          }
        ],
        "expanded": false
      },
      {
        "name": "helpers",
        "label": "Providing helpers",
        "categories": [
          {
            "name": "registerhelper",
            "label": "Registering helpers"
          },
          {
            "name": "pass helper",
            "label": "Passing in helpers"
          },
          {
            "name": "helperpaths",
            "label": "Helper paths"
          }
        ],
        "expanded": false
      },
      {
        "name": "converters",
        "label": "Converters",
        "categories": [
          {
            "name": "jsr-converter",
            "label": "converters in JsRender",
            "expanded": true
          },
          {
            "name": "jsv-converter",
            "label": "converters in JsViews",
            "categories": [
              {
                "name": "jsv-converter1way",
                "label": "one-way binding converter"
              },
              {
                "name": "jsv-converterback",
                "label": "2-way binding - convert back"
              }
            ],
            "expanded": true
          }
        ],
        "expanded": false
      },
      {
        "name": "customtags",
        "label": "Custom tags",
        "categories": [
          {
            "name": "jsrcustomtags",
            "label": "JsRender custom tags"
          },
          {
            "name": "tagsascontrols",
            "label": "Custom tags as controls"
          }
        ],
        "expanded": true
      },
      {
        "name": "tagexpressions",
        "label": "Tag expressions",
        "categories": [
          {
            "name": "allowcode",
            "label": "Allow code?"
          },
          {
            "name": "expressions",
            "label": "Expressions"
          },
          {
            "name": "expressions/datapath",
            "label": "Data paths"
          },
          {
            "name": "expressions/helperpath",
            "label": "Helper paths"
          },
          {
            "name": "expressions/viewpath",
            "label": "View paths"
          }
        ],
        "expanded": false
      },
      {
        "name": "linkobservedispose",
        "label": "Linking, observing, disposing"
      },
      {
        "name": "tagcontrols",
        "label": "Tag Controls",
        "categories": [
          {
            "name": "taghierarchy",
            "label": "Tag hierarchy"
          },
          {
            "name": "taglifecycle",
            "label": "Tag lifecycle"
          },
          {
            "name": "tagmethods",
            "label": "Tag methods and properties"
          }
        ],
        "expanded": false
      },
      {
        "name": "mvvm-mvp",
        "label": "MVVM and MVP"
      }
    ],
    "expanded": true,
    "hidden": true
  },
  {
    "name": "jsrapi",
    "label": "JsRender API - Templated UI",
    "categories": [
      {
        "name": "jsrtags",
        "label": "Template tags",
        "categories": [
          {
            "name": "assigntag",
            "label": "{{: ...}}"
          },
          {
            "name": "htmltag",
            "label": "{{> ...}}"
          },
          {
            "name": "includetag",
            "label": "{{include ...}}"
          },
          {
            "name": "fortag",
            "label": "{{for ...}}"
          },
          {
            "name": "iftag",
            "label": "{{if ...}}"
          },
          {
            "name": "elsetag",
            "label": "{{else ...}}"
          },
          {
            "name": "commenttag",
            "label": "{{!-- ... --}}"
          },
          {
            "name": "customtagsapi",
            "label": "Custom tags"
          }
        ],
        "expanded": true
      },
      {
        "name": "rendertmpl",
        "label": "Render a template",
        "categories": [
          {
            "name": "tmplrender",
            "label": "template.render()"
          },
          {
            "name": "$render",
            "label": "$.render.myTmpl()"
          },
          {
            "name": "$()render",
            "label": "$(\"#myTmpl\").render()"
          }
        ],
        "expanded": true
      },
      {
        "name": "compiletmpl",
        "label": "Compile/register/get a template",
        "categories": [
          {
            "name": "$templates",
            "label": "$.templates()"
          }
        ],
        "expanded": true
      },
      {
        "name": "jsrregister",
        "label": "Register helpers, converters, tags...",
        "categories": [
          {
            "name": "converters()",
            "label": "$.views.converters()",
            "categories": [
              {
                "name": "html()",
                "label": "$.views.converters.html()"
              },
              {
                "name": "attr()",
                "label": "$.views.converters.attr()"
              },
              {
                "name": "url()",
                "label": "$.views.converters.url()"
              }
            ],
            "expanded": true
          },
          {
            "name": "tags()",
            "label": "$.views.tags()"
          },
          {
            "name": "helpers()",
            "label": "$.views.helpers()"
          }
        ],
        "expanded": true
      },
      {
        "name": "jsrobjects",
        "label": "JsRender objects",
        "categories": [
          {
            "name": "viewsobject",
            "label": "$.views object",
            "categories": [
              {
                "name": "settingsobject",
                "label": "$.views.settings object"
              },
              {
                "name": "subobject",
                "label": "$.views.sub object"
              }
            ],
            "expanded": true
          },
          {
            "name": "templateobject",
            "label": "template object"
          },
          {
            "name": "viewobject",
            "label": "view object"
          },
          {
            "name": "tagobject",
            "label": "tag object"
          },
          {
            "name": "viewcontextobject",
            "label": "view context object"
          },
          {
            "name": "tagcontextobject",
            "label": "tag context object"
          }
        ],
        "expanded": true,
        "hidden": true
      }
    ],
    "expanded": true
  },
  {
    "name": "jsvapi",
    "label": "JsViews API - Data-driven UI",
    "categories": [
      {
        "name": "jsvtags",
        "label": "Template tags",
        "expanded": false
      },
      {
        "name": "jsvrendertmpl",
        "label": "Render a template",
        "expanded": false
      },
      {
        "name": "jsvlinktmpl",
        "label": "Render and link a template",
        "categories": [
          {
            "name": "jsvtmpllink",
            "label": "template.link()"
          },
          {
            "name": "jsv$link",
            "label": "$.link()"
          },
          {
            "name": "jsv$()link",
            "label": "$(...).link()"
          }
        ],
        "expanded": true
      },
      {
        "name": "jsvunlink",
        "label": "Unlink a template",
        "categories": [
          {
            "name": "jsvtmplunlink",
            "label": "template.unlink()"
          },
          {
            "name": "jsv$unlink",
            "label": "$.unlink()"
          },
          {
            "name": "jsv$()unlink",
            "label": "$(...).unlink()"
          }
        ],
        "expanded": false
      },
      {
        "name": "$view",
        "label": "Access views",
        "categories": [
          {
            "name": "jsv$view",
            "label": "$.view()"
          },
          {
            "name": "jsv$()view()",
            "label": "$(...).view()"
          }
        ],
        "expanded": false
      },
      {
        "name": "jsvcompiletmpl",
        "label": "Compile/register/get a template",
        "expanded": false
      },
      {
        "name": "jsvregister",
        "label": "Register helpers, converters, tags...",
        "categories": [
          {
            "name": "jsvconverters()",
            "label": "$.views.converters()",
            "expanded": false
          },
          {
            "name": "jsvtags()",
            "label": "$.views.tags()"
          },
          {
            "name": "jsvhelpers()",
            "label": "$.views.helpers()"
          }
        ],
        "expanded": false
      },
      {
        "name": "jsvtagcontrols",
        "label": "Custom Tags - Tag Controls"
      },
      {
        "name": "jsvobjects",
        "label": "JsViews objects",
        "categories": [
          {
            "name": "jsvviewsobject",
            "label": "$.views object",
            "expanded": true
          },
          {
            "name": "jsvtemplateobject",
            "label": "template object"
          },
          {
            "name": "jsvviewobject",
            "label": "view object"
          },
          {
            "name": "jsvtagobject",
            "label": "tag object"
          },
          {
            "name": "jsvviewcontextobject",
            "label": "View context object"
          },
          {
            "name": "jsvtagcontextobject",
            "label": "Tag context object"
          },
          {
            "name": "jsvlinkcontextobject",
            "label": "Link context object"
          }
        ],
        "expanded": true
      }
    ],
    "expanded": false,
    "hidden": true
  },
  {
    "name": "jsoapi",
    "label": "JsObservable API - Observing data",
    "categories": [
      {
        "name": "propchange",
        "label": "Modify an object observably",
        "categories": [
          {
            "name": "setprop",
            "label": "$.observable(object).setProperty()"
          }
        ],
        "expanded": false
      },
      {
        "name": "collchange",
        "label": "Modify an array observably",
        "categories": [
          {
            "name": "insert",
            "label": "$.observable(array).insert()"
          },
          {
            "name": "remove",
            "label": "$.observable(array).remove()"
          },
          {
            "name": "refresh",
            "label": "$.observable(array).refresh()"
          },
          {
            "name": "move",
            "label": "$.observable(array).move()"
          }
        ],
        "expanded": false
      },
      {
        "name": "observeobjectsarrays",
        "label": "Observe objects and arrays",
        "categories": [
          {
            "name": "onpropchange",
            "label": "onPropertyChange",
            "categories": [
              {
                "name": "propchangehandler",
                "label": "PropertyChangeEventHandler"
              },
              {
                "name": "propchangeevargs",
                "label": "PropertyChangeEventArguments"
              }
            ],
            "expanded": true
          },
          {
            "name": "onarrchange",
            "label": "onArrayChange"
          },
          {
            "name": "observe",
            "label": "$.observable.observe()"
          },
          {
            "name": "unobserve",
            "label": "unobserve()"
          }
        ],
        "expanded": false
      }
    ],
    "expanded": false,
    "hidden": true
  },
  {
    "name": "samples",
    "label": "Samples",
    "categories": [
      {
        "name": "samples/jsr",
        "label": "JsRender",
        "categories": [
          {
            "name": "samples/jsr/converters",
            "label": "Converters and encoding"
          },
          {
            "name": "samples/jsr/composition",
            "label": "Template composition",
            "categories": [
              {
                "name": "samples/jsr/composition/tmpl",
                "label": "tmpl parameter"
              },
              {
                "name": "samples/jsr/composition/subtemplates",
                "label": "Using sub-templates"
              },
              {
                "name": "samples/jsr/composition/tmplobjects",
                "label": "Contextual template objects"
              }
            ],
            "expanded": true
          },
          {
            "name": "samples/jsr/tags",
            "label": "Custom tags",
            "categories": [
              {
                "name": "samples/jsr/tags/wrap-content",
                "label": "Wrapping content"
              },
              {
                "name": "samples/jsr/tags/extend-for",
                "label": "Extending for"
              }
            ],
            "expanded": true
          },
          {
            "name": "samples/jsr/helpers",
            "label": "Helpers"
          },
          {
            "name": "samples/jsr/paths",
            "label": "Paths"
          }
        ],
        "expanded": true
      },
      {
        "name": "samples/jso",
        "label": "JsObservable",
        "hidden": true
      },
      {
        "name": "samples/jsv",
        "label": "JsViews",
        "categories": [
          {
            "name": "samples/jsv/converters",
            "label": "Converters",
            "categories": [
              {
                "name": "samples/converters/twoway",
                "label": "Two-way binding and converters"
              },
              {
                "name": "samples/converters/formels",
                "label": "Form elements and converters"
              }
            ],
            "expanded": true
          },
          {
            "name": "samples/tagcontrols",
            "label": "Tag controls",
            "categories": [
              {
                "name": "samples/tagcontrols/tabs",
                "label": "tabs control"
              }
            ],
            "expanded": true
          }
        ],
        "expanded": true,
        "hidden": true
      }
    ],
    "expanded": true
  }
];