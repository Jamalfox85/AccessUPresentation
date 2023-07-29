<template>
  <main>
    <!-- INTRO SLIDE -->
    <div
      class="presentation-chunk intro-slide"
      tabindex="0"
      @keyup.enter="scrollToSection('colorContrast')"
    >
      <h1 class="main-heading">UI / UX Design</h1>
    </div>

    <!-- COLOR CONTRAST  -->
    <!-- Can sometimes get away with a smaller contrast ratio with css tricks like text borders or box shadows.-->
    <div
      class="presentation-chunk color-contrast"
      tabindex="0"
      ref="colorContrast"
      @keyup.enter="scrollToSection('altText')"
    >
      <h2 class="primary-heading">Color Contrast</h2>
      <div class="contrast-main">
        <div class="contrast-ratios">
          <div class="contrast-ratio-text-block">
            <p class="type">Text</p>
            <p class="ratio">4.5:1</p>
          </div>
          <div class="contrast-ratio-text-block">
            <p class="type">Large Text</p>
            <p class="ratio">3:1</p>
          </div>
          <div class="contrast-ratio-text-block">
            <p class="type">Visual Elements</p>
            <p class="ratio">3:1</p>
          </div>
          <div class="contrast-ratio-text-block">
            <p class="type">AAA</p>
            <p class="ratio">
              7:1 <span style="font-size: 0.5em">and</span> 4.5:1
            </p>
          </div>
        </div>
        <div class="contrast-examples">
          <!-- Text -->
          <div class="example-group">
            <div class="contrast-ex">
              <p style="color: #fff; border-bottom: solid 8px red">1.5:1</p>
            </div>
            <div class="contrast-ex">
              <p style="color: #595959ff; border-bottom: solid 8px green">
                4.6:1
              </p>
            </div>
            <div class="contrast-ex">
              <p style="color: #3d3d3d; border-bottom: solid 8px green">
                7.3:1
              </p>
            </div>
          </div>
          <!-- Large Text -->
          <div class="example-group">
            <div class="contrast-ex contrast-lg">
              <p style="color: #000; border-bottom: solid 8px red">2.4:1</p>
            </div>
            <div class="contrast-ex contrast-lg">
              <p
                style="
                  color: #969696;
                  border-bottom: solid 8px rgb(28, 212, 28);
                "
              >
                3.2:1
              </p>
            </div>
            <div class="contrast-ex contrast-lg">
              <p
                style="
                  color: #bababa;
                  border-bottom: solid 8px rgb(28, 212, 28);
                "
              >
                4.6:1
              </p>
            </div>
          </div>
          <!-- Visual -->
          <div class="example-group">
            <div class="contrast-ex contrast-lg">
              <!-- <p style="color: #000; border-bottom: solid 8px red"> -->
              <img
                style="
                  width: 5em;
                  margin: auto;
                  padding-bottom: 1em;
                  border-bottom: solid 8px red;
                "
                src="../assets/atas/house-solid.svg"
              />
              <!-- </p> -->
            </div>
            <div class="contrast-ex contrast-lg">
              <img
                style="
                  width: 5em;
                  margin: auto;
                  padding-bottom: 1em;
                  border-bottom: solid 8px rgb(28, 212, 28);
                "
                src="../assets/atas/house-solid-2.svg"
              />
            </div>
            <div class="contrast-ex contrast-lg">
              <img
                style="
                  width: 5em;
                  margin: auto;
                  padding-bottom: 1em;
                  border-bottom: solid 8px rgb(28, 212, 28);
                "
                src="../assets/atas/house-solid-3.svg"
              />
            </div>
          </div>
          <!-- AAA -->
          <div class="example-group">
            <div class="contrast-ex" style="background: #000">
              <p style="color: #fff; border-bottom: solid 8px rgb(28, 212, 28)">
                21:1
              </p>
            </div>
            <div class="contrast-ex" style="background: #000">
              <p
                style="
                  color: #969696;
                  border-bottom: solid 8px rgb(28, 212, 28);
                "
              >
                7.0:1
              </p>
            </div>
            <div class="contrast-ex" style="background: #fff">
              <p style="color: #000; border-bottom: solid 8px rgb(28, 212, 28)">
                21:1
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Color Contrast issues can normally be automated -->
      <!-- Figma Extensions will help catch some of the contrast issues early -->
      <!-- Talk about chrome lens tool -->
    </div>

    <!-- ALT TEXT -->
    <div
      class="presentation-chunk alt-text"
      tabindex="0"
      ref="altText"
      @keyup.enter="scrollToSection('des-to-dev')"
    >
      <h2 class="primary-heading">Alt Text</h2>
      <div class="alt-main">
        <div class="dev-entered">
          <p>
            Alt text should explain content in specifics. Generic tags don't
            offer enough information to really help the people using them.
          </p>
          <img
            src="../assets/alt/group-1.png"
            alt="ARC Reads book card alt comparison"
          />
          <p>
            Alt text is typically handled by developers, but more often than not
            - designers are the ones that choose the relevant image.
          </p>
          <!-- Alt text should probably fall to whoever picks the image -->
        </div>
        <div class="user-entered">
          <p>What about alt text for images uploaded by users?</p>
          <ol>
            <li>Generic Tags (alt = "user uploaded image")</li>
            <li>Blank Alt Tag (alt = "")</li>
            <li>Omit Alt Tag</li>
            <li>
              Constructed Alt Tag (alt = "assigment title + uploaded user")
            </li>
          </ol>
          <!-- Or non-techy people in the company -->
        </div>
      </div>
    </div>

    <!-- FIGMA ANNOTATIONS FOR DESIGN TO DEV HANDOFF -->
    <div class="presentation-chunk design-to-dev" tabindex="0" ref="des-to-dev">
      <h2 class="primary-heading">Figma Annotations</h2>
      <div class="main">
        <div class="col" style="width: 20%">
          <div class="why">
            <h3>Why?</h3>
          </div>
        </div>
        <div class="col" style="width: 60%">
          <div class="annotations">
            <h3>
              <a
                href="https://www.figma.com/community/file/953682768192596304/A11y-Annotation-Kit"
                >Figma A11y Annotations Kit</a
              >
            </h3>
            <div class="annotation-imgs">
              <img
                src="../assets/des-to-dev/thumbnail.png"
                alt="Indeed Figma A11y Annotations Kit Thumbnail"
              />
              <img
                src="../assets/des-to-dev/p-2.png"
                alt="Indeed Figma A11y Annotations Kit - How To Use This Kit"
              />
              <img
                src="../assets/des-to-dev/p-3.png"
                alt="Indeed Figma A11y Annotations Kit - Headings"
              />
              <img
                src="../assets/des-to-dev/p-4.png"
                alt="Indeed Figma A11y Annotations Kit - Buttons"
              />
              <img
                src="../assets/des-to-dev/p-5.png"
                alt="Indeed Figma A11y Annotations Kit - Alt Text"
              />
            </div>
          </div>
        </div>
        <div class="col" style="width: 20%">
          <div class="listed-annotations">
            <div class="common-annotations">
              <h3>Common Annotations</h3>
              <ul>
                <li>Headings & Levels</li>
                <li>Image Alt Text</li>
                <li>Landmarks</li>
                <li>Accessible Names for Icon Controls</li>
                <li>Roles</li>
                <li>States</li>
                <li>Keyboard Behavior / Focus Order</li>
                <li>Breakpoints</li>
              </ul>
            </div>
            <div class="minimum-annotations">
              <h3>Minimum Annotations</h3>
              <ul>
                <li>Accessible Names</li>
                <li>Role / Element</li>
                <li>State (if needed)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Don't forget to talk about localization in alt text and names-->
      <!-- <ul>
        <li>Why Create Annotations</li>
        <li>A11y Annotation Kit from Indeed</li>
        <li>Minimum Annotations</li>
        <li>Common Annotations</li>
        <li>
          Other Considerations (including localization alt text and names)
        </li>
      </ul> -->
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionRef) {
      this.$refs[sectionRef].scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.color-contrast {
  display: flex;
  .contrast-main {
    display: flex;
    flex-grow: 1;
  }

  .contrast-ratios {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .contrast-ratio-text-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      .type {
        font-size: 1.5em;
      }
      .ratio {
        font-size: 3em;
      }
    }
  }
  .contrast-examples {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .example-group {
      flex-grow: 1;
      display: flex;

      .contrast-ex {
        flex-grow: 1;
        display: flex;
        border: solid 2px white;
        border-radius: 16px;
        margin: 10px;
        background-color: #add7f6;
        p {
          font-size: 5em;
          font-weight: bold;
          margin: auto;
        }
        &.contrast-lg,
        &.contrast-visual {
          background-color: #3b28cc;
        }
      }
    }
  }
}
.alt-text {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  .alt-main {
    display: flex;
    flex-grow: 1;
    text-align: center;
    p {
      font-size: 1.5rem;
    }
    .dev-entered {
      padding: 1em;
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      p {
        width: 100%;
      }
      img {
        width: 55%;
        margin: 1em 0;
      }
    }
    .user-entered {
      padding: 1em;
      flex-grow: 1;
      ol {
        text-align: left;
        padding: 0 2em;
        margin-top: 2em;
        li {
          margin-bottom: 1em;
          font-size: 1.25em;
        }
      }
    }
  }
}
.design-to-dev {
  display: flex;
  flex-direction: column;
  .main {
    display: flex;
    flex-grow: 1;
    .col {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      text-align: center;
      h3 {
        font-size: 2em;
      }
      a,
      a:visited {
        color: #add7f6;
        font-size: 1em;
        &:hover {
          color: #3f8efc;
        }
      }

      .why {
        h3 {
          font-size: 4rem;
          &::first-letter {
            font-size: 2em;
          }
        }
      }
      .annotations {
        display: flex;
        flex-direction: column;
        .annotation-imgs {
          overflow: scroll;
          height: 55vh;
          margin-top: 2em;
          img {
            width: 100%;
          }
        }
      }
      .listed-annotations {
        ul {
          list-style-type: none;
          margin-bottom: 2em;
        }
      }
    }
  }
}
</style>
