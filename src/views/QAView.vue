<template>
  <main>
    <!-- INTRO SLIDE -->
    <div class="presentation-chunk intro-slide">
      <h1 class="main-heading">QA & Testing</h1>
    </div>

    <!-- TYPES OF TESTING -->
    <div class="presentation-chunk">
      <h2 class="primary-heading">Types of Testing</h2>
      <ul>
        <li style="font-size: 2em; margin-top: 2em">Design & UX</li>
        <li style="font-size: 2em; margin-top: 2em">Automated</li>
        <li style="font-size: 2em; margin-top: 2em">Manual</li>
        <li style="font-size: 2em; margin-top: 2em">
          Assistive Technology & Usability
        </li>
      </ul>
    </div>

    <!-- Design & UX Testing -->
    <div class="presentation-chunk">
      <h2 class="primary-heading">Design & UX Testing</h2>
    </div>

    <!-- Automated Testing -->
    <div class="presentation-chunk">
      <h2 class="primary-heading">Automated Testing</h2>
      <ul>
        <li>Like Lighthouse or Wave accessibility checker</li>
        <li>Software that scans site for potential issues</li>
        <li>Easily repeatable throughout SDLC</li>
        <li>Limitations as to what can be tested</li>
        <li>Examples of what can be automated</li>
        <li>Examples of what can NOT be automated</li>
        <li>
          Types of Automated tests (Accessibilty Checkers, Dashboards, Code
          Linters, Tab Stop Generators)
        </li>
      </ul>
    </div>

    <!-- Manual & AI Guided Testing -->
    <div class="presentation-chunk">
      <h2 class="primary-heading">Manual & AI Guided Testing</h2>
      <ul>
        <li>Can be complex and take a lot of time</li>
        <li>May be difficult to repeat throughout the SDLC</li>
        <li>
          Manual testing covers keyboard focus, navigation, traps, buttons, link
          actions and descriptions, ARIA is semantic and properly used
        </li>
        <li>Types of Manual Testing</li>
      </ul>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
