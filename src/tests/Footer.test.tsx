import { Footer } from "../components/Footer/Footer";
import * as ReactDOM from "react-dom";

describe("Footer component tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Footer />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    const paragraphs = container.querySelectorAll("p");
    expect(paragraphs).toHaveLength(2);
  });
});
