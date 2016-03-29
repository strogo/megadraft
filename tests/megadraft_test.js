/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import chai from "chai";

import Megadraft from "../src/Megadraft";
import {editorStateToJSON, editorStateFromRaw} from "../src/utils";


let expect = chai.expect


describe("Megadraft Component", () => {
  beforeEach(function() {
    const INITIAL_CONTENT = {
      "entityMap": {},
      "blocks": [
        {
          "key": "ag6qs",
          "text": "Hello World!",
          "type": "unstyled",
          "depth": 0,
          "inlineStyleRanges": [
            {
              "offset": 0,
              "length": 12,
              "style": "BOLD"
            },
            {
              "offset": 6,
              "length": 6,
              "style": "ITALIC"
            }
          ],
          "entityRanges": []
        }
      ]
    };
    const content = editorStateFromRaw(INITIAL_CONTENT);
    this.component = TestUtils.renderIntoDocument(<Megadraft editorState={content} />);
  });

  afterEach(function() {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.component).parentNode);
  });

  it("renders without problems", function() {
    expect(this.component).to.exist;
  });
});
