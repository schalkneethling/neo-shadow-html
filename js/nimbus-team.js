class NimbusTeam extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

customElements.define("nimbus-team", NimbusTeam);
