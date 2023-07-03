import { Header } from "./Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


describe("Header component", () => {
    let IkisakuraLink;
    let LogoLink;
    let ReadingLink;
  
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
  
      IkisakuraLink = screen.getByText('Ikisakura');
      ReadingLink = screen.getByText('Mis Lecturas');
      //LogoLink = screen.getByText('Logo Ikisakura');
    });
  
    test("check Logo should be in the header ", () => {
      const Logo = screen.getByAltText("Logo Ikisakura");
      expect(Logo).toBeInTheDocument();
  
    });
  
    test("text should be in the header", () => {
      
      expect(IkisakuraLink).toBeInTheDocument();
      expect(ReadingLink).toBeInTheDocument();
    });
  
    test("check events", () => {
      fireEvent.click(IkisakuraLink);
      expect(window.location.pathname).toBe("/");
  
      fireEvent.click(ReadingLink);
      expect(window.location.pathname).toBe("/Reading");
    });
  });