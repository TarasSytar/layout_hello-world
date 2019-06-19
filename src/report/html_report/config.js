report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_test_0_document_0_custom-size.png",
        "test": "..\\bitmaps_test\\20190619-193223\\test_test_0_document_0_custom-size.png",
        "selector": "document",
        "fileName": "test_test_0_document_0_custom-size.png",
        "label": "test",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/hello-world/",
        "expect": 0,
        "viewportLabel": "custom-size",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "3.09",
          "analysisTime": 21
        },
        "diffImage": "..\\bitmaps_test\\20190619-193223\\failed_diff_test_test_0_document_0_custom-size.png"
      },
      "status": "fail"
    }
  ],
  "id": "test"
});