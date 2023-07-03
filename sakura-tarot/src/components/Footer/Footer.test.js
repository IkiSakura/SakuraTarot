import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import ImagenFooter from "./Footer"


describe("componente Footer renderiza correctamente", () => {
    it("renders the decoration corner image", () => {
        const { getByAltText } = render(<Footer />);
        const footer = getByAltText("Footer Image");

        expect(footer).toBeInTheDocument();
        expect(ImagenFooter).toBeInTheDocument();
        expect(ImagenFooter.src).toContain("sakura-decoration.svg");
    });
  });


   



