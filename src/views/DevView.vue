<template>
  <main>
    <!-- INTRO SLIDE -->
    <div class="presentation-chunk intro-slide">
      <h1 class="main-heading" style="position: relative; font-size: 10em">
        Development
      </h1>
    </div>

    <!-- ARIA CRASH COURSE -->
    <div class="presentation-chunk aria">
      <h2 class="primary-heading">ARIA</h2>
      <div class="bttn-group">
        <button class="whatIsAriaBttn">What Is ARIA?</button>
        <p class="reveal-text">
          Accessible Rich Internet Applications (ARIA) is a set of roles and
          attributes that define ways to make web content and web applications
          more accessible to people with disabilities.
        </p>
      </div>
      <div class="bttn-group">
        <button class="whatIsAriaBttn">First Rule of ARIA</button>
        <p class="reveal-text dont">Don't Use ARIA</p>
      </div>
      <div class="good-better-best">
        <div class="option-group">
          <div class="option">
            <a
              class="gbb-bttn"
              role="button"
              style="width: 200px; height: 50px; font-size: 1.5em"
              >Click Me</a
            >
            <img src="../assets/gbb/bttn-bad.png" alt="" />
          </div>
          <div class="option">
            <button class="gbb-bttn" type="button">Click Me</button>
            <img src="../assets/gbb/bttn-good.png" alt="" />
          </div>
        </div>
        <div class="option-group" style="background: #add7f6; color: #000">
          <div class="option" style="border: solid 2px #3b28cc">
            <p>
              “My mother always used to say: The older you get, the better you
              get, unless you’re a banana.” — Rose (Betty White)<a
                style="color: #3b28cc"
                href="[link]"
                >Read More<span class="visually-hidden">
                  Golden Girl quotes</span
                ></a
              >
            </p>
            <img src="../assets/gbb/text-good.png" alt="" style="width: 100%" />
          </div>
          <div class="option" style="border: solid 2px #3b28cc">
            <p>
              “I'm either going to get ice cream or commit a felony...I'll
              decide in the car.” — Blanche (Rue McClanahan)<a
                style="color: #3b28cc"
                href="[link]"
                aria-labelledby="quote"
                >Read More</a
              ><span class="visually-hidden" id="quote"
                >Read more Golden Girl quotes</span
              >
            </p>
            <img
              src="../assets/gbb/text-better.png"
              alt=""
              style="width: 100%"
            />
          </div>
          <div class="option" style="border: solid 2px #3b28cc">
            <p>
              “People waste their time pondering whether a glass is half empty
              or half full. Me, I just drink whatever’s in the glass.” — Sophia
              (Estelle Getty)<a
                style="color: #3b28cc"
                href="[link]"
                aria-label="Read more Golden Girls quotes"
                >Read More</a
              >
            </p>
            <img src="../assets/gbb/text-best.png" alt="" style="width: 100%" />
          </div>
        </div>
        <div class="option-group">
          <div class="option search-option">
            <div>
              <label class="search-label" for="search-ex-1">
                <span>Search</span>
              </label>
              <div class="flex">
                <input type="text" class="searchbar-ex" id="search-ex-1" />
                <button class="search-icon-bttn">
                  <img src="../assets/magnifying-glass-solid.svg" />
                </button>
              </div>
            </div>
            <img src="../assets/gbb/search-bad.png" alt="" />
          </div>
          <div class="option search-option">
            <div>
              <label class="search-label" for="search-ex-2">
                <span>Search</span>
              </label>
              <div class="flex">
                <input
                  type="text"
                  class="searchbar-ex"
                  role="searchbar"
                  id="search-ex-2"
                />
                <button class="search-icon-bttn">
                  <img src="../assets/magnifying-glass-solid.svg" />
                </button>
              </div>
            </div>
            <img src="../assets/gbb/search-good.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- Em v. Rem v. Px -->
    <div class="presentation-chunk emrempx">
      <h2 class="primary-heading">Px vs. Em vs. Rem</h2>
      <div class="emrempx-content">
        <div class="definitions">
          <div class="def">
            <p>
              Px:<br />
              Size of pixel on 96dpi display.
            </p>
          </div>
          <div class="def">
            <p>
              Em:<br />
              Computed font size of the parent element.
            </p>
          </div>
          <div class="def">
            <p>
              Rem:<br />
              Computed font size of the root element.
            </p>
          </div>
        </div>
        <div class="tool">
          <!-- Default -->
          <div class="tool-wrapper font-testing-group">
            <h3>Root</h3>
            <div class="font-input-group">
              <p>Font-Size: <input type="number" v-model="main" /></p>
            </div>
            <!-- Grandparent -->
            <div class="grandparent font-testing-group">
              <h3>Grandparent</h3>
              <div class="font-input-group">
                <p>
                  Ems <input type="number" v-model="grandparentEm" /> =
                  {{ grandparentEm * main }}px
                </p>
                <p>
                  Rems <input type="number" v-model="grandparentRem" /> =
                  {{ grandparentRem * main }}px
                </p>
              </div>
              <!-- Parent -->
              <div class="parent font-testing-group">
                <h3>Parent</h3>
                <div class="font-input-group">
                  <p>
                    Ems <input type="number" v-model="parentEm" /> =
                    {{ parentEm * (grandparentEm * main) }}px
                  </p>
                  <p>
                    Rems <input type="number" v-model="parentRem" /> =
                    {{ parentRem * main }}px
                  </p>
                </div>
                <!-- Child -->
                <div class="child font-testing-group">
                  <h3>Child</h3>
                  <div class="font-input-group">
                    <p>
                      Ems <input type="number" v-model="childEm" /> =
                      {{ childEm * (parentEm * grandparentEm * main) }}px
                    </p>
                    <p>
                      Rems <input type="number" v-model="childRem" /> =
                      {{ childRem * main }}px
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="breakpoints">
        <h4>Width: {{ width }}px</h4>
        <div class="blocks">
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
        </div>
      </div>
    </div>

    <!-- Tab Flow -->
    <div class="presentation-chunk tabflow">
      <h2 class="primary-heading">Tab Flow</h2>
      <div class="tabflow-main">
        <form class="tab-option">
          <div class="flex">
            <div class="input-group" style="margin-right: 2em">
              <label for="first-name-1">First Name</label>
              <input type="text" id="first-name-1" required />
            </div>
            <div class="input-group">
              <label for="last-name-1">Last Name</label>
              <input type="text" id="last-name-1" required />
            </div>
          </div>
          <div class="input-group">
            <label for="email-1">Email</label>
            <input type="text" id="email-1" required />
          </div>
          <div class="input-group">
            <label for="address-1">Address</label>
            <input type="text" id="address-1" required />
          </div>
          <button class="submit-tab-flow" type="submit">Submit</button>
        </form>
        <div class="tab-details">
          <ul>
            <li>
              tabIndex attributes add or remove elements from the tab flow
            </li>
            <li>tabIndex="0" adds elements to flow</li>
            <li>tabIndex="-1" removes elements from flow</li>
            <li>
              tabIndex="1" (or anything greater) defines an explicit tab order.
            </li>
          </ul>
        </div>
        <div class="tab-option">
          <div class="flex">
            <div class="input-group" style="margin-right: 2em">
              <label for="first-name-2">First Name</label>
              <input type="text" id="first-name-2" />
            </div>
            <div class="input-group">
              <label for="email-2">Email</label>
              <input type="text" id="email-2" />
            </div>
          </div>
          <div class="flex">
            <div class="input-group" style="margin-right: 2em">
              <label for="last-name-2">Last Name</label>
              <input type="text" id="last-name-2" />
            </div>
            <div class="input-group">
              <label for="address-2">Address</label>
              <input type="text" id="address-2" />
            </div>
          </div>
          <div class="flex">
            <button class="submit-tab-flow">Submit</button>
          </div>
        </div>
      </div>
      <!-- <ul>
        <li>What is Tab Flow</li>
        <li>Importance of a tab flow that makes sense</li>
        <li>Tab Traps & Modals</li>
      </ul> -->
    </div>

    <!-- Form Pattern Considerations -->
    <div class="presentation-chunk form-patterns">
      <h2 class="primary-heading">Form Accessibility Pattern Considerations</h2>
      <div class="form-patterns-main">
        <div class="root-patterns-text">
          <div class="pattern-row">
            <div class="pattern-text">
              <p>
                Input labels must be meaningful, visible at all times, and
                programmatically associated with the related field.
              </p>
            </div>
          </div>
          <div class="pattern-row">
            <div class="pattern-text">
              <p>Labels must be close in proximity to the related field.</p>
            </div>
          </div>
          <div class="pattern-row">
            <div class="pattern-text">
              <p>
                Labels, instructions, or error messages must be provided when
                form fields require user input.
              </p>
            </div>
          </div>
          <div class="pattern-row">
            <div class="pattern-text">
              <p>
                If input errors are automatically detected, suggestions must be
                provided in text for fixing the input in a timely and accessible
                manner
              </p>
            </div>
          </div>
          <div class="pattern-row">
            <div class="pattern-text">
              <p>Labels and instructions should be clear and informative</p>
            </div>
          </div>
        </div>
        <div class="root-patterns-figure">
          <form>
            <h3>Sign Up Form</h3>
            <p class="form-error-msg" v-if="errorMessage">{{ errorMessage }}</p>
            <div class="form-group">
              <label for="r-fn"> First Name </label>
              <small>Hint: Rachel</small>
              <input type="text" id="r-fn" required v-model="fname" />
            </div>
            <div class="form-group">
              <label for="r-ln"> Last Name </label>
              <small>Hint: Berry</small>
              <input type="text" id="r-ln" required v-model="lname" />
            </div>
            <div class="form-group">
              <label for="r-email"> Email </label>
              <small>Hint: rachelberry4@gmail.com</small>
              <input type="email" id="r-email" required v-model="email" />
            </div>
            <div class="form-group">
              <label for="r-pass"> Password </label>
              <small>Hint: password123</small>
              <small v-if="!validPass" style="color: red"
                >Password must be at least 6 characters</small
              >
              <input
                type="password"
                id="r-pass"
                required
                v-model="password"
                :style="{
                  border: !validPass ? 'solid 2px red' : 'solid 1px black',
                }"
                @input="verifyPassword()"
              />
            </div>
            <button type="submit" @click="submitTestingForm()">Submit</button>
            <!-- <div class="form-group">
              <label for="r-address"> Address </label>
              <input type="text" id="r-address" required />
            </div> -->
          </form>
        </div>
      </div>
      <!-- <ul>
        <li>
          [Include details from 'form pattern considerations' from workshop
          session]
        </li>
        <li>Form Focus, especially after the form has been submitted</li>
        <li>Form input groups (lable, hint, and actual input)</li>
      </ul> -->
    </div>

    <!-- Accordion Pattern Considerations -->
    <!-- <div class="presentation-chunk accordion-patterns">
      <h2 class="primary-heading">
        Accordion Accessibility Pattern Considerations
      </h2>
      <div class="form-patterns-main">
        <div class="pattern-row">
          <div class="pattern-text">
            <p>
              Accordions must not rely on color alone to convey active states.
            </p>
          </div>
          <div class="pattern-figure"></div>
        </div>
        <div class="pattern-row">
          <div class="pattern-text">
            <p>
              The accordion order of focusable elements must be logcial and
              intuitive.
            </p>
          </div>
          <div class="pattern-figure"></div>
        </div>
        <div class="pattern-row">
          <div class="pattern-text">
            <p>
              It must be visually apparent which accordion element has keyboard
              focus.
            </p>
          </div>
          <div class="pattern-figure"></div>
        </div>
        <div class="pattern-row">
          <div class="pattern-text">
            <p>
              Navigation within the accordion must work with a keyboard using
              tab, Shift + tab, and the Enter or Space elements (arrows are
              options).
            </p>
          </div>
          <div class="pattern-figure"></div>
        </div>
        <div class="pattern-row">
          <div class="pattern-text">
            <p>
              If the accordion is repeated, the way a user interacts with the
              pattern must be consistent from one page/accordion to the other.
            </p>
          </div>
          <div class="pattern-figure"></div>
        </div>
        <div class="pattern-row">
          <div class="pattern-text">
            <p>
              Accordions - like all custom user interface components - must
              include the name, role, and value to aid people using assistive
              tech.
            </p>
          </div>
          <div class="pattern-figure"></div>
        </div>
      </div>
    </div> -->

    <!-- Navigation Pattern Considerations -->
    <div class="presentation-chunk navigation-patterns">
      <h2 class="primary-heading">
        Navigation Accessibility Pattern Considerations
      </h2>
      <div class="form-patterns-main">
        <div class="root-patterns-figure">
          <nav>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Services</a>
            <a href="#" disabled>Team</a>
            <a href="#">About</a>
          </nav>
        </div>
        <div class="root-patterns-text nav-example">
          <div class="pattern-row">
            <div class="pattern-text">
              <p>
                The number and order of the links in navigation menus must be
                consistent from one page to the other.
              </p>
            </div>
            <div class="pattern-figure"></div>
          </div>
          <div class="pattern-row">
            <div class="pattern-text">
              <p>
                The navigation order of focusable elements must be logical and
                intuitive.
              </p>
            </div>
            <div class="pattern-figure"></div>
          </div>
          <div class="pattern-row">
            <div class="pattern-text">
              <p>
                It must be visually apparent which menu item has the keyboard
                focus. Navigation menus should use nav or role=”navgiation”
                elements.
              </p>
            </div>
            <div class="pattern-figure"></div>
          </div>
          <div class="pattern-row">
            <div class="pattern-text">
              <p>
                A navigation menu should include a visible and programmatic
                method of showing users which menu item is currently
                active/visible.
              </p>
            </div>
            <div class="pattern-figure"></div>
          </div>
          <div class="pattern-row">
            <div class="pattern-text">
              <p>
                Disabled navigation items should be focusable but should not be
                activated.
              </p>
            </div>
            <div class="pattern-figure"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tools & Extensions -->
    <!-- <div class="presentation-chunk">
      <h2 class="primary-heading">Tools, Extensions, and Plugins</h2>
    </div> -->
  </main>
</template>

<script>
export default {
  data() {
    return {
      main: 16,
      grandparentEm: 1,
      grandparentRem: 1,
      parentEm: 1,
      parentRem: 1,
      childEm: 1,
      childRem: 1,
      width: 0,
      errorMessage: "",
      fname: "",
      lname: "",
      email: "",
      password: "",
      validPass: true,
    };
  },
  methods: {
    getWidth() {
      this.width = window.innerWidth;
    },
    submitTestingForm() {
      if (this.fname === "") {
        this.errorMessage = "Please enter a first name";
      } else if (this.lname === "") {
        this.errorMessage = "Please enter a last name";
      } else if (this.email === "") {
        this.errorMessage = "Please enter a valid email";
      }
    },
    verifyPassword() {
      if (this.password.length < 8 && this.password.length > 0) {
        this.validPass = false;
      } else {
        this.validPass = true;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.getWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.getWidth);
  },
};
</script>

<style lang="scss" scoped>
.aria {
  display: flex;
  flex-direction: column;
  .primary-heading {
    margin-bottom: 0.5em;
  }
  .bttn-group {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
  }
  .whatIsAriaBttn {
    border: solid 2px #add7f6;
    padding: 0.5em 1em;
    min-width: 400px;
    font-size: 2em;
    font-weight: bold;
    align-self: center;
    cursor: pointer;
    height: fit-content;
    margin-right: 1em;
    &:hover {
      background-color: #add7f6;
      transition: 0.2s ease-in;
    }
  }
  .reveal-text {
    font-size: 1.25em;
    flex-grow: 1;
    &.dont {
      font-size: 2em;
      font-weight: bold;
    }
  }
  .good-better-best {
    width: 100%;
    border: solid 2px #3f8efc;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    overflow: scroll;
    .visually-hidden {
      visibility: hidden;
    }
    .option-group {
      display: flex;
      // flex-grow: 1;
      width: 100%;
      height: 100%;
    }
    .option {
      border: solid 2px #add7f6;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      padding: 2em;

      img {
        width: 75%;
      }
      &.search-option {
        flex-direction: column;
      }
      p {
        font-size: 1.5em;
      }
      a {
        margin-left: 8px;
        font-size: 1em;
      }
      .search-label {
        width: 75%;
        span {
          font-size: 2em;
        }
      }
      .searchbar-ex {
        font-size: 1.9em;
        border-radius: 8px;
        border: solid 2px #add7f6;
        margin-right: 8px;
      }
      .search-icon-bttn {
        height: 3em;
        width: 4em;
        border-radius: 8px;
        border: solid 2px #add7f6;
        &:hover {
          background-color: #add7f6;
          transition: 0.1s ease-in;
          cursor: pointer;
        }
        img {
          width: 2em;
        }
      }
    }
    .gbb-bttn {
      border: solid 2px #3b28cc;
      height: 20px;
      width: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1em 2em;
      font-size: 1.5em;
      background-color: #fff;
      color: #3b28cc;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        background-color: #cbe2f2;
        transition: 0.1s ease-in;
      }
    }
  }
}
.emrempx {
  display: flex;
  flex-direction: column;
  .emrempx-content {
    display: flex;
    height: 100%;
    padding: 8px;
    .definitions {
      width: 25%;
      height: 100%;
      margin: 0 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .def {
        border: solid 2px #87bfff;
        background-color: #87bfff;
        height: 160px;
        margin: 8px 16px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        padding: 1em;
        p {
          &::first-letter {
            font-size: 4em;
          }
          width: 100%;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
    .tool {
      flex-grow: 1;
      margin: 0 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      input[type="number"] {
        width: 4em;
      }
      .font-testing-group {
        position: relative;
        h3 {
          font-weight: bold;
          align-self: flex-start;
          top: 1em;
          left: 1em;
          position: absolute;
          // font-size: 1.25rem;
        }
        .font-input-group {
          // border: solid 2px green;
          flex-grow: 1;
          align-items: center;
          display: flex;
          & > * {
            margin: 0 1.5rem;
          }
          p {
            font-size: 1.5rem;
            font-weight: bold;
          }
        }
      }
      .tool-wrapper {
        height: 100%;
        width: 100%;
        background-color: #3b28cc;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 1rem;
        align-items: center;
        border-radius: 8px;

        .grandparent {
          height: 80%;
          width: 90%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-top: 1rem;
          align-items: center;
          border-radius: 8px;
          background-color: #2667ff;
          .parent {
            height: 80%;
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 1rem;
            align-items: center;
            border-radius: 8px;
            background-color: #3f8efc;
            .child {
              height: 80%;
              width: 90%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding-top: 1rem;
              align-items: center;
              border-radius: 8px;
              background-color: #87bfff;
              color: #3b28cc;
            }
          }
        }
      }
    }
  }
  .breakpoints {
    // display: flex;
    h4 {
      display: none;
    }
    margin-top: auto;
    .blocks {
      display: flex;
    }
    .block {
      height: 80px;
      flex-grow: 1;
      border: solid 2px #3b28cc;
      margin: 8px;
      background-color: #2667ff;
      border-radius: 12px;
    }
  }
}
@media screen and (max-width: 1200px) {
  .emrempx {
    justify-content: center;
  }
  .emrempx-content {
    display: none !important;
  }
  .breakpoints {
    margin: auto;
    width: 100%;
    h4 {
      display: block !important;
      font-size: 3em;
    }
  }
}

// @media screen and (max-width: 800px) {
@media screen and (max-width: 50em) {
  .blocks {
    flex-wrap: wrap;
    .block {
      width: 100%;
    }
  }
}

.tabflow {
  display: flex;
  flex-direction: column;
  .tabflow-main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    .tab-option {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .flex {
        display: flex;
        input[type="text"] {
          width: 8em !important;
        }
      }
      .input-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5em;
        input[type="text"] {
          width: 18em;
        }
      }
      .submit-tab-flow {
        border: solid 2px #fff;
        background-color: #3f8efc;
        color: #fff;
        border-radius: 8px;
        height: 60px;
        width: 8em;
        margin-top: 1em;
      }
    }
    .tab-details {
      width: 25%;
      padding: 2em;
      background-color: #3f8efc;
      border-radius: 16px;
      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
      }
      li {
        font-size: 1.25em;
      }
    }
  }
}

.form-patterns,
.accordion-patterns,
.navigation-patterns {
  display: flex;
  flex-direction: column;
  .form-patterns-main {
    flex-grow: 1;
    display: flex;
    .root-patterns-figure {
      width: 50%;
      display: flex;

      form {
        width: 75%;
        height: 95%;
        background-color: #add7f6;
        margin: auto;
        border-radius: 12px;
        color: #000;
        padding: 1em;
        h3 {
          font-size: 2em;
          margin-bottom: 0.5em;
        }
        .form-error-msg {
          color: red;
          margin-bottom: 1em;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 1em;

          label {
            font-weight: bold;
          }
          small {
            color: #595959;
            font-size: 0.8em;
          }
          input {
            width: 50%;
          }
        }
        button {
          border: solid 2px white;
          background-color: #000;
          border-radius: 8px;
          font-size: 1.25em;
          color: #fff;
          padding: 0.5em 1em;
        }
      }
      nav {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        padding: 4em 0;
        a {
          height: fit-content;
          background-color: #fff;
          color: #000;
          font-size: 1em;
          padding: 1em 2em;
          border-radius: 8px;
          &:focus {
            box-shadow: 0 0 0 6px #3f8efc;
          }
          &:first-of-type {
            background-color: #add7f6;
            border: solid 2px #3f8efc;
          }
          &:nth-of-type(4) {
            background-color: gray;
          }
        }
      }
    }

    .nav-example {
      .pattern-row {
        .pattern-text {
          padding: 1em 2em;
        }
      }
    }

    .root-patterns-text {
      width: 50%;
      display: flex;
      flex-direction: column;
    }
    // flex-direction: column;
    .pattern-row {
      border: solid 2px #add7f6;
      width: 100%;
      display: flex;
      border-radius: 4px;
      flex-grow: 1;
      border-radius: 8px;
      margin: 4px;
      .pattern-text {
        padding: 2em;
        p {
          font-size: 1.25em;
        }
      }
      .pattern-figure {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #3f8efc;
        color: #000;
        flex-grow: 1;
        padding: 2em;
        label {
          font-size: 1.2em;
          margin-bottom: 0.5em;
          font-weight: bold;
        }
        input {
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
