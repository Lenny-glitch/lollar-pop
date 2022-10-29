import React from "react";

export default function Header() {
  return (
    <div class="container" id="header">
      <div class="row">
        <div class="col">
          <button type="button" class="btn" name="headerBtn">
            <a href="my-app\src\components\Home\Home.jsx">Home</a>
          </button>
        </div>
        <div class="col">
          <button type="button" class="btn" name="headerBtn">
            <a href="playerTools.html" class="button">
              Player Tools
            </a>
          </button>
        </div>
        <div class="col">
          <button type="button" class="btn" name="headerBtn">
            <a href="oracleTools.html" class="button">
              Oracle Tools
            </a>
          </button>
        </div>
        <div class="col">
          <button type="button" class="btn" name="headerBtn">
            <a href="mapTools.html" class="button">
              Map Tools
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
