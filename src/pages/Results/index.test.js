import Results, { formatJobTitle, formatQueryParams } from ".";
import {
    waitFor,
    screen,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render } from "../../utils/test";

const resultsMockedData = [
    {
        title: "dev",
        description: "",
    },
    {
        title: "front",
        description: "",
    },
];

const server = setupServer(
    rest.get("http://localhost:800/results", (req, res, ctx) => {
        return res(ctx.json({ resultsData: resultsMockedData }));
    })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("The results component", () => {
    it("should display the results after the data is loaded", async () => {
        render(<Results />);
        expect(screen.getByTestId("loader")).toBeTruthy();
        await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
        const jobTitleElements = screen.getAllByTestId("job-title");
        expect(jobTitleElements[0].textContent).toBe("dev");
        expect(jobTitleElements.length).toBe(2);
        const jobDescriptionElements = screen.getAllByTestId("job-description");
        expect(jobDescriptionElements[1].textContent).toBe(
            resultsMockedData[1].description
        );
        expect(jobDescriptionElements.length).toBe(2);
        await waitFor(() => {
            expect(screen.getByText("dev")).toBeTruthy();
            expect(screen.getByText("front")).toBeTruthy();
        });
    });
});

describe("Test de formatJobTitle", () => {
    test("Ajout d'une virgule à un item", () => {
        const expectedState = "item2,";
        expect(formatJobTitle("item2", 3, 1)).toEqual(expectedState);
    });

    test("Ne pas ajouter de virgule au dernier item", () => {
        const expectedState = "item3";
        expect(formatJobTitle("item3", 3, 2)).toEqual(expectedState);
    });

    it("should add a comma to an item", () => {
        const expectedState = "item2,";
        expect(formatJobTitle("item2", 3, 1)).toEqual(expectedState);
    });

    it("shouldn't add a comma to the last item of the list", () => {
        const expectedState = "item3";
        expect(formatJobTitle("item3", 3, 2)).toEqual(expectedState);
    });
});

describe("Test de formatQueryParams", () => {
    it("shouldn't add a separator to first answer", () => {
        const expectedState = "a1=answer1";
        expect(formatQueryParams({ 1: "answer1" })).toEqual(expectedState);
    });

    it("should add & separator to next answers", () => {
        const expectedState = "a1=answer1&a2=answer2";
        expect(formatQueryParams({ 1: "answer1", 2: "answer2" })).toEqual(
            expectedState
        );
    });
});
