class CustomImageText extends HTMLElement {
  constructor() {
    super();
    this.toggleParagraph = this.toggleParagraph.bind(this);
  }

  connectedCallback() {
    this.render();
    this.textContainer = this.querySelector(
      ".image-text-section__text-container"
    );
    this.paragraphElement = this.querySelector("p");
    this.buttonElement = this.querySelector(".image-text-section__button");

    this.buttonElement.addEventListener("click", this.toggleParagraph);

    // Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.textContainer.classList.add("visible");
        } else {
          this.textContainer.classList.remove("visible");
        }
      });
    };

    this.observer = new IntersectionObserver(observerCallback, observerOptions);
    this.observer.observe(this);
  }

  render() {
    this.innerHTML = `
        <section class="image-text-section">
          <div class="image-text-section__image-container">
            <img src="images/image.png" alt="Description" class="image-text-section__image">
          </div>
          <div class="image-text-section__text-container">
            <h2>Handcrafted and Responsibly Sourced</h2>
            <p class="hidden">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. </p>
            <button class="image-text-section__button">Learn More</button>
          </div>
        </section>
      `;
  }

  toggleParagraph(event) {
    event.stopPropagation();
    if (this.paragraphElement.classList.contains("visible")) {
      this.paragraphElement.classList.remove("visible");
    } else {
      this.paragraphElement.classList.add("visible");
    }
  }
}

customElements.define("custom-image-text", CustomImageText);
