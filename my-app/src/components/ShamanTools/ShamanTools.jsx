import React from "react";

export default function ShamanTools() {
  return (
    <main class="container" id="main">
      <div class="row row-cols-1">
        <h1>Oracle Tools</h1>
      </div>
      <div class="row row-cols-3">
        <div class="col col-4">
          <a href="https://docs.google.com/spreadsheets/d/12f0QLhKHwo7N5klWZwbTDpdBKwLU2cXgCF55GW397II/edit?usp=sharing">
            Ecounter Sheet
          </a>
        </div>
        <div class="col col-4">
          {" "}
          <a href="https://docs.google.com/document/d/1w-a2Gi5wE8z2ry1CAUrD6FISdV4UoSATOCIAsYX_5b0/edit?usp=sharing">
            Lore and History
          </a>
        </div>
        <div class="col col-4">
          <a href="https://docs.google.com/spreadsheets/d/1memIQCdio3rKIxoCWetERPRTdItc5XBO5Nocd-WawXw/edit?usp=sharing">
            Core Rules
          </a>
        </div>
      </div>
    </main>
  );
}
