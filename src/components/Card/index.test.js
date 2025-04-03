import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./";
import { ThemeProvider } from "../../utils/context";
import DefaultPicture from "../../assets/photo.png";

describe("Card", () => {
    it("should render without crash", async () => {
        render(
            <ThemeProvider>
                <Card
                    key={`1`}
                    label={"label"}
                    title={"title"}
                    picture={DefaultPicture}
                />
            </ThemeProvider>
        );
    });

    it("should render title and image", async () => {
        render(
            <ThemeProvider>
                <Card
                    key={`1`}
                    label={"label"}
                    title={"title"}
                    picture={DefaultPicture}
                />
            </ThemeProvider>
        );
        const cardPicture = screen.getByRole("img");
        const cardTitle = screen.getByText(/title/i);
        expect(cardPicture.src).toBe("../../assets/photo.png");
        expect(cardTitle.textContent).toBe("title");
    });

    it("should add ⭐️ around title", async () => {
        render(
            <ThemeProvider>
                <Card
                    title="Harry Potter"
                    label="Magicien frontend"
                    picture={DefaultPicture}
                />
            </ThemeProvider>
        );
        const cardTitle = screen.getByText(/Harry/i);
        const parentNode = cardTitle.closest("div");
        fireEvent.click(parentNode);
        expect(cardTitle.textContent).toBe("⭐️ Harry Potter ⭐️");
    });
});
