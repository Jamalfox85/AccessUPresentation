<template>
  <main>
    <!-- INTRO SLIDE -->
    <div class="presentation-chunk intro-slide">
      <h1 class="main-heading" @click="updateTitle()">
        Web <br />
        <span
          class="main-heading-accessibility"
          :style="{ color: title === 'A11y.' ? '#add7f6' : '#fff' }"
          tabindex="0"
          @keyup.enter="updateTitle()"
          >{{ title }}</span
        >
      </h1>
    </div>

    <!-- WHY SHOULD WE CARE -->
    <!-- <div class="presentation-chunk" ref="whyShouldWeCare">
      <h2 class="primary-heading">Why Should We Care?</h2>
      <ul>
        <li>Everyone Benefits</li>
      </ul>
    </div> -->

    <!-- MODELS OF DISABILITY -->
    <div
      class="presentation-chunk benefits"
      tabindex="0"
      ref="benefits"
      style="height: 100vh"
    >
      <h2 class="primary-heading">Theoretical Models of Disability</h2>
      <p class="benefit-subheading" style="font-size: 2em; margin-top: 2em">
        Medical Model
      </p>
      <p class="benefit-subheading" style="font-size: 2em; margin-top: 2em">
        Economic Model
      </p>
      <p class="benefit-subheading" style="font-size: 2em; margin-top: 2em">
        Social Model
      </p>
      <p class="benefit-subheading" style="font-size: 2em; margin-top: 2em">
        Charity / Tragedy Model
      </p>
      <p class="benefit-subheading" style="font-size: 2em; margin-top: 2em">
        Functional Solutions Model
      </p>
    </div>

    <!-- BENEFITS OF ACCESSIBILITY -->
    <div class="presentation-chunk benefits" tabindex="0" ref="benefits">
      <h2 class="primary-heading">Benefits of Accessibility</h2>
      <p class="benefit-subheading">Accessibility...</p>
      <!-- <p>
        Accessibility benefits individuals by providing them the means to
        participate in society, in major life activities such as education and
        employment and social activities that are necessary for health and
        happiness. Further, families and society benefit from the increased
        independence of more people, contributes of people with a variety of
        abilities and disabilities, as well as cost savings and improvements to
        the build and digital world that improve access and usability for
        everyone. Schools, employers, groups, and organizations of all types
        also benefit from the increase in innovation and improvements to problem
        solving that diversity through inclusion brings.
      </p> -->
      <div
        class="benefit-blocks"
        tabindex="0"
        @keyup.enter="scrollToSection('typesOfDisabilities')"
      >
        <div class="benefit-block">
          <img
            src="../assets/benefit-blocks/improve-peoples-lives.svg"
            alt="Woman holding up a heart in appreciation."
          />
          <p>...improves people’s lives.</p>
        </div>
        <div class="benefit-block">
          <img
            src="../assets/benefit-blocks/pr.svg"
            alt="Woman standing at a podium."
          />
          <p>...improves public perception and generates good PR.</p>
        </div>

        <div class="benefit-block">
          <img
            src="../assets/benefit-blocks/comptability-humans-systems.svg"
            alt="Man and woman holding large phones."
          />
          <p>...increases compatibility between humans and systems.</p>
        </div>
        <div class="benefit-block">
          <img src="../assets/benefit-blocks/seo.svg" alt="Search results." />
          <p>...improves SEO.</p>
        </div>
        <div class="benefit-block">
          <img
            src="../assets/benefit-blocks/customer-base.svg"
            alt="3 profile images circling a chat bubble."
          />
          <p>...helps increase your customer base.</p>
        </div>
        <div class="benefit-block">
          <img
            src="../assets/benefit-blocks/funding.svg"
            alt="Man riding piggy bank holding a coin."
          />
          <p>...increases your eligibility for funding.</p>
        </div>
        <div class="benefit-block">
          <img
            src="../assets/benefit-blocks/lawsuit.svg"
            alt="Man holding legal document."
          />
          <p>...helps you avoid lawsuits.</p>
        </div>
        <div class="benefit-block">
          <img
            src="../assets/benefit-blocks/family.svg"
            alt="Woman helping her elderly mother use a computer."
          />
          <p>...alleviates burden or stress on family members and helpers.</p>
        </div>
        <div class="benefit-block">
          <img
            src="../assets/benefit-blocks/friends.svg"
            alt="Man connecting with multiple friends online."
          />
          <p>
            ...allows you individually to make more friends with people who have
            disabilities.
          </p>
        </div>
      </div>
    </div>

    <!-- TYPES OF DISABILITIES -->
    <div class="presentation-chunk" ref="typesOfDisabilities" tabindex="0">
      <h2 class="primary-heading">Types of Disabilities</h2>
      <!-- <p>
        8 total types disabilities, but we're only going to focus on 4 right now
      </p> -->
      <div
        class="types-of-disabilities-columns"
        tabindex="0"
        @keyup.enter="scrollToSection('atAndAs')"
      >
        <div class="disability-column">
          <h3>Visual</h3>
          <img src="../assets/disability-columns/eye.png" alt="eye" />
          <b class="example-header">Examples</b>
          <ul>
            <li>Color Blindness</li>
            <li>Low Vision</li>
            <li>Blindness</li>
          </ul>
        </div>
        <div class="disability-column">
          <h3>Auditory</h3>
          <img src="../assets/disability-columns/ear.png" alt="ear" />
          <b class="example-header">Examples</b>
          <ul>
            <li>Hard of hearing</li>
            <li>Deafness</li>
          </ul>
        </div>
        <div class="disability-column">
          <h3>Mobility</h3>
          <img src="../assets/disability-columns/walk.png" alt="Man walking" />
          <b class="example-header">Examples</b>
          <ul>
            <li>Amputation</li>
            <li>Arthritis</li>
            <li>Paralysis</li>
            <li>Repetitive Stress Injury</li>
          </ul>
        </div>
        <div class="disability-column">
          <h3>Cognitive</h3>
          <img src="../assets/disability-columns/brain.png" alt="brain" />
          <b class="example-header">Examples</b>
          <ul>
            <li>ADHD</li>
            <li>Autism</li>
            <li>Memory Impairments</li>
            <li>Learning Disabilities</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ASSISTIVE TECHNOLOGIES AND ADAPTIVE STRATEGIES -->
    <div class="presentation-chunk" ref="atAndAs">
      <h2 class="primary-heading">
        Assistive Technologies (ATs) & Adaptive Strategies
      </h2>
      <div
        class="atas-main"
        @keyup.enter="scrollToSection('pour')"
        tabindex="0"
      >
        <div class="atas-section">
          <h3>Assistive Technologies</h3>
          <p>
            Assistive technology can be anything that a person needs in order to
            overcome the effects of a disability.
          </p>
          <div class="image-row">
            <img src="../assets/atas/screen-reader.png" alt="screen reader" />
            <img
              src="../assets/atas/braille.png"
              alt="refreshable braille display"
            />
            <img src="../assets/atas/tracing.png" alt="eye tracing software" />
            <img src="../assets/atas/auto-complete.png" alt="form" />
          </div>
          <b class="example-header">Examples</b>
          <ul>
            <li>Screen Readers</li>
            <li>Refreshable Braille Display</li>
            <li>Eye Tracing Software</li>
            <li>Word Prediction *</li>
          </ul>
        </div>
        <div class="atas-section">
          <h3>Adaptive Strategies</h3>
          <p>
            Adaptive strategies are techniques that everyone can use to improve
            interaction with websites or applications.
          </p>
          <div class="image-row">
            <img src="../assets/atas/keyboard.png" alt="keyboard" />
            <img src="../assets/atas/zoom.png" alt="magnifying glass" />
            <img src="../assets/atas/cc.png" alt="closed captioning" />
          </div>
          <b class="example-header">Examples</b>
          <ul>
            <li>Keyboard Navigation</li>
            <li>Customizing Fonts and Colors</li>
            <li>Screen Magnification / Zoom</li>
            <li>Closed Captioning</li>
          </ul>
        </div>
        <!-- <p>
          An ‘Assistive Technology Device’ is any item, piece of equipment, or
          product system, whether acquired commercially off the shelf, modified,
          or customized, that is used to increase, maintain, or improve the
          functional capabilities of a user with a disability. In simple terms,
          assistive technology can be anything that a person needs in order to
          overcome the effects of a disability.
        </p> -->
        <!-- <p>
          Adaptive strategies are techniques that everyone can use to improve
          interaction with websites or applications. Adaptive strategies can be
          used with standard software, mainstream web browsers, and with
          assistive technologies.
        </p> -->
      </div>
    </div>

    <!-- KEY PRINCIPLES / POUR -->
    <div class="presentation-chunk" ref="pour">
      <h2 class="primary-heading">WCAG 2.1 Key Principles - P.O.U.R.</h2>
      <div class="pour-main">
        <div class="pour-group">
          <h3>Perceivable</h3>
          <ul>
            <li>Provide text alternatives for non-text content.</li>
            <li>Provide captions and other alternatives for multimedia.</li>
            <li>
              Create content that can be presented in different ways, including
              by ATs, without losing meaning.
            </li>
            <li>Make it easier for users to see and hear content.</li>
          </ul>
        </div>
        <div class="pour-group">
          <h3>Operable</h3>
          <ul>
            <li>Make all functionality available from a keyboard.</li>
            <li>Give users enough time to read and use content.</li>
            <li>
              Do not use content that causes seizures or physical reactions.
            </li>
            <li>Help users navigate and find content.</li>
            <li>Make it easier to use inputs other than a keyboard.</li>
          </ul>
        </div>
        <div class="pour-group">
          <h3>Understandable</h3>
          <ul>
            <li>Make text readable and understandable.</li>
            <li>Make content appear and oeprate in predictable ways.</li>
            <li>Help users avoid and correct mistakes.</li>
          </ul>
        </div>
        <div class="pour-group">
          <h3>Robust</h3>
          <ul>
            <li>Maximize compatibility with current and future user tools.</li>
          </ul>
        </div>
      </div>

      <!-- - Provide text alternatives for non-text content. - Provide captions and
      other alternatives for multimedia. - Create content that can be presented
      in different ways, including by assistive technologies, without losing
      meaning. - Make it easier for users to see and hear content.
      - Make all functionality available from a keyboard. - Give users enough
      time to read and use content. - Do not use content that causes seizures or
      physical reactions. - Help users navigate and find content. - Make it
      easier to use inputs other than a keyboard.
      - Make text readable and understandable. - Make content appear and operate
      in predictable ways. - Help users avoid and correct mistakes
      Maximize compatibility with current and future user tools. -->
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "Accessibility.",
    };
  },
  methods: {
    updateTitle() {
      if (this.title === "A11y.") {
        this.scrollToSection("benefits");
      }
      this.title = "A11y.";
    },
    scrollToSection(sectionRef) {
      this.$refs[sectionRef].scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.example-header {
  font-size: 1.25em;
  border-bottom: solid 1px #87bfff;
  padding-bottom: 4px;
  margin-bottom: 0.5rem;
}
ul {
  list-style-type: none;
  text-align: center;
  li {
    margin-bottom: 8px;
  }
}
.main-heading-accessibility {
  font-size: 1em;
  &:hover {
    color: #add7f6 !important;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
}
.benefits {
  height: fit-content;
}

.benefit-subheading {
  font-size: 1.25em;
  font-weight: bold;
}
.benefit-blocks {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
  padding: 1em;

  .benefit-block {
    display: flex;
    flex-direction: column;
    text-align: center;
    height: fit-content;
    position: relative;
    margin: 1.5em;
    width: 200px;

    // &:nth-child(odd) {
    //   top: -25%;
    // }
    // &:nth-child(even) {
    //   top: 25%;
    // }
    img {
      margin-bottom: 1em;
      height: 100%;
    }
    p {
      font-weight: bold;
      font-size: 1.1em;
    }
  }
}
.types-of-disabilities-columns {
  display: flex;
  flex-grow: 1;
  .disability-column {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    h3 {
      font-size: 2rem;
      border-bottom: solid 1px #87bfff;
      padding-bottom: 4px;
      margin-bottom: 1rem;
    }
    img {
      background-image: url("../assets/disability-columns/blob.svg");
      padding: 4em;
      width: 100%;
      margin-bottom: 4em;
    }
  }
}

.atas-main {
  flex-grow: 1;
  display: flex;
  .atas-section {
    background-color: #add7f6;
    padding: 1em;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    &:first-child {
      .example-header {
        border-bottom: solid 1px #3b28cc;
      }
      .image-row img {
        // background-image: url("../assets/general/blob-dark.svg");
      }
    }
    &:last-child {
      background-color: #3b28cc;
      color: #fff;
    }
    h3 {
      font-size: 1.75rem;
      font-weight: bold;
      margin-bottom: 1em;
    }
    .image-row {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-bottom: 2em;
      img {
        width: 10em;
        background-image: url("../assets/general/blob.svg");
        padding: 2em;
      }
    }
    p {
      width: 70%;
      margin-bottom: 2em;
    }
  }
}

.pour-main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 1em;
  .pour-group {
    flex-grow: 1;
    display: flex;
    align-items: center;
    width: 100%;
    border-top: solid 4px #add7f6;
    h3 {
      font-size: 2rem;
      width: 40%;
      display: inline-block;
      &::first-letter {
        font-size: 2em;
      }
    }
    ul {
      list-style-type: disc;
      text-align: left;
    }
  }
}
</style>
